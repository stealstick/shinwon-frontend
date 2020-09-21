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
                        <div className={styles.input_sticky}>
                            <input type="text" className={styles.input} placeholder="아이디"/>
                            <input type="text" className={classNames(styles.input, styles.input__last)} placeholder="비밀번호"/>
                        </div>
                        <div className="input-btn">LOGIN</div>
                    </div>
                    <div className={styles.forms_footer}>
                        <input type="checkbox" className={styles.checkbox}/>
                        <div className={styles.forms_footer_text}>아이디저장</div>
                        <div className={classNames(styles.forms_footer_text, styles.forms_footer_text__last)}>아이디/비밀번호 찾기</div>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.forms, styles.search)}>
                <div className={styles.forms_sticky}>
                    <div className={styles.forms_title}>검사항목조회</div>
                    <div className={styles.input_wrapper}>
                        <div className={styles.input_sticky}>
                            <input type="text" className={styles.input} placeholder="검사명"/>
                            <input type="text" className={classNames(styles.input, styles.input__last)} placeholder="검색어"/>
                        </div>
                        <div className={styles.input_btn}>SEARCH</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainForm