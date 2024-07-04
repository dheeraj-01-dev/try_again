import React from 'react'
import styles from './styles/passwordAndSecurity.module.css'
import Image from 'next/image'

const PasswordAndSecurity = () => {
  return (<>
    <div className={styles.passwordAndSecurityLable}>Password and Security
      {/* <Image height={20} width={20} alt=' edit' src="/icons/edit.png" unoptimized /> */}
    </div>
    <div className={styles.passwordAndSecurityContainer}>
    </div>
  </>)
}

export default PasswordAndSecurity
