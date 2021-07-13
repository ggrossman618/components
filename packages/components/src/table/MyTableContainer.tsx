import React from 'react';
import { TableProps } from './MyTable';

async function makeRequest(
  _page: number,
  _search: string
): Promise<TableProps['products']> {
  // await (new Promise((resolve) => setTimeout(() => resolve(void), 1000)));
  await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
  return [];
}

type ConnectTableProps = Omit<
  TableProps,
  'onPageChange' | 'onSort' | 'onSearch' | 'data'
>;

export function connectTable(Component: React.FunctionComponent<TableProps>) {
  return function (props: ConnectTableProps) {
    let [page, setPage] = React.useState(0);
    let [query, setQuery] = React.useState('');
    let [products, setProducts] = React.useState<TableProps['products']>([]);
    let [loading, setLoading] = React.useState<boolean>(false);

    async function handleSearchChange(v: string) {
      setLoading(true);
      setQuery(v);
      setProducts(await makeRequest(page, query));
      setLoading(false);
    }

    async function handlePageChange(n: number) {
      setLoading(true);

      if (n == 1) {
        setPage(page + 1);
      } else if (n == -1 && page - n >= 0) {
        setPage(page - 1);
      }
      setProducts(await makeRequest(page, query));
      setLoading(false);
    }

    return (
      <Component
        {...props}
        loading={loading}
        products={products}
        onPageChange={handlePageChange}
        onSearch={handleSearchChange}
      />
    );
  };
}
