import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'
import React from 'react'
import styles from './styles/searchBox.module.css'

const SearchBox = () => {
  return (
    <div>
      <div className={styles.header}>
        <NavigateBack styles={{height: "18px"}}>
          <Image width={18} height={18} alt='' src="/icons/arrowLeftWhite.png" />
        </NavigateBack>
        <span className={styles.newMessageTemplate}>New Message</span>
      </div>
      <div className={styles.searchBox}>
        <input className={styles.searchInput} type="search" placeholder='search'/>
      </div>
    </div>
  )
}

export default SearchBox
