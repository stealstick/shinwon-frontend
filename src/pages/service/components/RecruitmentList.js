import React, { useState, useEffect } from 'react'
import styles from './css/RecruitmentList.module.css'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'

const RecruitmentList = () => {

    const [ num, setNum ] = useState(1)
    const [ recList, setRecList ] = useState([])

    const RecContent = ({id}) => {
        return(
            <Link to={`/recruitment/${id}`} className={styles.rec_content_wrapper}>
                <div className={styles.rec_content_left}>
                    <div className={styles.rec_content_depart}>임상화학</div>
                    <div className={styles.rec_content_title}>임상병리사 경력직 채용공고</div>
                </div>
                <div className={styles.rec_content_right}>
                    <div className={styles.rec_content_date}>2020.00.00 ~ 2020.00.00</div>
                    <div className={styles.rec_content_dday}>D - 7</div>
                </div>
            </Link>
        )
    }

    useEffect(() => {
        const data = [1,2,3,4,5,6,7,8,9,10]
        const list = data.map(d => (
            <RecContent id={d} key={d}/>
        ))
        setRecList(list)
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.header_sticky}>
                    <img src="../imgs/img/logo.png" alt="" className={styles.logo}/>
                </div>
            </div>
            <div className={styles.body_container}>
                <div className={styles.page_title}>채용공고</div>
                <div className={styles.page_desc}>의료법인 신원의료재단의 채용공고를 확인하세요.</div>
                <div className={styles.page_box}>
                    <div className={styles.box_text}>지원서 접수는 전자메일로만 접수</div>
                    <div className={styles.box_email}>recruit@shinwon.org</div>
                </div>
                <div className={styles.list_wrapper}>
                    <div className={styles.list_togglebar}>
                        <div onClick={() => setNum(1)} className={num===1 ? styles.list_toggle_text_selected : styles.list_toggle_text}>전체</div>
                        <div onClick={() => setNum(2)} className={num===2 ? styles.list_toggle_text_selected : styles.list_toggle_text}>상시</div>
                    </div>
                    <div className={styles.list_title_bar}></div>
                    {recList}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RecruitmentList