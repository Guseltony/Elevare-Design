import React from 'react'
import { testimonials } from './utilities/testimonialsArray'
import { TestimonialsCard } from './utilities/testimonialsCard'
import { HeaderSection } from './utilities/HeaderSection'

const Testimonial = () => {
  return (
      <section>
        <div className='flex flex-col items-center justify-center px-[15%] py-20'>
            <div className="text-box w-[50%] pr-12 text-center">
                <HeaderSection intro={ 'The Saying'} header={'Elevare Review'} details={' What our customers say about us. We take pride in our service and value your feedback.'} />
            </div>
            <div className='flex-between w-full'>
                  {
                      testimonials.map((testimonial) => (
                          <TestimonialsCard key={testimonial.id} {...testimonial} />
                      ))
                  }
            </div>
        </div>
    </section>
  )
}

export default Testimonial