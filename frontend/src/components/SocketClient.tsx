"use client"
import { joinToSocket } from '@/hooks/joinToSocketio'
import React from 'react'

const SocketClient = () => {
  joinToSocket();
  return (
    <div>
      
    </div>
  )
}

export default SocketClient
