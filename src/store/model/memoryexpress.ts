import {Store} from './store';

export const MemoryExpress: Store = {
  currency: '$',
  labels: {
    maxPrice: {
      container:
        '#ProductPricing .GrandTotal.c-capr-pricing__grand-total > div',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '.c-capr-inventory-selector__details-online .c-capr-inventory-store__availability',
      text: ['Out of Stock', 'Backorder'],
    },
  },
  links: [/*
    {
      brand: 'asus',
      model: 'astral',
      series: '5090',
      url: 'https://www.newegg.ca/asus-rogm-astral-rog-astral-rtx5090-32g-gaming-nvidia-geforce-rtme-5090-32gb-gddr7/p/N82E16814126750?Item=N82E16814126750',
    },*/
    {
      brand: 'asus',
      model: 'astral oc',
      series: '5090',
      url: 'https://www.memoryexpress.com/Products/MX00132349',
    },
    {
      brand: 'msi',
      model: 'suprim',
      series: '5090',
      url: 'https://www.memoryexpress.com/Products/MX00132637',
    },
    {
      brand: 'msi',
      model: 'vanguard launch',
      series: '5090',
      url: 'https://www.memoryexpress.com/Products/MX00132638',
    },
    {
      brand: 'msi',
      model: 'vanguard',
      series: '5090',
      url: 'https://www.memoryexpress.com/Products/MX00132639',
    },/*
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
      url: 'https://www.memoryexpress.com/Products/MX00132351',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '5090',
      url: 'https://www.memoryexpress.com/Products/MX00132352',
    },
    {
      brand: 'msi',
      model: 'gaming trio',
      series: '5090',
      url: 'https://www.memoryexpress.com/Products/MX00132645',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '5090',
      url: 'https://www.memoryexpress.com/Products/MX00132651',
    },
    {
      brand: 'msi',
      model: 'suprim lc',
      series: '5090',
      url: 'https://www.memoryexpress.com/Products/MX00132636',
    },
  ],
  name: 'memoryexpress',
  waitUntil: 'domcontentloaded',
};
