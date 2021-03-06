import React, { useState, useEffect } from 'react'
import styles from './css/Official.module.scss'
import SectionTitle from '../../../components/SectionTitle'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import queryString from 'query-string'

const Official = ({props}) => {

    const [ posts, setPosts ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(Number(queryString.parse(props.search).page))
    const [ count, setCount ] = useState(0)

    const history = useHistory()

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
    const paginate = (number) => {
        setCurrentPage(number)
        history.push(`/service/1/?page=${number}`)
    }

    const OfficialContent = ({id, title, date, url}) => {
        return(
            <Link to={`/service/1/${url.split("/")[4]}`} className={styles.official_content}>
                <div className={styles.official_id}>{id}</div>
                <div className={styles.official_title}>{title}</div>
                <div className={styles.official_date}>{date.split(" ")[0]}</div>
            </Link>
        )
    }

    const currentPostsList = posts.map(post => (
        <OfficialContent
            id={post.pk}
            title={post.title}
            date={post.regdate}
            key={post.idx}
            url={post.url}
        />
    ))

    

    useEffect(() => {
        axios.get(`https://api.shinwon.org/board/?b_idx=1&page=${currentPage}`)
        .then(res => {
            setPosts(res.data['results'])
            setCount(res.data['count'])
            console.log(res.data['results'][0])
        })
        .catch(err => {
            console.log(err)
        })
    }, [currentPage])

    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <SectionTitle kor="??????" eng="Official"/>
                <div className={styles.title_normal}>???????????? ????????????????????? ????????? ????????? ?????? ??? ??? ????????????.</div>
                <div className={styles.official_content + " " + styles.official_top}>
                    <div className={styles.official_id}>No</div>
                    <div className={styles.official_title}>??????</div>
                    <div className={styles.official_top_date}>?????????</div>
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