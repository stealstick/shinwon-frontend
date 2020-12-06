import React, { useState, useEffect } from 'react'
import styles from './css/RecruitmentList.module.css'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'
import axios from 'axios'

const RecruitmentList = () => {

    const [ num, setNum ] = useState(1)
    const [ recList, setRecList ] = useState([])

    const getCurrentTime = () => {
        var date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        return year+"-"+month+"-"+day
    }

    const RecContent = ({title, start_period, end_period, field_title}) => {
        return(
            <Link to={`/recruitment/${title}`} className={styles.rec_content_wrapper}>
                <div className={styles.rec_content_left}>
                    <div className={styles.rec_content_depart}>{field_title}</div>
                    <div className={styles.rec_content_title}>{title}</div>
                </div>
                <div className={styles.rec_content_right}>
                    <div className={styles.rec_content_date}>{start_period}~{end_period}</div>
                    <div className={styles.rec_content_dday}></div>
                </div>
            </Link>
        )
    }

    useEffect(() => {
        axios.get(`https://api.shinwon.org/recruit/?s_period=${getCurrentTime()}&e_period=${getCurrentTime()}`)
        .then(res => {
            setRecList(res.data['results'])
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to="/" className={styles.header_sticky}>
                    <img src="../imgs/img/logo.png" alt="" className={styles.logo}/>
                </Link>
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
                    {recList.length ? <><div className={styles.list_title_bar}></div>{recList.map((rec, i) => (
                        <RecContent
                            {...rec}
                            key={i}
                        />
                    ))}</> : <><div className={styles.none_text}>현재 진행중인 공고가 없습니다.</div><div className={styles.list_title_bar}></div></>}
                    
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RecruitmentList