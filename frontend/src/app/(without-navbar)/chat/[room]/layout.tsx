import Header from '@/components/chat/Header'
import React from 'react'
import styles from './layout.module.css'

const layout = ({children}: {children: React.ReactElement}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <div className={styles.childrens}>
        {children}
      </div>
    </div>
  )
}

export default layout
