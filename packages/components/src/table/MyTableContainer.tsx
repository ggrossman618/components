import React from 'react';
import { TableProps } from './MyTable';

async function makeRequest( //asynchronous function because server calls aren't instantaneous 
  _page: number,
  _search: string
): Promise<TableProps['products']> { 
  // await (new Promise((resolve) => setTimeout(() => resolve(void), 1000)));
  await new Promise((resolve) => setTimeout(() => resolve(null), 1000)); //waiting for data from server (?)
  return []; 
}

type ConnectTableProps = Omit< //creating type ConnectTableProps
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
      setProducts(await makeRequest(page, query)); //use makeRequest function to get new products
      setLoading(false); //end loading since we now have new page 
    }

    async function handlePageChange(n: number) { //revamped logic for correct page chagne 
      setLoading(true); //once page change request comes in, set loading to true

      if (n == 1) { //logic for figuring out which page to change to 
        setPage(page + 1);
      } else if (n == -1 && page - n >= 0) {
        setPage(page - 1);
      }
      setProducts(await makeRequest(page, query)); //use makeRequest function to get new products
      setLoading(false);
    }

    return (
      <Component //passing information down to DataGrid (?) through tableprops interface format
        {...props} 
        loading={loading}
        products={products}
        onPageChange={handlePageChange}
        onSearch={handleSearchChange}
      />
    );
  };
}

/*
Questions:
    How does promise work as a parameter here rather than a standalone function?
    how is request working if we don't pass page or search into the actual request?
    are we only returning an empty array because we are passing dummy data for makeRequest?
    Are we omitting tableProps in ConnectTableProps because the container doesn't care what the last page looks like? If so what is 'data'?
    Why are we creating a component rather than a DataGrid?
    
*/