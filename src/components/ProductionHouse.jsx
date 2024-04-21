import disney from '../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'
import nationalG from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'

import disneyV from '../assets/videos/disney.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import nationalGeoV from '../assets/videos/national-geographic.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import starwarV from '../assets/videos/star-wars.mp4'

const ProductionHouse = () => {

    const productionHouseList = [
        {
            id: 0,
            image: disney,
            video: disneyV,
        },
        {
            id: 1,
            image: pixar,
            video: pixarV,
        },
        {
            id: 2,
            image: marvel,
            video: marvelV,
        },
        {
            id: 3,
            image: starwar,
            video: starwarV,
        },
        {
            id: 4,
            image: nationalG,
            video: nationalGeoV,
        },
    ];

    return (
        <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
            {productionHouseList.map((item) => (
                <div
                    key={item.id}
                    className="border-[2px] border-gray-600 rounded-lg cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out relative shadow-xl shadow-gray-800"
                >
                    <video
                        src={item.video}
                        autoPlay
                        loop
                        playsInline
                        muted
                        className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
                    ></video>
                    <img src={item.image} alt="production logo" className="w-full z-[1]" />
                </div>
            ))}
        </div>
    );
}

export default ProductionHouse