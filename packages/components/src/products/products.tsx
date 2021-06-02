import React from 'react';

export interface ProductData {
  _id: string;
  __v: number;
  product: string;
  name: string;
  version: string;
  maintainer: string;
  fileWebsite: string;
  fileElf: string;
}

export interface ProductsProps {
  data: ProductData[];
}

export function Products({ data }: ProductsProps) {
  return (
    <div>
      {data.map((d) => (
        <div key={d._id}>
          <p>{d._id}</p>
          <p>{d.product}</p>
        </div>
      ))}
    </div>
  );
}
