import React from 'react'
import styles from './styles/balance.module.css'

const Balance = ({style, balance}: {style: React.CSSProperties, balance: number}) => {
  return (
    <div style={style} className={styles.balanceBox}>
      <div className={styles.balance}> ₹ &nbsp;{balance}<span>.00</span> </div>
      <div>
        <button className={styles.addBtn}> + Add </button>
      </div>
    </div>
  )
}

export default Balance
