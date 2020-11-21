import React, { useEffect, useState } from 'react'
import styles from './css/Notice.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Notice = () => {

    const [ data, setData ] = useState([])

    const DataContent = ({title, url}) => {
        return(
            <Link className={styles.content_wrapper} to={`/service/1/${url.split("/")[4]}`}>
                <img src="/imgs/img/new.svg" alt="" className={styles.site_img}/>
                <div className={styles.content_title}>{title}</div>
            </Link>
        )
    }

    useEffect(() => {
        axios.get(`https://api.shinwon.org/board/?b_idx=1&page=1`)
        .then(res => {
            setData(res.data['results'])
        })
        .catch(err => {
            console.log(err)
        }) 
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.title_wrapper}>
                <Link to="/service/1" className={styles.title}>공문</Link>
            </div>
            
            <div className={styles.img_wrapper}>
                {data.slice(0, 3).map(post => (
                    <DataContent
                        title={post.title}
                        url={post.url}
                        key={post.idx}
                    />
                ))}
            </div>
        </div>
    )
}

export default Notice