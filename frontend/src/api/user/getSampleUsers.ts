import axios from "axios";
const domain = process.env.API_DOMAIN;

const getSampleUsers = async () => {
  try {
    const json = await axios({
      method: "GET",
      url: `${domain}/user/get/sample`
    });
    return json.data
  } catch (err:any) {
    return err.response.data
  }
};

export default getSampleUsers;