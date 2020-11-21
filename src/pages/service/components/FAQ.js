import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './css/FAQ.module.scss'
import SectionTitle from '../../../components/SectionTitle'

const FAQ = () => {

    const [ posts, setPosts ] = useState([])
    const [ count, setCount ] = useState(0)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ contentAnswerOn, setContentAnswerOn ] = useState(null)

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

    const FAQContent = ({title, idx, contents, fileurl, fileurl2, fileurl3}) => {
        return(
            <div className={styles.faq_content_wrapper} onClick={contentAnswerOn===idx ? () => setContentAnswerOn(null) : () => setContentAnswerOn(idx)}>
                <div className={styles.faq_content}>
                    <img src="../imgs/img/faq-icon.svg" alt="" className={styles.faq_icon}/>
                    <div className={styles.faq_title}>{title}</div>
                </div>
                {contentAnswerOn===idx ? 
                <div className={styles.faq_answer_wrapper}>
                    <div className={styles.faq_answer_sticky} dangerouslySetInnerHTML={{__html: contents}}/>
                    {fileurl!=="" ? 
                    <div className={styles.file_download_wrapper}>
                        <div className={styles.file_text}>첨부파일</div>
                        <a download target="blank" className={styles.file_url} href={`https://www.shinwon.org/files/${fileurl}`}>다운로드</a>
                    </div>
                     : null}
                    {fileurl2!=="" ? 
                    <div className={styles.file_download_wrapper}>
                        <div className={styles.file_text}>첨부파일</div>
                        <a download target="blank" className={styles.file_url} href={`https://www.shinwon.org/files/${fileurl2}`}>다운로드</a>
                    </div>
                     : null}
                    {fileurl3!=="" ? 
                    <div className={styles.file_download_wrapper}>
                        <div className={styles.file_text}>첨부파일</div>
                        <a download target="blank" className={styles.file_url} href={`https://www.shinwon.org/files/${fileurl3}`}>다운로드</a> 
                    </div>
                    : null}
                </div>
                : null}
            </div>
            
        )
    }

    const currentPostsList = posts.map(post => (
        <FAQContent
            {...post}
            contents={post.contents.replace(/\/UploadFiles/gi, "https://www.shinwon.org/files")}
            key={post.idx}
        />
    ))

    const paginate = (number) => {
        setCurrentPage(number)
    }

    useEffect(() => {
        axios.get(`https://api.shinwon.org/board/?b_idx=3&page=${currentPage}`)
        .then(res => {
            setPosts(res.data['results'])
            setCount(res.data['count'])
        })
        .catch(err => {
            console.log(err)
        })
    }, [currentPage])

    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <SectionTitle kor="주요 질문에 대한 답변" eng="FAQ"/>
                <div className={styles.title_normal}>의료법인 신원의료재단에 대해 고객 여러분들이 궁금해 하시는 질문에 대한 답변입니다.</div>
                <div className={styles.postlist_wrapper}>
                    {currentPostsList}
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

export default FAQ