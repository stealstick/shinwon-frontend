import React from 'react'
import styles from './css/IntroductionSidebar.module.scss'

const IntroductionSidebar = ({setNumber, selectedNum}) => {
    return(
        <div className={styles.sidebar}>
            <div className={styles.sidebar_title}>
                <img src="imgs/img/test-guidance-gene.svg" alt="" className={styles.sidebar_title_img}/>
                <div className={styles.sidebar_title_text}>검사안내</div>
            </div>
            <div onClick={() => setNumber(1)} className={selectedNum===1 ? styles.sidebar_selected : styles.sidebar_content}>검사절차</div>
            <div onClick={() => setNumber(2)} className={selectedNum===2 ? styles.sidebar_selected : styles.sidebar_content}>검체취급</div>
            <div onClick={() => setNumber(3)} className={selectedNum===3 ? styles.sidebar_selected : styles.sidebar_content}>검사종류</div>
            <div onClick={() => setNumber(4)} className={selectedNum===4 ? styles.sidebar_selected : styles.sidebar_content}>종합검사프로필</div>
            <div onClick={() => setNumber(5)} className={selectedNum===5 ? styles.sidebar_selected : styles.sidebar_content}>산전관리검사</div>
            <div onClick={() => setNumber(6)} className={selectedNum===6 ? styles.sidebar_selected : styles.sidebar_content}>질환별검사</div>
            <div onClick={() => setNumber(7)} className={selectedNum===7 ? styles.sidebar_selected : styles.sidebar_content}>결과확인방법</div>
        </div>
    )
}

export default IntroductionSidebar