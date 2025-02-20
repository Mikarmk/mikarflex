import { Link } from 'react-router-dom';
import { useFavorites } from "../hooks/useFavorites";

interface Movie {
    imdbID: string;
    Title: string;
    Poster: string;
    Plot: string;
    Year: string;
    vote_average?: number;
}

interface MovieItemProps {
    movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isFavorite ? removeFromFavorites(movie.imdbID) : addToFavorites(movie);
    };

    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.imdbID}`} className="movie-card__link">
                <div className="movie-card__image-wrapper">
                    <img
                        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
                        alt={movie.Title}
                        className="movie-card__poster"
                    />
                </div>
            </Link>
            <div className="movie-card__content">
                <h3 className="movie-card__title">{movie.Title}</h3>
                {movie.vote_average && (
                    <div className="movie-card__rating">
                        ⭐ {movie.vote_average.toFixed(1)}
                    </div>
                )}
                <button
                    className={`movie-card__favorite-btn ${isFavorite ? 'is-favorite' : ''}`}
                    onClick={handleFavoriteClick}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <span>
                        {isFavorite ? '💜' : '🤍'} Like
                    </span>
                </button>
            </div>
        </div>
    );
};

export default MovieItem;
