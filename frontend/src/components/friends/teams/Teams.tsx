import React from 'react'
import styles from './styles/teams.module.css'
import { apiType } from '@/api/types/apiTypes'
import Image from 'next/image'
import Options from './Options'

const Teams = ({teams} :{teams :apiType}) => {
  return (
    <div className={styles.teams}>
      {
        teams.data.length<1&&
        <div className={styles.createTeamTemplate}>
          Create Team !!
        </div>
      }
      {
        teams.data.map((team :any) => (
          <div key={team.admin}>
            <div className={styles.teamAvatarContainer}>
              <Image className={styles.teamAvatar} height={100} width={100} alt='' src="/men.png" />
              <div>{team.teamName}</div>
            </div>
            <Options />
            

            <div className={styles.teamMembersContainer}>
              <div className={styles.teamMembers}>
                <span>
                  <Image className={styles.avatar} height={40} width={40} alt='' src={team.admin[0].profile} />
                  <div className={styles.memberInfo}>
                    {team.admin[0].userName}
                    <div className={styles.memberFFUid}>{team.admin[0].ffUid}</div>
                  </div>
                </span>
                <div className={styles.adminTemplate}>team leader</div>
              </div>
              <div>
                {
                  team.members.map( (member :any) => (
                    <div key={member.userName} className={styles.teamMembers}>
                      <span>
                        <Image className={styles.avatar} height={40} width={40} alt='' src={member.profile} />
                        <div className={styles.memberInfo}>
                          {member.userName}
                          <div className={styles.memberFFUid}>{member.ffUid}</div>
                        </div>
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Teams
