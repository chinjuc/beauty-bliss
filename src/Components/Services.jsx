import React from 'react'
import { asset } from '../assets/asset';
import Card from 'react-bootstrap/Card';
import './Services.css'
import { Link } from 'react-router-dom';
import About from './About';
const Services = () => {
    const services = [
        {
            title: "Hair Services",
            para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, odit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, odit.",
            button: "viewservices",
            img: asset.hair,
            link: "/hair"
        },
        {
            title: "Skin Services",
            para: "lorem10",
            button: "viewservices",
            img: asset.Skin,
            link: '/skin'
        },
        {
            title: "Nail Services",
            para: "lorem10",
            button: "viewservices",
            img: asset.Nail,
            link: '/nail'
        },
        {
            title: "Makeup Services",
            para: "lorem10",
            button: "viewservices",
            img: asset.Makeup,
            link: '/makeup'
        },
        {
            title: "Body Care",
            para: "lorem10",
            button: "viewservices",
            img: asset.Body,
            link: '/body'
        },
        {
            title: "Special Services",
            para: "lorem10",
            button: "viewservices",
            img: asset.Mehndi,
            link: '/Special'
        },
    ]
    return (
        <>
         
            <div className='ser' id='service' data-aos="fade-in" data-aos-delay="1000">
                <h1>Services</h1>
                <span>What we do</span>
                <div className='res'>
                    {services.map((service, index) => (
                        <div key={index} className='servicediv'>
                            <Card.Body>

                                <Card.Img src={service.img} className='serviceimg' />
                            </Card.Body>
                            <Link to={service.link} style={{ textDecoration: 'none' }}><Card.Title className='servicetitle'>{service.title}</Card.Title>
                            </Link>

                        </div>
                    ))}
                </div></div>
                <h2 className='ser h1'>RECENT SERVICES</h2>
            <div className=" container gallery-grid">
                <div className="large-image">
                    <video loop autoPlay playsInline muted controls>
                        <source src={asset.vdo} />
                    </video>
                    {/* <img src={asset.image3} alt="" /> */}
                </div>
                <div className="small-grid">
                    <img src={asset.image1} alt="" />
                    <img src={asset.image2} alt="" />
                    <img src={asset.image5} alt="" />
                    <img src={asset.image4} alt="" />
                </div>
            </div>

            <About />
        </>

    )
}

export default Services