
import React from 'react'

import styles from './page.module.css'
import FilterBattle from '@/components/home/filter-battle/FilterBattle'
import EventDashboard from '@/components/home/event-dashboard/EventDashboard'
import Battles from '@/components/home/Battle/Battles'
import Loading from '@/components/Loading'

const page = async () => {
  return (
    <div className={styles.home}> 
      <EventDashboard />
      <FilterBattle />
      <Battles/>
    </div>
  )
}

export default page
