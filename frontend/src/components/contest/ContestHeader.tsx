"use client"
import React, { useState } from 'react'
import styles from './styles/contestHeader.module.css'

const ContestHeader = ({upcomingBattle, completedBattle}: {upcomingBattle?: React.ReactElement, completedBattle?: React.ReactElement}) => {
  const [upcomingPage, setUpcomingPage] = useState<boolean>(true);

  const page_upcoming = ()=>{
    setUpcomingPage(true)
  };

  const page_completed = ()=>{
    setUpcomingPage(false)
  };

  return (
    <div className={styles.contestContainer} id='pageContainer'>
      <div className={styles.pageHeadlines}>
        <div className={styles.headlineText} onClick={page_upcoming}>UPCOMING</div>
        <div className={styles.headlineText} onClick={page_completed}>COMPLETED</div>
      </div>
      <div className={`${styles.highLighter} ${!upcomingPage&&styles.highLightCompleted} contestHighLighter`}></div>
      <div className={styles.contestPageContainer}>
        <div className={styles.contestPages} style={upcomingPage?{display: "block"}:{display: "none"}}>1
          {upcomingBattle}
        </div>
        <div className={styles.contestPages} style={upcomingPage?{display: "none"}:{display: "block"}}>2
          {completedBattle}
        </div>
      </div>
    </div>
  )
}

export default ContestHeader
