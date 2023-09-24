"use client";
import React from "react";




const ProductsList = [
    {
        value: "RON 98",
        item: "SUPER",

    },
    {
        value: "RON 95",
        item: "PREMIUM",
    },
    {
        value: "RON 93",
        item: "REGULAR",
    },
    {
        value: "10 PPM",
        item: "EURO DIESEL",
    },
    {
        value: "10 PPM",
        item: "DIESEL",
    },
];

const Products = ({title}) => {
    return (
        <section id="products">
            <div className="container mx-auto ">
                <div className="py-8 px-4 xl:gap-16 sm:py-16 ">
                    <h1 className='text-white mb-4 text-4xl place-self-center text-center sm:text-5xl lg:text-3xl font-extrabold'>{title}</h1>
                    <div className=" md:border-[#33353F]  rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                        {ProductsList.map((achievement, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 border-[#e5e6e3] sm:border rounded-xl py-8 px-16"
                                >
                                    <h2 className="text-white text-2xl font-bold flex flex-row">
                                        {achievement.item}

                                    </h2>
                                    <p className="text-[#ADB7BE] text-base">{achievement.value}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>);
};

export default Products;