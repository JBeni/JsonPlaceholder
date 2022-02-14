import { APIEndpoint } from './ApiConfiguration';
import { notifyToastError } from './helper.service';
const axios = require("axios");

const apiUrl = `${APIEndpoint.apiUrl}`;

export async function getUserData() {
    return axios.get(`${apiUrl}/users/1`)
    .then((response) => {
        return response.data;
    }).catch((error) => {
        notifyToastError(error.response.data.error);
    });
}

export async function getTodosData() {
    return axios.get(`${apiUrl}/todos/30`)
    .then((response) => {
        console.log(response.data);
        return response.data;
    }).catch((error) => {
        notifyToastError(error.response.data.error);
    });
}

export async function getPostsData() {
    return axios.get(`${apiUrl}/posts/30`)
    .then((response) => {
        return response.data;
    }).catch((error) => {
        notifyToastError(error.response.data.error);
    });
}
