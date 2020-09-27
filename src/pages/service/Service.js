import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import InputForm from '../../components/InputForm'
import styles from '../../css/Service.module.scss'
import ServiceSidebar from './components/ServiceSidebar'
import Official from './components/Official'
import BloodCollection from './components/BloodCollection'
import DataRoom from './components/DataRoom'
import Recruitment from './components/Recruitment'
import Contact from './components/Contact'

function Service(props){

    const [ num, setNum ] = useState(1)
    
    useEffect(() => {
        setNum(parseInt(props.match.params.num))
    }, [props.match])

    return(
        <Layout>
            <InputForm/>
            <div className={styles.body}>
                <img src="../imgs/img/foundation.png" alt="" className={styles.body_top_bg}/>
                <div className={styles.body_contents}>
                    <ServiceSidebar selectedNum={num}/>
                    {num===1 ? <Official/> : 
                    num===2 ? <DataRoom/> : 
                    num===3 ? <BloodCollection/> :
                    num===4 ? null :
                    num===5 ? <Contact/> :
                    num===6 ? <Recruitment/> :
                    <Official/>}
                </div>
            </div>
        </Layout>
    )
}

export default Service