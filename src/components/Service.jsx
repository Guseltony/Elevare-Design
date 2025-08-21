import React from 'react'
import { servicesArray } from './utilities/servicesArray'
import { ServicesCard } from './utilities/servicesCard'
import { HeaderSection } from './utilities/HeaderSection'
import { GradientCircle } from './utilities/GradientCircle'
// import { servicesCard } from './utilities/servicesCard'

const Service = () => {
return (
    <section id="service" className='w-screen relative'>
        <GradientCircle top={'top-0'} rightB={'right-0'} bottom={'bottom-0'} leftB={'left-0'} />

        <div className='relative w-full h-full z-20 bg-bg/80 backdrop-blur-md shadow-2xl px-[15%] py-20'>
            <div className='flex-between flex-row'>
                <div className="text-box w-[50%] pr-12">
                    <HeaderSection intro={ 'We craft design solutions that inspire, engage, and elevate brands.'} header={'Elevare Services'} details={'From bold branding to seamless digital experiences, we design with purpose.Design is more than visuals — it’s the voice of your brand, and we help you tell that story beautifully and memorably'} />
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