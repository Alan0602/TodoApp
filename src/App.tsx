import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "404",
        element: <NotFound />
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