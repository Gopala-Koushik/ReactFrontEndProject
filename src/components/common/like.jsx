import React, { Component } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";

class Like extends Component {

    render() { 
        if(this.props.like){
            return (<FaHeart style = {{cursor: "pointer"}} onClick={this.props.onClick}/>)
        }
        return ( <FaRegHeart  style = {{cursor: "pointer"}} onClick={this.props.onClick}/>)
    }
}
 
export default Like;