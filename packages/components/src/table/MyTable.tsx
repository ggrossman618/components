import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { TablePagination } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';

export interface ProductData {
  _id: string;
  product: string;
  name: string;
  version: string;
  maintainer: string;
  fileWebsite: string;
  __v: number;
  fileElf: string;
}

interface ProductDataMapped extends Omit<ProductData, '_id' | '__v'> {
  id: string;
  v: string;
  name: string;
}

export interface TableData {
  products: ProductData[];
  loading?: boolean;
  onPageChange: (page: number) => void;
  onSearch: (page: string) => void;
}


export function MyTable(props: TableData) {
  // NOTE most of this state is now driven by the parent component
  // const [page, setPage] = React.useState(0);
  // Rows is set from products[]
  // const [_rows, setRows] = React.useState([]);
  // const [loading, setLoading] = React.useState(false);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  //const [products, setProducts] = useState<string>("");


  const handlePageChange = (params) => {
    if (params.page > currentPageIndex) {
      props.onPageChange(1);
    }
    // If we navigate BACKWARD in our pages, i.e. the new page number is lower than current page
    else {
      props.onPageChange(-1);
    }
    setCurrentPageIndex(params.page)
  }

  
  const handleSearchChange = (params) => {
    props.onSearch(params.page);
  };
  
  const cancelSearch = () => {
    setSearchQuery("");
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'product', headerName: 'Product Name', width: 225 },
    { field: 'version', headerName: 'Version', width: 125 },
    { field: 'maintainer', headerName: 'Maintainer', width: 150 },
    { field: 'fileElf', headerName: 'fileElf', width: 300 },
    { field: 'fileWebsite', headerName: 'File Website', width: 300 },
    { field: 'v', headerName: '__v', width: 100 },
  ];

  const products: ProductDataMapped[] = props.products.map((d) => ({
    ...d,
    id: d._id,
    v: d.__v.toString(),
    name: d._id,
  }));
  
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <SearchBar
        value={searchQuery}
        onChange={(searchVal) => handleSearchChange(searchVal)}
        onCancelSearch={() => cancelSearch()}
      />
      <br />
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={15}
        density="compact"
        autoHeight={true}
        paginationMode="server"
        sortingMode="server"
        onPageChange={handlePageChange}
        backIconButtonText="test"
        loading={props.loading}
      />
    </div>
  );
}