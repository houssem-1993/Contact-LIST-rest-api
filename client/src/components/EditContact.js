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

 class EditContact extends Component {
    state={
        isOpen:false,
        editedContact: {name:this.props.person.name,email:this.props.person.email,phone:this.props.person.phone}
    }
    openModal = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    closeModal = () => {
        this.setState({isOpen:false})}

    handleClick = (e) => {
        e.preventDefault();
    
        if (Object.values(this.state.editedContact).indexOf("") === -1) {
            this.props.editContact(this.props.person._id,this.state.editedContact)
             this.setState({
            isOpen: false,
          });
        } else alert("Enter a valid info");
        }
    hundleChange = (e) => {
        this.setState({
            editedContact:{...this.state.editedContact,[e.target.name]:e.target.value}
        })
    }
    render() {
        const {editedContact:{name,email,phone},isOpen}=this.state
        return (
            <Fragment>
                <p><button onClick={this.openModal}>EDIT</button></p>
                <Modal style={customStyles} isOpen={isOpen} onRequestClose={this.closeModal}>
                    <h3>Contat name</h3>
                    <input value={name} type="text" placeholder="type the contact name" onChange={this.hundleChange} name='name' />
                    <h3>Contact e-mail</h3>
                    <input value={email}type="email" placeholder="add the e-mail"onChange={this.hundleChange} name="email" />
                    <h3>Contact phone number</h3>
                    <input value={phone} type="text" placeholder="type the phone number"onChange={this.hundleChange} name="phone" />
                    <button type="submit" onClick={this.handleClick}>Edit Contact</button>
                    <button onClick={this.closeModal}>Cancel</button>
                </Modal>
            </Fragment>
                
           
        )
    }
}
export default EditContact