import React from 'react'
import styles from './css/FoundationSidebar.module.scss'

const FoundationSidebar = ({setNumber, selectedNum}) => {
    return(
        <>
        <div className={styles.sidebar}>
            <div className={styles.side_box_shadow}>
            <div className={styles.sidebar_title}>
                <img src="imgs/img/foundation-sidebar.png" alt="" className={styles.sidebar_title_img}/>
                <div className={styles.sidebar_title_text}>재단안내</div>
            </div>
            <div onClick={() => setNumber(1)} className={selectedNum===1 ? styles.sidebar_selected : styles.sidebar_content}>인사말</div>
            <div onClick={() => setNumber(2)} className={selectedNum===2 ? styles.sidebar_selected : styles.sidebar_content}>사명과가치</div>
            <div onClick={() => setNumber(3)} className={selectedNum===3 ? styles.sidebar_selected : styles.sidebar_content}>조직도</div>
            <div onClick={() => setNumber(4)} className={selectedNum===4 ? styles.sidebar_selected : styles.sidebar_content}>재단연혁</div>
            <div onClick={() => setNumber(5)} className={selectedNum===5 ? styles.sidebar_selected : styles.sidebar_content}>전국 네트워크</div>
            <div onClick={() => setNumber(6)} className={selectedNum===6 ? styles.sidebar_selected : styles.sidebar_content}>전문의</div>
            </div>
        </div>
        </>
    )
}

export default FoundationSidebar