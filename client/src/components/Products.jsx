"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


import useSWR from "swr";


const Products = ({title}) => {
    // const [dataa, setData] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const res = await fetch("https://connect-database.vercel.app/api/data");
    //         const newData = await res.json();
    //         console.log(newData);
    //         setData(newData)
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       }
    //     };
      
    //     fetchData();
    //   }, []);
    // const { data, mutate, error, isLoading } = useSWR(`https://connect-database.vercel.app/api/data`, fetcher);
    
      const fetcher = (...args) => fetch(...args).then((res) => res.json());
      const { data, mutate, error, isLoading } = useSWR(`/api/data`, fetcher);

      console.log(data);

    return (
        <section id="products" className="bg-[#282c2c]">
            <div className="container mx-auto ">
                <div className="py-8 px-4 xl:gap-16 sm:py-16 ">
                    <h1 className='text-[#e7d833] mb-4 text-4xl place-self-center text-center sm:text-5xl lg:text-3xl font-extrabold'>{title}</h1>
                    <div className=" md:border-[#33353F]  rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                    {!isLoading && data.data?.map(achievement => {
                            return (
                                <div
                                    key={achievement.id}
                                    className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 border-[#e5e6e3] sm:border rounded-xl py-8 px-16"
                                >
                                    <Image alt="call" src="/images/gas-pump.png" width={30} height={30} />
                                    <h2 className="text-[#e7d833] text-2xl font-bold flex flex-row">
                                    
                                    
                                        {achievement.nameGe}

                                    </h2>
                                    <p className="text-[#ADB7BE] text-base">{achievement.price}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>);
};

export default Products;

