import Footer from '@/components/friends/Footer'
import React from 'react'

const layout = ({children}: {children: React.ReactElement}) => {
  return (
    <div>
      {children}
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default layout
