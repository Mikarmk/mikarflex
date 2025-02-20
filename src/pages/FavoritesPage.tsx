import { useFavorites } from "../hooks/useFavorites";
import MovieList from "../components/MovieList";
import "../styles/FavoritesPage.css";

const FavoritesPage = () => {
    const { favorites } = useFavorites();

    return (
        <div className="favorites-page">
            <h2>Избранные фильмы</h2>
            <MovieList movies={favorites} />
        </div>
    );
};

export default FavoritesPage;
