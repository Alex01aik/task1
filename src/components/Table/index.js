import React from 'react';
import TableItem from '../TableItem';
import './table.css';
import SortButtons from '../SortButtons';

export default function Table (props) {

    return (props.items.length === 0) 
      ? <div>Table is empty!</div> 
      : <div className="table">
         <SortButtons sorting={props.sorting} vectors={props.vectors}/>
           {props.items.map( (item, index) => <TableItem key={index} item={item} deleteItem={() => props.deleteItem(item.id)}/>)}
       </div>
}