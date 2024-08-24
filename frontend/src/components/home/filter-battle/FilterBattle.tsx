"use client";
import React from "react";
import styles from "./styles/filter.module.css";
import Image from "next/image";


const FilterBattle = () => {
  const handleClick = async ()=>{
  }
  const handleClick2 = ()=>{
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.filterItemBox}>
        <div className={`${styles.filterItems} ${styles.active}`}>
          {/* <Image height={11} width={11} alt="u" src="/icons/swords.png" />{" "} */}
          &nbsp; All
        </div>
        <div onClick={handleClick} className={styles.filterItems}>
          <Image height={17} width={17} alt="u" src="/icons/game.png" /> &nbsp;
          Battle Royale
        </div>
        <div onClick={handleClick2} className={styles.filterItems}>
          <Image height={17} width={17} alt="u" src="/icons/multiplayers.png" />{" "}
          &nbsp; Clash Squad
        </div>
        {/* <div className={styles.filterItems}>solo</div>
        <div className={styles.filterItems}>duo</div>
        <div className={styles.filterItems}>squad</div> */}
      </div>
      <div className={`${styles.filterBtn}`}>
        <Image height={19} width={21} alt="" src="/icons/apps.png" />
      </div>
    </div>
  );
};

export default FilterBattle;
