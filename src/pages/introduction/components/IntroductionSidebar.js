import React from 'react'
import styles from './css/IntroductionSidebar.module.scss'
import { Link } from 'react-router-dom'

const IntroductionSidebar = ({ selectedNum }) => {
    return (
        <>
        <div className={styles.sidebar}>
        <div className={styles.side_box_shadow}>

            <div className={styles.sidebar_title}>
                <img src={require("./css/test-guidance-gene.svg")} alt="" className={styles.sidebar_title_img} />
                <div className={styles.sidebar_title_text}>검사안내</div>
            </div>
            <Link to="/introduction/1" className={selectedNum === 1 ? styles.sidebar_selected : styles.sidebar_content}>검사절차</Link>
            <Link to="/introduction/2" className={selectedNum === 2 ? styles.sidebar_selected : styles.sidebar_content}>검체취급</Link>
            <Link to="/introduction/3" className={selectedNum === 3 ? styles.sidebar_selected : styles.sidebar_content}>검사종류</Link>
            <Link to="/introduction/4" className={selectedNum === 4 ? styles.sidebar_selected : styles.sidebar_content}>종합검사프로파일</Link>
            <Link to="/introduction/5" className={selectedNum === 5 ? styles.sidebar_selected : styles.sidebar_content}>산전관리검사</Link>
            <Link to="/introduction/6" className={selectedNum === 6 ? styles.sidebar_selected : styles.sidebar_content}>질환별검사</Link>
            <Link to="/introduction/7" className={selectedNum === 7 ? styles.sidebar_selected : styles.sidebar_content}>결과확인방법</Link>
            <Link to="/introduction/8" className={selectedNum === 8 ? styles.sidebar_selected : styles.sidebar_content}>검사항목조회</Link>
        </div>
        </div>

        </>
    )
}

export default IntroductionSidebar