import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import styles from '../../css/Rnd.module.scss'
import InputForm from '../../components/InputForm'

function Rnd(props){

    const [ num, setNum ] = useState(1)

    useEffect(() => {
        setNum(parseInt(props.match.params.num))
    }, [props.match])

    return(
        <Layout>
            <div className={styles.body}>
                <div className={styles.body_top_bg_wrapper}>
                    <img src="../imgs/img/rnd.png" alt="" className={styles.body_top_bg}/>
                </div>
                <div className={styles.body_contents}>
                    <div className={styles.body_title}>임상연구센터</div>
                    <div className={styles.body_content}>준비중입니다.</div>
                </div>
            </div>
            <InputForm/>
        </Layout>
    )
}

export default Rnd