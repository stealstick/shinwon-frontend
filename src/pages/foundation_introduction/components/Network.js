import React from 'react'
import styles from './css/Network.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Network = () => {

    AOS.init()

    return(
        <div className={styles.container}>
            <div className={styles.greeting_top_wrapper}>
                <img data-aos="fade-up" src="../imgs/img/greeting-top.png" alt="" className={styles.greeting_top_img}/>
            </div>
            <div className={styles.section}>
                <div data-aos="fade-up" className={styles.network_top_wrapper}>
                    <img src="../imgs/img/network-pin-big.svg" alt="" className={styles.network_top_icon}/>
                    <div className={styles.network_top_text}>신원의료재단 전국네트워크 영업소 위치안내</div>
                </div>
                <div className={styles.network_content_wrapper}>
                    <div className={styles.network_map_wrapper}>
                        <div className={styles.network_map_sticky}>
                            <img src="../imgs/img/pin-seoul.svg" alt="" className={styles.pin_seoul}/>
                            <img src="../imgs/img/pin-gangwon.svg" alt="" className={styles.pin_gangwon}/>
                            <img src="../imgs/img/pin-incheon.svg" alt="" className={styles.pin_incheon}/>
                            <img src="../imgs/img/pin-gyeonggi.svg" alt="" className={styles.pin_gyeonggi}/>
                            <img src="../imgs/img/pin-chungnam.svg" alt="" className={styles.pin_chungnam}/>
                            <img src="../imgs/img/pin-chungbuk.svg" alt="" className={styles.pin_chungbuk}/>
                            <img src="../imgs/img/pin-daejeon.svg" alt="" className={styles.pin_daejeon}/>
                            <img src="../imgs/img/pin-gyeongbuk.svg" alt="" className={styles.pin_gyeongbuk}/>
                            <img src="../imgs/img/pin-daegu.svg" alt="" className={styles.pin_daegu}/>
                            <img src="../imgs/img/pin-ulsan.svg" alt="" className={styles.pin_ulsan}/>
                            <img src="../imgs/img/pin-busan.svg" alt="" className={styles.pin_busan}/>
                            <img src="../imgs/img/pin-jeonnam.svg" alt="" className={styles.pin_jeonnam}/>
                            <img src="../imgs/img/pin-jeonbuk.svg" alt="" className={styles.pin_jeonbuk}/>
                            <img src="../imgs/img/pin-gwangju.svg" alt="" className={styles.pin_gwangju}/>
                            <img src="../imgs/img/pin-gyeongnam.svg" alt="" className={styles.pin_gyeongnam}/>
                            <img src="../imgs/img/pin-jeju.svg" alt="" className={styles.pin_jeju}/>
                        </div>
                        
                    </div>
                    <div className={styles.network_area_wrapper}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Network