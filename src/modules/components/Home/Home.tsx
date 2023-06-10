import {  useNavigate } from "react-router-dom";
import Todo from "../../pages/Todo/Todo";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        if (localStorage.getItem('loggedIn') !== 'true') {
            navigate('/login');
           
          }
    }, [])
    

    const navigate = useNavigate();

    
    
  return (
    <Todo/>
  )
}

export default Home