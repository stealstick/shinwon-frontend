import React from 'react'
import styles from './css/FamilySite.module.css'

const FamilySite = () => {
    return(
        <div className={styles.container}>
            <div className={styles.title_wrapper}>
                <div className={styles.title}>FAMILY SITE</div>
            </div>
            
            <div className={styles.img_wrapper}>
                <img src="/imgs/icons/icon-left.svg" alt="" className={styles.site_img} />
                <a href="http://www.mohw.go.kr/" target="blank">
                    <img src="/imgs/img/site-1.svg" alt="" className={styles.site_img} />
                </a>
                <a href="http://www.cdc.go.kr/" target="blank">
                    <img src="/imgs/img/site-2.svg" alt="" className={styles.site_img} />
                </a>
                <a href="https://www.nhis.or.kr/" target="blank">
                    <img src="/imgs/img/kcdc.svg" alt="" className={styles.site_img} />
                </a>
                <a href="http://www.hira.or.kr/" target="blank">
                    <img src="/imgs/img/site-4.svg" alt="" className={styles.site_img} />
                </a>
                <a href="https://www.pathology.or.kr/" target="blank">
                    <img src="/imgs/img/site-5.png" alt="" className={styles.site_img} />
                </a>
                <a href="http://www.cytopathol.or.kr/" target="blank">
                    <img src="/imgs/img/site-6.png" alt="" className={styles.site_img} />
                </a>
                <img src="/imgs/icons/icon-right.svg" alt="" className={styles.site_img} />
            </div>
        </div>
    )
}

export default FamilySite