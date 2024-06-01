import NavigateBack from '@/hooks/Navigate.back'
import React from 'react'
import styles from './styles/searchSection.module.css'
import Image from 'next/image'
import Link from 'next/link'

const SearchSection = () => {
  const navigatorStyle :React.CSSProperties = {
    maxHeight: "20px"
  };

  return (
    <div>
      <div className={styles.titleBox}>
        <NavigateBack home styles={navigatorStyle}>
            <Image className={styles.backImg} width={20} height={20} alt='' src="/icons/arrowLeftWhite.png" />
        </NavigateBack>
        <span className={styles.textMessage}>Message</span>
      </div>
      <div className={styles.searchBox}>
        <input type="search" placeholder='search' />
      </div>
    </div>
  )
}

export default SearchSection
