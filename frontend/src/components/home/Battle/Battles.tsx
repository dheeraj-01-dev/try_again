import React from "react";
import BattleCard from "./BattleCard";
import style from "./style/Battles.module.css"
import { fetchAllBattles } from "@/api/battle/battles";

const Battles = async () => {
  const json = await fetchAllBattles();
  const battles = json.battle;
  
  return (
    <div className={style.battles}>
      {battles?.map((obj:any)=>{return <BattleCard key={obj._id} battle={obj} />})}
      {/* {!json[0].test&&json.map((obj)=>{return <BattleCard key={obj._id.$oid} battle={obj} />})} */}
      {!battles&&<div className={style.battleTemplate} >
        Battle Cooming Soon !
      </div>}
    </div>
  );
};

export default Battles;