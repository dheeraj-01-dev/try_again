"use client"
import Image from 'next/image'
import React from 'react'
import style from './style/BattlePlayerDetails.module.css'
const BattlePlayerDetails = () => {

  const togglePlayer = (e: any)=>{
    const img = document.getElementById("battle-details-player-toggle-img");
    const playerDiv = document.getElementById("battle-details-player-toggle-div");
      img?.classList.toggle("battle-details-player-arrow-rotate");
      playerDiv?.classList.toggle("battle-details-player-show");
  }

  return (
    <div  id="battle-details-player-toggle-div" className={style['players']}>
      <div onClick={togglePlayer} className={style['players-banner']} style={{fontSize: "110%"}}>
        <span>Teams... <span style={{fontSize: "80%", color: "#009BFF"}}>(4/12)</span></span>
        <Image id="battle-details-player-toggle-img" className={style['players-arrow']} width={20} height={17} src='/icons/arrowDown.png' alt='Down' />
      </div>
      <div className={style['teams']} id='battle-details-team-section'>
        <div className={style['team']}>team1 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team2 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team3 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team4 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team5 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team6 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team7 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team8 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team9 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
        <div className={style['team']}>team10</div>
        <div className={style['team']}>team11</div>
        <div className={style['team']}>team12</div>
      </div>
    </div>
  )
}

export default BattlePlayerDetails
