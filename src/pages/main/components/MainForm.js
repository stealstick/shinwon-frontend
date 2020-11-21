import React, { useState } from 'react'
import styles from './css/MainForm.module.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const MainForm = () => {

    const [ input, setInput ] = useState({
        data1: "",
        data17: "",
        ord_cd: ""
    })

    const onChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const { data1, data17, ord_cd } = input

    return(
        <div className={styles.body_forms}>
            <div className={classNames(styles.forms, styles.login)}>
                <div className={styles.forms_sticky}>
                    <div className={styles.forms_title}>검사결과조회</div>
                    <div className={styles.input_wrapper}>
                        <a href="http://61.252.130.67:200/" target="blank" className={styles.input_btn}>SEARCH</a>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.forms, styles.search)}>
                <div className={styles.forms_sticky}>
                    <div className={styles.forms_title}>검사항목조회</div>
                    <div className={styles.input_wrapper}>
                        <div className={styles.input_sticky}>
                            <input type="text" className={styles.input} value={data1} name="data1" onChange={onChange} placeholder="검사명"/>
                            <input type="text" className={styles.input} value={data17} name="data17" onChange={onChange} placeholder="보험코드"/>
                            <input type="text" className={styles.input} value={ord_cd} name="ord_cd" onChange={onChange} placeholder="검사코드"/>
                        </div>
                        <Link to={`/introduction/8/?data1=${data1}&data17=${data17}&ord_cd=${ord_cd}`} className={styles.input_btn}>SEARCH</Link>
                    </div>
                </div>
            </div>
            <div className={styles.bottom_buttons_wrapper}>
                <a href="https://939.co.kr/swcl/" target="blank" className={styles.bottom_button}>
                    <img className={styles.button_left_icon} alt="" src="../imgs/img/tech-sup.svg"/>
                    <div className={styles.button_text}>원격지원</div>
                </a>
                <a href="https://blog.naver.com/junchae42" target="blank" className={styles.bottom_button}>
                    <img className={styles.button_left_icon} alt="" src="../imgs/img/blog.svg"/>
                    <div className={styles.button_text}>블로그</div>
                </a>
            </div>
        </div>
    )
}

export default MainForm