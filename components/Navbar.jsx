import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    let menu;
    if (showMenu) {
        menu =
            <div className='md:hidden w-full absolute flex flex-col justify-between items-left top-20 right-1'>
                <ul className='bg-white rounded-3xl shadow-xl  w-4/5 py-10 px-10 flex flex-col justify-center font-semibold items-left mx-auto'>
                    <li className='my-1 hover:bg-gray-200 p-2 rounded-xl'>
                        <Link href='/about'><a >About Us</a></Link>
                    </li>
                    <li className='my-1 hover:bg-gray-200 p-2 rounded-xl'>
                        <a href="https://wreak.notion.site/Work-at-Wreak-c70b838b5f254fb892e8b4d70752d75c" target='_blank' rel="noreferrer" ><p>Careers </p></a>
                    </li>
                    <li className='my-1 hover:bg-gray-200 p-2 rounded-xl'>
                        <Link href='/resources'><a >Resources</a></Link>
                    </li>
                    <Link href='#waitlist'><a className='bg-wblue-50 text-wgreen-50 font-bold my-2 hover:bg-gray-200 px-5 py-3 rounded-xl text-center'>Join Waitlist</a></Link>
                </ul>
            </div>
    }

    useEffect(() => {
        AOS.init({
            once: false,
        });
    }, [])

    return (

        <nav className='bg-[#fbfbfd00] px-4 py-3 pt-4  font-Mont md:px-20 fixed top-0 w-full z-10 bg-opacity-70 backdrop-filter backdrop-blur-md'>
            <div className='flex justify-between items-center w-full max-w-6xl mx-auto '>
                {/* <----------LOGO CONTAINER----------> */}
                <div data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-out-quad" className='flex items-center'>
                    <Link href="/"><a className='flex items-center'>
                        <h3 className='text-xl font-semibold '>BookBeaver</h3>
                    </a></Link>
                </div>

                <div className='hidden md:flex md:items-center'>
                    <div>
                        <ul className='flex justify-center font-semibold'>
                            <div data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-out-quad" data-aos-delay="100" >
                                <li className='mr-10 hover:text-wblue-100 transition duration-300 hover:scale-x-95 hover:scale-y-100' >
                                    <Link href='/books'><a >All Books</a></Link>
                                </li>
                            </div>

                            <div data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-out-quad" data-aos-delay="150">
                                <li className='mr-10 hover:text-wblue-100 transition duration-300 hover:scale-x-95 hover:scale-y-100'>
                                    <a href="" target='_blank' rel="noreferrer" ><p>Categories</p></a>
                                </li>
                            </div>



                        </ul>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-out-quad" data-aos-delay="250">
                        <Link href='#waitlist'><a className='bg-wblue-50 p-2 px-6 py-3 text-sm font-bold text-yellow-400 rounded-full hover:shadow-xl transition duration-500 hover:scale-x-95 hover:scale-y-110 hover:bg-wblue-200' >Sign up</a></Link>
                    </div>

                </div>
                {/* MOBILE MENU */}

                <div className='flex items-center justify-between md:hidden'>
                    <div className='flex flex-col justify-center items-center'>
                        <svg onClick={() => setShowMenu(!showMenu)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        {showMenu && menu}
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar



