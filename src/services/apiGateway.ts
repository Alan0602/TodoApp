import axios from "axios";

export const privateGateway = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL as string,
    headers: {
        "Content-Type": "application/json"
    }
});

privateGateway.interceptors.request.use(
    function (config) {
        if (localStorage.getItem("accessToken") !== null) {
            config.headers["Authorization"] = `Bearer ${localStorage.getItem(
                "accessToken"
            )}`;
        }

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);