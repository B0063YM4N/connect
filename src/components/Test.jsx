
"use client"


import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Button from "./Button"
// import 'bootstrap/dist/css/bootstrap.css'
// import Carousel from 'react-bootstrap/Carousel';
// import Image from 'next/image';
// import bootstrap from 'bootstrap'


const Test = (props) => {
  const images = [
    "images/Image1.jpg",
    "images/Image2.jpg",
    "images/Image3.jpg",
    "images/Image4.jpg",
    "images/Image5.jpg",
  ];

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {

    duration: 4000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-10 top-60 md:top-72">
        <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-60 md:top-72">
        <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
  };
  return (
    <section className="homesection ">
      <div className="w-full h-full">
        <Zoom {...zoomInProperties}>
          <div className="griditem flex flex-col place-content-end lg:col-span-3 row-span-2 px-20 pb-10  text-white bg-white rounded-lg h-95">
            <h1 className="herotitle    text-6xl  font-semibold  bottom-20  ">{props.title2}</h1>
            <br />
            <br />
            <Button href={"#maps"} title={props.buttontitle} className="" />
            </div>
          <div className="griditem5 flex flex-col place-content-end lg:col-span-3 row-span-2 px-20 pb-10  text-white bg-white rounded-lg h-95">
            <h1 className="herotitle    text-6xl  font-semibold  bottom-20 ">{props.title2}</h1>
            <br />
            <br />
            <Button href={"#maps"} title={props.buttontitle} className="" />
            </div>

        </Zoom>
      </div>

    </section>
  );
};
export default Test;