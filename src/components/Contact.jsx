import React from 'react'

const Contact = ({contact, office,tell,maill}) => {
    return (
        <section id="contact" className='bg-[#282c2c] text-[#f5f5f5] border-[#f7f446]'>
            
            <div className="container mx-auto text-center pt-20 pb-5 xl-6">
                {/* <h1 className='text-2xl'>{contact}</h1> */}
                <br />
                <h6>{office}</h6>
                <h6>{tell}: 032 219 33 39</h6>
                <h6>{maill}: info@connect.com.ge</h6>
            </div>
        </section >
    )
}

export default Contact