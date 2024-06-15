import React from 'react'
import styles from './styles/balance.module.css'

const Balance = ({style}: {style: React.CSSProperties}) => {
  return (
    <div style={style} className={styles.balanceBox}>
      <div className={styles.balance}> ₹ &nbsp;12343<span>.01</span> </div>
      <div>
        <button className={styles.addBtn}> + Add </button>
      </div>
    </div>
  )
}

export default Balance
