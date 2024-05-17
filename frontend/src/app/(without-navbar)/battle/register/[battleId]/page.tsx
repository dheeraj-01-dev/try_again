'use client'
import React from 'react'
import style from './page.module.css'

const page = ({params}: {params: {battleId: string}}) => {
  const openModal = ()=>{
    (document.querySelector('#modal') as HTMLDialogElement).showModal()
  }
  const closeModal = ()=>{
    (document.querySelector('#modal') as HTMLDialogElement).close()
  }
  
  return (
    <div>
      hello battle register {params.battleId}
      <button className={style['btn-modal']} onClick={openModal}>click me</button>
      <dialog id='modal' className={style['modal']}>
        <button className={style['btn-modal']} onClick={closeModal}>close</button>
        hi pay rs 100k to register {params.battleId}
      </dialog>
    </div>
  )
}

export default page
