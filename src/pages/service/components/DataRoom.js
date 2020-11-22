import React, { useState, useEffect } from 'react'
import styles from './css/DataRoom.module.scss'
import SectionTitle from '../../../components/SectionTitle'
import axios from 'axios'
import printJs from 'print-js'

const DataRoom = () => {

    const [ posts, setPosts ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ count, setCount ] = useState(0)

    const printImage = (img) => {
        printJs(img, 'image')
    }

    const downloadFile = (file) => {
        axios({
            url: 'https://api.shinwon.org/media/' + file,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', file);
            document.body.appendChild(link);
            link.click();
        });

    }

    const DataContent = ({title, img}) => {
        return(
            <div className={styles.datacontent_wrapper}>
                <div className={styles.datacontent_title} dangerouslySetInnerHTML={{__html: title}}/>
                <div className={styles.datacontent_img_wrapper}>
                    <img src={img} alt="" className={styles.datacontent_img}/>
                </div>
                <div className={styles.datacontent_download_button_wrapper}>
                    <div onClick={() => downloadFile(img)} className={styles.datacontent_download_button}>
                        <img src="../imgs/img/download-img.svg" alt="" className={styles.datacontent_download_img}/>
                        다운로드
                    </div>
                    <div onClick={() => printImage(img)} className={styles.datacontent_download_button}>
                        <img src="../imgs/img/printer.svg" alt="" className={styles.datacontent_download_img}/>
                        인쇄
                    </div>
                </div>
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
            img={"https://api.shinwon.org/media/" + post.file_url}
        />
    ))

    useEffect(() => {
        axios.get(`https://api.shinwon.org/reference/?b_idx=5&page=${currentPage}`)
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
                <SectionTitle kor="의뢰지/동의서" eng="DATA Center"/>
                <div className={styles.title_normal}>의료법인 신원의료재단의 의뢰지 / 동의서를 확인할 수 있습니다.</div>
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