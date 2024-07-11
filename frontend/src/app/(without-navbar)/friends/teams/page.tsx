import React from 'react'
import styles from './page.module.css'
import Header from '@/components/friends/teams/Header'
import Teams from '@/components/friends/teams/Teams'

const page = () => {
  return (
    <div>
      <Header />
      <Teams />
    </div>
  )
}

export default page
