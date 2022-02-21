import axios from "axios";
import { TWEET_API } from "../BASE_URL";

function GetTweet({}) {
    return axios(TWEET_API);
}

export default GetTweet;