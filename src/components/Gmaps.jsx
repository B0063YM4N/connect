"use client"
import React from 'react'
import { useMemo } from "react";
import { Fragment, useState } from "react";
import { GoogleMap, useLoadScript, Marker, MarkerF, InfoWindowF, } from "@react-google-maps/api";

const markers = [
    {
        id: 1,
        name: "მაიაკოვსკის ქ. N55/17",
        position: { lat: 41.640781, lng: 41.660793 },
    },
    {
        id: 2,
        name: "თავისუფლების ქ 18",
        position: { lat: 41.820569, lng: 41.777805 },
    },
    {
        id: 3,
        name: "ხახული  ქ 43",
        position: { lat: 41.620194, lng: 41.624328 },
    },
    {
        id: 4,
        name: "გურამიშვილის ქუჩა",
        position: { lat: 41.983543, lng: 44.104923 },
    },
    {
        id: 5,
        name: "რუსთაველის 1",
        position: { lat: 42.327190, lng: 42.423927 },
    },
    {
        id: 6,
        name: "თბილისი, გურამიშვილის 170",
        position: { lat: 41.782494948549655, lng: 44.79795528526957 },
    },
    {
        id: 7,
        name: "სამეგრელო მესხიას 3",
        position: { lat: 42.511650, lng: 41.863632 },
    },
    {
        id: 8,
        name: "ქართლი ჭონქაძის 6",
        position: { lat: 41.986053, lng: 44.101162 },
    },
    {
        id: 9,
        name: "ქინძმარაულის 7",
        position: { lat: 41.67108962932545, lng: 44.892217094503856 },
    },
    {
        id: 10,
        name: "სოფ.ახალშენი ნიჟარაძის 34. ",
        position: { lat: 41.629852, lng: 41.677670 },
    },
    {
        id: 11,
        name: "აღმაშენებლის 20ა/ტაბიძის კვ. ",
        position: { lat: 41.62725733977303, lng: 41.616251155222734 },
    },
    {
        id: 12,
        name: "კ. გამსახურდიას XIV შეს #15-ის მი",
        position: { lat: 42.23061775464167, lng: 42.670208200000005 },
    },
    {
        id: 13,
        name: "სოფ.ორთაბათუმი 22.22.09.703",
        position: { lat: 41.651051, lng: 41.695869 },
    },
    {
        id: 14,
        name: "პუშკინის 2",
        position: { lat: 41.993668, lng: 44.113495 },
    },
    {
        id: 15,
        name: "სოფ.ზეინდარი",
        position: { lat: 41.62725733977303, lng: 41.616251155222734 },
    },
    {
        id: 16,
        name: "ხელვაჩაურის რ-ნი ს.ერგე",
        position: { lat: 41.55774565187939, lng: 41.69272420984641 },
    },

    {
        id: 17,
        name: "დაბა ქედა ს.საფარიძეები ",
        position: { lat: 41.546345, lng: 41.781677 },
    },
    {
        id: 18,
        name: "აბასთუმნის გზატ. 1",
        position: { lat: 41.641411, lng: 42.977642 },
    },
    {
        id: 19,
        name: "თამარაშვილის ქ 57აღ.მხარეს მი",
        position: { lat: 41.644375, lng: 42.992630 },
    },
    {
        id: 20,
        name: "რუსთაველის 120",
        position: { lat: 41.638386, lng: 42.999317 },
    },
    {
        id: 21,
        name: "ხობი",
        position: { lat: 42.315771635171636, lng: 41.899619134970045 },
    },
    {
        id: 22,
        name: "მარტვილი",
        position: { lat: 42.41704847080401, lng: 42.37863315954691 },
    },
    {
        id: 23,
        name: "სოფ. ინგირი ხუბულავას ქუჩა,",
        position: { lat: 42.495220, lng: 41.840717 },
    },
    {
        id: 24,
        name: "თავისუფლების ქ ",
        position: { lat: 41.816975, lng: 41.788654 },
    },
    {
        id: 25,
        name: "თამარ მეფის ქ. 21",
        position: { lat: 42.333668, lng: 43.421478 },
    },
    {
        id: 26,
        name: "სოფ მუხაესტატე",
        position: { lat: 41.841755, lng: 41.864868 },
    },
    {
        id: 27,
        name: "სოფ. ინგირი",
        position: { lat: 42.497078, lng: 41.827366 },
    },
    {
        id: 28,
        name: "ხობისა და ფალიაშვილის ქუჩების კვეთა",
        position: { lat: 42.168182, lng: 41.671928 },
    },
    {
        id: 29,
        name: "ყვარლის გასასვლელი",
        position: { lat: 41.930401, lng: 45.811105 },
    },
    {
        id: 30,
        name: "სოფ. კოლაგი",
        position: { lat: 41.699828, lng: 45.849202 },
    },
    {
        id: 31,
        name: "ლენტეხი, ჭავჭავაძის ქ.",
        position: { lat: 42.787994, lng: 42.717960 },
    },
    {
        id: 32,
        name: "ქვედა ცაგერი .",
        position: { lat: 42.633781, lng: 42.753902 },
    },
    {
        id: 33,
        name: "სოფ. ქვენატკოცა",
        position: { lat: 42.060719, lng: 43.800472 },
    },
    {
        id: 34,
        name: "ფ.ხალვაშის გამზ. 202",
        position: { lat: 41.597820, lng: 41.637150 },
    },
    {
        id: 35,
        name: "ტოლსტოის 2",
        position: { lat: 42.507584, lng: 41.850449 },
    },
    {
        id: 36,
        name: "სოფ. ბერბუკი",
        position: { lat: 42.019043, lng: 44.130112 },
    },
    {
        id: 37,
        name: "ჭავჭავაძის 7",
        position: { lat: 42.023335, lng: 43.896885 },
    },
    {
        id: 38,
        name: "ლიკანი მესხეთის 42",
        position: { lat: 41.816711, lng: 43.350243 },
    },
    {
        id: 39,
        name: "რუისი",
        position: { lat: 42.033844, lng: 43.938889 },
    },
    {
        id: 40,
        name: "ქ.ბორჯომი N14",
        position: { lat: 41.990078, lng: 43.621460 },
    },
    {
        id: 41,
        name: "წმინდა ნინოს N 143",
        position: { lat: 42.641857, lng: 42.091148 },
    },
    {
        id: 42,
        name: "ქარელი ვაჟა-ფშაველას N111",
        position: { lat: 42.017986, lng: 43.879482 },
    },
    {
        id: 43,
        name: "სურამი ქ.სურამელის კიკვიძის კვეთ",
        position: { lat: 42.029331, lng: 43.547600 },
    },
    {
        id: 44,
        name: "ნორიო, სოფელი საბოკუჩავო",
        position: { lat: 42.218132, lng: 42.183399 },
    },
    {
        id: 45,
        name: "დავით აღმაშენებლის ქუჩა",
        position: { lat: 41.94215200327483, lng: 44.421552837431655 },
    },
    {
        id: 46,
        name: "ხელვაჩაურის მუნიც, სოფ. ახალსოფელი",
        position: { lat: 41.585770, lng: 41.592953 },
    },
    {
        id: 47,
        name: "ქალაქის გასასვლელი ცენტრალურ გზაზე",
        position: { lat: 41.8186301600669, lng: 44.75211836077115 },
    },
    {
        id: 48,
        name: "სოფ. ახალსოფელი",
        position: { lat: 42.026096, lng: 44.196426 },
    },
    {
        id: 49,
        name: "ბორჯომის ქ. 16",
        position: { lat: 41.989380, lng: 43.613861 },
    },
    {
        id: 50,
        name: "შაუმიანის 1 გ",
        position: { lat: 41.413582, lng: 43.485992 },
    },
    {
        id: 51,
        name: "აღმაშენებლის ქ. 30 ა",
        position: { lat: 41.392803, lng: 43.490326 },
    },
    {
        id: 52,
        name: "ქავთარაძის 1",
        position: { lat: 41.723769, lng: 44.739289 },
    },
    {
        id: 53,
        name: "ყიფშიძის 2",
        position: { lat: 41.71237530312968, lng: 44.75590731534254 },
    },
    {
        id: 54,
        name: "კურდღელაური ქუჩა მშვიდობა",
        position: { lat: 41.936755, lng: 45.509243 },
    },
    {
        id: 55,
        name: "გურჯაანი, სოფ კაჭრეთი",
        position: { lat: 41.63562371112326, lng: 45.68425200000001 },
    },

    {
        id: 56,
        name: "აღმაშენებლის ხეივანი",
        position: { lat: 41.801032, lng: 44.771291 },
    },
    {
        id: 57,
        name: "სოფ: ქოლობანი",
        position: { lat: 42.180095, lng: 42.251830 },
    },
    {
        id: 58,
        name: "მარნეულის ბაზარი, აღმაშნებლის ქ",
        position: { lat: 41.479853, lng: 44.808611 },
    },
    {
        id: 59,
        name: "ბოლნისის გზადკეცილი 26 მაისის ქ",
        position: { lat: 41.483055, lng: 44.791297 },
    },
    {
        id: 60,
        name: "ქედა 9 აპრილი",
        position: { lat: 41.599010, lng: 41.942456 },
    },
    {
        id: 61,
        name: "დაბა ურეკი",
        position: { lat: 41.599010, lng: 41.780663 },
    },




];




