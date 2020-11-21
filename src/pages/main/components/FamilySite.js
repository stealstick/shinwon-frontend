import React from 'react'
import styles from './css/FamilySite.module.css'

const FamilySite = () => {
    return(
        <div className={styles.container}>
            <div className={styles.title_wrapper}>
                <div className={styles.title}>관련 사이트</div>
            </div>
            
            <div className={styles.img_wrapper}>
                <img src="/imgs/icons/icon-left.svg" alt="" className={styles.icon} />
                <span>
                    <a href="http://www.mohw.go.kr/" target="blank">
                        <img src="/imgs/img/site-1.svg" alt="" className={styles.site_img} />
                    </a>
                    <a href="http://www.kslm.org/" target="blank">
                        <img src="/imgs/img/site-7.png" alt="" className={styles.site_img} />
                    </a>
                </span>
                <span>
                <a href="http://www.cdc.go.kr/" target="blank">
                    <img src="/imgs/img/site-2.svg" alt="" className={styles.site_img} />
                </a>
                <a href="http://www.nih.go.kr/" target="blank">
                    <img src="/imgs/img/site-8.png" alt="" className={styles.site_img} />
                </a>
                </span>
                <span>
                <a href="https://www.nhis.or.kr/" target="blank">
                    <img src="/imgs/img/kcdc.svg" alt="" className={styles.site_img} />
                </a>
                <a href="http://www.lab-qa.org/" target="blank">
                    <img src="/imgs/img/site-9.png" alt="" className={styles.site_img} />
                </a>
                </span>
                <span>
                <a href="http://www.hira.or.kr/" target="blank">
                    <img src="/imgs/img/site-4.svg" alt="" className={styles.site_img} />
                </a>
                <a href="http://www.kma.org/" target="blank">
                    <img src="/imgs/img/site-10.png" alt="" className={styles.site_img} />
                </a>
                </span>
                <span>
                <a href="https://www.pathology.or.kr/" target="blank">
                    <img src="/imgs/img/site-5.png" alt="" className={styles.site_img} />
                </a>
                <a href="https://www.kha.or.kr/" target="blank">
                    <img src="/imgs/img/site-11.png" alt="" className={styles.site_img} />
                </a>
                </span>
                <span>
                <a href="http://www.cytopathol.or.kr/" target="blank">
                    <img src="/imgs/img/site-6.png" alt="" className={styles.site_img} />
                </a>
                <a href="https://www.hematology.or.kr/" target="blank">
                    <img src="/imgs/img/site-12.png" alt="" className={styles.site_img} />
                </a>
                </span>
                
                <img src="/imgs/icons/icon-right.svg" alt="" className={styles.icon} />
            </div>
        </div>
    )
}

export default FamilySite