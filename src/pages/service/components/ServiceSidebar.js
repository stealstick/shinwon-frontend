import React from 'react'
import styles from './css/ServiceSidebar.module.scss'
import { Link } from 'react-router-dom'

const ServiceSidebar = ({selectedNum}) => {
    return(
        <>
        <div className={styles.sidebar}>
            <div className={styles.side_box_shadow}>
            <div className={styles.sidebar_title}>
                <img src={require("./css/foundation-sidebar.png")} alt="" className={styles.sidebar_title_img}/>
                <div className={styles.sidebar_title_text}>고객서비스</div>
            </div>
            <Link to="/service/1/?page=1" className={selectedNum===1 ? styles.sidebar_selected : styles.sidebar_content}>공문</Link>
            <Link to="/service/2" className={selectedNum===2 ? styles.sidebar_selected : styles.sidebar_content}>의뢰지/동의서</Link>
            <Link to="/service/3" className={selectedNum===3 ? styles.sidebar_selected : styles.sidebar_content}>감염지침</Link>
            <Link to="/service/4" className={selectedNum===4 ? styles.sidebar_selected : styles.sidebar_content}>FAQ</Link>
            <Link to="/service/6" className={selectedNum===6 ? styles.sidebar_selected : styles.sidebar_content}>채용공고</Link>
        </div>
        </div>
        </>
    )
}

export default ServiceSidebar