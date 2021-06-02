import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = () =>
  makeStyles({
    root: {
      '& .scroller': {
        boxShadow: `30px 30px 1px 4px darkgrey`,
        border: '1px solid #d5d5d5',
        maxHeight: 200,
        width: 400,
        overflowY: 'scroll',
      },
    },
  });

export interface ProductData {
  _id: string;
  __v: number;
  product: string;
  name: string;
  version: string;
  maintainer: string;
  fileWebsite: string;
  fileElf: string;
}

export interface ProductsProps {
  data: ProductData[];
}

export function Products({ data }: ProductsProps) {
  const classes = useStyles()();
  return (
    <List
      className={classes.root}
      component="nav"
      subheader={<ListSubheader component="div">Products</ListSubheader>}
    >
      <div className="scroller">
        {data.map((d) => (
          <ListItem key={d._id}>
            <ListItemIcon>
              <DeviceHubIcon />
            </ListItemIcon>
            <ListItemText>{d.product}</ListItemText>
          </ListItem>
        ))}
      </div>
    </List>
  );
}
