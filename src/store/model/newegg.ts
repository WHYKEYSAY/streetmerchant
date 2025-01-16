import {Store} from './store';
import fetch from 'node-fetch';

export const Newegg: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['are you a human?'],
    },
    inStock: [
      {
        container: '.product-buy',
        text: ['add to cart'],
      },
      {
        container: '.loading-text',
        text: ['add to cart'],
      },
    ],
    maxPrice: {
      container: '.price-current',
    },
    outOfStock: [
      {
        container: '.product-inventory',
        text: [' out of stock.'],
      },
      {
        container: '.product-flag',
        text: ['out of stock '],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.newegg.com/western-digital-blue-500gb/p/N82E16820250087?Item=N82E16820250087',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137915',
      itemNumber: '14-137-915',
      model: 'suprim',
      series: '5090',
      url: 'https://www.newegg.com/msi-rtx-5090-32g-suprim-soc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137915?Item=N82E16814137915',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137916',
      itemNumber: '14-137-916',
      model: 'suprim lc',
      series: '5090',
      url: 'https://www.newegg.com/msi-rtx-5090-32g-suprim-liquid-soc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137916?Item=N82E16814137916',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137917',
      itemNumber: '14-137-917',
      model: 'vanguard launch',
      series: '5090',
      url: 'https://www.newegg.com/msi-rtx-5090-32g-vanguard-soc-launch-edition-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137917?Item=N82E16814137917',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137918',
      itemNumber: '14-137-918',
      model: 'vanguard',
      series: '5090',
      url: 'https://www.newegg.com/msi-rtx-5090-32g-vanguard-soc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137918?Item=N82E16814137918',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137919',
      itemNumber: '14-137-919',
      model: 'gaming trio',
      series: '5090',
      url: 'https://www.newegg.com/msi-rtx-5090-32g-gaming-trio-oc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137919?Item=N82E16814137919',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137920',
      itemNumber: '14-137-920',
      model: 'ventus 3x oc',
      series: '5090',
      url: 'https://www.newegg.com/msi-rtx-5090-32g-ventus-3x-oc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137920?Item=N82E16814137920',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126750',
      itemNumber: '14-126-750',
      model: 'astral',
      series: '5090',
      url: 'https://www.newegg.com/asus-rog-astral-rog-astral-rtx5090-32g-gaming-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814126750?Item=N82E16814126750',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126751',
      itemNumber: '14-126-751',
      model: 'astral oc',
      series: '5090',
      url: 'https://www.newegg.com/asus-rog-astral-rog-astral-rtx5090-o32g-gaming-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814126751?Item=N82E16814126751',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126752',
      itemNumber: '14-126-752',
      model: 'tuf oc',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814126752?Item=N82E16814126752',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126753',
      itemNumber: '14-126-753',
      model: 'tuf',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814126753?Item=N82E16814126753',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500593',
      itemNumber: '14-500-593',
      model: 'amp extreme',
      series: '5090',
      url: 'https://www.newegg.com/zotac-amp-extreme-infinity-zt-b50900b-10p-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814500593?Item=N82E16814500593',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16819113841',
      itemNumber: '19-113-841',
      model: '9950x',
      series: 'ryzen9950x',
      url: 'https://www.newegg.com/amd-ryzen-9-9950x-4-3-ghz-16-core-am5-170w-processor-100-100001277wof/p/N82E16819113841',
    },
  ],
  name: 'newegg',
  realTimeInventoryLookup: async (itemNumber: string) => {
    const request_url =
      'https://www.newegg.com/product/api/ProductRealtime?ItemNumber=' +
      itemNumber;
    const response = await fetch(request_url);
    const response_json = await response.json();
    return (
      response_json.MainItem !== undefined &&
      response_json.MainItem.Instock === true
    );
  },
};
