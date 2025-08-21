import React from 'react'
import { servicesArray } from './utilities/servicesArray'
import { ServicesCard } from './utilities/servicesCard'
// import { servicesCard } from './utilities/servicesCard'

const Service = () => {
  return (
      <section id="services" className='w-screen relative'>
          <div className="circle-2 w-[250px] h-[250px] rounded-full absolute bg-linear-to-b from-accent to-secondary top-0 right-0"></div>
      <div className="circle-1 w-[250px] h-[250px] rounded-full absolute bg-linear-to-b from-accent to-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="circle-1 w-[250px] h-[250px] rounded-full absolute bg-linear-to-b from-accent to-secondary bottom-0 left-0"></div>

          <div className='relative w-full h-full z-20 bg-bg/80 backdrop-blur-md shadow-2xl px-[15%] py-20'>
              <div className='flex-between flex-row'>
                  <div className="text-box w-[50%] pr-12">
                      <p className='text-xs text-primary font-bold'>We craft design solutions that inspire, engage, and elevate brands.</p>
                      <h1 className="font-header uppercase text-2xl inline-flex font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent my-2">Elevare Services</h1>
                      <p className='text-sm'>From bold branding to seamless digital experiences, we design with purpose.
                        Design is more than visuals — it’s the voice of your brand, and we help you tell that story beautifully and memorably</p>
                  </div>

                  <div className="service-box flex flex-wrap gap-10 flex-row group">
                      {
                          servicesArray.map((service) => (
                              
                              <ServicesCard key={service.title} {...service} />
                        ))
                    }
                  </div>
              </div>
          
          </div>
       
          
    </section>
  )
}

export default Service