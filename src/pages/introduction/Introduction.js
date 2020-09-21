import React, { useState } from 'react'
import Layout from '../Layout'
import InputForm from '../../components/InputForm'
import styles from '../../css/Introduction.module.scss'
import IntroductionSidebar from './components/IntroductionSidebar'
import LaboratoryProcess from './components/LaboratoryProcess'
import SampleHandling from './components/SampleHandling'
import LaboratoryType from './components/LaboratoryType'
import LaboratoryProfile from './components/LaboratoryProfile'

function Introduction(){

    const [ num, setNum ] = useState(1)

    const setNumber = (num) => {
        setNum(num)
    }

    return(
        <Layout>
            <InputForm/>
            <div className={styles.body}>
                <img src="/imgs/img/test-guidance.png" alt="" className={styles.body_top_bg}/>
                <div className={styles.body_contents}>
                    <IntroductionSidebar selectedNum={num} setNumber={setNumber}/>
                    {num===1 ? <LaboratoryProcess/> :
                    num===2 ? <SampleHandling/> :
                    num===3 ? <LaboratoryType/> : 
                    num===4 ? <LaboratoryProfile/> : null}
                </div>
            </div>
        </Layout>
    )
}

export default Introduction