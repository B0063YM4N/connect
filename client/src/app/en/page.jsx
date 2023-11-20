

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










export default async function Home({ params }) {



  return (
    <main className=" flex min-h-screen flex-col bg-[#121212] scroll-smooth " >




      <Navbar about={"About"} products={"Products"} career={"Career"} contact={"Contact"} locations={"Locations"} corporative={"Corporate"}  />
       <Test title2={"Your Connection To The Road"} buttontitle={"locations"}/>
      {/* <Herosection title2={"Your Connection To The Road"} subdesc1={"Stations All Over The Georgia"} subdesc2={"Years At Your Service"}/> */}
      <Herosection title2={"Your Connection To The Road"} buttontitle={"locations"}/>

    
      
      <Products title={"PRODUCTS"} />
      <AboutSection desc={"Georgian brand Konekti has been operating in the local market since 2014. The oil company unites more than 95 facilities throughout Georgia On a scale where users can get EURO-5 standards Appropriate high quality products. Fuel quality in full Complies with the legal requirements in the country. company It imports fuel from European oil-producing countries. The company is focused on continuous growth and development, respectively We try to protect the interests of customers and constantly To monitor the quality of fuel sold in our network. In this company Currently, more than 600 employees are employed, whose daily The company strives to provide customers with high quality products and services."}  title={"ABOUT COMPANY"}  />
      <Career title={"CAREER"} desc={"Connect is a rapidly growing company and one of the largest employers in Georgia. The company is on the market with more than 95 gas stations Presented, where more than 600 are employed and their number increasing daily. The company opened a number of new facilities and The development of the network has been planned, therefore, it has always been human Resource needs across the country. If you are interested Join our team, send resume to indicated to the e-mail address - hr@connect.com.ge"} />
      <Maps title={"LOCATIONS"} />
      <Corporative title={"CORPORATE"} desc={"Attention companies! You can use the corporate card system in the connect network."} subdesc={"Go to the link to enter the site."} subtitle={"LINK"}/>
      <Contact contact={"CONTACT"} office={"Head Office:  university street N2"} tell={"TELL"} maill={"Mail"} />







    </main>
  )
}

