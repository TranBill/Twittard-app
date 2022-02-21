import axios from "axios";
import { USER_URL } from "../BASE_URL";

function GetUser({}) {
    return axios(USER_URL);
}

export default GetUser;