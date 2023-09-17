import React from 'react'
import Image from 'next/image'

const Career = () => {
    return (

        <section className="text-black bg-white" id="career" >

            <div className=' container mx-auto'>
                <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                        <h2 className="text-4xl font-bold text-black mb-4 place-self-center text-center sm:text-left">career in connect</h2>
                        <p className="mt-10 text-base lg:text-lg place-self-center text-center sm:text-left">
                            ქონექთი ერთერთი მსხივი დამსაქმეებელია საქართველოში. კომპანიას დაგეგმილი აქვს არაერთი ახალი ობიექტების გახსნა და ქსელის განვითარება, შესაბამისად, მუდმივად აქვს ადამიანური რესურსების საჭიროება ქვეყნის მასშტაბით.
                            თუ თქვენ ხართ დაინტერესებული შემოუერთდეთ ჩვენს გუნდს, გამოაგზავნეთ რეზიუმე მითითებულ ელექტორულ ფოსტის მისამართზე.
                        </p>

                    </div>
                    <Image alt='careerimage' src="/images/carrerimg.jpg" width={500} height={500} className="rounded place-self-center" />
                </div>
            </div>
        </section>

    )
}

export default Career