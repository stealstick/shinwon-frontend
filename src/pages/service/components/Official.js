import React, { useState, useEffect } from 'react'
import styles from './css/Official.module.scss'
import SectionTitle from '../../../components/SectionTitle'
import axios from 'axios'

const Official = () => {

    const [ posts, setPosts ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ count, setCount ] = useState(0)

    const getPageNumber = () => {
        var pageNum = 0
        if(count % 20 !== 0) pageNum = count / 20 + 1
        else if(count % 20 === 0) pageNum = count / 20
        return pageNum
    }

    const pageNumber = []
    for(let i=1; i<=getPageNumber(); i++){
        pageNumber.push(i)
    }

    

    const PageNumContent = ({num}) => {
        return(
            <span className={num===currentPage ? styles.pagenum_selected : styles.pagenum_wrapper} onClick={() => paginate(num)}>
                <div className={styles.pagenum}>{num}</div>
            </span>
        )
    }

    const pageNumberList = pageNumber.filter(num => {
        if(currentPage>=10){
            return currentPage-8<=num && num<=currentPage+1
        } else {
            return num<=10
        }
    }).map(num => (
        <PageNumContent
            key={num}
            num={num}
        />
    ))

    const OfficialContent = ({id, title, date}) => {
        return(
            <div className={styles.official_content}>
                <div className={styles.official_id}>{id}</div>
                <div className={styles.official_title}>{title}</div>
                <div className={styles.official_date}>{date}</div>
            </div>
        )
    }

    const currentPostsList = posts.map(post => (
        <OfficialContent
            id={post.idx}
            title={post.title}
            date={post.regdate}
            key={post.idx}
        />
    ))

    const paginate = (number) => {
        setCurrentPage(number)
    }

    useEffect(() => {
        axios.get(`http://13.125.200.188:8080/board/?page=${currentPage}`)
        .then(res => {
            return () => {
                setPosts(res.data['results'])
                setCount(res.data['count'])
            }
        })
        .catch(err => {
            console.log(err)
        })
    }, [currentPage])

    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <SectionTitle kor="공문" eng="Official"/>
                <div data-aos="fade-up" className={styles.title_normal}>의료법인 신원의료재단의 대내외 공문을 확인 할 수 있습니다.</div>
                <div data-aos="fade-up" className={styles.official_content + " " + styles.official_top}>
                    <div className={styles.official_id}>No</div>
                    <div className={styles.official_title}>제목</div>
                    <div className={styles.official_top_date}>작성일</div>
                </div>
                {currentPostsList}
                <div className={styles.pagenumberlist}>
                    <div className={styles.previous} onClick={() => setCurrentPage(currentPage - 1)}/>
                    {pageNumberList}
                    <div className={styles.next} onClick={() => setCurrentPage(currentPage + 1)}/>
                </div>
            </div>
        </div>
    )
}

export default Official