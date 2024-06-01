"use client"
import React from 'react'
import styles from './styles/register.module.css'

const Register = ({params}: {params: {battleId: string}}) => {
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
      {/* hello battle register {params.battleId} */}
      <button className={styles.btnModal} onClick={openModal}>Open Modal</button>
      <div id='registerBatteModalBlackFilm' onClick={closeModal} className={styles.blackFilm}></div>
      <dialog id='modal' className={styles.modal}>
        <div>
          <button className={styles.btnModal} onClick={closeModal}>close</button>  
        </div>
      </dialog>
    </div>
  )
}

export default Register