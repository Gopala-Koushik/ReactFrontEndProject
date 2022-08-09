import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import Table from './table';
import _ from 'lodash';


class MoviesTable extends Component {
    state = {  
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        sortColumn: {path: 'title', order: 'asc'},
    } 

    componentDidMount () {
        const genres = [{_id: "",name: "All Genres"},...getGenres()];
        this.setState({movies: getMovies(),genres});
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    handleGenreSelect = item =>{
        this.setState({selectedGenre: item, currentPage: 1});
    }

    handleSort = sortColumn => {
        this.setState({sortColumn});
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page})
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    getPageData= () => {
        const {movies: Movies, pageSize, sortColumn, currentPage, selectedGenre} = this.state;
        const filtered = selectedGenre && selectedGenre._id ? Movies.filter(m => m.genre._id===selectedGenre._id) : Movies;
        const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order]);
        const movies = paginate(sorted,currentPage,pageSize);

        return {totalCount: filtered.length, data: movies};
    }

    render() { 

        const { pageSize, sortColumn, currentPage} = this.state;
        
        const {totalCount, data: movies} = this.getPageData()

        if(movies.length===0){
            return <h3 >There are no movies left in the list!</h3>
        }
        return (
            <React.Fragment>
                <div  className='row'>
                    <div className='col-3'>
                        <ListGroup selectedItem = {this.state.selectedGenre} items={this.state.genres} valueProperty="_id" textProperty="name" onItemSelect={this.handleGenreSelect}/>
                    </div>
                    <div className='col'>
                        <h1>There {totalCount} movies in the list!</h1>
                        <Table onSort={this.handleSort} sortColumn = {sortColumn} movies = {movies} onLike={this.handleLike} onDelete={this.handleDelete}/>
                        <Pagination currentPage={currentPage} itemsCount = {totalCount} pageSize = {pageSize} onPageChange = {this.handlePageChange} />            
                    </div> 
                </div>
            </React.Fragment>
        );
    }
}


export default MoviesTable;