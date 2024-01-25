import axios from "axios";
const HOST_URL = "http://127.0.0.1:8000/api";


const postRequest = async(endpoint, params, success, error) => {
    await axios.post(`${HOST_URL}/${endpoint}`, params).then((res) => res.data).then(success).catch(error);
};

const getRequest = async(endpoint, success, error) => {
    await axios.get(`${HOST_URL}/${endpoint}`).then((res) => res.data).then(success).catch(error);
};

export {postRequest, getRequest};
