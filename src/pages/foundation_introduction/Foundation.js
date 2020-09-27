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

function Foundation(props){ 

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
                    <FoundationSidebar selectedNum={num}/>
                    {num===1 ? <Greeting/> : 
                    num===2 ? <MissionValue/> :
                    num===3 ? <Organization/> :
                    num===4 ? <History/> :
                    num===5 ? null :
                    <Doctor/>}
                </div>
            </div>
        </Layout>
    )
}

export default Foundation