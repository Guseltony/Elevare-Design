import React from 'react'
import aboutImg from '../assets/images/about-img.jpg';
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {

  const styles = {
    backgroundImage: `url(${aboutImg})`,
  }
  return (
    <section id='about' className='w-screen relative'>

      <div className="circle-2 w-[250px] h-[250px] rounded-full absolute bg-linear-to-b from-accent to-secondary top-0"></div>
      <div className="circle-1 w-[250px] h-[250px] rounded-full absolute bg-linear-to-b from-accent to-secondary bottom-0 right-0"></div>
      <div className="circle-1 w-[250px] h-[250px] rounded-full absolute bg-linear-to-b from-accent to-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
       
    
      <div className='relative w-full h-full z-20 bg-bg/80 backdrop-blur-md shadow-2xl px-[15%] py-20'>

      <div className='w-full flex justify-between items-center'>
            <div
            className="w-[500px] h-[600px] bg-cover bg-center relative rounded-br-6xl rounded-tl-6xl"
            style={styles}>
             
            </div>

            <div className='w-[50%]'>
                  <p className='text-xs text-primary font-bold'>Creative design solutions crafted to inspire and engage.</p>
                  <h1 className="font-header uppercase text-2xl inline-flex font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent my-2">Elevare Brands</h1>
                  <p className='text-sm'>Elevare Design is a creative design studio committed to transforming visions into timeless brand experiences.
                  We specialize in branding, web design, and digital experiences that blend artistry with strategy. Our goal is simple: help businesses stand out, connect with their audience, and grow with purpose.</p>
                <div className='flex gap-4 my-8'>
                <div className='w-[50%]'>
                  <span className='font-btn text-sm text-secondary font-semibold'>Elevare Mission</span>
                  <p className='text-xs'>At Elevare Design, our mission is to elevate businesses through thoughtful, innovative, and human-centered design. We believe great design is not just about aesthetics — it’s about creating experiences that inspire trust, communicate values, and drive impact.</p>
                </div>
                <div className='w-[50%]'>
                  <span className='font-btn text-sm text-secondary font-semibold my-4'>Elevare Vision</span>
                  <p className='text-xs'>We envision a world where brands aren’t just seen, but remembered — where design is the bridge between creativity and meaningful connections.</p>
                </div>
          </div>
          
              <div className="core-values flex flex-between mt-4">
                <div className='flex gap-2 items-center'>
                  <IoCheckmarkCircleSharp className='text-accent' />
                  <span className='text-sm text-secondary font-bold'>Innovation</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <IoCheckmarkCircleSharp className='text-accent' />
                  <span className='text-sm text-secondary font-bold'>Creativity</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <IoCheckmarkCircleSharp className='text-accent' />
                  <span className='text-sm text-secondary font-bold'>Simplicity</span>
                </div>
                <div className='flex gap-2 items-center'>
                  < IoCheckmarkCircleSharp className='text-accent' />
                  <span className='text-sm text-secondary font-bold'>Impact</span>
                </div>
          </div>
          <div className='mt-8 flex-between w-fit gap-16'>
            <div className='flex-center gap-4'>
              <p>Let Build Something Together</p>
               <FaLongArrowAltRight />
            </div>
            <button className='btn btn-general'>
              <a href="#contact" className="font-btn">Hire Us</a>
            </button>
          </div>
          
        </div>
        
        </div>
        
      </div>

      
    </section>
  )
}

export default About