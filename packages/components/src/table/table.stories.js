import React from 'react';
import { MyTable } from './MyTable';
import { devices, products } from 'test-data';


export default {
  component: MyTable,
  title: 'MyTable/MyTable',
};

export const basic = () => {
  return (
    <div>
      <MyTable productsData={products} devicesData={devices}/>
    </div>
  );
};
