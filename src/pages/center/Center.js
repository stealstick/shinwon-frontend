import React, { useState } from 'react'
import Layout from '../Layout'
import InputForm from '../../components/InputForm'
import CenterSidebar from './components/CenterSidebar'
import styles from '../../css/Center.module.scss'
import Department from './components/Department'
import Pathology from './components/Pathology'
import Analysis from './components/Analysis'

function Center(){

    const [ num, setNum ] = useState(1)

    const setNumber = (num) => {
        setNum(num)
    }

    return(
        <Layout>
            <InputForm/>
            <div className={styles.body}>
                <img src="/imgs/img/clinical-chemistry.png" alt="" className={styles.body_top_bg}/>
                <div className={styles.body_contents}>
                    <CenterSidebar setNumber={setNumber} selectedNum={num}/>
                    {num===1 ? <Department/> : num===2 ? <Pathology/> : <Analysis/>}
                </div>
            </div>
        </Layout>
    )
}

export default Center