import * as React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { DataGrid } from '@material-ui/data-grid';
import Table from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import logo from './logo.png';
import Paper from '@material-ui/core/Paper';


export function MyTable(props) {
  const columns = [
    { field: 'id', headerName: 'Index', width: 40 },
    { field: 'productId', headerName: 'ID', width: 200 },
    { field: 'product', headerName: 'Product Name', width: 225 },
    { field: 'version', headerName: 'Version', width: 125 },
    { field: 'maintainer', headerName: 'Maintainer', width: 150 },
    { field: 'fileElf', headerName: 'fileElf', width: 300 },
    { field: 'fileWebsite', headerName: 'File Website', width: 300 },
    { field: 'v', headerName: '__v', width: 100 },
  ];

  const products = props.productsData.map((d, index) => ({
    id: index + 1,
    productId: d._id,
    product: d.name,
    version: d.version,
    maintainer: d.maintainer,
    fileElf: d.fileElf,
    fileWebsite: d.fileWebsite,
    v: d.__v,
    
  }));

  const rows = [{ id: 0, product: 'test' }];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={15}
        density="compact"
        autoHeight={true}
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
