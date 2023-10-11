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
    <main className=" flex min-h-screen flex-col bg-[#121212] scroll-smooth " style={{ scrollBehavior: 'smooth' }}>





      <Navbar about={"о нас"} products={"продукты"} career={"карьера"} contact={"Контакт"} locations={"локации"} corporative={"корпорация"}  />

      <Herosection title2={"твоя связь с дорогой"}/>


   
      
      <AboutSection desc={"Нефтяная компания работает на местном рынке с 2014 года под грузинским брендом «Коннект». Бренд Connect включает в себя более 90 объектов по всей Грузии, где клиенты могут получить качественные продукты и услуги. Качество топлива соответствует требованиям законодательства страны и стандартам ЕВРО-5. Компания импортирует топливо из различных стран-потребителей нефти. Компания ориентирована на постоянный рост и развитие, поэтому стараемся защищать интересы клиентов и постоянно контролируем качество топлива, реализуемого в нашей сети. В настоящее время в компании работают более 600 сотрудников, ежедневными усилиями которых компания старается предоставить клиентам высококачественную продукцию и услуги."} subdesc={"„Connect“ - Это грузинский бренд, ориентированный на рост и развитие как на международном, так и на будущих зарубежных рынках."} title={"О компании"} subtitle={"История бренда"} />
      <Products title={"продукты"} />
      <Career title={"Карьера в сфере недвижимости"} desc={"Конекти – один из крупнейших работодателей в Грузии. Компания планирует открыть ряд новых объектов и развивать свою сеть, поэтому ей постоянно нужны человеческие ресурсы по всей стране. Если вы заинтересованы присоединиться к нашей команде, отправьте свое резюме на указанный адрес электронной почты."} />
      <Maps title={"локации"} />
      <Corporative title={"корпорация"} desc={" Внимание компании! Вы можете воспользоваться системой корпоративных карт в сети Konekti."} subdesc={"Перейдите по ссылке для входа на сайт."} subtitle={"входить"}/>
      <Contact contact={"Контакт"} office={"офис: university street N2"} tell={"телефон"} maill={"почта"} />








    </main>
  )
}

