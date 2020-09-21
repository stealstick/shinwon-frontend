import React from 'react'
import Layout from '../Layout'
import MainForm from './components/MainForm'
import MainHoverContent from './components/MainHoverContent'
import styles from '../../css/Main.module.scss'

function Main(){
    return(
        <Layout>
            <div className={styles.body_upper}>
                <div className={styles.body_slide}>

                </div>
                <MainForm/>
            </div>
            <div className={styles.body_lower}>
                <div className={styles.body_list}>
                    <MainHoverContent type="gray" img="/imgs/img/foundation-guide.png" text="재단안내"/>
                    <MainHoverContent type="white" img="/imgs/img/network.svg" text="네트워크"/>
                    <MainHoverContent type="gray" img="/imgs/img/doctor.svg" text="전문의"/>
                    <MainHoverContent type="white" img="/imgs/img/tech-sup.svg" text="원격지원"/>
                    <MainHoverContent type="gray" img="imgs/img/download.svg" text="양식다운로드"/>
                </div>
                <div className={styles.body_site}>
                    <div className={styles.site_text}>FAMILY SITE</div>
                    <img src="/imgs/icons/icon-left.svg" alt="" className={styles.site_img}/>
                    <img src="/imgs/img/site-1.svg" alt="" className={styles.site_img}/>
                    <img src="/imgs/img/site-2.svg" alt="" className={styles.site_img}/>
                    <img src="/imgs/img/site-2.svg" alt="" className={styles.site_img}/>
                    <img src="/imgs/img/site-4.svg" alt="" className={styles.site_img}/>
                    <img src="/imgs/img/site-5.png" alt="" className={styles.site_img}/>
                    <img src="/imgs/img/site-6.png" alt="" className={styles.site_img}/>
                    <img src="/imgs/icons/icon-right.svg" alt="" className={styles.site_img}/>
                </div>
            </div>
        </Layout>
    )
}

export default Main