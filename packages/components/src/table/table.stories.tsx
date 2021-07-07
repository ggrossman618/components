import React from 'react';
import { MyTable } from './MyTable';
import { products } from 'test-data';

export default {
  component: MyTable,
  title: 'ProductsTable',
};

// moved to stories.tsx (demo data seperate from production component)
/*
function loadServerRows(page: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.slice(page * 5, (page + 1) * 5));
    }, Math.random() * 500 + 100); // simulate network latency
  });
}
 */

export const basic = () => {
  return (
    <div>
      <MyTable
        products={products}
        onPageChange={(n) => {
          console.log(
            n,
            'in a real app, this callback will trigger a server request'
          );
        }}
      />
    </div>
  );
};

export const loading = () => {
  return (
    <div>
      <p>hello from stories.js</p>
      <MyTable
        loading
        products={[]}
        onPageChange={(n) => {
          console.log(
            n,
            'in a real app, this callback will trigger a server request'
          );
        }}
      />
    </div>
  );
};

export const loading = () => {
  return (
    <div>
      <p>hello from stories.js</p>
      <MyTable
        loading
        products={[]}
        onPageChange={(n) => {
          console.log(
            n,
            'in a real app, this callback will trigger a server request'
          );
        }}
      />
    </div>
  );
};
