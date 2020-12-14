import React, { Component } from 'react';
import Form from './components/Form';
import Table from './components/Table';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: {
        firstname: "",
        lastname: "",
        phone: "",
        age: "",
      },
      items: [],
      vectors: {
        firstnameVector: "default",
        lastnameVector: "default",
        phoneVector: "default",
        ageVector: "default",
      },
    }
  }

  componentDidMount(){
    if (localStorage.getItem('items'))
      this.setState({items: JSON.parse(localStorage.getItem('items'))});
  }

  componentDidUpdate(){
    localStorage.setItem('items', JSON.stringify(this.state.items));
  }

  addItem = (item) => {
    this.setState({...this.state.items.push({id: this.state.items.length + 1, ...item})});
  }

  deleteItem = (n) => {
    const newList = this.state.items.filter(item => item.id !== n);
    this.setState({items: newList});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let notEmpty = false;
    for(let field in this.state.item){
      if(this.state.item[field] !== ""){
        notEmpty = true;
      }else{
        notEmpty = false;
        alert("Fields are empty!");
        break;
      }
    }
    if(notEmpty){
      this.addItem(this.state.item);
      this.setState({item: {...this.state.item, firstname: "", lastname: "", phone: "", age: ""}});

    } 
 }
 
 handleFormInputChange = (event) => {
  const name = event.target.id;
  const value = event.target.value;
  this.setState({item: {...this.state.item, [name]: value}});
 }

  sortByNumber = (value, vector) => {
    if (this.state.vectors[vector] === "up"){
      let newList = this.state.items.sort((a, b) => a[value] - b[value]);
      this.setState({items : newList});
      this.setState({vectors: {...this.state.vectors, [vector]: "down"}});
    } else if (this.state.vectors[vector] === "down") {
        let newList = this.state.items.sort((a, b) => b[value] - a[value]);
        this.setState({items : newList});
        this.setState({vectors: {...this.state.vectors, [vector]: "default"}});
      }
  }
  sortByLetter = (value, vector) => {
    if (this.state.vectors[vector] === "up"){
      let newList = this.state.items.sort((a, b) => {
        var nameA=a[value].toLowerCase(), nameB=b[value].toLowerCase();
        return (nameA < nameB) ? -1 : 1;
        });
      this.setState({items : newList});
      this.setState({vectors: {...this.state.vectors, [vector]: "down"}});
    } else if (this.state.vectors[vector] === "down") {
      let newList = this.state.items.sort((a, b) => { 
        var nameA=a[value].toLowerCase(), nameB=b[value].toLowerCase();
        return (nameA > nameB) ? -1 : 1;
      });
      this.setState({items : newList});
      this.setState({vectors: {...this.state.vectors, [vector]: "default"}});
    }
  }

  sorting = (value, vector) => {
    if (this.state.vectors[vector] === "default"){
      let newList = this.state.items.sort((a, b) =>  a.id - b.id);
      this.setState({items : newList});
      this.setState({vectors: {...this.state.vectors, [vector]: "up"}});
    } else {
      (value === "firstname" || value === "lastname") ? this.sortByLetter(value, vector) : this.sortByNumber(value, vector);
    } 
  }

  render(){
    return (
      <div className="App">
        <Form item={this.state.item} addItem={this.addItem} handleChange={this.handleFormInputChange} handleSubmit={this.handleFormSubmit} />
        <Table items={this.state.items} deleteItem={this.deleteItem} sorting={this.sorting} vectors={this.state.vectors} />
      </div>
    )
  }
}
