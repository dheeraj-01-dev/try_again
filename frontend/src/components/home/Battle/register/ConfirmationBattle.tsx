import React from 'react'
import styles from './styles/confirmationBattle.module.css'
import Image from 'next/image'
import SelectTeam from './SelectTeam'

const ConfirmationBattle = ({battleId, style} :{battleId: string, style?: React.CSSProperties}) => {
  return (
    <div style={style} className={styles.confirmationContainer}>
      <div className={styles.confirmationBox}>
        <img alt='map' src="/maps/KALAHARI.png" className={styles.map} />
        <div className={styles.battleMode}>Battle Royal&nbsp; [Squad] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  #127</div>

        <div className={styles.teamBox}>
          <div className={styles.teamSelector}>Team....
            <SelectTeam params={{battleId: battleId}} />
          </div>
        </div>

        <div className={styles.balanceControllerBox}>
          <div className={styles.balanceInfo}><span>Total</span> + &nbsp; 1500-/</div>
          <div className={styles.balanceInfo}><span>Entry Fee</span>- &nbsp; 170-/</div>
          <div className={styles.balanceInfo}><span>Balance</span> &nbsp; &nbsp; 1330-/</div>
        </div>
        <button disabled className={styles.submitBtn}>Join now</button>
      </div>
    </div>
  )
}

export default ConfirmationBattle
