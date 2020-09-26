import React from 'react'
import styles from './css/CenterSidebar.module.scss'

const CenterSidebar = ({setNumber, selectedNum}) => {
    return(
        <>
        <div className={styles.sidebar}>
            <div className={styles.side_box_shadow}>
            <div className={styles.sidebar_title}>
                <img src="imgs/img/center-sidebar-icon.svg" alt="" className={styles.sidebar_title_img}/>
                <div className={styles.sidebar_title_text}>검사센터</div>
            </div>
            <div onClick={() => setNumber(1)} className={selectedNum===1 ? styles.sidebar_selected : styles.sidebar_content}>부서별안내</div>
            <div onClick={() => setNumber(2)} className={selectedNum===2 ? styles.sidebar_selected : styles.sidebar_content}>병리과안내</div>
            <div onClick={() => setNumber(3)} className={selectedNum===3 ? styles.sidebar_selected : styles.sidebar_content}>정도안내</div>
            </div>
        </div>
        </>
    )
}

export default CenterSidebar