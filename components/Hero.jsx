import React from 'react'
import Image from 'next/image'


const Hero = () => {

    return (
        <section className='bg-yellow-50 font-Mont pt-36 md:pt-8 md:-mt-8'>
            <div className=' flex flex-col text-center justify-between items-center w-full max-w-6xl mx-auto md:flex-row md:text-left md:pt-0 md:px-10 lg:px-0 md:h-auto md:mt-44 md:py-44' >
                <div className='flex-1'>
                    <h1 className='text-5xl text-transparent bg-clip-text bg-gradient-to-br from-wblue-50 to-wblue-100 font-black lg:text-7xl '>More time for other things</h1>
                    <p className='pt-5 p-2 text-wblue-50 font-medium'>Need more time to do other things? BookBeaver has got you covered. Just read the summary and skip the rest of the book. </p>
                    <div className='flex justify-center items-center mt-5 md:justify-start'>
                        <a className='bg-[#141C31] p-2 px-8 py-3 text-sm font-bold text-yellow-400 rounded-full mr-4 hover:shadow-xl transition duration-500 hover:scale-x-95 hover:scale-y-110 hover:bg-wblue-200' href='#waitlist'
                        >Sign up</a>
                        <a className='bg-yellow-400 p-2  px-8 py-3 text-sm font-bold text-[#141C31] rounded-full hover:shadow-xl transition duration-500 hover:scale-x-95 hover:scale-y-110 hover:bg-yellow-500 ' href='https://discord.gg/DN8eeKtpXc' target='_blank' rel="noreferrer"
                        >Browse Books</a>
                    </div>
                </div>
                <div className='flex-1 px-4'  >
                    <Image src='/img/hero.svg' width='2048px' height='1536px' alt='hero-img' className='hover:drop-shadow-2xl transition duration-1000 ' />
                </div>
            </div>
        </section>
    )
}

export default Hero
