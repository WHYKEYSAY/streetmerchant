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
  links: [/*
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5090',
      url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-5090-32gb-gddr7-graphics-card-dark-gun-metal/6614151.p?skuId=6614151',
    },*/
    {
      brand: 'gigabyte',
      model: 'aorus master ice',
      series: '5090',
      url: 'https://www.canadacomputers.com/en/powered-by-nvidia/268187/gigabyte-aorus-geforce-rtx-5090-master-ice-32g-graphics-card-aorus-geforce-rtx-5090-master-ice-32g.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '5090',
      url: 'https://www.canadacomputers.com/en/powered-by-nvidia/268188/gigabyte-aorus-geforce-rtx-5090-master-32g-graphics-card-aorus-geforce-rtx-5090-master-32g.html',
    },
    {
      brand: 'asus',
      model: 'astral oc',
      series: '5090',
      url: 'https://www.canadacomputers.com/en/powered-by-nvidia/268256/asus-rog-astral-geforce-rtx-5090-oc-rog-astral-rtx5090-o32g-gaming-rog-astral-rtx5090-o32g-gaming.html',
    },
    {
      brand: 'asus',
      model: 'astral',
      series: '5090',
      url: 'https://www.canadacomputers.com/en/powered-by-nvidia/268257/asus-rog-astral-geforce-rtx-5090-rog-astral-rtx5090-32g-gaming-rog-astral-rtx5090-32g-gaming.html',
    },/*
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
    },*/
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '5090',
      url: 'https://www.canadacomputers.com/en/powered-by-nvidia/268261/asus-tuf-geforce-rtx-5090-oc-tuf-rtx5090-o32g-gaming-tuf-rtx5090-o32g-gaming.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '5090',
      url: 'https://www.canadacomputers.com/en/powered-by-nvidia/268262/asus-tuf-geforce-rtx-5090-tuf-rtx5090-32g-gaming-tuf-rtx5090-32g-gaming.html',
    },/*
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
      brand: 'msi',
      model: 'suprim lc',
      series: '5090',
      url: 'https://www.newegg.ca/msi-rtx-5090-32g-suprim-liquid-soc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137916?Item=N82E16814137916',
    },*/
  ],
  name: 'canadacomputers',
  waitUntil: 'domcontentloaded',
};
