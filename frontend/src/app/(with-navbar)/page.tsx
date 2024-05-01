import React from 'react'

import styles from './page.module.css'
import Battles from '@/components/home/battles/Battles'
import FilterBattle from '@/components/home/filter-battle/FilterBattle'
import EventDashboard from '@/components/home/event-dashboard/EventDashboard'

const page = () => {
  return (
    <div className={styles.home}>
      <EventDashboard />
      <FilterBattle />
      <Battles/>
      <Battles/>
      <Battles/>
      <Battles/>
      <Battles/>
      <Battles/>
      <Battles/>
      <Battles/>
      <Battles/>
      <Battles/>
      <Battles/>
      <Battles/>
      <Battles/>
    </div>
  )
}

export default page
