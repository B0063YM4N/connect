import React from 'react'
import Image from 'next/image'
import Button from "./Button"

const Corporative = ({title}) => {
    return (
        <section id="corporative" className='h-75 bg-[#282c2c]'>
            <h1 className='text-[#e7d833] mb-4 text-4xl place-self-center text-center sm:text-5xl lg:text-3xl font-extrabold'>{title}</h1>

            {/* <div className='corporative container  mx-auto flex justify-between'>
               <Image className=' corporative-img rounded-lg ' alt="corporative" src="/images/corporative.jpeg" width={800} height={600}/>
                <Button  className=" corporative-link mx-auto" href={"http://cms.connect.com.ge/Account/Login?ReturnUrl=%2F"} title={"corporative"}/>
            </div> */}


            <div className="card">
                <Image className=' corporative-img rounded-lg ' alt="corporative" src="/images/corporative.jpeg" width={800} height={600} />
                <div className="overlay"></div>
                <div className="card-link-container">
                
                <Button  className=" corporative-link mx-auto" href={"http://cms.connect.com.ge/Account/Login?ReturnUrl=%2F"} title={"corporative"}/>
                </div>
            </div>



        </section>
    )
}

export default Corporative;