import React from  'react'
import { Link } from 'react-router-dom'
import styles from './Admin.module.css'

const LinkContent = () => { 
    return(
        <div className={styles.linkcontent_wrapper}>
            <Link className={styles.linkcontent} to="/admin">공문/FAQ</Link>
            <Link className={styles.linkcontent} to="/addreference">인증서/의뢰지/동의서</Link>
            <Link className={styles.linkcontent} to="/addrecruitment">채용공고</Link>
        </div>
    )
}

export default LinkContent