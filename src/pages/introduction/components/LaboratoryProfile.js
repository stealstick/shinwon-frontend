import React from 'react'
import styles from './css/LaboratoryProfile.module.scss'
import SectionTitle from '../../../components/SectionTitle'
import AOS from 'aos'
import 'aos/dist/aos.css'

const LaboratoryProfile = () => {

    AOS.init()

    return(
        <div data-aos="fade-up" className={styles.container}>
            <SectionTitle kor="종합검사프로파일"/>
            <div className={styles.profile_text}>신원의료재단이 검사하는 검사항목 분류입니다.</div>
            <img src="../imgs/img/test_profile.png" alt="" className={styles.img}/>
        </div>
    )
}

export default LaboratoryProfile