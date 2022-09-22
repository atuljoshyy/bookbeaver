import React from 'react'
import Image from 'next/image'
const Features = () => {
    return (
        <section className='bg-white font-Mont'>
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                <div className="max-w-xl md:mx-auto text-center lg:max-w-2xl">
                    <h2 data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-out-quad" data-aos-delay="30" className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-wblue-50 sm:text-5xl md:mx-auto">
                        The perfect app to read summarised books
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-out-quad" data-aos-delay="80" className="text-base text-wblue-50 md:text-lg font-medium">
                        BookBeaver is the ultimate book summary app that offers you a detailed summary of any book, so you don&apos;t have to read the entire thing.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center -mt-10'>
                    <div className="flex-1" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-delay="110">
                        <Image src='/img/feature.svg' width='1000px' height='1000px' alt='meditating-img' />
                    </div>
                    <div className="flex-1 -mt-20 md:mt-0">
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="grid max-w-2xl mx-auto">
                                <div className="flex" >
                                    <div className="flex flex-col items-center mr-6">
                                        <div className="w-px h-10 opacity-0 sm:h-full" />
                                        <div>
                                            <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                                1
                                            </div>
                                        </div>
                                        <div className="w-px h-full bg-gray-300" />
                                    </div>
                                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-delay="110" className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                                        <div className="sm:mr-5">
                                            <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-blue-100 sm:w-24 sm:h-24 hover:shadow-lg transform  hover:scale-105 transition duration-500 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xl font-semibold sm:text-base">
                                                No more reading
                                            </p>
                                            <p className="text-sm text-wblue-50 font-medium">
                                                Discover a new world without even leaving your couch! Enter a book with just one tap
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex flex-col items-center mr-6">
                                        <div className="w-px h-10 bg-gray-300 sm:h-full" />
                                        <div>
                                            <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                                2
                                            </div>
                                        </div>
                                        <div className="w-px h-full bg-gray-300" />
                                    </div>
                                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-delay="110" className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                                        <div className="sm:mr-5">
                                            <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-yellow-100 sm:w-24 sm:h-24 hover:shadow-lg transform  hover:scale-105 transition duration-500 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xl font-semibold sm:text-base">Add notes for later</p>
                                            <p className="text-sm text-wblue-50 font-medium">
                                                Want to add more details or your own thoughts about the actual material? well, we got you covered.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex flex-col items-center mr-6">
                                        <div className="w-px h-10 bg-gray-300 sm:h-full" />
                                        <div>
                                            <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                                3
                                            </div>
                                        </div>
                                        <div className="w-px h-full bg-gray-300" />
                                    </div>
                                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-delay="110" className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                                        <div className="sm:mr-5">
                                            <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-red-100 sm:w-24 sm:h-24 hover:shadow-lg transform  hover:scale-105 transition duration-500 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M12 2l-8 4l8 4l8 -4l-8 -4" />
                                                    <path d="M4 10l8 4l8 -4" />
                                                    <path d="M4 18l8 4l8 -4" />
                                                    <path d="M4 14l8 4l8 -4" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xl font-semibold sm:text-base">Organized for easy access</p>
                                            <p className="text-sm text-wblue-50 font-medium">
                                                No more time wasted on looking for your favorite books - everything is organized by genre,
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex flex-col items-center mr-6">
                                        <div className="w-px h-10 bg-gray-300 sm:h-full" />
                                        <div>
                                            <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                                4
                                            </div>
                                        </div>
                                        <div className="w-px h-full opacity-0" />
                                    </div>
                                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-delay="110" className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                                        <div className="sm:mr-5">
                                            <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-purple-100 sm:w-24 sm:h-24 hover:shadow-lg transform  hover:scale-105 transition duration-500 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xl font-semibold sm:text-base">Stay productive</p>
                                            <p className="text-sm text-wblue-50 font-medium">
                                                You&apos;ll be more productive as you don&apos;t have to go through the less important details
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features