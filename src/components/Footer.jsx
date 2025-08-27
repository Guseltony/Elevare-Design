import React from 'react'
import { GradientCircle } from './utilities/GradientCircle'

const Footer = () => {
  return (
      <footer className=' relative w-screen h-[300px] overflow-hidden'>
          <div className="bg w-full bg-black/80 backdrop-blur-md h-[700px] rounded-[40%] absolute top-10 z-20"></div>
          <GradientCircle top={'top-44'} left={'left-20'} bottom={'-bottom-32'} right={'right-20'} middleTop={'top-44'} />
        <div className='flex-between px-[15%] py-20 h-full relative z-20'>
            <div className="logo flex-between items-center justify-center gap-2 cursor-pointer">
                    <div className="icon-image"></div>
                    <p  className="font-logo leading-none text-lg text-primary cursor-pointer">
                        Elevare Design
                    </p>
              </div>
              <div className='space-4'>
                  <input type="text" name="" id="" placeholder='email' className='input-field border-b-2 border-secondary w-[60%] py-2 px-4 outline-0 border-0 space-x-4' />
                    <button className='btn btn-general'>
                      <span className='font-btn'>Subscribe</span>
                      </button>
              </div>
        </div>
    </footer>
  )
}

export default Footer