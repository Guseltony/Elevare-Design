import React from 'react'

const Header = () => {

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#service' }, 
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Blog', href: '#blog' },
    ]
return (
    <div className='bg-bg/80 backdrop-blur-md shadow-2xl fixed top-0 left-0 w-full z-50'>
        <div className='flex-between px-[10%] py-2 shadow-2xl'>
            <div className=" logo flex-between items-center justify-center gap-2 cursor-pointer">
                <div className="icon-image"></div>
                <p className="font-logo leading-none text-lg text-primary">
                    Elevare Design
                </p>
            </div>
            <nav>
                <ul className='flex-center gap-8 group'>
                    {navLinks.map((link) => (
                        <li key={link.name} className='group'>
                            <a href={link.href} className="font-nav text-base group-hover:opacity-30 hover:opacity-100 hover:text-[#3abef9] transition-all duration-300 px-2 py-2 ">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className=' btn btn-general'>
                <a href="#contact" className="font-btn">Contact Us</a>
            </button>
        </div>
    </div>
    )
    
}

export default Header