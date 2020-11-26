import React, { useEffect, useState } from 'react'
import styles from './css/OfficialDetail.module.css'
import SectionTitle from '../../../components/SectionTitle'
import axios from 'axios'
import Layout from '../../Layout'
import { Link, useHistory } from 'react-router-dom'
import ServiceSidebar from './ServiceSidebar'

function OfficialDetail(props){

    const [ data, setData ] = useState({})
    const history = useHistory()

    useEffect(() => {
        axios.get(`https://api.shinwon.org/board/${props.match.params.officialid}/`)
        .then(res => {
            res.data.contents = res.data.contents.replace(/\/UploadFiles/gi, "https://api.shinwon.org/media")
            res.data.contents = res.data.contents.replace(/http:\/\/13.125.200.188:8080/gi, "https://api.shinwon.org")
            if(res.data.fileurl!==null) res.data.filename = decodeURIComponent(res.data.fileurl.split("/").slice(-1)[0]) 
            if(res.data.fileurl2!==null) res.data.filename2 = decodeURIComponent(res.data.fileurl2.split("/").slice(-1)[0])
            if(res.data.fileurl3!==null) res.data.filename3 = decodeURIComponent(res.data.fileurl2.split("/").slice(-1)[0])
            setData(res.data)

        })
        .catch(err => {
            console.log(err)
        })
    }, [props.match.params.officialid])

    const downloadFile = (file) => {
        var browserName = undefined;
        var userAgent = navigator.userAgent;

        switch (true) {
            case /Trident|MSIE/.test(userAgent):
                browserName = 'ie';
                break;

            case /Edge/.test(userAgent):
                browserName = 'edge';
                break;

            case /Chrome/.test(userAgent):
                browserName = 'chrome';
                break;

            case /Safari/.test(userAgent):
                browserName = 'safari';
                break;

            case /Firefox/.test(userAgent):
                browserName = 'firefox';
                break;

            case /Opera/.test(userAgent):
                browserName = 'opera';
                break;

            default:
                browserName = 'unknown';
        }

        var isUrl = file.indexOf("http")>-1

        if (browserName === 'ie' || browserName === 'edge') {

            //ie11
            var _window = window.open(isUrl ? file : 'https://api.shinwon.org/media/' + file, "_blank");
            _window.document.close();
            _window.document.execCommand('SaveAs', true, file.split("/").slice(-1)[0] || file)
            _window.close();
        } else {
            axios({
                url: isUrl ? file : 'https://api.shinwon.org/media/' + file,
                method: 'GET',
                responseType: 'blob',
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', file.split("/").slice(-1)[0]);
                document.body.appendChild(link);
                link.click();
            });
        }

        

    }

    return(
        <Layout>
            <div className={styles.body}>
                <div className={styles.body_top_bg_wrapper}>
                    <img src={require("./css/foundation.png")} alt="" className={styles.body_top_bg}/>
                </div>
                
                <div className={styles.body_contents}>
                    <ServiceSidebar/>
                    <div className={styles.container}>
                        <div className={styles.section}>
                            <SectionTitle kor="공문" eng="Official"/>
                            <div className={styles.detail_title_wrapper}>
                                <div className={styles.detail_title}>{data.title}</div>
                                <div className={styles.detail_date_wrapper}>
                                    <div className={styles.detail_date_text}>작성일</div>
                                    <div className={styles.detail_date}>{data.regdate}</div>
                                </div>
                            </div>
                            <div className={styles.detail_contents_wrapper}>
                                <div dangerouslySetInnerHTML={{__html:data.contents}}/>
                            </div>
                            
                            {data.fileurl!=="" && data.fileurl!==null ?
                            <div className={styles.file_download_wrapper}>
                                <div className={styles.file_title_wrapper}>
                                    <div className={styles.file_title}>첨부파일</div>
                                    {data.filename}
                                </div>
                                <div onClick={() => downloadFile(data.fileurl)} className={styles.file_download_button}>다운로드</div>
                            </div>
                            : null}
                            {data.fileurl2!=="" && data.fileurl2!==null ?
                            <div className={styles.file_download_wrapper}>
                                <div className={styles.file_title_wrapper}>
                                    <div className={styles.file_title}>첨부파일</div>
                                    {data.filename2}
                                </div>
                                <div onClick={() => downloadFile(data.fileurl2)} className={styles.file_download_button}>다운로드</div>
                            </div>
                            : null}
                            {data.fileurl3!=="" && data.fileurl3!==null ?
                            <div className={styles.file_download_wrapper}>
                                <div className={styles.file_title_wrapper}>
                                    <div className={styles.file_title}>첨부파일</div>
                                    {data.filename3}
                                </div>
                                <div onClick={() => downloadFile(data.fileurl3)} className={styles.file_download_button}>다운로드</div>
                            </div>
                            : null}
                            <div className={styles.list_btn_wrapper}>
                                <div onClick={() => history.goBack()} className={styles.list_btn}>목록</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="forms-wrapper">
            <div className="forms login">
                <div className="forms-sticky">
                    <div className="forms-title">검사결과조회</div>
                    <div className="input-wrapper">
                        <a target="blank" href="http://61.252.130.67:200/" className="input-btn">SEARCH</a>
                    </div>
                </div>
            </div>
            <div className="forms search">
                <div className="forms-sticky">
                    <div className="forms-title">검사항목조회</div>
                    <div className="input-wrapper">
                        <input type="text" className="input" placeholder="검사명"/>
                        <div className="input-btn">SEARCH</div>
                    </div>
                </div>
            </div>
            <div className="forms-btn-wrapper">
                <a target="blank" href="https://939.co.kr/swcl/" className="forms-btn forms-btn__gray">
                    <img src="../../imgs/icons/icon-gear.svg" alt="" className="forms-btn-icon"/>
                    <div className="forms-btn-text">원격지원</div>
                </a>
                <Link to="/service/2" className="forms-btn forms-btn__blue">
                    <img src="../../imgs/icons/icon-download.svg" alt="" className="forms-btn-icon"/>
                    <div className="forms-btn-text light">양식다운로드</div>
                </Link>
            </div>
            </div>
        </Layout>
    )
}

export default OfficialDetail