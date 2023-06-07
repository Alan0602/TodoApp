import { AxiosError } from "axios";
import { privateGateway } from "../../../services/apiGateway";
import { routes } from "../../../services/routes";

export const userLogin = async (
    userName: string,
    password: string,
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
        console.log(message);
    } catch (err: unknown) {
        const error = err as AxiosError;
        if (error?.response) {
            console.log(error.response);
        }
    }
}

