"use client"
import React from 'react'
import styles from './styles/eventDashboard.module.css'

const EventDashboard = () => {


  return (
    <div className={styles.eventDashboardContainer}>
      <div className={styles.posterBoard} id='eventBoard'>
        <div className={styles.imageBox}><img src="/posters/poster1.png" alt="event" /></div>
        <div className={styles.imageBox}><img src="/posters/poster2.png" alt="event" /></div>
        <div className={styles.imageBox}><img src="/posters/poster3.png" alt="event" /></div>
        <div className={styles.imageBox}><img src="/posters/poster4.png" alt="event" /></div>
        {/* <img src="/posters/poster1.png" alt="event" />
        <img src="/posters/poster2.png" alt="event" />
        <img src="/posters/poster3.png" alt="event" />
        <img src="/posters/poster4.png" alt="event" /> */}
      </div>
    </div>
  )
}

export default EventDashboard
