import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';


interface productData {
  _id: string;
  product: string;
  name: string;
  version: string;
  maintainer: string;
  fileWebsite: string;
  __v: number;
  fileElf: string;

}

function loadServerRows(page, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.rows.slice(page * 5, (page + 1) * 5));
    }, Math.random() * 500 + 100); // simulate network latency
  });
}

export function MyTable(props) {

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handlePageChange = (params) => {
    setPage(params.page);
  };

  React.useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      const newRows = await loadServerRows(page, data);

      if (!active) {
        return;
      }

      setRows(newRows);
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [page, data]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'product', headerName: 'Product Name', width: 225 },
    { field: 'version', headerName: 'Version', width: 125 },
    { field: 'maintainer', headerName: 'Maintainer', width: 150 },
    { field: 'fileElf', headerName: 'fileElf', width: 300 },
    { field: 'fileWebsite', headerName: 'File Website', width: 300 },
    { field: 'v', headerName: '__v', width: 100 },
  ];

  const products: productData = props.productsData.map((d) => ({
    id: d._id,
    product: d.name,
    version: d.version,
    maintainer: d.maintainer,
    fileElf: d.fileElf,
    fileWebsite: d.fileWebsite,
    v: d.__v,
    
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={15}
        density="compact"
        autoHeight={true}
        paginationMode="server"
        onPageChange={handlePageChange}
        loading={loading}
      />
      
    </div>
  );
}
//export default Table;

/*
{data.map((d) => (
          <ListItem key={d._id}>
            <ListItemIcon>
              <DeviceHubIcon />
            </ListItemIcon>
            <ListItemText>{d.product}</ListItemText>
          </ListItem>
        ))}
*/

/*
*****IMPORT PRODUCTS AND DEVICES
  <div>
      <p>hello from table.js</p>
      <h1>Products</h1>
      {props.productsData.map((d) => (
        <ListItemText>{d.product}</ListItemText>
      ))}
      <h1>Devices</h1>
      {props.devicesData.map((d) => (
        <ListItemText>{d.device}</ListItemText>
      ))}
*/