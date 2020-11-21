import React from 'react'
import styles from './css/FoundationSidebar.module.scss'
import { Link } from 'react-router-dom'

const FoundationSidebar = ({ selectedNum}) => {
    return(
        <>
        <div className={styles.sidebar}>
            <div className={styles.side_box_shadow}>
            <div className={styles.sidebar_title}>
                <img src="../imgs/img/foundation-sidebar.png" alt="" className={styles.sidebar_title_img}/>
                <div className={styles.sidebar_title_text}>재단안내</div>
            </div>
            <Link to="/foundation/1" className={selectedNum===1 ? styles.sidebar_selected : styles.sidebar_content}>인사말</Link>
            <Link to="/foundation/2" className={selectedNum===2 ? styles.sidebar_selected : styles.sidebar_content}>사명과가치</Link>
            <Link to="/foundation/3" className={selectedNum===3 ? styles.sidebar_selected : styles.sidebar_content}>재단연혁</Link>
            <Link to="/foundation/4" className={selectedNum===4 ? styles.sidebar_selected : styles.sidebar_content}>조직도</Link>
            <Link to="/foundation/5" className={selectedNum===5 ? styles.sidebar_selected : styles.sidebar_content}>전국 네트워크</Link>
            <Link to="/foundation/6" className={selectedNum===6 ? styles.sidebar_selected : styles.sidebar_content}>전문의</Link>
            <Link to="/foundation/7" className={selectedNum===7 ? styles.sidebar_selected : styles.sidebar_content}>오시는길</Link>
            </div>
        </div>
        </>
    )
}

export default FoundationSidebar