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

export async function getPostsData() {
    return axios.get(`${apiUrl}/posts`)
    .then((response) => {
        return response.data.slice(0, 30);
    }).catch((error) => {
        notifyToastError(error.response.data.error);
    });
}

export async function getTodosData() {
    return axios.get(`${apiUrl}/todos`)
    .then((response) => {
        return response.data.slice(0, 30);
    }).catch((error) => {
        notifyToastError(error.response.data.error);
    });
}
