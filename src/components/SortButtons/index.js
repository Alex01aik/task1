import React, { Component } from 'react';
import './sortbuttons.css';

export default class SortButtons extends Component {
  render() {
    return (
      <div className="sortbuttons">
        <button className="sortbutton" onClick={() => this.props.sorting("firstname", "firstnameVector")}>Sort by firstname</button>
        <button className="sortbutton" onClick={() => this.props.sorting("lastname", "lastnameVector")}>Sort by lastname</button>
        <button className="sortbutton" onClick={() => this.props.sorting("phone", "phoneVector")}>Sort by phone</button>
        <button className="sortbutton" onClick={() => this.props.sorting("age", "ageVector")}>Sort by age</button>
      </div>
    )
  }
}