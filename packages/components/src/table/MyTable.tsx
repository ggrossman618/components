import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import SearchBar from 'material-ui-search-bar';

export interface ProductData { //layout for all data given about products
  _id: string; //product id
  product: string; //product string
  name: string; //name of product
  version: string; //version num of product
  maintainer: string; //maintainer of product
  fileWebsite: string; //website of product
  __v: number; // prodcut __v
  fileElf: string; //fileElf of Product
}

interface ProductDataMapped extends Omit<ProductData, '_id' | '__v'> { //ask why create productDataMapped when we have product data
  id: string;
  v: string;
  name: string;
}

export interface TableProps { // Data about table formatted for container to read
  products: ProductData[]; //all product data (_id, version, etc.)
  loading?: boolean; //boolean which checks if page is loading
  onPageChange: (page: number) => void; //page change function being passed to container
  onSearch: (v: string) => void; //search function being passed to container
}

export function MyTable(props: TableProps) { //props are data being passed down from container 

  const [searchQuery, setSearchQuery] = useState<string>(''); //state which keeps track of search query

  const cancelSearch = () => { //function which resets search query
    setSearchQuery('');
  };

  const columns = [ //creating columns for ProductData
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'product', headerName: 'Product Name', width: 225 },
    { field: 'version', headerName: 'Version', width: 125 },
    { field: 'maintainer', headerName: 'Maintainer', width: 150 },
    { field: 'fileElf', headerName: 'fileElf', width: 300 },
    { field: 'fileWebsite', headerName: 'File Website', width: 300 },
    { field: 'v', headerName: '__v', width: 100 },
  ];

  const products: ProductDataMapped[] = props.products.map((d) => ({ //mapping products and their data to const which is passed into dataGrid
    ...d,
    id: d._id,
    v: d.__v.toString(),
    name: d._id
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <SearchBar //creates search bar above table
        value={searchQuery} //sets search query as 
        onChange={(searchVal) => props.onSearch(searchVal)} //calls onChange function if search query changes
        onCancelSearch={() => cancelSearch()} //calls onCancelSearch if query is cancled
      />
      <br />
      <DataGrid //actual table declaration
        rows={products} //sets rows as product
        columns={columns} //sets colums as colums
        pageSize={15} //sets max number of rows on page as 15
        density="compact" 
        autoHeight={true} 
        paginationMode="server" //sets the pagation setting to "server-side", which allows container to work
        sortingMode="server" //sets sorting setting to "server-side"
        onPageChange={(params) => props.onPageChange(params.page)} //when page changes, call onPageChange
        loading={props.loading} //sets if table is loading to passed prop boolean
      />
    </div>
  )
  }

  /*
  Questions:
     What is ProductDataMapped used for
     How does onPageChange work in myTable
  */