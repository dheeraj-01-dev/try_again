import React from 'react'
import styles from './styles/header.module.css'
import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.headerBox}>
      <div className={styles.templateBox}>
        <NavigateBack home styles={{height: 17, width: 17}}>
          <Image width={17} height={17} alt='back' src="/icons/arrowLeftWhite.png" />
        </NavigateBack>
        <div className={styles.teamsTemplate}> Teams </div>
      </div>
      <div>
        <Link className={styles.teamCreationLink} href="/team/create">Create team</Link>
      </div>
    </div>
  )
}

export default Header
