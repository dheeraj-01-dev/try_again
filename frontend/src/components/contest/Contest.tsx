"use client"
import React from 'react'
import styles from './styles/contest.module.css'

const Contest = () => {
  const fun = ()=>{
    const contestHighLighter = document.getElementsByClassName("contestHighLighter")[0];
    // contestHighLighter.classList.toggle("contestHighLighterMoveRight");
    
  }
  
  return (
    <div className={styles.contestContainer} id='pageContainer'>
      <div className={styles.pageHeadlines}>
        <div className={styles.headlineText}>UPCOMING</div>
        <div className={styles.headlineText}>COMPLETED</div>
      </div>
      <div className={`${styles.highLighter} contestHighLighter`}></div>
      <div className={styles.contestPageContainer}onScroll={fun}>
        <div className={styles.contestPages}>1</div>
        <div className={styles.contestPages}>2</div>
      </div>
    </div>
  )
}

export default Contest
