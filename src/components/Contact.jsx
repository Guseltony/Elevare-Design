import React from 'react'
import { HeaderSection } from './utilities/HeaderSection'
import map from '../assets/images/map.jpg'

const Contact = () => {
    return (
        <section id='contact' className='w-screen relative'>
            <div className='flex-between px-[15%] py-20 gap-20'>
                <div className='flex flex-col w-[40%]'>
                    <div className="text-box ">
                        <HeaderSection intro={ 'We valued your feedbacks'} header={'Message Elevare'} details={'Send us a message'} />
                    </div>
                    <form>
                        <div className='flex flex-col gap-8 mt-8'>
                            
                            <input type="text" placeholder='Your Name' className='input- border-b-2 border-secondary w-[60%] py-2 px-4 outline-0 border-0' />
                            <input type="email" placeholder='Your Email' className='input-field border-b-2 border-secondary w-[60%] py-2 px-4 outline-0 border-0' />
                            <textarea placeholder='Your Message' className='input-field w-[60%] py-2 px-4 outline-0 border-2 border-secondary/60'></textarea>
                            <button className='btn btn-general w-fit'>
                                <span className='font-btn'>Send Message</span>
                            </button>
                        </div>
                    </form>
                </div>

                <div className='border-4 border-accent rounded-4xl overflow-hidden w-[50%] h-[400px]'>
                    <img src={map} alt="" />
                </div>
            </div>
      </section>
  )
}

export default Contact