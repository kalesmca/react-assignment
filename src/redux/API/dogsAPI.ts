import axios from "axios";
import * as CONSTANTS from '../../config/constants';
import http from "./http-client";


const dogsAPI = {
    getAllDogs: async (limit: number = 10, page: number = 0) => {
        const url = `${CONSTANTS.DOGS_LIST_URL}?limit=${limit}&page=${page}`
        const resp = await http.get(url);
        return resp;
    },
    getDogByQuery: async (query: string, limit: number = 10, page: number = 0) => {

        const url = `${CONSTANTS.BREED_SEARCH_URL}?name=${query}&include_breeds=true&limit=${limit}&page=${page}`
        const resp = await http.get(url);
        return resp;
    }
}

export default dogsAPI;

