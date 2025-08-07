import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Aos from 'aos';
import './ServiceList.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { asset } from '../assets/asset';


const lists = [
    {
        name: 'hair',
        head: 'Hair services',
        places: [
            {
                title: "HairCut", text: "A haircut involves cutting and styling hair to shape, and appearance, such as layering, texturizing, and razor cutting, can be used to achieve the desired look. ", img: asset.HairCut
            },
            {
                title: 'Hair Styling',
                img: asset.Hair1,
                text: "Hair styling involves arranging and shaping hair to enhance its appearance. Techniques include updos, blowouts, curls, and more. Stylists use various tools and products to achieve desired looks. "

            },
            {
                title: 'Hairstraight',
                img: asset.HairStraight,
                text: "Hair straightening can enhance hair's appearance, reduce frizz, and make styling easier. Results vary depending on hair type, and treatment. to suit individual styles and preferences."
            },
            {
                title: 'Haircolor',
                img: asset.Haircolor,
                text: "Hair coloring involves applying chemicals to change hair color, enhancing natural shades or creating bold looks. Techniques include highlights. "

            },
            {
                title: 'HairCurls',
                img: asset.HairSmooth,
                text: "Add soft waves or defined curls using heat styling or perming techniques. Perfect for special occasions or a style upgrade."
            },
            {
                title: 'Hairspa',
                img: asset.Hairspa,
                text: "A deep-conditioning treatment that revitalizes hair and scalp, reduces stress, controls oiliness, and strengthens roots. treated hair needing nourishment and shine."
            },
            {
                title: 'Keratin Treatment',
                img: asset.Keratin,
                text: "Infuses natural keratin into the hair to reduce frizz, smooth texture, and add shine. Leaves hair manageable and straight-looking for up to 3–6 months."
            },
            {
                title: "Hair Smoothning",
                img: asset.Hair1,
                text: "A chemical process that relaxes hair strands, making them smooth, straight, and frizz-free. Maintains a natural look while reducing volume."
            }]
    },
    {
        name: 'skin',
        head: 'Skin Services',
        places: [
            {
                title: 'Facial Cleanup',
                  img: asset.skin1,
                text: "A basic skin cleansing treatment that removes dirt, oil, and blackheads. Refreshes the skin, unclogs pores, and improves blood circulation. Ideal for maintaining clear, healthy skin regularly."

            },
            {
                title: 'Brightening Facial',
                  img: asset.skin2,
                text: "Targets dull and pigmented skin by exfoliating and hydrating. Evens out skin tone, boosts radiance, and restores natural glow. Great before events or for tired, lifeless skin.. "

            },
            {
                title: 'Acne Treatment',
                  img: asset.skin3,
                text: "Focuses on controlling acne and preventing breakouts. Involves deep cleansing, antibacterial therapy, and calming masks. Suitable for oily and acne-prone skin types seeking long-term relief."

            },
            {
                title: 'Skin Polishing',
                  img: asset.skin4,
                text: "Also known as microdermabrasion, it exfoliates dead skin cells to reveal fresh, smooth skin. Enhances skin texture, reduces scars, and improves complexion over time."
            },
            {
                title: 'Detan Treatment',
                  img: asset.skin5,
                text: "Removes sun tan and pigmentation using gentle peels or herbal packs. Restores natural skin tone and adds brightness. Recommended after sun exposure or beach vacations."
            },
            {
                title: 'Gold Facial',
                  img: asset.skin6,
                text: "A luxury facial using gold-infused products to improve skin elasticity, reduce fine lines, and add radiance. Ideal for party-ready, glowing skin with a touch of indulgence."
            },

            {
                title: "Bridal Skin Treatment",
                  img:asset.skin7,
                text: "Customized multi-session skincare plan that includes facials, masks, and exfoliation. Aims for flawless, glowing skin for brides-to-be. Starts weeks before the wedding for best results."
            }]
    },
    {
        name: "nail",
        head: "Nail Services",
        places: [
            {
                title: 'Nail Art',
                  img: asset.nail4,
                text: "Creative designs painted or applied on nails using stickers, gems, or techniques. Adds personality and flair to your look. Great for parties, weddings, or stylish everyday nails."

            },
            {
                title: ' Pedicure',
                  img: asset.nail2,
                text: "Cleanses and pampers feet with soaking, exfoliation, nail shaping, and polish. Relieves tired feet, removes dead skin, and keeps toenails healthy. Perfect for relaxation and foot hygiene.. "

            },
            {
                title: 'Manicure',
                  img: asset.nail3,
                text: "A classic nail grooming service including trimming, shaping, cuticle care, and polish. Leaves hands clean, neat, and refreshed. Ideal for regular nail maintenance and a polished look."

            },
            {
                title: 'Nail Extensions',
                  img: asset.nail4,
                text: "Custom nail length and shape using acrylic, gel, or press-on methods. Ideal for special occasions or bold styles. Offers instant length and elegant appearance."
            },
            {
                title: 'Detan Treatment',
                  img: asset.nail1,
                text: "Removes sun tan and pigmentation using gentle peels or herbal packs. Restores natural skin tone and adds brightness. Recommended after sun exposure or beach vacations."
            },
            {
                title: 'Gel Manicure',
                  img: asset.nail5,
                text: "Long-lasting manicure using gel polish cured under UV light. Chip-resistant and glossy finish that lasts up to two weeks. Great for busy schedules and everyday wear."
            },
            {
                title: 'Nail art',
                  img: asset.nail6,
                text: "A targeted skincare service that deep cleans pores, reduces inflammation, and controls oil. Includes exfoliation, extraction, and antibacterial masks. Ideal for acne-prone skin seeking clearer, smoother, and healthier results."
            },
            ]
    },
    {
        name: "makeup",
        head: "Makeup Services",
        places: [{
            title: 'Bridal Makeup',
              img: asset.makeup,
            text: "Flawless, long-lasting bridal makeup designed to enhance your natural beauty and match your wedding theme. Perfect for your big day with high-quality products and a stunning finish."

        },
        {
            title: ' HD Makeup',
              img: asset.makeup1,
            text: "High-definition makeup provides a flawless, camera-ready look that lasts all day. Perfect for special events and photoshoots, it smooths skin texture and hides imperfections with precision. "

        },
        {
            title: 'Dewy makeup',
              img: asset.makeup2,
            text: "Achieve a radiant, glowing look with dewy makeup that hydrates and highlights your skin. Perfect for a fresh, youthful appearance with luminous finishes and a natural, healthy shine."

        },
        {
            title: 'Mugurtham Makeup',
              img: asset.makeup3,
            text: "Flawless, long-lasting bridal makeup designed to enhance your natural beauty and match your wedding theme. Perfect for your big day with high-quality products and a stunning finish."
        },
        {
            title: 'Haldi Makeup',
              img: asset.makeup,
            text: "Light, radiant, and fresh, our haldi makeup complements the traditional yellow ceremony with soft tones, minimal base, and a natural glow to match your joyful pre-wedding vibe."
        },
        {
            title: 'Simple Makeup',
              img: asset.makeup4,
            text: "Ideal for everyday elegance or casual outings, simple makeup gives you a fresh, natural glow with minimal products, highlighting your best features effortlessly and enhancing your natural charm."
        },
        {
            title: 'Makeup Art',
              img: asset.makeup6,
            text: "Makeup art is a creative expression that transforms the face into a canvas. From bold editorial looks to intricate designs, it blends color, technique, and imagination to create stunning beauty."
        },
        {
            title: "Trial Makeup",
              img:asset.makeup5,
            text: "Experience your chosen look before the big day with our trial makeup session, ensuring the perfect style, shades, and confidence to walk down the aisle flawlessly."
        }]
    },
    {
        name:"body",
        head:"body care",
        places:[
            {
          title: 'Leg Wax',
          img: asset.body1,
          text:"Removes unwanted hair from legs efficiently, leaving your skin silky smooth. Results last for weeks, making it perfect for vacations, events, or everyday confidence."
          
        },
        {
          title: 'Threading',
          img: asset.body2,
          text:"Precise and gentle, our threading service shapes eyebrows and removes facial hair with accuracy. Ideal for sensitive skin, it gives a clean, defined look without chemicals or irritation. "
          
        },
        {
          title: 'Acne Treatment',
          img: asset.body5,
          text:"Focuses on controlling acne and preventing breakouts. Involves deep cleansing, antibacterial therapy, and calming masks. Suitable for oily and acne-prone skin types seeking long-term relief."
          
        },
        {
          title: 'Hand Wax',
          img: asset.body3,
          text:"Quick and effective hair removal using high-quality wax for smooth, long-lasting results. Ideal for all skin types, reducing ingrown hairs and leaving skin soft and clean."
        },
        {
          title: 'Detan Treatment',
          img: asset.skin4,
          text:"Removes sun tan and pigmentation using gentle peels or herbal packs. Restores natural skin tone and adds brightness. Recommended after sun exposure or beach vacations."
        },
        {
          title: 'Gold Facial',
          img: asset.body4,
          text:"Advanced laser hair removal offers long-term reduction of unwanted hair. Safe, painless, and suitable for most skin types, delivering smooth results with minimal maintenance."
        },

        {
          title:"Bridal Skin Treatment",
          img:asset.skin1,
          text:"Customized multi-session skincare plan that includes facials, masks, and exfoliation. Aims for flawless, glowing skin for brides-to-be. Starts weeks before the wedding for best results."
        }
        ]
    },
    {
        name: "Special",
        head: "Special Services",
        places: [
            {
                title: 'Facial Cleanup',
                  img: asset.skin1,
                text: "A basic skin cleansing treatment that removes dirt, oil, and blackheads. Refreshes the skin, unclogs pores, and improves blood circulation. Ideal for maintaining clear, healthy skin regularly."

            },
            {
                title: 'Brightening Facial',
                  img: asset.skin3,
                text: "Targets dull and pigmented skin by exfoliating and hydrating. Evens out skin tone, boosts radiance, and restores natural glow. Great before events or for tired, lifeless skin.. "

            },
            {
                title: 'Acne Treatment',
                  img: asset.body5,
                text: "Focuses on controlling acne and preventing breakouts. Involves deep cleansing, antibacterial therapy, and calming masks. Suitable for oily and acne-prone skin types seeking long-term relief."

            },
            {
                title: 'Skin Polishing',
                  img: asset.skin5,
                text: "Also known as microdermabrasion, it exfoliates dead skin cells to reveal fresh, smooth skin. Enhances skin texture, reduces scars, and improves complexion over time."
            },
            {
                title: 'Detan Treatment',
                  img: asset.skin2,
                text: "Removes sun tan and pigmentation using gentle peels or herbal packs. Restores natural skin tone and adds brightness. Recommended after sun exposure or beach vacations."
            },
            {
                title: 'Gold Facial',
                  img: asset.skin6,
                text: "A luxury facial using gold-infused products to improve skin elasticity, reduce fine lines, and add radiance. Ideal for party-ready, glowing skin with a touch of indulgence."
            },

            {
                title: "Bridal Skin Treatment",
                  img:asset.skin7,
                text: "Customized multi-session skincare plan that includes facials, masks, and exfoliation. Aims for flawless, glowing skin for brides-to-be. Starts weeks before the wedding for best results."
            }
        ]}]
        const extras =[
            {
                h2:"Our story",
                img:asset.hairside,
                p:"Our beauty parlour offers expert haircuts, coloring, and styling tailored to your unique look. From keratin and smoothening treatments to luxurious hair spas, we restore shine and strength. Whether it’s a bold makeover or a simple trim, our stylists craft the perfect finish. We use high-quality products to ensure healthy, vibrant results. Experience hair care that enhances your beauty and confidence."
            }
        ]
