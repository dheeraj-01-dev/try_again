"use client"
import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './add.module.css'
import findUser from '@/api/user/findUser'
import { apiType } from '@/api/types/apiTypes'
import toast from '@/scripts/toast'

const Add = () => {
  const [user, setUser] = useState("");
  const updateUser = (e:any)=>{
    setUser(e.target.value)
  };
  const submitForm = async (e:any)=>{
    e.preventDefault();
    e.target.children[0].blur()
    if(user.length===0){return}
    const json :apiType = await findUser(user.toLowerCase());
    if(json.success){
      return toast(`${json.data.user.length} user found`)
    }
    toast(json.error)
  };

  return (
    <div>
      <div className={styles.header}>
        <NavigateBack styles={{height: "17px"}}>
          <Image height={17} width={17} alt='' src="/icons/arrowLeftWhite.png" />
        </NavigateBack> 
        <span className={styles.addTemplate}>Add</span>
      </div>
      <div className={styles.inputContainer}>
        <form onSubmit={submitForm}>
          <input autoCapitalize="off" onChange={updateUser} value={user} type="search" className={styles.searchInput} placeholder='uid or username' />
        </form>
      </div>
    </div>
  )
}

export default Add
