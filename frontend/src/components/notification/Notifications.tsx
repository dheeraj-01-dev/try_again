"use server"
import React from 'react'
import styles from './styles/notifications.module.css'
import { fetchAllNotification } from '@/api/notification/getAllNotifications'
import { cookies } from 'next/headers'
import { apiType } from '@/api/types/apiTypes'
import Link from 'next/link'

const Notifications = async () => {
  const cookieStore = cookies();
  const auth = cookieStore.get("i_state")?.value;
  
  const json :apiType= await fetchAllNotification({auth});
  if(!json.success){
    console.log(json.error)
  };
  const notifications : Array<any>= json.data;
  return (
    <div className={styles.notificationContainer}>
      {
        notifications&&notifications.map((obj)=>{
          return (
            <div key={obj._id}>
              New friend request from &nbsp;
              <Link style={{textDecoration: "underline", color: "skyblue"}} href={""}>{obj.from[0].userName}</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Notifications
