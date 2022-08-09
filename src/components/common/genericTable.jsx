import React from 'react';
import TabelBody from './tableBody';
import TableHeader from './tableHeader';

const GenericTable = (props) => {

    const {columns, sortColumn, onSort, data} = props;

    return (  
        <table className = "table table-hover">
            <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort}/>
            <TabelBody columns = {columns} data={data}/>   
        </table>       
    );
}
 
export default GenericTable;