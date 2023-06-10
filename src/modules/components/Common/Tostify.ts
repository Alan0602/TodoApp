import { toast } from "react-toastify";

export const success = () => toast.success(' Success', {
    position: "bottom-center",
    autoClose: 4950,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

 export const notify = () => toast.error(' Error', {
        position: "bottom-center",
        autoClose: 4950,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

 export const loading= () => toast.warning(' Loading...', {
        position: "bottom-center",
        autoClose: 4950,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });