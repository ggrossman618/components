import React from 'react';
import { MyTable } from './MyTable.tsx';
import { devices, products } from 'test-data';


export default {
  component: MyTable,
  title: 'Product Table/ProductTable',
};

export const basic = () => {
  return (
    <div>
      <p>hello from stories.js</p>
      <MyTable productsData={products} devicesData={devices}/>
    </div>
  );
};
