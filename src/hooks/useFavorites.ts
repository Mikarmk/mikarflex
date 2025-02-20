import { useState, useEffect } from "react";

interface Movie {
    imdbID: string;
    Title: string;
    Poster: string;
    Plot: string;
    Year: string;
    vote_average?: number;
}

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem("favorites");
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    const addToFavorites = (movie: Movie) => {
        const updatedFavorites = [...favorites, movie];
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const removeFromFavorites = (imdbID: string) => {
        const updatedFavorites = favorites.filter((movie) => movie.imdbID !== imdbID);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return { favorites, addToFavorites, removeFromFavorites };
};
