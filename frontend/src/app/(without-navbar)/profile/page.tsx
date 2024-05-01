import React from 'react'
import styles from './page.module.css'
import HistroyBack from '@/components/clients/HistroyBack'

const page = () => {

  return (
    <div className={styles.page}>
      <HistroyBack>
        <button>back</button>
      </HistroyBack>
    </div>
  )
}

export default page
