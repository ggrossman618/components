import React from 'react';
import { Example } from './example';

export default {
  component: Example,
  title: 'Example/Example',
};

export const basic = () => {
  return <Example name={'Foo'} />;
};
