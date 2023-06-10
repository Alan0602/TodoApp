import  { AxiosError } from "axios";
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

export const todoGet = async (setData: any) => {
    try {
        const response = await privateGateway.get(
            routes.todo, {} 
        );
        const message: any = response?.data;
        setData(message)
        console.log(message);
    } catch (err: unknown) {
        const error = err as AxiosError;
        if (error?.response) {
            console.log(error.response);
        }
    }
}
export async function todoUpdate(id: string) {
    try {
      const response = await privateGateway.put(
        routes.todo + id + '/', {}
        );
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error updating todo status:", error);
      throw error;
    }
  }
export async function todoDelete(id: string) {
    try {
      const response = await privateGateway.delete(
        routes.todo + id + '/', {}
        );
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error updating todo status:", error);
      throw error;
    }
  }

