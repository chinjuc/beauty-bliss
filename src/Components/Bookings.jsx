import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Bookings.css'
import { useNavigate } from 'react-router-dom';
import { asset } from '../assets/asset';
import axios from 'axios';

const Bookings = () => {

    const Navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        service: "",
        message: ""
    });

    const handlechange=(e)=>{
        const {name, value} = e.target;
        setForm((prevform)=>({
            ...prevform,
            [name]:value
        }));
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3000/users`, form);
            console.log('form submitted:', response.data)
            alert("booked succesfully!");
            setForm({
                name: "",
                email: "",
                service: "",
                message: ""
            });
            return(
                Navigate('/list')
            )
        }catch(error){
            console.error('error messgae',error);
            alert('something went wrong')
        }
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="nav-optn">
                <Container>
                    <Navbar.Brand href="#home" className='beauty'> Beauty Parlour</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav-optn' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='navigate'>
                            <Nav.Link href="" > Home</Nav.Link>
                            <Nav.Link href="#service"  > Services</Nav.Link>
                            <Nav.Link href="#about" >About Us </Nav.Link>
                            <Nav.Link href="#contact" >Contact </Nav.Link>
                            <Nav.Link href="" onClick={() => Navigate('/booking')}>Booking </Nav.Link>
                        </Nav>
                        <img src={asset.profile} width={40} onClick={() => Navigate('/')} alt="" />
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <div className="contact-form-section" id='contact'>
                <h2>Get in Touch</h2>
                <form className="contact-form" onSubmit={handlesubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name='name' placeholder="Your Name" onChange={handlechange}                  value={form.name}
 required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your Email" name='email' onChange={handlechange}value={form.email} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="service">Service</label>
                        <select id="service" required onChange={handlechange}name='service' value={form.service}>
                            <option value="">Choose a service</option>
                            <option>Hair Services</option>
                            <option>Skin Services</option>
                            <option>Nail Services</option>
                            <option>Makeup Services</option>
                            <option>Body Care</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Your Message" rows="4" required name='message' onChange={handlechange} value={form.message}></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>

        </div>
    )
}

export default Bookings