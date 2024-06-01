import axios from "axios"
import { apiType } from "../types/apiTypes";


const domain = process.env.API_DOMAIN;

const registerUser = async ({Name, ffUid, userName, phone, email, password}: {
  phone: string,
  email: string,
  password: string,
  Name: string,
  ffUid: string,
  userName: string
}) => {
  try {
    const json :apiType= await axios({
      method: "POST",
      url: `${domain}/user/auth/register`,
      data: {
        "name": Name,
        "ffUid": parseInt(ffUid?ffUid:""),
        "userName": userName,
        "phone": parseInt(phone?phone:""),
        "email": email,
        "password": password
      }
    });
    return json.data;
  } catch (err: any) {
    console.log(err)
    return err.response.data;
  }
};

export { registerUser }