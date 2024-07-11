"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import style from './style/BattlePlayerDetails.module.css'


const BattlePlayerDetails = ({teams, slots}: {teams: Array<any>, slots: number}) => {

  const [toggle, setToggle] = useState(false)

  const togglePlayer = (e: any)=>{
    const img = document.getElementById("battle-details-player-toggle-img");
    const playerDiv = document.getElementById("battle-details-player-toggle-div");

    if(!(playerDiv && img)){return};
    if(toggle){
      setToggle(false)
      img.style.transform = "rotate(0deg)"
      playerDiv.style.height = "50px"
    }else{
      setToggle(true)
      img.style.transform = "rotate(180deg)"
      playerDiv.style.height = `${teams.length*50+120}px`
    }
  }

  return (
    <div  id="battle-details-player-toggle-div" className={style.players}>
      <div onClick={togglePlayer} className={style['players-banner']} style={{fontSize: "110%"}}>
        <span>Teams... &nbsp; <span style={{fontSize: "80%", color: "#009BFF", fontWeight: 700}}>({`${teams.length}/${slots}`})</span></span>
        <Image id="battle-details-player-toggle-img" className={style['players-arrow']} width={20} height={17} src='/icons/arrowDown.png' alt='Down' />
      </div>
      <div className={style.teams} id='battle-details-team-section'>
        {
          teams.map( team => (
            <div key={team.id}>
              <div className={style.team}>team1 <Image width={12} height={12} src='/icons/singleArrowDown.png' alt='arrow' /></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BattlePlayerDetails
