import { DeviceData } from '../../src/devices/devices';
import { ProductData } from '../../src/products/products';

declare global {
  const __DEVICES__: DeviceData[];
  const __PRODUCTS__: ProductData[];
}

export const devices = __DEVICES__;
export const products = __PRODUCTS__;
