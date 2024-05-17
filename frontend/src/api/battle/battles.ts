import axios from "axios";

const domain = process.env.API_DOMAIN;

const fetchAllBattles = async () => {  
  try {
    const json = await axios({
      method: "GET",
      url: `${domain}/battle/get/all`
    });
    return json.data;
  } catch (err:any) {
    return err.response.data
  }
};

const fetchSingleBattle = async (_id: string)=>{
  try {
    const json = await axios({
      method: "GET",
      url: `${domain}/battle/get/${_id}`
    });
    return json.data;
  } catch (err: any) {
    return err.response.data
  }
}

export { fetchAllBattles, fetchSingleBattle }