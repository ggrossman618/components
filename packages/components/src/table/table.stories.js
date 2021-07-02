import React from 'react';
import { Table } from './table';
import { devices, products } from 'test-data';

export default {
  component: Table,
  title: 'Table/Table',
};

export const basic = () => {
  console.log(devices);
  console.log(products);
  return <Table name={'Foo'} />;
};
