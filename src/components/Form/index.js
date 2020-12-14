import React from 'react';
import './form.css';

export default function Form (props) {
    return (
      <form 
        className="form" 
        onSubmit={props.handleSubmit}>
        <label>First name:
          <input 
            id="firstname" type="string"
            pattern="^[A-Za-zА-Яа-яЄєЁёЇїІі\s]+$"
            value={props.item.firstname}
            onChange={props.handleChange}
            />
        </label>
        <label>Last name:
          <input
            id="lastname" type="string"
            pattern="^[A-Za-zА-Яа-яЄєЁёЇїІі\s]+$"
            value={props.item.lastname}
            onChange={props.handleChange}
            />
        </label>
        <label>Phone:
          <input 
            id="phone" type="string"
            value={props.item.phone}
            pattern="[0-9]+"
            onChange={props.handleChange}
            />
        </label>
        <label>Age:
          <input 
            id="age" 
            type="number" min="1" max="199"
            value={props.item.age}
            onChange={props.handleChange}
            />
        </label>
        <button type="submit">Add</button>
      </form>
    )
}