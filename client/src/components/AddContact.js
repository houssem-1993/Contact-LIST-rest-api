import React, { Component,Fragment } from 'react'
import Modal from "react-modal"



const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root')
class AddContact extends Component {
    state={
        isOpen:false,
        newContact: {name:'',email:'',phone:''}
    }
    openModal = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    closeModal = () => {
        this.setState({isOpen:false})
    }
    hundleAdd = (e) => {
        this.setState({
            newContact: { ...this.state.newContact, [e.target.name]: e.target.value }
          });
    }
    hundleAddContact = (e) => {
      e.preventDefault();

  if (Object.values(this.state.newContact).indexOf("") === -1) {
    this.props.addContact(this.state.newContact);
    this.setState({
      isOpen: false,
      newContact: {
        name: "",
        email: "",
        phone: ""
      }
    });
  } else alert("Enter a valid info");
  }
  
    render() {
        return (
            <Fragment>
              <div className="add-contact" onClick={this.openModal}>add a new contact</div>
              <Modal style={customStyles} isOpen={this.state.isOpen} onRequestClose={this.closeModal}
>
                    <h3>Contat name</h3>
                    <input type="text" placeholder="type the contact name" onChange={(e)=> this.setState({newContact:{...this.state.newContact,name:e.target.value}})} ></input>
                    <h3>Contact e-mail</h3>
                    <input type="email" placeholder="add the e-mail"onChange={(e)=> this.setState({newContact:{...this.state.newContact,email:e.target.value}})}></input>
                    <h3>Contact phone number</h3>
                    <input type="text" placeholder="type the phone number"onChange={(e)=> this.setState({newContact:{...this.state.newContact,phone:e.target.value}})}></input>
                    <button type="submit" onClick={this.hundleAddContact}>Add Contact</button>
                    <button onClick={this.closeModal}>Cancel</button>
                </Modal>

            </Fragment>
        )
    }


}


export default  AddContact