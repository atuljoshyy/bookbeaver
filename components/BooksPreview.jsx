import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'aos/dist/aos.css';

const BooksPreview = () => {
    return (
        <section className='bg-yellow-50  font-Mont h-auto'>
            <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-28">
                <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16">
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="flex flex-col mb-1 md:mb-2 text-center sm:mb-0">
                            <div className="max-w-xl mb-3  md:mx-auto sm:text-center lg:max-w-2xl md:mb-3">
                                <h2 data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-quad" data-aos-delay="30" className="max-w-lg mb-6 font-sans text-3xl font-bold  text-wblue-200 sm:text-5xl md:mx-auto pt-8 md:pt-0">
                                    Discover the world’s best ideas
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Component Start -->  */}
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-delay="110" className=" hidden md:grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 max-w-6xl m-auto max-h-screen">
                    {/* <!-- Tile 1 -->  */}
                    <div className="flex flex-col bg-white rounded-2xl p-4 pt-5 m-auto shadow-md hover:shadow-2xl transform hover:-translate-y-5  hover:scale-y-95 transition duration-700 cursor-pointer mx-6 md:mx-0 ">
                        <div className="h-64 w-60 bg-stone-100 rounded-2xl flex justify-center items-center m-auto">
                            <Image src='/img/book-cover/Atomic habits.svg' width="200px" height="200px" alt='book-cover-img' />
                        </div>
                        <div data-aos="fade" data-aos-duration="1100" data-aos-easing="ease-out-quad" data-aos-delay="100" className="flex flex-col items-start mt-4">
                            <h4 className="text-lg font-semibold text-wblue-200">Atomic Habits</h4>
                            <p className="text-sm text-wblue-100 font-bold mt-2">By James Clear</p>
                            <a className="px-4 py-3 leading-none rounded-xl font-bold mt-3 bg-green-100 text-green-600 text-xs uppercase ">Productivity</a>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white rounded-2xl p-4 pt-5 m-auto shadow-md hover:shadow-2xl transform hover:-translate-y-5  hover:scale-y-95 transition duration-700 cursor-pointer mx-6 md:mx-0 ">
                        <div className="h-64 w-60 bg-yellow-100 rounded-2xl flex justify-center items-center m-auto">
                            <Image src='/img/book-cover/indistractable.svg' width="200px" height="200px" alt='book-cover-img' />
                        </div>
                        <div data-aos="fade" data-aos-duration="1100" data-aos-easing="ease-out-quad" data-aos-delay="150" className="flex flex-col items-start mt-4">
                            <h4 className="text-lg font-semibold text-wblue-200">Indistractable</h4>
                            <p className="text-sm text-wblue-100 font-bold mt-2">By Nir Eyal</p>
                            <a className="px-4 py-3 leading-none rounded-xl font-bold mt-3 bg-green-100 text-green-600 text-xs uppercase"  >Productivity</a>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white rounded-2xl p-4 pt-5 m-auto shadow-md hover:shadow-2xl transform hover:-translate-y-5  hover:scale-y-95 transition duration-700 cursor-pointer mx-6 md:mx-0 ">
                        <div className="h-64 w-60 bg-orange-100 rounded-2xl flex justify-center items-center m-auto">
                            <Image src='/img/book-cover/The subtle art .svg' width="200px" height="200px" alt='book-cover-img' />
                        </div>
                        <div data-aos="fade" data-aos-duration="1100" data-aos-easing="ease-out-quad" data-aos-delay="220" className="flex flex-col items-start mt-4">
                            <h4 className="text-lg font-semibold text-wblue-200">Subtle Art of Not Giving..</h4>
                            <p className="text-sm text-wblue-100 font-bold mt-2">By Mark Manson</p>
                            <a className="px-4 py-3 leading-none rounded-xl font-bold mt-3 bg-violet-100 text-violet-600 text-xs uppercase"  >Motivation</a>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white rounded-2xl p-4 pt-5 m-auto shadow-md hover:shadow-2xl transform hover:-translate-y-5  hover:scale-y-95 transition duration-700 cursor-pointer mx-6 md:mx-0 ">
                        <div className="h-64 w-60 bg-teal-100 rounded-2xl flex justify-center items-center m-auto">
                            <Image src='/img/book-cover/The Psychology of money.svg' width="200px" height="200px" alt='book-cover-img' />
                        </div>
                        <div data-aos="fade" data-aos-duration="1100" data-aos-easing="ease-out-quad" data-aos-delay="330" className="flex flex-col items-start mt-4">
                            <h4 className="text-lg font-semibold text-wblue-200">The Psychology of Money</h4>
                            <p className="text-sm text-wblue-100 font-bold mt-2">By Morgan Housel</p>
                            <a className="px-4 py-3 leading-none rounded-xl font-bold mt-3 bg-yellow-100 text-yellow-600 text-xs uppercase"  >Finance</a>
                        </div>
                    </div>

                </div>
                <div className=" flex flex-col md:hidden bg-white rounded-2xl p-4 pt-5 m-auto shadow-md hover:shadow-2xl transform  hover:scale-105 transition duration-700 cursor-pointer mx-6 md:mx-0 ">
                    <div className="h-64 w-60 bg-stone-100 rounded-2xl flex justify-center items-center m-auto">
                        <Image src='/img/book-cover/Atomic habits.svg' width="200px" height="200px" alt='book-cover-img' />
                    </div>
                    <div data-aos="fade" data-aos-duration="1100" data-aos-easing="ease-out-quad" data-aos-delay="440" className="flex flex-col items-start mt-4">
                        <h4 className="text-lg font-semibold text-wblue-200">Atomic Habits</h4>
                        <p className="text-sm text-wblue-100 font-bold mt-2">By James Clear</p>
                        <a className="px-4 py-3 leading-none rounded-xl font-bold mt-3 bg-green-100 text-green-600 text-xs uppercase">Productivity</a>
                    </div>
                    <Link href='/library'>
                        <p className='text-center pt-3 text-smm px-4 py-2 items-center bg-wblue-50 text-wgreen-50 rounded-full m-auto w-1/2 mt-6'>view more</p>
                    </Link>
                </div>




            </div>

        </section>
    )
}

export default BooksPreview
