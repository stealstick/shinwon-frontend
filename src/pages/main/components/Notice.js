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
        axios.get(`http://13.125.200.188:8080/board/?b_idx=1&page=1`)
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
                <div className={styles.title}>NOTICE</div>
            </div>
            
            <div className={styles.img_wrapper}>
                <img src="/imgs/icons/icon-left.svg" alt="" className={styles.site_img} />
                {data.slice(0, 3).map(post => (
                    <DataContent
                        title={post.title}
                        url={post.url}
                        key={post.idx}
                    />
                ))}
                <img src="/imgs/icons/icon-right.svg" alt="" className={styles.site_img} />
            </div>
        </div>
    )
}

export default Notice