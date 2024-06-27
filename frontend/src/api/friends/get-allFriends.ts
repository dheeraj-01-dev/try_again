import axios from "axios";
import { string } from "zod";
import { apiType } from "../types/apiTypes";
const domain = process.env.API_DOMAIN;

const getallFriends = async ({auth}: {auth: string | undefined}) => {
  if(typeof auth !== "string"){
    return {
      success: false,
      error: "not authorized"
    }
  }
  try {
    const json :apiType= await axios({
      method: "GET",
      url: `${domain}/user/get-friends/all`,
      headers: { auth },
    });
    return json.data
  } catch (err :any) {
    return err.response.data
  }
};

export { getallFriends }