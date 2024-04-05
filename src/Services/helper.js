import axios from "axios";

//Storing base adderess used to always provides the base add.
export const BASE_URl="http://localhost:8080";

export const myaxios=axios.create({
    baseURL :BASE_URl
})