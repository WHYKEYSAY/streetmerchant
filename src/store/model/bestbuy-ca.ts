import {Store} from './store';

export const BestBuyCa: Store = {
  currency: '$',
  labels: {
    maxPrice: {
      container: 'div[class*="pricingContainer"]',
      euroFormat: false,
    },
    inStock: {
      container: '.addToCartButton:not(:disabled)',
      text: ['add to cart'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.newegg.ca/western-digital-blue-500gb/p/N82E16820250087?Item=N82E16820250087',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5090',
      url: 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-5090-32gb-gddr7-video-card/18931348',
    },
    {
      brand: 'asus',
      model: 'astral',
      series: '5090',
      url: 'https://www.bestbuy.ca/en-ca/product/asus-rog-astral-geforce-rtx-5090-32gb-video-card/19177947',
    },
    /*{
      brand: 'asus',
      model: 'astral oc',
      series: '5090',
      url: 'https://www.newegg.ca/asus-rog-astral-rog-astral-rtx5090-o32g-gaming-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814126751?Item=N82E16814126751',
    },
    {
      brand: 'msi',
      model: 'suprim',
      series: '5090',
      url: 'https://www.newegg.ca/msi-rtx-5090-32g-suprim-soc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137915?Item=N82E16814137915',
    },
    {
      brand: 'msi',
      model: 'vanguard launch',
      series: '5090',
      url: 'https://www.newegg.ca/msi-rtx-5090-32g-vanguard-soc-launch-edition-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137917?Item=N82E16814137917',
    },*/
    {
      brand: 'msi',
      model: 'vanguard',
      series: '5090',
      url: 'https://www.bestbuy.ca/en-ca/product/msi-vanguard-geforce-rtx-5090-32gb-gddr7-video-card/18938752',
    },/*
    {
      brand: 'zotac',
      model: 'amp extreme',
      series: '5090',
      url: 'https://www.newegg.ca/zotac-amp-extreme-infinity-zt-b50900b-10p-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814500593?Item=N82E16814500593',
    },*/
    {
      brand: 'zotac',
      model: 'solid',
      series: '5090',
      url: 'https://www.bestbuy.ca/en-ca/product/zotac-gaming-geforce-rtx-5090-solid-32gb-gddr7-video-card/18931631',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '5090',
      url: 'https://www.bestbuy.ca/en-ca/product/asus-tuf-gaming-geforce-rtx-5090-32gb-gddr7-video-card/18969272',
    },
    {
      brand: 'msi',
      model: 'gaming trio',
      series: '5090',
      url: 'https://www.bestbuy.ca/en-ca/product/msi-gaming-trio-geforce-rtx-5090-oc-32gb-gddr7-video-card/18938751',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '5090',
      url: 'https://www.bestbuy.ca/en-ca/product/msi-ventus-geforce-rtx-5090-32gb-gddr7-video-card/18938755',
    },
    {
      brand: 'msi',
      model: 'suprim lc',
      series: '5090',
      url: 'https://www.bestbuy.ca/en-ca/product/msi-suprim-liquid-geforce-rtx-5090-32gb-gddr7-video-card/18938754',
    },/*
    {
      brand: 'amd',
      model: '9950x',
      series: 'ryzen9950x',
      url: 'https://www.bestbuy.ca/en-ca/product/amd-ryzen-9-9950x-16-core-5-7ghz-am5-processor/18166456',
    },*/
  ],
  name: 'bestbuy-ca',
  waitUntil: 'domcontentloaded',
};
