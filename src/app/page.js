
import Image from 'next/image'
import Herosection from '../components/Herosection'
import Navbar from '../components/Navbar'
import AboutSection from '@/components/AboutSection'
import Products from '@/components/Products'
import Career from '@/components/Career'
import Maps from '@/components/Gmaps'
import Contact from '@/components/Contact'
import Corporative from '@/components/Corporative'










export default async function Home({ params }) {



  return (
    <main className=" flex min-h-screen flex-col bg-[#121212] scroll-smooth " >




  
      <Navbar about={"About"} products={"Products"} career={"Career"} contact={"Contact"} locations={"Locations"} />

      <Herosection />


    
      <div className='spacer layer2'></div>
      <AboutSection desc={"The oil company has been operating in the local market since 2014 under the Georgian brand 'Connect'. The Connect brand includes more than 90 facilities throughout Georgia, where customers can get high-quality products and services. The quality of the fuel corresponds to the legal requirements in the country and EURO-5 standards. The company imports fuel from various oil-consuming countries. The company is focused on continuous growth and development, therefore we try to protect the interests of customers and constantly monitor the quality of fuel sold in our network. The company currently employs more than 600 employees, whose daily efforts the company tries to provide customers with high-quality products and services."} subdesc={"„Connect“ - is a Georgian brand that is focused on growth and development both on international and future foreign markets."} title={"ABOUT COMPANY"} subtitle={"BRAND HISTORY"} />
      <div className='spacer layer1'></div>
      <Products title={"PRODUCTS"} />
      <div className='spacer layer2'></div>
      <Career title={"CAREER IN CONNECT"} desc={"connect is one of the largest employers in Georgia. The company plans to open a number of new facilities and develop its network, so it constantly needs human resources throughout the country. If you are interested in joining our team, please send your resume to the email address provided."} />
      <div className='spacer layer1'></div>
      <Maps title={"LOCATIONS"} />
      <Corporative title={"CORPORATIVE"}/>
      <Contact contact={"CONTACT"} office={"Office: university street N2"} tell={"TELL"} maill={"Gmail"} />







    </main>
  )
}

