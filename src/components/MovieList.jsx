import { useEffect, useRef, useState } from "react";
import { getMovieByGenereId } from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HrMovieCard from "./HrMovieCard";


const MovieList = ({ genereId, index }) => {

    const [movieList, setMovieList] = useState([])

    const elementRef = useRef();

    useEffect(() => {
        const movieByGenereId = () => {
            getMovieByGenereId(genereId).then((res) => {
                setMovieList(res.data.results);
            });
        };

        movieByGenereId();
    }, [genereId]);

    const sliderRight = (element) => {
        element.scrollLeft += 500;
    };

    const sliderLeft = (element) => {
        element.scrollLeft -= 500;
    };

    return (
        <div className="relative">
            <HiChevronLeft
                className={`hidden md:block text-[30px] absolute mx-[-0.5rem] ${
                    index % 3 == 0 ? "mt-[75px]" : "mt-[160px]"
                } cursor-pointer`}
                onClick={() => sliderLeft(elementRef.current)}
            />
            <HiChevronRight
                className={`hidden md:block text-[30px] absolute z-1 mr-[-1.5rem]  ${
                    index % 3 == 0 ? "mt-[75px]" : "mt-[160px]"
                } cursor-pointer right-0`}
                onClick={() => sliderRight(elementRef.current)}
            />
            <div className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5" ref={elementRef}>
                {movieList?.map((item) => (
                    <>
                        {index % 3 == 0 ? (
                            <HrMovieCard key={item.id} movie={item} />
                        ) : (
                            <MovieCard key={item.id} movie={item} />
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default MovieList