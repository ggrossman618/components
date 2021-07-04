//import { Table } from '@material-ui/core';
import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';

export function Table(props) {
  return (
    <div>
      <p>hello from table.js</p>
      {props.productsData.map((d) => (
        <ListItemText>{d.product}</ListItemText>
      ))}
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
