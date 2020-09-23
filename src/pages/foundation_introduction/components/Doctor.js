import React from 'react'
import styles from './css/Doctor.module.scss'

const Doctor = () => {
    return(
        <div className={styles.container}>
            <div className={styles.greeting_top_wrapper}>
                <img src="imgs/img/greeting-top.png" alt="" className={styles.greeting_top_img}/>
            </div>
            <div className={styles.section}>
                <div className={styles.greeting_title}>전문의 소개</div>
                <div className={styles.doctor_subtitle}>신원의료재단의 전문의료진입니다.</div>
                <img src="imgs/img/doctor1.png" alt="" className={styles.doctor_img}/>
                <img src="imgs/img/doctor2.png" alt="" className={styles.doctor_img}/>
                <img src="imgs/img/doctor3.png" alt="" className={styles.doctor_img}/>
                <img src="imgs/img/doctor4.png" alt="" className={styles.doctor_img}/>
                <img src="imgs/img/doctor5.png" alt="" className={styles.doctor_img}/>
                <img src="imgs/img/doctor6.png" alt="" className={styles.doctor_img}/>
                <img src="imgs/img/doctor7.png" alt="" className={styles.doctor_img}/>
                <img src="imgs/img/doctor8.png" alt="" className={styles.doctor_img}/>
                <img src="imgs/img/doctor9.png" alt="" className={styles.doctor_img}/>
                <img src="imgs/img/doctor10.png" alt="" className={styles.doctor_img}/>
                <img src="imgs/img/doctor11.png" alt="" className={styles.doctor_img}/>
                <img src="imgs/img/doctor12.png" alt="" className={styles.doctor_img}/>
            </div>
        </div>
    )
}

export default Doctor