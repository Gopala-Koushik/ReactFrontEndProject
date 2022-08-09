import React, { Component } from 'react';
import Like from './common/like';
import GenericTable from './common/genericTable';



class Table extends Component {

    columns= [
        {path:'title',label: 'Title'},
        {path:'genre.name',label: 'Genre'},
        {path:'numberInStock',label: 'Stock'},
        {path:'dailyRentalRate',label: 'Rate'},
        { key: 'Like', content: movie => <Like onClick = {() => this.props.onLike(movie)} like={movie.liked}/> },
        { key: 'delete', content: movie => <button onClick={() => this.props.onDelete(movie)} className='btn btn-danger btn-sm'>Delete</button>}
    ]

    render() { 
        const {movies, sortColumn, onSort} = this.props;
        return (
            <GenericTable columns={this.columns} sortColumn={sortColumn} data={movies} onSort={onSort} />
        );
    }
}
 
export default Table;