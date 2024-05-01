"use client"
import React, { CSSProperties } from 'react'
import { useRouter } from 'next/navigation'

const HistroyBack = ({children, styles}: { children:React.ReactElement, styles?: CSSProperties }) => {
  const router = useRouter();
  const goBack = ()=>{
    router.back();
  }
  return (
    <div style={styles} onClick={goBack}>
      {children}
    </div>
  )
}

export default HistroyBack
