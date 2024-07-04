import React from 'react'
import styles from './page.module.css'
import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'
import { fetchSingleBattle } from '@/api/battle/battles'
import { apiType } from '@/api/types/apiTypes'
import ConfirmationBattle from '@/components/home/Battle/register/ConfirmationBattle'

const page = async ({params}: {params: {battleId: string}}) => {
  const json :apiType= await fetchSingleBattle(params.battleId);

  const { data: {battle: { battleId, settings: { map, gameMode, teamMode, ammo }}} } = json;

  return (
    <div className={styles.register}>
      <NavigateBack>
        <Image height={20} width={20} alt='back' src="/icons/arrowLeftWhite.png" />
      </NavigateBack>
      {/* <div className={styles.section1}>
        <div className={styles.mapContainer}>
          <Image className={styles.map} height={70} width={130} alt={map} src={"/maps/"+map+".png"} />
        </div>
        <div className={styles.section1RightSide}>
          <div className={styles.gameMode}>
            {gameMode} &nbsp;[{map}]
          </div>
          <div className={styles.teamMode}>
            {teamMode} {ammo} #{233}
          </div>
          <div className={styles.expiry}>7 June, 2024 | 17:00</div>
        </div>
      </div> */}
      <ConfirmationBattle battleId={params.battleId} />
    </div>
  )
}

export default page
