import React from 'react';
import { Devices } from './devices';
import { devices } from 'test-data';

export default {
  component: Devices,
  title: 'Devices/Devices',
};

export const basic = () => {
  const data = devices.slice(0, 1000);
  return <Devices data={data} />;
};
