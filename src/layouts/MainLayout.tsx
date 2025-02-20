import { Link, Outlet } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const MainLayout = () => {
    return (
        <div className="layout">
            <header className="header">
                <div className="logo">mikflex</div>
                <nav>
                    <Link to="/">главная</Link>
                    <Link to="/favorites">избранное</Link>
                    <ThemeToggle />
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;