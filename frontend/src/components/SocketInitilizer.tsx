"use client"
import { socket } from '@/socket'
import React from 'react'

const ScoketInitializer = ({auth} : {auth?: string}) => {

  socket.emit("join", {auth})
  return (
    <div>
      
    </div>
  )
}

export default ScoketInitializer
