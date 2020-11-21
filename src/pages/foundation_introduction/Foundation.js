import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import InputForm from '../../components/InputForm'
import styles from '../../css/Foundation.module.scss'
import FoundationSidebar from './components/FoundationSidebar'
import Greeting from './components/Greeting'
import Organization from './components/Organization'
import History from './components/History'
import Doctor from './components/Doctor'
import MissionValue from './components/MissionValue'
import Network from './components/Network'
import Contact from '../service/components/Contact'

function Foundation(props){ 

    const [ num, setNum ] = useState(1)

    useEffect(() => {
        setNum(parseInt(props.match.params.num))
    }, [props.match])

    return(
        <Layout>
            <div className={styles.body}>
                <div className={styles.body_top_bg_wrapper}>
                    <img src="../imgs/img/foundation.png" alt="" className={styles.body_top_bg}/>
                </div>
                <div className={styles.body_contents}>
                    <FoundationSidebar selectedNum={num}/>
                    {num===1 ? <Greeting/> : 
                    num===2 ? <MissionValue/> :
                    num===3 ? <History/> :
                    num===4 ? <Organization/> :
                    num===5 ? <Network/> :
                    num===6 ? <Doctor/> :
                    num===7 ? <Contact/> :
                    <Greeting/>}
                </div>
                <img src="../imgs/img/anniversary.jpeg" alt="" className={styles.anniversary}/>
            </div>
            <InputForm/>
            
        </Layout>
    )
}

export default Foundation