import React from 'react';
import { Products } from './products';
import { products } from 'test-data';

export default {
  component: Products,
  title: 'Products/Products',
};

export const basic = () => {
  return <Products data={products} />;
};
