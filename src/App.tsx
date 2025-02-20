import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';

function App() {
    return (
        <BrowserRouter basename="/mikarflex">
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;