const MovieDetails: React.FC = () => {
    // ... existing code ...

    return (
        <div className="movie-details">
            <div className="movie-details__header">
                <h1>{movie.title}</h1>
                <button
                    className="movie-details__favorite-btn"
                    onClick={() => isFavorite ? removeFromFavorites(movie.id) : addToFavorites(movie)}
                >
                    {isFavorite ? '💜' : '🤍'}
                </button>
            </div>
            {/* ... rest of the movie details ... */}
        </div>
    );
}; 