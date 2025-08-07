import React from 'react'
import './Blogs.css'
import { asset } from '../assets/asset'
const Blogs = () => {
    const blogs = [
        {
            ques: "What are the benefits of regular facials?",
            Ans: "Regular facials can help to deep clean pores, reduce acne, and improve skin texture. They can also help to reduce signs of aging, improve skin tone, and leave your skin feeling refreshed and rejuvenated.",
            img:asset.Facial
        },
        {
            ques:"How do I choose the right foundation shade for my skin tone?",
            Ans:"To choose the right foundation shade, test out different shades on your jawline and see which one blends in seamlessly with your skin tone. You can also consider factors like your skin type, undertones, and the level of coverage you need.",
            img:asset.Shade
        },
        {
            ques:"What are some tips for keeping my hair healthy and strong?",
            Ans:"Some tips for keeping your hair healthy and strong include using a wide-tooth comb to detangle, avoiding heat styling tools, and using a nourishing hair mask once a week. You should also try to reduce your use of harsh chemical treatments and use a gentle shampoo and conditioner.",
            img:asset.Hairhealth
        },
        {
            ques:"How can I reduce the appearance of fine lines and wrinkles?",
            Ans:"There are several ways to reduce the appearance of fine lines and wrinkles, including using anti-aging skincare products, getting regular facials, and protecting your skin from the sun. You can also try using a facial massager or a retinol product to help stimulate collagen production.",
            img:asset.Wrinkle
        },
        {
            ques:"What's the best way to apply makeup for a natural look?",
            Ans:"To achieve a natural look with makeup, start with a lightweight foundation that matches your skin tone. Then, use a concealer to cover up any blemishes or dark circles under your eyes. Add some definition to your brows, and finish off with a swipe of mascara and a light lip balm.",
            img:asset.Nalook
        },
        {
            ques:"How often should I get my hair trimmed?",
            Ans:" It's generally recommended to get your hair trimmed every 6-8 weeks to prevent split ends and breakage. However, the frequency of trims will depend on your hair type and style.",
            img:asset.Trim
        },
        {
            ques:"What are some benefits of using a face mask?",
            Ans:"Face masks can provide a range of benefits, including deep cleansing pores, reducing inflammation, and improving skin texture. They can also help to hydrate and nourish your skin, leaving it feeling soft and refreshed.",
            img:asset.Facemask
        },
        {
            ques:"How can I choose the right beauty products for my skin type?",
            Ans:"To choose the right beauty products for your skin type, consider your skin concerns and needs. For example, if you have dry skin, look for products that are hydrating and moisturizing. If you have oily skin, look for products that are oil-free and non-comedogenic.",
            img:asset.Beautyproduct
        },
        {
            ques:"What's the best way to care for my skin during the winter months?",
            Ans:"During the winter months, it's essential to keep your skin hydrated and protected from the cold weather. Use a rich moisturizer, avoid harsh exfoliants, and consider using a humidifier to add moisture back into the air.",
            img:asset.Winter
        },
        {
            ques:"How can I achieve a flawless base with makeup?",
            Ans:"To achieve a flawless base with makeup, start with a smooth canvas by moisturizing your skin and priming your face. Then, apply a lightweight foundation that matches your skin tone, and use concealer to cover up any blemishes or dark circles. Set your base with powder and you're good to go!",
            img:asset.makeup3
        }
    ]
    return (
        <div>
            <div className='blogs'> 
                {blogs.map((blog,index)=>(
                    <div key={index} className='blog-field'> 
                    <h4>{blog.ques}</h4>
                    <p>{blog.Ans}</p>
                    <img src={blog.img} width={350} height={180} alt="" />
                                    <hr style={{height:'6px',}} />

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs