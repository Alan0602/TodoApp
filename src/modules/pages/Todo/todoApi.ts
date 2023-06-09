import { AxiosError } from "axios";
import { privateGateway } from "../../../services/apiGateway";
import { routes } from "../../../services/routes";

export const todoCreate = async (
    todo: string,
) => {
    try {
        const response = await privateGateway.post(
            routes.todo,
            {
                title: todo,
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

