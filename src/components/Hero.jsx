import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'

const Hero = () => {

    const headerRef = useRef(null)

    useEffect(() => {
    gsap.fromTo(headerRef.current, {
        opacity: 0, y: 100 
    }, { opacity: 1, y: 0, ease: 'power1.inOut', duration: 3 });
        
        gsap.fromTo(".hero-p", {
        opacity: 0, xPercent: 100
    }, {opacity: 1, xPercent: 0, ease:'power2.inOut', duration: 4, stagger: 0.6, delay: 2})
    }, []);
    
return (
    <section id='hero' className=' w-screen h-[80dvh]'>
        <div className='flex-center w-full h-full'>
            <div className="left-col flex-center flex-col w-[50%]">
                <p className='text-secondary text-lg'>We elevate ideas into timeless designs.</p>
                <h1 className='font-header text-7xl text-accent text-center' ref={headerRef}>Elevating Ideas Into <br /> <span className='header-word bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>Visual Impact</span> </h1>
                <p className='hero-p text-white text-center'>We believe great design is far more than just visual appeal—it is the true language of your brand. Every color, shape, and interaction communicates a story, and when done right, it resonates deeply with your audience. By merging artistry with strategy, we craft digital experiences that not only capture attention but also inspire trust, evoke emotion, and build meaningful connections. Our mission is to transform your ideas into powerful designs that leave a lasting impression and set your brand apart in today’s crowded digital landscape.</p>
                <div className="button flex-center gap-4 mt-8">
                    <button className='btn font-btn btn-general'>Portfolio</button>
                    <button className='btn font-btn bg-secondary text-white'>Hire Us</button>
                </div>
            </div>

        </div>
    </section>
)
}

export default Hero