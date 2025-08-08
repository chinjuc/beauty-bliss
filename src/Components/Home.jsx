import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css'
import { asset } from '../assets/asset';
import { Link, useNavigate } from 'react-router-dom';
import Aos from 'aos';
const Home = () => {
    const Navigate = useNavigate()
    useEffect(() => {
        Aos.init({
            duration: 1500,
        });
    }, [])
    return (
        <div>
            <div className='image'>
                <Navbar collapseOnSelect expand="lg" className="nav-optn">
                    <Container>
                        <Navbar.Brand href="#home" className='beauty'> Beauty Parlour</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav-optn' />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav className='navigate'>
                                <Nav.Link href="" > <Link to={'/'} style={{color:'rgb(80, 14, 14)'}}>Home</Link></Nav.Link>
                                <Nav.Link href="#service"  > Services</Nav.Link>
                                <Nav.Link href="#about" >About Us </Nav.Link>
                                <Nav.Link href="#contact" >Contact </Nav.Link>
                                <Nav.Link href="" onClick={() => Navigate('/Blogs')}>Blogs </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
                {/* <div className='line'></div> */}
                <div className='nature-spell' data-aos="slide-left" data-aos-easing="ease-out-back">
                    <h1>enhance your <br /> <span>natural beauty</span> </h1>
                
                <div className='icons' data-aos="slide-left" data-aos-delay="400" data-aos-easing="ease-in-out-sine">
                    <img src={asset.icon1} alt="" />
                    <img src={asset.icon2} alt="" />
                    <img src={asset.icon3} alt="" />
                    <img src={asset.icon4} alt="" />
                    <button className='icon-btn' onClick={() => Navigate('/booking')}>
                        book now
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home