const ServiceList = () => {
    const Navigate = useNavigate()
    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
    }, [])
    const { Service } = useParams();
    const ServiceList = lists.find((List) => List.name.toLowerCase() === Service.toLowerCase())
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="nav-optn">
                <Container>
                    <Navbar.Brand href="#home" className='beauty'> Beauty Parlour</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav-optn' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='navigate'>
                            <Nav.Link href="" ><Link to={'/'} style={{color:'maroon'}}>Home</Link> </Nav.Link>
                            <Nav.Link href=""  > <Link to={'/'} style={{color:'maroon'}}>Services</Link></Nav.Link>
                            <Nav.Link href="#about" >About Us </Nav.Link>
                            <Nav.Link href="#contact" >Contact </Nav.Link>
                            <Nav.Link href="" onClick={() => Navigate('/blogs')}>Blogs </Nav.Link>
                        </Nav>
                        <img src={asset.profile} width={40} onClick={() => Navigate('/')} alt="" />
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <div className="service-section">
                <h2 className="service-title">{ServiceList.head}</h2>
                <div className="service-cards-container">
                    {ServiceList.places.map((place, index) => (
                        <div className="service-card" key={index} data-aos="zoom-in">
                            <img src={place.img} alt={place.title} className="service-image" />
                            <div className="service-card-content">
                                <h3 className="service-card-title">{place.title}</h3>
                                <p className="service-card-text">{place.text}</p>
                                <Button className="book-button" onClick={() => Navigate('/booking')}>
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='hair-do'>
                    {extras.map((extras,index)=>(
                         <div className='main-serv' key={index}>
                        <h2>{extras.h2}</h2>
                        <div className='dup'></div>
                        <img src={extras.img} alt="" />
                        <div className='dupe'>
                            <p>{extras.p}</p>
                        </div>
                    </div>
                    ))}
                   
                </div>
            </div>
        </>
    )
}

export default ServiceList