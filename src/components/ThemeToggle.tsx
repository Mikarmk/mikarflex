import { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        // Проверяем сохраненную тему или системные настройки
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        // Применяем тему к документу
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button 
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title={`Переключить на ${theme === 'dark' ? 'светлую' : 'темную'} тему`}
        >
            <div className="theme-toggle__icon">
                {theme === 'dark' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" 
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.9548 12.9564C20.5779 15.3717 17.9791 17.0001 15 17.0001C10.5817 17.0001 7 13.4184 7 9.00006C7 6.02097 8.62837 3.42216 11.0437 2.04517C5.96861 2.52631 2 6.79961 2 12.0001C2 17.5229 6.47715 22.0001 12 22.0001C17.2004 22.0001 21.4737 18.0314 21.9548 12.9564Z" 
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )}
            </div>
        </button>
    );
};

export default ThemeToggle; 