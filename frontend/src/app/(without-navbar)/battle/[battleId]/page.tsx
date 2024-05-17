import BattleDetails from "@/components/home/Battle/BattleDetails";
import React from "react";
import style from './styles/page.module.css'
import { fetchSingleBattle } from "@/api/battle/battles";
import { apiType } from "@/api/types/apiTypes";
import toast from "@/scripts/toast";

const page = async ({params}: {params: {battleId: string}}) => {
  
  const _id = params.battleId;
  const json :apiType = await fetchSingleBattle(_id);

  if(!json.success){
    toast(json.error);
    return (
      <div>

      </div>
    )
  }  
  return (
    <div className={style['battle-details']}>
      <BattleDetails battle={json.data.battle} />
    </div>
  );
};

export default page;
