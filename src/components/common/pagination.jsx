import React from 'react';
import _ from 'lodash';
import { func, number } from 'prop-types';

const Pagination = (props) => {

    const {itemsCount, pageSize, currentPage, onPageChange} = props;
    const pagesCount = Math.ceil(itemsCount/pageSize);

    if(pagesCount===1) {
        return null;
    }
    const pages = _.range(1,pagesCount+1);


    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => <li className={page===currentPage ? "page-item active" : "page-item"} key={page}>
                    <button style = {{cursor: "pointer"}} className="page-link" 
                    onClick={() => onPageChange(page)}>{page}</button></li>)}
            </ul>
        </nav>
    );
}
 
Pagination.ReactPropTypes = {
    itemsCount: number.isRequired, pageSize: number.isRequired, currentPage: number.isRequired, 
    onPageChange: func.isRequired
}

export default Pagination;
 