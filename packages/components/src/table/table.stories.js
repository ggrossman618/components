import React from 'react';
import { Table } from './table';
import { devices, products } from 'test-data';


export default {
  component: Table,
  title: 'Table/Table',
};

export const basic = () => {
  return (
    <div>
      <p>hello from stories.js</p>
      <Table productsData={products}/>
    </div>
  );
};
