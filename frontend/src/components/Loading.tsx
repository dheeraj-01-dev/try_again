import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div style={style}>
      {/* <Image height={300} width={350} alt='' src="/icons/loading.png" /> */}
      <img width="70%"  alt='' src="/icons/loading.png" />
    </div>
  )
}
const style :React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100dvh",
  width: "100dvw",
  background: "#000",
  display: "grid",
  placeItems: "center",
  zIndex: 1000
}


export default Loading
