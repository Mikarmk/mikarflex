import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailPage from '../pages/MovieDetailPage';
import FavoritesPage from '../pages/FavoritesPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<MoviesPage />} />
                    <Route path="/movie/:id" element={<MovieDetailPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;