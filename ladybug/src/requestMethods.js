import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWIyZjZiYzYxYjRmY2FkNDM5Njc2NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwOTk3ODQ0OCwiZXhwIjoxNzEwMjM3NjQ4fQ.vVzb1Spy5eBj4uRE50e22m0CifF_meQv2atN44G_6i4';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});

