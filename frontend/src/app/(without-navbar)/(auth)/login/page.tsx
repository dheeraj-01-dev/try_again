import React from 'react'
import styles from './page.module.css'
import Login from '@/components/auth/login/Login'
import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.page}>
      <NavigateBack home styles={{
        padding: "10px"
      }}>
        <Image height={20} width={20} src="/icons/arrowLeftWhite.png" alt="Navigate-back" />
      </NavigateBack>
      <Login/>
    </div>
  )
}

export default page
