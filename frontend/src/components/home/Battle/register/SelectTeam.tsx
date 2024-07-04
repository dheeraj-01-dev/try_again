"use client"
import React from 'react'
import styles from './styles/selectTeam.module.css'
import Image from 'next/image'

const SelectTeam = ({params}: {params: {battleId: string}}) => {
  const openModal = ()=>{
    (document.querySelector('#modal') as HTMLDialogElement).showModal();
    const balckFilm = document.getElementById("registerBatteModalBlackFilm");
    if(!balckFilm) return;
    balckFilm.style.display = "block"
  }
  const closeModal = ()=>{
    (document.querySelector('#modal') as HTMLDialogElement).close();
    const balckFilm = document.getElementById("registerBatteModalBlackFilm");
    if(!balckFilm){
      return;
    };
    balckFilm.style.display = "none"
  }
  
  return (
    <div className={styles.modalContainer}>
      <div className={styles.openModalBtn} onClick={openModal}>
        <Image height={20} width={20} unoptimized alt=' ' src="/icons/plus.png" />
      </div>
      <div id='registerBatteModalBlackFilm' onClick={closeModal} className={styles.blackFilm}></div>
      <dialog id='modal' className={styles.modal}>
        <div>
          <button className={styles.btnModal} onClick={closeModal}>close</button>  
        </div>
      </dialog>
    </div>
  )
}

export default SelectTeam