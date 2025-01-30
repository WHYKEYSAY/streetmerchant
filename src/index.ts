import * as Process from 'process';
import {config} from './config'; // Needs to be loaded first
import {startAPIServer, stopAPIServer} from './web';
import Puppeteer from 'puppeteer-extra';
import {Browser, Page} from 'puppeteer';
import StealthPlugin from 'puppeteer-extra-plugin-stealth'; // Anti-bot detection
import {getSleepTime} from './util';
import {logger} from './logger';
import {storeList} from './store/model';
import {tryLookupAndLoop} from './store';

let browser: Browser | undefined;

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Enable stealth plugin for bot evasion
Puppeteer.use(StealthPlugin());

/**
 * Schedules a restart of the bot
 */
async function restartMain() {
  if (config.restartTime > 0) {
    await sleep(config.restartTime);
    await stop();
    loopMain();
  }
}

/**
 * Starts the bot.
 */
async function main() {
  browser = await launchBrowser();

  for (const store of storeList.values()) {
    logger.debug('store links', {meta: {links: store.links}});
    if (store.setupAction !== undefined) {
      store.setupAction(browser);
    }

    setTimeout(tryLookupAndLoop, getSleepTime(store), browser, store);
  }

  await startAPIServer();
}

async function stop() {
  await stopAPIServer();

  if (browser) {
    const browserTemporary = browser;
    browser = undefined;
    await browserTemporary.close();
  }
}

async function stopAndExit() {
  await stop();
  Process.exit(0);
}

/**
 * Will continually run until user interferes.
 */
async function loopMain() {
  try {
    restartMain();
    await main();
  } catch (error: unknown) {
    logger.error(
      '✖ something bad happened, resetting in 5 seconds',
      error
    );
    setTimeout(loopMain, 5000);
  }
}

/**
 * **Launch Chrome Browser**
 * - Uses Puppeteer with Stealth mode
 * - Mimics human behavior to avoid bot detection
 */
export async function launchBrowser(): Promise<Browser> {
  const args: string[] = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-blink-features=AutomationControlled',
    '--disable-gpu',
    '--disable-infobars',
    '--window-size=1920,1080',
    '--disable-extensions',
    '--disable-dev-shm-usage',
  ];

  // Use proxy if defined
  if (config.proxy.address) {
    args.push(
      `--proxy-server=${config.proxy.protocol}://${config.proxy.address}:${config.proxy.port}`
    );
  }

  // Ensure it's always using Chrome
  const browser = await Puppeteer.launch({
    args,
    headless: false, // Run in visible mode to appear human
    executablePath: '/usr/bin/google-chrome-stable', // Forces Chrome usage
    defaultViewport: null
  });

  const page = await browser.newPage();

  // **Set randomized User-Agent**
  const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  ];
  const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
  await page.setUserAgent(randomUserAgent);

  // **Randomized Headers to Look Legit**
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://www.google.com/',
    'DNT': '1'
  });

  // **Disable WebDriver Flag**
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
  });

  return browser;
}

/**
 * **Open Best Buy Product Page & Check Stock**
 */
async function checkStock(page: Page, url: string): Promise<boolean> {
  try {
    logger.info(`🌍 Checking stock for: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle2' });

    // **Simulate Human-Like Browsing**
    await page.waitForTimeout(Math.random() * 2000 + 1000); // Random delay
    await page.mouse.move(Math.random() * 200 + 100, Math.random() * 200 + 100); // Move mouse
    await page.keyboard.press('ArrowDown'); // Scroll down

    // **Look for 'Add to Cart' Button**
    const addToCartButton = await page.$('[data-automation="addToCartButton"]');

    if (addToCartButton) {
      logger.info(`✅ In Stock: ${url}`);
      return true;
    } else {
      logger.info(`❌ Out of Stock: ${url}`);
      return false;
    }
  } catch (error) {
    logger.error(`Error checking stock for ${url}:`, error);
    return false;
  }
}

/**
 * **Open Order History**
 */
async function openOrderHistory(page: Page) {
  const orderHistoryUrl = 'https://www.bestbuy.ca/order/en-ca/order-history';
  logger.info(`🌍 Opening order history page: ${orderHistoryUrl}`);

  await page.goto(orderHistoryUrl, { waitUntil: 'networkidle2' });
  await page.waitForTimeout(3000); // Allow page to load

  logger.info(`✅ Order history page opened successfully.`);
}

// **Main Execution**
void loopMain();

process.on('SIGINT', stopAndExit);
process.on('SIGQUIT', stopAndExit);
process.on('SIGTERM', stopAndExit);
