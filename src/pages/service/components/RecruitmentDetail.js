import React, { useEffect, useState } from 'react'
import styles from './css/RecruitmentDetail.module.css'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'
import axios from 'axios'

function RecruitmentDetail(props){

    const SubTitle = ({title}) => {
        return(
            <div className={styles.subtitle_wrapper}>
                <div className={styles.subtitle_mark}/>
                <div className={styles.subtitle_text}>{title}</div>
            </div>
        )
    }

    const [ data, setData ] = useState({})

    useEffect(() => {
        axios.get(`https://api.shinwon.org/recruit/?title=${props.match.params.title}`)
        .then(res => {
            setData(res.data['results'][0])
        })
        .catch(err => {
            console.log(err)
        })
    }, [props.match])

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
                <div className={styles.page_table}>
                    <div className={styles.table_row}>
                        <div className={styles.row_title}>공고명</div>
                        <div className={styles.row_text_bold}>{data.title}</div>
                    </div>
                    <div className={styles.table_row}>
                        <div className={styles.row_title}>기간</div>
                        <div className={styles.row_text_bold}>{data.start_period} ~ {data.end_period}</div>
                    </div>
                    <div className={styles.table_row}>
                        <div className={styles.row_title}>이메일주소</div>
                        <div className={styles.row_text_bold}>recruit@shinwon.org</div>
                    </div>
                </div>
                <div className={styles.page_title_big}>임상병리사 경력직 채용공고</div>
                <SubTitle title="모집분야 및 자격요건"/>
                {data.field_title}
                <SubTitle title="지원방법"/>
                
                <SubTitle title="전형절차"/>
                {data.progress}
                <SubTitle title="기타사항"/>
                {data.etc}
                <SubTitle title="문의"/>
                {data.inquiry}
                <div className={styles.button_wrapper}>
                    <Link to="/recruitment" className={styles.button}>목록으로</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RecruitmentDetail