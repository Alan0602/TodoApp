import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import NotFound from './modules/components/NotFound/NotFound';
import Login from './modules/pages/Login/Login';
import Signup from './modules/pages/Signup/Signup';
import Home from './modules/components/Home/Home';
import 'react-toastify/dist/ReactToastify.css';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
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
        path: "/login",
        element: <Login />
    },
    
]);

function App() {
    return (
      <>
        <RouterProvider router={router} />;
      </>
    ); 
}

export default App;