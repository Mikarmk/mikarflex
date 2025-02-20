import MovieItem from "./MovieItem";

interface Movie {
    imdbID: string;
    Title: string;
    Poster: string;
    Plot: string;
    Year: string;
    vote_average?: number;
}

interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    return (
        <div className="movies-grid">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <MovieItem key={movie.imdbID} movie={movie} />
                ))
            ) : (
                <p className="movies-grid__empty">Фильмы не найдены</p>
            )}
        </div>
    );
};

export default MovieList;