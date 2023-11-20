import Image from 'next/image'
import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'

import Products from '@/components/Products'
import Career from '@/components/Career'
import Maps from '@/components/Gmaps'
import Contact from '@/components/Contact'
import Corporative from '@/components/Corporative'
import Test from '@/components/Test'
import Editproducts from '@/components/Editproducts'



export default async function Home({ params }) {

        const res = await fetch("https://connect-database.vercel.app/api/data")
        const data = await res.json()
        console.log(data && data);

  return (
    <main className=" flex min-h-screen flex-col bg-[#121212] scroll-smooth " >




  
      <Navbar about={"ჩვენს შესახებ"} products={"პროდუქტები"} career={"კარიერა"} contact={"კონტაქტი"} locations={"სადგურები"} corporative={"კორპორატიული"} />
      {/* <Test title2={"შენი კავშირი გზასთან"} buttontitle={"locations"}/> */}
      {/* <Herosection title2={"შენი კავშირი გზასთან"} subdesc1={"სადგური საქართველოში"} subdesc2={"წელი თქვენს სამსახურში"} buttontitle={"მისამართები"}/> */}
      <Herosection title2={"შენი კავშირი გზასთან"} buttontitle={"locations"}/>

      <Products data={data} title={"პროდუქტები"} />
      <AboutSection desc={"ქართული ბრენდი ქონექთი 2014 წლიდან ოპერირებს ადგილობრივ ბაზარზე. ნავთობკომპანია აერთიანებს 95-ზე მეტ ობიექტს მთელი საქართველოს მასშტაბით, სადაც მომხმარებლებს შეუძლიათ მიიღონ EURO-5 სტანდარტების შესაბამისი მაღალი ხარისხის პროდუქცია. საწვავის ხარისხი სრულად შეესაბამება ქვეყანაში არსებულ საკანონმდებლო მოთხოვნებს. კომპანია საწვავის იმპორტს ახორციელებს ევროპის ნავთობმწარმოებელი ქვეყნებიდან. კომპანია ორიენტირებულია მუდმივ ზრდასა და განვითარებაზე, შესაბამისად ვცდილობთ დავიცვათ მომხმარებლების ინტერესები და მუდმივად ვაკონტროლოთ ჩვენს ქსელში გაყიდული საწვავის ხარისხი. კომპანიაში ამ ეტაპზე დასაქმებულია 600-ზე მეტი თანამშრომელი, რომელთა ყოველდღიური ძალისხმევით კომპანია ცდილობს მომხმარებელს მიაწოდოს მაღალი ხარისხის პროდუქცია და მომსახურება."} title={"კომპანიის შესახებ"} />
      <Career title={"კარიერა"} desc={"ქონექთი სწრაფად მზარდი კომპანიაა და ერთერთი მსხვილი დამსაქმებელია საქართველოში. კომპანია ბაზარზე 95-ზე მეტი ბენზინგასამართი სადგურით არის წარმოდგენილი, სადაც 600-ზე მეტი დასაქმებულია და მათი რიცხვი ყოველდღიურად იზრდება. კომპანიას არაერთი ახალი ობიექტის გახსნა და ქსელის განვითარება აქვს დაგეგმილი, შესაბამისად, მუდმივად აქვს ადამიანური რესურსების საჭიროება ქვეყნის მასშტაბით. თუ ხართ დაინტერესებული შემოუერთდეთ ჩვენს გუნდს, გამოაგზავნეთ რეზიუმე მითითებულ ელექტრონულ ფოსტის მისამართზე - hr@connect.com.ge"} />
      <Maps title={"სადგურები"} />
      <Corporative title={"კორპორატიული"} desc={" კომპანიების საყურადღებოდ! ქონექთის ქსელში შეგიძლიათ ისარგებლოთ კორპორაციული საბარათე სისტემით."} subdesc={"საიტზე შესასვლელად გადადით ლინკზე."} subtitle={"შესვლა"}/>
      <Contact contact={"კონტაქტი"} office={"office: university street N2"} tell={"Tell"} maill={"mail"} />
     {/* <Editproducts/> */}
     
   





    </main>
  )
}
