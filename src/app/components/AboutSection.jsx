
import React from "react";
import Image from "next/image";



const AboutSection = () => {



    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image alt="aboutimage" src="/images/aboutimg.jpg" width={500} height={500} className="rounded" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4 place-self-center text-center sm:text-left">About Company</h2>
                    <p className="text-base lg:text-lg place-self-center text-center sm:text-left">
                        ნავთობკომპანია ოპერირებს ადგილობრივ ბაზარზე 2014 წლიდან ქართული ბრენდის „Connect”-ის ქვეშ.
                        Connect -ის ბრენდი მთელი საქართველოს მასშტაბით აერთიანებს 90 ზე მეტ ობიექტს, სადაც მომხმარებლებს შეუძლიათ მიიღონ მაღალი ხარისხის პრდუქცია და მომსახურება.
                        საწვავის ხარისხი შეესაბამება ქვეყანაშ არსებულ საკანონმდებლო მოთხოვნებს და EURO-5 სტანდარტებს.
                        საწვავის იმპორტს კომპანია ახორციელებს სხვადასხვა ნავთომწმარმოებელი ქვეყნებიდან. კომპანია ორიენტირებულია მუდმივ ზრდასა და განვითარებაზე, შესაბამისად ვცდილობთ დავიცვათ მომხმარებლების ინტერესები და მუდმივად ვაკონტროლოთ ჩვენს ქსელში გაყიდული საწვავის ხარისხი.
                        კომპანიაში ამ ეტაპზე დასაქმებულია 600 ზე მეტი თანამშრომელი, რომელთა ყოველდღირი ძალისხმევით კომპანია ცდილობს მომხმარებელს მიაწოდოს მაღალი ხარისხის პროდუქცია და მომსახურება.<br/>
                        <br/>ბრენდის ისტორია<br/>
                        „Connect“ - ი არის  ქართული ბრენდი, რომელიც ორიეტირებულია ზრდასა და განვითარებაზე როგორც საერთაშორისო ისე სამომავლოდ უცხოურ ბაზრებზე.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;