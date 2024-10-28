import AddMoneyHeader from '@/components/wallet/add-money/AddMoneyHeader'
import BalanceSheet from '@/components/wallet/BalanceSheet'
import Numpad from '@/components/wallet/Numpad'
import React from 'react'

const page = () => {
  return (
    <div>
      <AddMoneyHeader template='Add money' />
      <BalanceSheet template='balance' />
      <Numpad buttonTemplate='Add Money' />
    </div>
  )
}

export default page
