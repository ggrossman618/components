import React from 'react';

export interface DeviceData {
  _id: string;
  __v: number;
  product_id: string;
  device: string;
  mac: string;
  num: number;
}

export interface DevicesProps {
  data: DeviceData[];
}

export function Devices({ data }: DevicesProps) {
  return (
    <div>
      {data.map((d) => (
        <div key={d._id}>
          <p>{d._id}</p>
          <p>{d.device}</p>
        </div>
      ))}
    </div>
  );
}
