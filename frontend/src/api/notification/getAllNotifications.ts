import axios from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
const domain = process.env.API_DOMAIN;

const fetchAllNotification = async ({auth}: {auth: string | RequestCookie | undefined}) => {
  if(auth===undefined){
    return {
      success: false,
      error: "not authorized !"
    }
  }
  try {
    const json = await axios({
      method: "GET",
      url: `${domain}/notification/all`,
      headers: {
        auth: `${auth}`
      }
    });
    return json.data;
  } catch (err :any) {
    return err.response.data
  }
};

export { fetchAllNotification }