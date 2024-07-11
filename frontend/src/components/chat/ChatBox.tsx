"use client"
import React from 'react'
import styles from './styles/chatBox.module.css'
import Image from 'next/image'
import EmojiPicker from 'emoji-picker-react'

const ChatBox = () => {
  const expandTextarea = (e: any)=>{
    console.log(e.target.scrollHeight)
        // e.target.style.cssText = 'height:auto; padding: 0';
        // e.target.style.cssText = 'height:' + e.target.scrollHeight + 'px';
        setTimeout(function(){
          e.target.style.cssText = 'height:auto; padding:0';
          // for box-sizing other than "content-box" use:
          // e.target.style.cssText = '-moz-box-sizing:content-box';
          if(e.target.scrollHeight<115){
            e.target.style.cssText = 'height:' +( e.target.scrollHeight ) + 'px';
          }else{
            e.target.style.cssText = 'height: 96px; padding: 0';
          }
        },0);


  }
  return (
    <div className={styles.chatBox}>
      <div className={styles.inputArea}>
        <div className={styles.inputBox}>
          <textarea onInput={expandTextarea} rows={1} id='textarea' autoCorrect='off' spellCheck={false} name="input" className={styles.input} placeholder='Type....'></textarea>
        </div>
        <div className={styles.sendBtn}>
          <Image height={20} width={20} alt='' src="/icons/send.png" />
        </div>
      </div>
    </div>
  )
}

export default ChatBox
