import React from 'react';
import { MyTable } from './MyTable';


type ConnectTableProps = Omit<TableProps, "onPageChange" | "onSort" | "onSearch" | "data">;

function connectTable(Component: React.FunctionComponent<TableProps>) {
  return function (props:ConnectTableProps) {
    let [page, setPage] = React.useState(0);
    let [query, setQuery] = React.useState("");
    let [loading, setLoading] = React.useState<boolean>(false);
    
    function pageChange(n: number) {
      setLoading(true);

      if(n == 1 &&){
        const data = 'forwards';
        setPage(page+1);
      }
      else if(n == -1 && page-n>=0){
        const data = 'backwards';
        setPage(page-1);
      }
      else{
        const data = 'No Change, out of bounds';
      }
      setLoading(false);
    }

    function search(v: string) {
        setLoading(true);
        setQuery(v);
        const data = "Query"
        setQuery(data);
        setLoading(false);
      }

    return (<MyTable handlePageChange={page => pageChange(page)} handleSearchChange={query => search(query)} />)
  }
}
