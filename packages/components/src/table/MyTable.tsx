import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
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

export interface TableProps {
  products: ProductData[];
  loading?: boolean;
  onPageChange: (page: number) => void;
  onSearch: (v: string) => void;
}

export function MyTable(props: TableProps) {
  // NOTE most of this state is now driven by the parent component
  // const [page, setPage] = React.useState(0);
  // Rows is set from products[]
  // const [_rows, setRows] = React.useState([]);
  // const [loading, setLoading] = React.useState(false);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const cancelSearch = () => {
    setSearchQuery('');
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
        onChange={(searchVal) => props.onSearch(searchVal)}
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
        onPageChange={(params) => props.onPageChange(params.page)}
        loading={props.loading}
      />
    </div>
  );
}
