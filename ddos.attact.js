const { default: axios } = require("axios")
const attack = async()=>{
  const data = await axios({
    method: "GET",
    url: "http://localhost:3000"
  });
};

const ddos = async()=>{
  for (let i = 0; i < 1000; i++) {
    attack();
    console.log(i)
    
  }
}

ddos()