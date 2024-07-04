import React from 'react'
import styles from './styles/persnolInfo.module.css'
import Image from 'next/image'

const PersnolInfo = ({
  name, ffUid, phone, email, userName
} :{
  name: string,
  ffUid: number,
  phone: number,
  email: string,
  userName: string
}) => {
  return (<>
      <div className={styles.infoLable}>Persnol information
        <Image height={20} width={20} alt=' edit' src="/icons/edit.png" unoptimized />
      </div>
    <div className={styles.infoContainer}>
      <div className={styles.info}><span>Name</span>{name}</div>
      <div className={styles.info}><span>FF-Uid</span>{ffUid}</div>
      <div className={styles.info}><span>Phone</span>{phone}</div>
      <div className={styles.info}><span>Username</span>{userName}</div>
      <div className={styles.info}><span>Email</span>{email}</div>
    </div>
  </>)
}

export default PersnolInfo
