import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import DataGrid from 'react-data-grid';
import Table from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export function MyTable(props) {
  const columns = [
    { key: 'id', name: 'ID', editable: true },
    { key: 'title', name: 'Title', editable: true },
  ];

  const rows = [{ id: 0, title: 'Test row' }];

  const products = props.productsData.map((d) => ({
    id: 'Products',
    title: d.product,
  }));

  return (
    <DataGrid
      rows={products}
      columns={columns}
      pageSiize={5}
      checkboxSelection
    />
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
