import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import NotFound from './modules/components/NotFound/NotFound';
import Login from './modules/pages/Login/Login';
import Signup from './modules/pages/Signup/Signup';
import Todo from './modules/pages/Todo/Todo';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Todo />
    },
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/Login",
        element: <Login />
    },
    
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;