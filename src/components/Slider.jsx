import { useEffect, useRef, useState } from 'react'
import { getTrendingMovies } from '../services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";


const Slider = () => {

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

    const screenWidth = window.innerWidth

    const [movieList, setMovieList] = useState([])

    const elementRef = useRef();

    useEffect(() => {
        getLatestMovies();
    }, [])

    

    const  getLatestMovies = () => {
        getTrendingMovies.then(res => {
            setMovieList(res.data.results)
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110
    }

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }

    return (
        <div>
            <HiChevronLeft
                className="hidden md:block text-[30px] absolute mx-8 mt-[160px] cursor-pointer"
                onClick={() => sliderLeft(elementRef.current)}
            />
            <HiChevronRight
                className="hidden md:block text-[30px] absolute mx-9 mt-[160px] cursor-pointer right-0"
                onClick={() => sliderRight(elementRef.current)}
            />
            <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth" ref={elementRef}>
                {movieList.map((item) => (
                    <img
                        key={item.id}
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        alt="slider image"
                        className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider