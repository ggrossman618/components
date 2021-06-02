import React from 'react';
import { Example } from './example';
import { devices, products } from 'test-data';

export default {
  component: Example,
  title: 'Example/Example',
};

export const basic = () => {
  console.log(devices);
  console.log(products);
  return <Example name={'Foo'} />;
};
