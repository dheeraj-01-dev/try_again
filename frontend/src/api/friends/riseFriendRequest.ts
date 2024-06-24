import axios from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
const domain = process.env.API_DOMAIN;

const riseFriendRequest = async ({auth, to}: {auth: string | RequestCookie | undefined, to: string}) => {
  if(auth===undefined){
    return {
      success: false,
      error: "not authorized !"
    }
  }
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/notification/friend-request/create`,
      headers: {
        from: `${auth}`
      },
      data: { to }
    });
    return json.data;
  } catch (err :any) {
    return err.response.data
  }
};

export { riseFriendRequest }