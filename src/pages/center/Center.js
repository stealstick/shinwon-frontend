import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import InputForm from '../../components/InputForm'
import CenterSidebar from './components/CenterSidebar'
import styles from '../../css/Center.module.scss'
import Department from './components/Department'
import Pathology from './components/Pathology'
import Analysis from './components/Analysis'

function Center(props){

    const [ num, setNum ] = useState(1)

    useEffect(() => {
        setNum(parseInt(props.match.params.num))
    }, [props.match])

    return(
        <Layout>
            <div className={styles.body}>
                    <div className={styles.body_top_bg_wrapper}>
                <img src="../imgs/img/clinical-chemistry.png" alt="" className={styles.body_top_bg}/>
                </div>
                <div className={styles.body_contents}>
                    <CenterSidebar selectedNum={num}/>
                    {num===1 ? <Department/> : 
                    num===2 ? <Pathology/> : 
                    num===3 ? <Analysis/> :
                    <Department/>}
                </div>
            </div>
            <InputForm/>
        </Layout>
    )
}

export default Center