import React from 'react'
import styles from './styles/sideNav.module.css'
import CloseSidenavButton from './CloseSidenavButton'

const SideNav = () => {
  return (
    <>
      {/* <div className={styles.sideNavCover}></div> */}
        <CloseSidenavButton />
      <div className={`${styles.sideNavContainer} sideNavContainer`}>
        Hello Sioenav
      </div>
    </>
  )
}

export default SideNav
