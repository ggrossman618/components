import React from 'react';

export interface ExampleProps {
  name: string;
}

export function Example({ name }: ExampleProps) {
  return <p>Hello {name}!</p>;
}
