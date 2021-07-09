import React from 'react';
import { MyTable } from './MyTable';


type ConnectTableProps = Omit<TableProps, "onPageChange" | "onSort" | "onSearch" | "data">;

function connectTable(Component: React.FunctionComponent<TableProps>) {
  return function (props:ConnectTableProps) {
    let [page, setPage] = React.useState(0);
    let [query, setQuery] = React.useState("");
    let [data, setData] = React.useState("");
    let [loading, setLoading] = React.useState<boolean>(false);
    
    function pageChange(n: number) {
      setLoading(true);

      if(n == 1 &&){
        const data = 'forwards';
        setData(data);
        setPage(page+1);
      }
      else if(n == -1 && page-n>=0){
        const data = 'backwards';
        setData(data);
        setPage(page-1);
      }
      else{
        const data = 'No Change, out of bounds';
        setData(data);
      }
      setLoading(false);
    }

    function search(v: string) {
        setQuery(v);
        setLoading(true);
        const data = "Query"
        setData(data);
        setQuery(data);
        setLoading(false);
      }

    // More grid handler api stuff
    // ...

    return (<MyTable handlePageChange={page => pageChange(page)} handleSearchChange={query => search(query)} />)
  }
}
