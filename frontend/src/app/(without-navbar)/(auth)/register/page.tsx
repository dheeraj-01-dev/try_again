import React from 'react'
import styles from './page.module.css'
import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'
import Register from '@/components/auth/register/Register'

const page = () => {
  return (
    <div className={styles.page}>
      <NavigateBack home styles={{
        padding: "10px"
      }}>
        <Image height={20} width={20} src="/icons/arrowLeftWhite.png" alt="Navigate-back" />
      </NavigateBack>
      <Register />
    </div>
  )
}

export default page
