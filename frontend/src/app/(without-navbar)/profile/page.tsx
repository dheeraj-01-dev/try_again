"use server"
import React, { use } from 'react'
import styles from './page.module.css'
import Header from '@/components/profile/Header'
import UserProfile from '@/components/profile/UserProfile'
import MatchQuery from '@/components/profile/MatchQuery'
import Balance from '@/components/profile/Balance'
import PersnolInfo from '@/components/profile/PersnolInfo'
import LoginRequired from '@/components/auth/login/LoginRequired'
import { cookies } from 'next/headers'
import jwt, { JwtPayload } from 'jsonwebtoken'
import getPersonalInfo from '@/api/user/getPersonalInfo'
import { apiType } from '@/api/types/apiTypes'
import { emit } from 'process'
import PasswordAndSecurity from '@/components/profile/PasswordAndSecurity'

interface userInterface {
  name: string,
  _id: string,
  ffUid: number,
  iat: number,
  userName: string
};

const page = async () => {
  const cookieStore = cookies();
  const userId = cookieStore.get("i_state")?.value;

  const json :apiType= await getPersonalInfo(userId);
  
  if(!json.data){
    return(
      <div>
        Try Login again !
      </div>
    )
  };
  const { balance, name, ffUid, email, _id, userName, phone } = json.data;
  return (
    <LoginRequired>
      <div className={styles.profile}>
        <Header userName={userName}/>
        <UserProfile style={{marginTop: 20}} name={name} uid={ffUid} />
        <Balance balance={balance} style={{marginTop: 35}} />
        <MatchQuery style={{marginTop: 20}} />
        <PersnolInfo name={name} ffUid={ffUid} phone={phone} email={email} userName={userName} />
        <PasswordAndSecurity />
      </div>
    </LoginRequired>
  )
}

export default page
