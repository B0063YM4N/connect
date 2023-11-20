
"use client"

export default function AdminPage() {

    const habdleAddData = async (e) => {
        e.preventDefault();
    
        const price1 = e.target[0].value;
        const price2 = e.target[1].value;
        const price3 = e.target[2].value;
        const price4 = e.target[3].value;
    
        try {
          const res = await fetch("/api/data", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              price1,
              price2,
              price3,
              price4,
            }),
          });
        } catch (error) {
          console.log(error);
        }
    
      }

  return (
    <form onSubmit={habdleAddData}>
      <input
        className="text-blue-900"
        type="number"
        step="any"
        id="price1"
        name="price1"
        required
      />
      <input
        className="text-blue-900"
        type="number"
        step="any"
        id="price2"
        name="price2"
        required
      />
      <input
        className="text-blue-900"
        type="number"
        step="any"
        id="price3"
        name="price3"
        required
      />
      <input
        className="text-blue-900"
        type="number"
        step="any"
        id="price4"
        name="price4"
        required
      />
      <button type='submit'>ADD</button>
    </form>
  )
}



















































// import Image from 'next/image'
// import Herosection from '@/components/Herosection'
// import Navbar from '@/components/Navbar'
// import AboutSection from '@/components/AboutSection'

// import Products from '@/components/Products'
// import Career from '@/components/Career'
// import Maps from '@/components/Gmaps'
// import Contact from '@/components/Contact'
// import Corporative from '@/components/Corporative'
// import Test from '@/components/Test'




// export default async function Home({ params }) {



//   return (
//     <main className=" flex min-h-screen flex-col bg-[#121212] scroll-smooth " style={{ scrollBehavior: 'smooth' }}>





//       <Navbar about={"о нас"} products={"продукты"} career={"карьера"} contact={"Контакт"} locations={"локации"} corporative={"корпорация"}  />
//       {/* <Test title2={"твоя связь с дорогой"} buttontitle={"локации"}/> */}
//       {/* <Herosection title2={"твоя связь с дорогой"} subdesc1={"Станции по всей Грузии"} subdesc2={"Годы к вашим услугам"} buttontitle={"локации"}/> */}
//       <Herosection title2={"твоя связь с дорогой"} buttontitle={"локации"}/>

   
      
//       <Products title={"продукты"} />
//       <AboutSection desc={"Грузинский бренд Konekti работает на местном рынке с 2014 года. Нефтяная компания объединяет более 95 объектов по всей Грузии. В масштабах, где пользователи могут получить стандарты ЕВРО-5. Соответствующие продукты высокого качества. Качество топлива в полном объеме Соответствует требованиям законодательства страны. компания Он импортирует топливо из европейских нефтедобывающих стран. Компания ориентирована на постоянный рост и развитие соответственно Мы стараемся защищать интересы клиентов и постоянно Контролировать качество топлива, реализуемого в нашей сети. В этой компании На этапе трудоустроено более 600 сотрудников, чьи ежедневные Компания стремится предоставить клиентам высокое качество. продукты и услуги."}  title={"О компании"} />
//       <Career title={"Карьера"} desc={"Konekti — быстрорастущая компания и один из крупнейших работодателей. в Грузии. Компания присутствует на рынке с более чем 95 АЗС. Представлено, где трудоустроено более 600 человек и их количество. увеличивается ежедневно. Компания открыла ряд новых объектов и Развитие сети было запланировано, поэтому оно всегда было человеческим. Потребности в ресурсах по всей стране. Если ты заинтересован Присоединяйтесь к нашей команде, отправляйте резюме по указанным адресам. на адрес электронной почты - hr@connect.com.ge"} />
//       <Maps title={"локации"} />
//       <Corporative title={"корпорация"} desc={" Внимание компании! Вы можете воспользоваться системой корпоративных карт в сети Konekti."} subdesc={"Перейдите по ссылке для входа на сайт."} subtitle={"входить"}/>
//       <Contact contact={"Контакт"} office={"офис: university street N2"} tell={"телефон"} maill={"почта"} />








//     </main>
//   )
// }

