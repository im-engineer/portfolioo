import axios from "axios";
import {getUserInfo} from "../service/authHeader"
const TOKEN = getUserInfo();
let axiosConfig = {
    headers:{
        'Content-Type' : 'application/json',
        'Authorization':TOKEN
    }
}
const API_URL = "https://ssrportfolio.onrender.com/";
// const API_URL = "https://localhost:2345/"

//-------------------------->>>>>> User Register <<<<<<--------------------------
export const contactToAdmin = async (fullname,email,textarea) => {
    console.log("🚀 ~ file: service.js:14 ~ contactToAdmin ~ fullname:", fullname)
    return await axios.post(API_URL + "contact/to/admin", {fullname,email,textarea}, axiosConfig)

}