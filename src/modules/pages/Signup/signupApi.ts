import { AxiosError } from "axios";
import { privateGateway } from "../../../services/apiGateway";
import { routes } from "../../../services/routes";
import { NavigateFunction } from "react-router-dom";
import { exist, success } from "../../components/Common/Tostify";


export const signup = async (
    userName: string,
    password: string,
    navigate: NavigateFunction,
    ) => {
        try {
            const response = await privateGateway.post(
            routes.signup,
            {
                username: userName,
                password: password
            } 
        );
        const message: any = response?.data;
        console.log(message);
        success()
        setTimeout(() => {
            navigate("/login");
          }, 3000);
    } catch (err: unknown) {
        const error = err as AxiosError<any>; 
        if (error?.response) {
            console.log(error.response.data);
            let msg:string = String(error.response.data.username[0])
            exist(msg)
        }
    }
}