const Gmaps = ({title}) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    return (
        <section id="maps" className=' bg-[#282c2c]'>
            <Fragment>
                
                    <div className="map-container mx-auto bg-[#282c2c]">
                        <h1 className="text-[#e7d833] mb-10 mt-0 text-4xl place-self-center text-center sm:text-5xl lg:text-3xl font-extrabold">{title}</h1>
                        <div style={{ height: "90vh", width: "100%", }}>
                            {isLoaded ? (
                                <GoogleMap
                                    center={{ lat: 42.066246, lng: 43.813500 }}
                                    zoom={8}
                                    onClick={() => setActiveMarker(null)}
                                    mapContainerStyle={{ width: "100%", height: "70vh"  }}
                                >
                                    {markers.map(({ id, name, position }) => (
                                        <MarkerF
                                            key={id}
                                            position={position}
                                            onClick={() => handleActiveMarker(id)}
                                        // icon={{
                                        //   url:"https://t4.ftcdn.net/jpg/02/85/33/21/360_F_285332150_qyJdRevcRDaqVluZrUp8ee4H2KezU9CA.jpg",
                                        //   scaledSize: { width: 50, height: 50 }
                                        // }}
                                        >
                                            {/* {activeMarker === id ? (
                                        <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                            <div>
                                                <p>{name}</p>
                                            </div>
                                        </InfoWindowF>
                                    ) : null} */}
                                        </MarkerF>
                                    ))}
                                </GoogleMap>
                            ) : null}
                        </div>
                    </div>
               
            </Fragment>
        </section>

    );
}






export default Gmaps




























// "use client"
// import React from 'react'
// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


// const Maps = () => {
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     });

//     if (!isLoaded) return <div>Loading...</div>;
//     return <Map />;
// }

// function Map() {
//     const center = useMemo(() => ({ lat: 41.733863, lng: 44.737963 }), []);

//     return (
//         <GoogleMap id="maps" zoom={8} center={center} mapContainerClassName="map-container">
//             <Marker position={center} />
//         </GoogleMap>
//     );
// }






// export default Maps