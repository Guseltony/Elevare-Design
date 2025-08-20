import React from 'react'
import aboutImg from '../assets/images/about-img.jpg'

const About = () => {

  const styles = {
    backgroundImage: `url(${aboutImg})`,
  }
  return (
    <section id='about' className='w-screen border-2 border-green-800 bg-bg/80 backdrop-blur-md shadow-2xl px-[10%]'>
        <div className='w-full border-2 border-white flex justify-between items-center mt-20'>
            <div
            className="w-[500px] h-[600px] bg-cover bg-center relative rounded-br-6xl rounded-tl-6xl"
            style={styles}>
              <div className="circle-2 w-[100px] h-[100px] rounded-full absolute bg-primary top-0"></div>
              <div className="circle-1 w-[100px] h-[100px] rounded-full absolute bg-primary bottom-0 right-0"></div>
            </div>

            <div className='w-[50%]'>
                  <p className='text-xs text-primary font-bold'>Creative design solutions crafted to inspire and engage.</p>
                  <h1 className="font-header uppercase text-2xl inline-flex font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Elevare Brands</h1>
                  <p className='text-sm'>Elevare Design is a creative design studio committed to transforming visions into timeless brand experiences.
                  We specialize in branding, web design, and digital experiences that blend artistry with strategy. Our goal is simple: help businesses stand out, connect with their audience, and grow with purpose.</p>
                <div>
                <div>
                  <span className='font-btn text-sm'>Elevare Mission</span>
                  <p className='text-xs'>At Elevare Design, our mission is to elevate businesses through thoughtful, innovative, and human-centered design. We believe great design is not just about aesthetics — it’s about creating experiences that inspire trust, communicate values, and drive impact.</p>
                </div>
                <div>
                  <span className='font-btn text-sm'>Elevare Vision</span>
                  <p className='text-xs'>We envision a world where brands aren’t just seen, but remembered — where design is the bridge between creativity and meaningful connections.</p>
                </div>
              </div>
        </div>
        
        </div>
    </section>
  )
}

export default About