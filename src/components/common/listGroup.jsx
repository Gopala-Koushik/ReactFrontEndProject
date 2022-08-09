import React from 'react';

const ListGroup = (props) => {
    const {items, valueProperty ,textProperty, onItemSelect, selectedItem} = props;
    return (
        <ul className="list-group ">
            {items.map(item => <li onClick={() => onItemSelect(item)} 
            className = { selectedItem===item ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} 
            key = {item[valueProperty]}>{item[textProperty]}</li>)}
        </ul>
    );
} 
 
export default ListGroup;