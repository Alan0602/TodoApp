import { NavigateFunction } from "react-router-dom";
import { notify, success } from "../../components/Common/Tostify";

export const userLogin = async (
    userName: string,
    password: string,
    navigate: NavigateFunction,
) => {
        if(userName === localStorage.getItem('userName') && password === localStorage.getItem('password')){
            success()
            localStorage.setItem('loggedIn', 'true');
            setTimeout(() => {
                navigate('/')
            },2000);
        }
        else{

            notify()
        } 
}
