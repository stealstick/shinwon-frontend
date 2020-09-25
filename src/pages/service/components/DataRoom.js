import React, { useState, useEffect } from 'react'
import styles from './css/DataRoom.module.scss'
import SectionTitle from '../../../components/SectionTitle'
import axios from 'axios'

const DataRoom = () => {

    const [ num, setNum ] = useState(1)
    const [ posts, setPosts ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ count, setCount ] = useState(0)

    const DataContent = ({title, img}) => {
        return(
            <div className={styles.datacontent_wrapper}>
                <div className={styles.datacontent_title} dangerouslySetInnerHTML={{__html: title}}/>
                <img src={img} alt="" className={styles.datacontent_img}/>
            </div>
        )
    }

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
    }

    const dataList = posts.map(post => (
        <DataContent
            key={post.idx}
            title={post.title}
            img={"http://13.125.200.188/files/" + post.file_url}
        />
    ))

    useEffect(() => {
        axios.get(`http://13.125.200.188:8080/reference/?page=${currentPage}`)
        .then(res => {
            setPosts(res.data['results'])
            setCount(res.data['count'])
        })
    }, [currentPage])

    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.top_type_wrapper}>
                    <div onClick={() => setNum(1)} className={num===1 ? styles.top_type_selected + " " + styles.top_type_content : styles.top_type_content}>의뢰지 / 동의서</div>
                    <div onClick={() => setNum(2)} className={num===2 ? styles.top_type_selected + " " + styles.top_type_content : styles.top_type_content}>인증서</div>
                </div>
                <SectionTitle kor="자료실" eng="DATA Center"/>
                <div className={styles.title_normal}>의료법인 신원의료재단의 인증서 / 동의서 / 의뢰지를 확인할 수 있습니다.</div>
                <div className={styles.datalist_wrapper}>
                    {dataList}
                </div>
                <div className={styles.pagenumberlist}>
                    <div className={styles.previous} onClick={() => setCurrentPage(currentPage - 1)}/>
                    {pageNumberList}
                    <div className={styles.next} onClick={() => setCurrentPage(currentPage + 1)}/>
                </div>
            </div>
        </div>
    )
}

export default DataRoom