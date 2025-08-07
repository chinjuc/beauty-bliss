import React from 'react'
import './About.css'
import { asset } from '../assets/asset'
import ContactPage from './ContactPage'
const About = () => {
    return (
        <>
            
            <div className='container grides' id='about'>
                <div className='box'>
                    <h2>About</h2>
                    <p>
                        Welcome to [Your Parlour Name], your go-to destination for beauty, style, and self-care. Located in the heart of [Location], we offer a wide range of professional beauty services including hair styling, skincare, makeup, facials, bridal packages, manicures, pedicures, and more. Our experienced and friendly team is dedicated to enhancing your natural beauty in a comfortable and relaxing environment. At [Your Parlour Name], we use top-quality products and the latest techniques to ensure you leave feeling confident and refreshed. Whether it’s your regular grooming or a special occasion, we’re here to make you look and feel your best.
                    </p>
                </div>
                <div className='dupli'>
                    <img src={asset.about} className='img-fluid abt-img' data-aos='slide-left' alt="" />
                    <div className='duplii'></div>
                </div>

            </div>
            <ContactPage />
        </>
    )
}

export default About