import React, { useState } from 'react';

export default function TableItem (props) {
  
  const [itemStyle, setItemStyle] = useState("tableItem")
  
    return (
      <div className={itemStyle}>
          <div>{props.item.firstname}</div>
          <div>{props.item.lastname}</div>
          <div>{props.item.phone}</div>
          <div>{props.item.age}</div>
          <button
            onClick={props.deleteItem}
            onMouseOver={() => setItemStyle("tableItem willDeleted")}
            onMouseOut={() => setItemStyle("tableItem")}>delete</button>
      </div>
    )

}