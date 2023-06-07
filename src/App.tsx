import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import NotFound from './modules/components/NotFound/NotFound';
import Login from './modules/pages/Login/Login';
import Signup from './modules/pages/Signup/Signup';

const router = createBrowserRouter([
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
	// {
	// 	path: "/",
	// 	element: <Todo />
	// }
    
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;