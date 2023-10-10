import Image from 'next/image'
import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'

import Products from '@/components/Products'
import Career from '@/components/Career'
import Maps from '@/components/Gmaps'
import Contact from '@/components/Contact'
import Corporative from '@/components/Corporative'










export default async function Home({ params }) {



  return (
    <main className=" flex min-h-screen flex-col bg-[#121212] scroll-smooth " >




  
      <Navbar about={"ჩვენს შესახებ"} products={"პროდუქტები"} career={"კარიერა"} contact={"კონტაქტი"} locations={"სადგურები"} />

      <Herosection />


      <div className='spacer layer2'></div>
      <AboutSection desc={"ნავთობკომპანია ოპერირებს ადგილობრივ ბაზარზე 2014 წლიდან ქართული ბრენდის „Connect”-ის ქვეშ. Connect -ის ბრენდი მთელი საქართველოს მასშტაბით აერთიანებს 90 ზე მეტ ობიექტს, სადაც მომხმარებლებს შეუძლიათ მიიღონ მაღალი ხარისხის პრდუქცია და მომსახურება. საწვავის ხარისხი შეესაბამება ქვეყანაშ არსებულ საკანონმდებლო მოთხოვნებს და EURO-5 სტანდარტებს. საწვავის იმპორტს კომპანია ახორციელებს სხვადასხვა ნავთომწმარმოებელი ქვეყნებიდან. კომპანია ორიენტირებულია მუდმივ ზრდასა და განვითარებაზე, შესაბამისად ვცდილობთ დავიცვათ მომხმარებლების ინტერესები და მუდმივად ვაკონტროლოთ ჩვენს ქსელში გაყიდული საწვავის ხარისხი. კომპანიაში ამ ეტაპზე დასაქმებულია 600 ზე მეტი თანამშრომელი, რომელთა ყოველდღირი ძალისხმევით კომპანია ცდილობს მომხმარებელს მიაწოდოს მაღალი ხარისხის პროდუქცია და მომსახურება."} subdesc={"„Connect“ - ი არის  ქართული ბრენდი, რომელიც ორიეტირებულია ზრდასა და განვითარებაზე როგორც საერთაშორისო ისე სამომავლოდ უცხოურ ბაზრებზე. "} title={"კომპანიის შესახებ"} subtitle={"ბრენდის ისტორია"} />
      <div className='spacer layer1'></div>
      <Products title={"პეოდუქტები"} />
      <div className='spacer layer2'></div>
      <Career title={"კარიერა ქონექთში"} desc={"ქონექთი ერთერთი მსხვილი დამსაქმეებელია საქართველოში. კომპანიას დაგეგმილი აქვს არაერთი ახალი ობიექტების გახსნა და ქსელის განვითარება, შესაბამისად, მუდმივად აქვს ადამიანური რესურსების საჭიროება ქვეყნის მასშტაბით. თუ თქვენ ხართ დაინტერესებული შემოუერთდეთ ჩვენს გუნდს, გამოაგზავნეთ რეზიუმე მითითებულ ელექტორულ ფოსტის მისამართზე."} />
      <div className='spacer layer1'></div>
      <Maps title={"სადგურები"} />
      <Corporative title={"კორპორატიული"}/>
      <Contact contact={"კონტაქტი"} office={"office: university street N2"} tell={"Tell"} maill={"Gmail"} />








    </main>
  )
}

