import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card"
import AddContact from "./components/AddContact"
import axios from "axios"
class App extends Component {

  state={
    contacts: [],
    show: false
  }

  componentDidMount(){
    this.getAllContacts();
  }

  getAllContacts=() => 
  axios.get('/contacts').then((res)=>{
    this.setState({
      contacts: res.data,
    })

  })
  addContact=(data) => 
  axios.post('/add_contact',data).then(
    this.getAllContacts
  )
  deleteContact=(id) =>
  axios.delete(`/delete-contact/${id}`).then(
    this.getAllContacts
  )
  editContact=(id,contact) =>
  axios.put(`/edit-contact/${id}`,contact).then(
    this.getAllContacts
  )
      render() {
    return <div className="App">
      <h1 className="app-title">Contact list</h1>
      <div className="list">
      {this.state.contacts.map((el,i)=>
      <Card key={i} person={el} deleteContact={this.deleteContact} editContact={this.editContact}  />
      
      )}
      <AddContact addContact={this.addContact} />
      </div>
    </div>;
  }
}

export default App;
