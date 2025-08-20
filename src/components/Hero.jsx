import React from 'react'

const Hero = () => {
return (
    <section id='hero' className=' w-screen h-[80dvh]'>
        <div className='flex-center w-full h-full'>
            <div className="left-col flex-center flex-col w-[50%]">
                <p className='text-secondary text-lg'>We elevate ideas into timeless designs.</p>
                <h1 className='font-header text-7xl text-accent text-center'>Elevating Ideas Into <br /> Visual Impact</h1>
                <p className='text-white text-center'>We believe great design is far more than just visual appeal—it is the true language of your brand. Every color, shape, and interaction communicates a story, and when done right, it resonates deeply with your audience. By merging artistry with strategy, we craft digital experiences that not only capture attention but also inspire trust, evoke emotion, and build meaningful connections. Our mission is to transform your ideas into powerful designs that leave a lasting impression and set your brand apart in today’s crowded digital landscape.</p>
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