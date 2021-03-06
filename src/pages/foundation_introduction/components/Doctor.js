import React from 'react'
import styles from './css/Doctor.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Doctor = () => {

    AOS.init()

    return(
        <div className={styles.container}>
            <div className={styles.greeting_top_wrapper}>
                <img src="../imgs/img/greeting-top.png" alt="" className={styles.greeting_top_img}/>
            </div>
            <div className={styles.section}>
                <div data-aos="fade-up"  data-aos-duration="2000" className={styles.greeting_title}>전문의 소개</div>
                <div data-aos="fade-up"  data-aos-duration="2000" className={styles.doctor_subtitle}>신원의료재단의 전문의료진입니다.</div>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/doctor1.png" alt="" className={styles.doctor_img + " " + styles.img1}/>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/doctor2.png" alt="" className={styles.doctor_img + " " + styles.img2}/>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/doctor3.png" alt="" className={styles.doctor_img + " " + styles.img3}/>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/doctor4.png" alt="" className={styles.doctor_img + " " + styles.img4}/>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/doctor5.png" alt="" className={styles.doctor_img + " " + styles.img5}/>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/doctor6.png" alt="" className={styles.doctor_img + " " + styles.img6}/>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/doctor7.png" alt="" className={styles.doctor_img + " " + styles.img7}/>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/doctor7-5.png" alt="" className={styles.doctor_img + " " + styles.img7_5}/>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/doctor8.png" alt="" className={styles.doctor_img + " " + styles.img8}/>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/doctor11.png" alt="" className={styles.doctor_img + " " + styles.img11}/>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/doctor12.png" alt="" className={styles.doctor_img + " " + styles.img12}/>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/doctor14.png" alt="" className={styles.doctor_img + " " + styles.img14}/>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/doctor15.jpeg" alt="" className={styles.doctor_img + " " + styles.img15}/>
            </div>
        </div>
    )
}

export default Doctor