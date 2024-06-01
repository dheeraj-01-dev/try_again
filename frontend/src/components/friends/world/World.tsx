import React from 'react'
import styles from './styles/world.module.css'

const World = () => {
  return (
    <div className={styles.world}>
      <form className={styles.form}> 
        <input className={styles.inputField} type="search" placeholder='&#128581;&#127995; find someOne' />
      </form>
    </div>
  )
}

export default World
