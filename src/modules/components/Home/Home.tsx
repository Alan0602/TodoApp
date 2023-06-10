import {  useNavigate } from "react-router-dom";
import Todo from "../../pages/Todo/Todo";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        if (!accessToken) {
            navigate('/login');
           
          }
    }, [])
    

    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    
    
  return (
    <Todo/>
  )
}

export default Home