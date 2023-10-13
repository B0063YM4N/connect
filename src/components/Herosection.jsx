"use client";
import Image from "next/image"
import Button from "./Button"
import dynamic from "next/dynamic";






const AnimatedNumbers = dynamic(
    () => {
        return import("react-animated-numbers");
    },
    { ssr: false }
);

const Herosection = (props) => {
    return (
        <section className='homesection' >
            <div class="container homedesc mx-auto grid grid-rows-2 grid-cols-5 gap-10 sm:gap-5 z-20 text-black">
                <div class="griditem flex flex-col place-content-end lg:col-span-3 row-span-2 px-20 pb-20  text-white bg-white rounded-lg h-95 sm:col-span-5">
                    <h1 className="herotitle    text-6xl  font-semibold  bottom-20 ">{props.title2}</h1>
                    <br />
                    <br />
                    <Button href={"#maps"} title={"Locations"}  className=""/>
                </div>

                <div class="lg:col-span-2 griditem2 bg-white rounded-lg px-10 py-10  sm:col-span-5">
                    <h1 className="text-4xl italic text-white" >Engineered for less carbon <br /> emissions.</h1>
                    
                    <br /><br /><br /><br /><br />
                    <p className="text-[#ffffff] italic font-normal text-lg ">Focused on laveraging the best technologies available to help you worry less and enjoy more.</p>
                </div>




                <div class=" griditem3 lg:row-span-1  lg:col-span-1 rounded-lg bg-[#0c0c0c] py-20 px-10 sm:col-span-2">

                    <h2 className="text-white text-4xl font-bold flex flex-row">

                        <AnimatedNumbers
                            includeComma
                            animateToNumber={100}
                            locale="en-US"
                            className="text-white text-4xl font-bold"
                            configs={(_, index) => {
                                return {
                                    mass: 1,
                                    friction: 100,
                                    tensions: 140 * (index + 2),
                                };
                            }}
                        />
                        +
                    </h2>
                    <br />
                    <p className=" text-white text-lg italic">{props.subdesc1}</p>

                </div>





                <div class=" griditem4 row-span-1 lg:col-span-1 bg-[#959e9e] rounded-lg py-20 px-10 sm:col-span-2">
                    <h2 className="text-white text-5xl font-bold flex flex-row">

                        <AnimatedNumbers
                            includeComma
                            animateToNumber={10}
                            locale="en-US"
                            className="text-white text-4xl font-bold"
                            configs={(_, index) => {
                                return {
                                    mass: 1,
                                    friction: 100,
                                    tensions: 140 * (index + 2),
                                };
                            }}
                        />
                        +
                    </h2>
                    <br />
                    <p className=" text-white text-lg italic">{props.subdesc2}</p>
                </div>
            </div>
            
        </section >
    )
}

export default Herosection








{/* <div className="header-title-container">
<div className="header-title-container">
    <h1 className="header-title">CONNECT TO</h1>
    <h1 className="georgia">CONNECT</h1>
    <p className="header-p">
        The Energy Will Keep You Going
    </p>
</div>
</div>

<div className='layer'></div> */}













// < div className = 'grid grid-cols-1 lg:grid-cols-12' >


//             // <div className='col-span-5 place-self-center text-center sm:text-left'>
//             //     <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>LETS FIND <br /> OUR WAY TOGETHER</h1>
//             //     <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
//             //         Connect With Us . . .
//             //     </p>
//             //     <button className='px-6 py-3 w-full  sm:w-fit rounded-full mr-4 bg-white text-white text-weight:300 bg-gradient-to-br from-yellow-400  to-yellow-500 hover:bg-slate-100 '>FIND STATIONS</button>
//             // </div>
//             </div >