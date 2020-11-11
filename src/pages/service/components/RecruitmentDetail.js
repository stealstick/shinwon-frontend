import React from 'react'
import styles from './css/RecruitmentDetail.module.css'

const RecruitmentDetail = () => {

    const SubTitle = ({title}) => {
        return(
            <div className={styles.subtitle_wrapper}>
                <div className={styles.subtitle_mark}/>
                <div className={styles.subtitle_text}>{title}</div>
            </div>
        )
    }

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
                <div className={styles.page_table}>
                    <div className={styles.table_row}>
                        <div className={styles.row_title}>공고명</div>
                        <div className={styles.row_text_bold}>임상병리사 경력직 채용공고</div>
                    </div>
                    <div className={styles.table_row}>
                        <div className={styles.row_title}>기간</div>
                        <div className={styles.row_text_bold}>2020.00.00 ~ 2020.00.00</div>
                    </div>
                    <div className={styles.table_row}>
                        <div className={styles.row_title}>이메일주소</div>
                        <div className={styles.row_text_bold}>recruit@shinwon.org</div>
                    </div>
                </div>
                <div className={styles.page_title_big}>임상병리사 경력직 채용공고</div>
                <SubTitle title="모집분야 및 자격요건"/>
                <SubTitle title="지원방법"/>
                <SubTitle title="전형절차"/>
                <SubTitle title="기타사항"/>
                <SubTitle title="문의"/>
            </div>
        </div>
    )
}

export default RecruitmentDetail