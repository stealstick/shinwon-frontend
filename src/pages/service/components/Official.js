import React from 'react'
import styles from './css/Official.module.scss'
import SectionTitle from '../../../components/SectionTitle'

const Official = () => {
    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <SectionTitle kor="공문" eng="Official"/>
                <div className={styles.title_normal}>의료법인 신원의료재단의 대내외 공문을 확인 할 수 있습니다.</div>
            </div>
        </div>
    )
}

export default Official