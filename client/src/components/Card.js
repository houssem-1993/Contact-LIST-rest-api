import React, { Component } from 'react'
import EditContact from './EditContact'
import axios from "axios"




 class Card extends Component {

   
    render() {

        const{ _id,name,email,phone } =this.props.person;

        
        return (
        

                <div className="card">
                    <span className='close' onClick={() => this.props.deleteContact(_id)} >&times;</span>
                    <p className="avatar">{name[0].toUpperCase()}</p>
                    <h1>{name}</h1>
                    <p className="title">{email}</p>
                    <p>{phone}</p>
                    <div className="contact-social">
                        <a href="#"><i class="fa fa-dribbble"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-facebook"></i></a>
                    </div>
                <EditContact editContact={this.props.editContact} person={this.props.person}/>
                </div>
           

        )
    }
}
export default Card