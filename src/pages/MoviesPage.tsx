import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import '../styles/MoviesPage.css';

interface Movie {
    imdbID: string;
    Title: string;
    Poster: string;
    Plot: string;
    Year: string;
}

const MoviesPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [search, setSearch] = useState('star wars');
    const [year, setYear] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                setError('');
                let url = `https://www.omdbapi.com/?s=${search}&apikey=154c628`;
                if (year) {
                    url += `&y=${year}`;
                }
                const response = await axios.get(url);
                if (response.data.Search) {
                    setMovies(response.data.Search);
                } else {
                    setMovies([]);
                    if (response.data.Error) {
                        setError(response.data.Error);
                    }
                }
            } catch (error) {
                setError('Произошла ошибка при загрузке фильмов');
                console.error('Error fetching movies:', error);
            } finally {
                setLoading(false);
            }
        };

        const timeoutId = setTimeout(() => {
            if (search.trim()) {
                fetchMovies();
            }
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [search, year]);

    return (
        <div className="movies-page">
            <section className="search-section">
                <div className="search-container">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Поиск фильмов..."
                        className="search-input"
                    />
                </div>
                <div className="filters-container">
                    <span className="filter-label">Год выпуска:</span>
                    <input
                        type="number"
                        placeholder="Например: 2024"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="movie-app__filter"
                        min="1900"
                        max="2024"
                    />
                </div>
            </section>

            {loading ? (
                <div className="loading">Загрузка...</div>
            ) : error ? (
                <div className="empty-state">
                    <div className="empty-state__icon">🎬</div>
                    <div className="empty-state__text">{error}</div>
                </div>
            ) : movies.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-state__icon">🔍</div>
                    <div className="empty-state__text">Фильмы не найдены</div>
                </div>
            ) : (
                <MovieList movies={movies} />
            )}
        </div>
    );
};

export default MoviesPage;