import {Store} from './store';

export const CanadaComputers: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: 'div[class="pi-prod-availability"]',
      text: ['Online In Stock'],
    },
    maxPrice: {
      container: '.h2-big > strong:nth-child(1)',
      euroFormat: false,
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
      brand: 'asus',
      model: 'astral',
      series: '5090',
      url: 'https://www.newegg.ca/asus-rog-astral-rog-astral-rtx5090-32g-gaming-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814126750?Item=N82E16814126750',
    },
    {
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
    },
    {
      brand: 'msi',
      model: 'vanguard',
      series: '5090',
      url: 'https://www.newegg.ca/msi-rtx-5090-32g-vanguard-soc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137918?Item=N82E16814137918',
    },
    {
      brand: 'zotac',
      model: 'amp extreme',
      series: '5090',
      url: 'https://www.newegg.ca/zotac-amp-extreme-infinity-zt-b50900b-10p-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814500593?Item=N82E16814500593',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '5090',
      url: 'https://www.newegg.ca/p/N82E16814126752?Item=N82E16814126752',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '5090',
      url: 'https://www.newegg.ca/p/N82E16814126753?Item=N82E16814126753',
    },
    {
      brand: 'msi',
      model: 'gaming trio',
      series: '5090',
      url: 'https://www.newegg.ca/msi-rtx-5090-32g-gaming-trio-oc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137919?Item=N82E16814137919',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '5090',
      url: 'https://www.newegg.ca/msi-rtx-5090-32g-ventus-3x-oc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137920?Item=N82E16814137920',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5090',
      url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-5090-32gb-gddr7-graphics-card-dark-gun-metal/6614151.p?skuId=6614151',
    },
    {
      brand: 'msi',
      model: 'suprim lc',
      series: '5090',
      url: 'https://www.newegg.ca/msi-rtx-5090-32g-suprim-liquid-soc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137916?Item=N82E16814137916',
    },
    {
      brand: 'amd',
      model: '9950x',
      series: 'ryzen9950x',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=258538&language=en',
    },
  ],
  name: 'canadacomputers',
  waitUntil: 'domcontentloaded',
};
