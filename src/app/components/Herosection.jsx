import React from 'react'
import Image from 'next/image'

const Herosection = () => {
    return (
        <section className='mt-10 lg:px-16' >
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-5 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>LETS FIND <br /> OUR WAY TOGETHER</h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Connect With Us . . .
                    </p>
                    <button className='px-6 py-3 w-full  sm:w-fit rounded-full mr-4 bg-white text-white text-weight:300 bg-gradient-to-br from-gray-50 via-yellow-500 to-yellow-700 hover:bg-slate-200  '>FIND STATIONS</button>
                </div>
                <div className='col-span-7 place-self-center mt-4 lg:mt-0'>
                    <Image className='' src="/images/homeimg.jpg" alt='homeimg' width={800} height={1000} />
                </div>
            </div>

        </section>
    )
}

export default Herosection







