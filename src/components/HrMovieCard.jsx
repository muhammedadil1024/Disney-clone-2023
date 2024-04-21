import React from 'react'

const HrMovieCard = ({ movie }) => {

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

    return (
        <div className="hover:scale-110 transition-all duration-150 ease-in cursor-pointer">
            <img
                src={IMAGE_BASE_URL + movie.backdrop_path}
                alt="Movie List card"
                className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer"
            />
            <h2 className="text-[13px] md:text-[16px] w-[110px] md:w-[260px] mt-2 text-center">{movie.title}</h2>
        </div>
    );
}

export default HrMovieCard