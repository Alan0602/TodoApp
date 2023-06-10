import { NavigateFunction } from "react-router-dom";
import { success } from "../../components/Common/Tostify";


export const signup = async (
    userName: string,
    password: string,
    navigate: NavigateFunction,
    ) => {
        localStorage.setItem("userName", userName);
        localStorage.setItem("password", password);
        success()
        setTimeout(() => {
            navigate('/login');
        }, 2000);
}