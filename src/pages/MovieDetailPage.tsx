import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFavorites } from "../hooks/useFavorites";
import axios from "axios";
import "../styles/MovieDetailPage.css";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
  imdbID: string;
  Runtime: string;
  Genre: string;
  Director: string;
  imdbRating: string;
}

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const navigate = useNavigate();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.some(fav => fav.imdbID === id);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=154c628`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (!movie) return <div className="loading">Загрузка...</div>;

  return (
    <div className="movie-detail">
      <div className="movie-detail__header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Назад
        </button>
      </div>
      <div className="movie-detail__content">
        <div className="movie-detail__poster-wrapper">
          <img
            className="movie-detail__poster"
            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
            alt={movie.Title}
          />
        </div>
        <div className="movie-detail__info">
          <h1 className="movie-detail__title">{movie.Title}</h1>
          <div className="movie-detail__meta">
            <span className="movie-detail__meta-item">🎬 {movie.Year}</span>
            <span className="movie-detail__meta-item">⏱️ {movie.Runtime}</span>
            <span className="movie-detail__meta-item">🎭 {movie.Genre}</span>
          </div>
          {movie.imdbRating !== "N/A" && (
            <div className="movie-detail__rating">
              ⭐ IMDb: {movie.imdbRating}
            </div>
          )}
          <p className="movie-detail__plot">{movie.Plot}</p>
          <div className="movie-detail__director">
            <strong>Режиссер:</strong> {movie.Director}
          </div>
          <div className="movie-detail__actions">
            <button
              className={`movie-detail__favorite-btn ${isFavorite ? 'is-favorite' : ''}`}
              onClick={() => isFavorite 
                ? removeFromFavorites(movie.imdbID)
                : addToFavorites(movie)
              }
            >
              {isFavorite ? '💜 В избранном' : '🤍 Добавить в избранное'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;