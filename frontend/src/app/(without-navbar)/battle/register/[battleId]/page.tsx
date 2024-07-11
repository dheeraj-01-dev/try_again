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
      <div>
        <NavigateBack styles={{float: "right", marginRight: "20px", marginBottom: "10px"}}>
          <span className={styles.cross}>x</span>
          {/* <Image className={styles.cross} height={20} width={20} alt='back' src="/icons/plus.png" /> */}
        </NavigateBack>
        <ConfirmationBattle battleId={params.battleId} />
      </div>
    </div>
  )
}

export default page
