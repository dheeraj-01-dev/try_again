import axios from "axios"


const domain = process.env.API_DOMAIN;

const fetchUser = async ({phone, email, password}: {phone?:number, email?:number, password?: string}) => {
  try {
    const data = await axios({
      method: "POST",
      url: `${domain}/user/auth/login`,
      data: {
        phone,
        email,
        password
      }
    });
    return data.data;
  } catch (err: any) {
    console.log(err)
    return err.response.data;
  }
};

export { fetchUser }