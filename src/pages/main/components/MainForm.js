import React from 'react'
import styles from './css/MainForm.module.scss'
import classNames from 'classnames'

const MainForm = () => {
    return(
        <div className={styles.body_forms}>
            <div className={classNames(styles.forms, styles.login)}>
                <div className={styles.forms_sticky}>
                    <div className={styles.forms_title}>검사결과조회</div>
                    <div className={styles.input_wrapper}>
                        <div className={styles.input_btn}>SEARCH</div>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.forms, styles.search)}>
                <div className={styles.forms_sticky}>
                    <div className={styles.forms_title}>검사항목조회</div>
                    <div className={styles.input_wrapper}>
                        <div className={styles.input_sticky}>
                            <input type="text" className={styles.input} placeholder="검사명"/>
                        </div>
                        <div className={styles.input_btn}>SEARCH</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainForm