import axios from "axios";
import { USERS_URLS } from "../BASE_URL";

function GetUsers({}) {
    return axios(USERS_URLS);
}

export default GetUsers;