import { toast } from "react-hot-toast";

export const initialUserValues = {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
};

export const notifyToastInfo = (message) => {
    toast.success(message, {
        position: 'bottom-center',
        duration: 3000,
    });
}

export const notifyToastError = (message) => {
    toast.error(message, {
        position: 'bottom-center',
        duration: 5000,
    });
}
