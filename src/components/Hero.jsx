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

            {/* <div className="right-col border-2 border-red-800 w-[800px] h-[800px]">
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <clipPath id="blobClip">
                    <path
                        d="M45.4,-63.6C57.6,-53.6,65.5,-38.7,72,-22.5C78.5,-6.3,83.5,11.2,80.9,28.4C78.2,45.5,67.7,62.1,52.9,72.6C38.2,83.1,19.1,87.3,-0.2,87.6C-19.5,87.9,-39,84.2,-51.7,73C-64.3,61.9,-70.2,43.3,-76.3,24.8C-82.4,6.2,-88.7,-12.3,-85.5,-29.5C-82.3,-46.7,-69.6,-62.6,-53.8,-71.4C-38,-80.2,-19,-82.1,-1.2,-80.4C16.6,-78.7,33.2,-73.6,45.4,-63.6Z"
                        transform="translate(100 100)"
                    />
                    </clipPath>

                    <image
                    href={heroImg}
                    width="100%"
                    height="100%"
                    clipPath="url(#blobClip)"
                    preserveAspectRatio="xMidYMid slice"
                    />
                </svg>
            </div> */}

        </div>
    </section>
)
}

export default Hero