import { AxiosError } from "axios";
import { privateGateway } from "../../../services/apiGateway";
import { routes } from "../../../services/routes";
import { NavigateFunction } from "react-router-dom";
import { notify, success } from "../../components/Common/Tostify";

export const userLogin = async (
    userName: string,
    password: string,
    navigate: NavigateFunction,
) => {
    try {
        const response = await privateGateway.post(
            routes.login,
            {
                username: userName,
                password: password
            } 
        );
        const message: any = response?.data;
        console.log(message.access);
        localStorage.setItem('accessToken', message.access);
        success()
        setTimeout(() => {
            navigate("/");
          }, 2000);
    } catch (err: unknown) {
        const error = err as AxiosError;
        if (error?.response) {
            notify()
            console.log(error.response);
        }
    }
}

