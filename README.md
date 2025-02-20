# Movies App

Веб-приложение для поиска и просмотра информации о фильмах с возможностью сохранения в избранное.

## Функционал

- Поиск фильмов по названию
- Фильтрация по году выпуска
- Детальная информация о фильме
- Добавление фильмов в избранное
- Переключение между светлой и темной темой
- Адаптивный дизайн
- Сохранение избранных фильмов в localStorage

## Технологии

- React 18
- TypeScript
- Vite
- React Router DOM
- Axios
- CSS Modules
- OMDB API

## Установка и запуск

```bash
# Клонирование репозитория
git clone https://github.com/YOUR_USERNAME/movies-app.git
cd movies-app

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка проекта
npm run build

# Предпросмотр сборки
npm run preview
```

## Структура проекта

```
src/
  ├── components/     # Переиспользуемые компоненты
  ├── pages/         # Компоненты страниц
  ├── hooks/         # Пользовательские хуки
  ├── styles/        # CSS стили
  ├── layouts/       # Компоненты layouts
  └── App.tsx        # Корневой компонент
```

## Деплой

Приложение настроено для деплоя на Netlify. При пуше в main ветку происходит автоматический деплой.

## API

Приложение использует [OMDB API](http://www.omdbapi.com/) для получения информации о фильмах.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
