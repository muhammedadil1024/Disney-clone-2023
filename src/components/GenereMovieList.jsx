import genere from "../constant/GenereList"
import MovieList from "./MovieList"

const GenereMovieList = () => {


    return (
        <div>
            {genere?.map((item, index) => index < 4 && (
                <div key={item.id} className="p-4 md:p-6 px-8 md:px-16">
                    <h2 className="text-[20px] font-bold">{item.name}</h2>
                    <MovieList genereId={item.id} index={index} />
                </div>
            ))}
        </div>
    )
}

export default GenereMovieList