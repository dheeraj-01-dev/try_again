import React from "react";
import styles from "./styles/upcoming.module.css";
import BattleCard from "../home/Battle/BattleCard";

const Upcoming = ({ upcomingBattle }: { upcomingBattle?: any[] }) => {
  console.log(upcomingBattle)
  return (
    <div>
      {upcomingBattle ? (
        <div style={{display: "grid", gridGap: "10px"}}>
          {upcomingBattle?.map((obj:any)=>{return <BattleCard key={obj._id} battle={obj} />})}
        </div>
      ) : (
        <div className={styles.template}>Play and Enjoy !</div>
      )}
    </div>
  );
};

export default Upcoming;
