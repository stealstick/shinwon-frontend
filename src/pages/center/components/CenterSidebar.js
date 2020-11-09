import React from 'react'
import styles from './css/CenterSidebar.module.scss'
import { Link } from 'react-router-dom'

const CenterSidebar = ({ selectedNum }) => {
    return(
        <>
        <div className={styles.sidebar}>
            <div className={styles.side_box_shadow}>
            <div className={styles.sidebar_title}>
                <img src="../imgs/img/center-sidebar-icon.svg" alt="" className={styles.sidebar_title_img}/>
                <div className={styles.sidebar_title_text}>검사실안내</div>
            </div>
            <Link to="/center/1" className={selectedNum===1 ? styles.sidebar_selected : styles.sidebar_content}>진단검사의학부</Link>
            <Link to="/center/2" className={selectedNum===2 ? styles.sidebar_selected : styles.sidebar_content}>병리학부</Link>
            <Link to="/center/3" className={selectedNum===3 ? styles.sidebar_selected : styles.sidebar_content}>정도관리</Link>
            </div>
        </div>
        </>
    )
}

export default CenterSidebar