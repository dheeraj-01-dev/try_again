"use client"
import React, { useState } from 'react'
import styles from './styles/selectMember.module.css'
import Image from 'next/image'
import Link from 'next/link'

const SelectMember = ({members}: {members?: Array<any>}) => {
  
  const [memberSelected, setMemberSelected] = useState(new Set())

  const selectMember = (member: any)=>{
    const alreadyJoined = memberSelected.has(member);
    if(alreadyJoined){
      const anotherSet = new Set(memberSelected);
       anotherSet.delete(member)
       setMemberSelected(new Set(anotherSet))
    }else{
       setMemberSelected(pre => new Set(pre.add(member)))
    }
  }

  return (
    <div>
      <div className={styles.selectedMembers}>
        {Array.from(memberSelected).map((member :any) =>{
          return (
            <div onClick={()=>{selectMember(member)}} key={member.userName} className={styles.selectedMember}>
              <div className={styles.selectedMembersProfile}>
                <Image className={styles.img1} width={50} height={50} alt='' src={member.profile} />
                {memberSelected.has(member)&&<Image className={styles.img2} width={15} height={15} alt='' src="/icons/remove.png" />}
              </div>
                <div className={styles.selectedMembersUsername}>{member.userName}</div>
            </div>
          )
        })}
      </div>
      <div className={styles.allMembers}>
        {
          members?.map(member => (
              <div onClick={()=>{selectMember(member)}} key={member.userName} className={styles.friendBox}>
                <div className={styles.friendTemplate}>
                  <div className={styles.memberProfile}>
                    <Image className={styles.friendsProfile} height={50} width={50} alt='' src={member.profile} />
                    {memberSelected.has(member)&&<Image className={styles.removeMemberPng} width={15} height={15} alt='' src="/icons/check.png" />}
                  </div>
                  <div className={styles.names}>
                    <div className={styles.userName}>{member.userName}</div>
                    <div className={styles.uid}>{member.ffUid}</div>
                  </div>
                </div>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default SelectMember
