import React from 'react'
import styles from './css/ServiceSidebar.module.scss'

const ServiceSidebar = ({setNumber, selectedNum}) => {
    return(
        <div className={styles.sidebar}>
            <div className={styles.sidebar_title}>
                <img src="imgs/img/foundation-sidebar.png" alt="" className={styles.sidebar_title_img}/>
                <div className={styles.sidebar_title_text}>고객서비스</div>
            </div>
            <div onClick={() => setNumber(1)} className={selectedNum===1 ? styles.sidebar_selected : styles.sidebar_content}>공문</div>
            <div onClick={() => setNumber(2)} className={selectedNum===2 ? styles.sidebar_selected : styles.sidebar_content}>자료실</div>
            <div onClick={() => setNumber(3)} className={selectedNum===3 ? styles.sidebar_selected : styles.sidebar_content}>감염지침</div>
            <div onClick={() => setNumber(4)} className={selectedNum===4 ? styles.sidebar_selected : styles.sidebar_content}>FAQ</div>
            <div onClick={() => setNumber(5)} className={selectedNum===5 ? styles.sidebar_selected : styles.sidebar_content}>오시는길</div>
            <div onClick={() => setNumber(6)} className={selectedNum===6 ? styles.sidebar_selected : styles.sidebar_content}>채용공고</div>
        </div>
    )
}

export default ServiceSidebar