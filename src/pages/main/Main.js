import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import MainForm from './components/MainForm'
import MainHoverContent from './components/MainHoverContent'
import styles from '../../css/Main.module.scss'
import { Link } from 'react-router-dom'
import CustomerService from '../../components/CustomerService'
import FamilySite from './components/FamilySite'
import Notice from './components/Notice'
import axios from 'axios'

const PopupContent = ({file_url, p_height, p_width, onDeleteClick, onCloseClick, link}) => {
    var isUrl = file_url ? file_url.indexOf("http")>-1 : false
    return(
        <div style={{position: "fixed", top: "20px", left: "20px", zIndex: "99999"}}>
            <div style={{width: "100%", backgroundColor: "#ffffff", display: "flex", justifyContent: "space-between", padding: "5px 0px", position: "relative", bottom: "5px"}}>
                <div style={{fontSize: "16px", cursor: "pointer", marginRight: "10px"}} onClick={onCloseClick}>그만보기</div>
                <div style={{fontSize: "16px", cursor: "pointer", marginRight: "10px"}} onClick={onDeleteClick}>일주일간 보지않기</div>
            </div>
            {link ? (
                <iframe src={link} width={p_width} height={p_height} allowFullScreen/>
            ) : (
                <img src={isUrl ? file_url : `https://api.shinwon.org/media/${file_url}`} style={{height: p_height+"px", width: p_width+"px"}} alt=""/>
            )}
            
        </div>
    )
}

function Main() {

    const [slider, setSlider] = useState(1)
    const [ popups, setPopups ] = useState([])

    function getFormatDate(date){
        var year = date.getFullYear();              //yyyy
        var month = (1 + date.getMonth());          //M
        month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
        var day = date.getDate();                   //d
        day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
        return  year + '-' + month + '-' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
    }

    function setCookie(name, value, expireDays){
        var today = new Date()
        today.setDate(today.getDate() + expireDays)
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";"
    }



    useEffect(() => {
        let slider_index = 1
        const interval = setInterval(() => {
            slider_index = slider_index % 3 + 1
            setSlider(slider_index)
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let cookieData = document.cookie
        console.log(1)
        var today = new Date()
        localStorage.setItem("popup_display_none", "")
        axios.get(`https://api.shinwon.org/popup/?e_date=${getFormatDate(today)}`)
        .then(res => {
            setPopups(res.data['results'].filter(popup => cookieData.indexOf(popup.idx)===-1))    
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const deletePopup = (idx) => {
        setCookie(idx, idx, 7)
        setPopups(popups.filter(popup => popup.idx!==idx))
    }

    const closePopup = (idx) => {
        setPopups(popups.filter(popup => popup.idx!==idx))
    }

    return (
        <Layout>
            {popups.map(popup => (
                <PopupContent {...popup} key={popup.idx} onDeleteClick={() => deletePopup(popup.idx)} onCloseClick={() => closePopup(popup.idx)}/>
            ))}
            <div className={styles.body_wrapper}>
            <div className={styles.body_upper}>
                <div className={styles.body_slide}>
                    <div className={styles.body_slide_box}>
                        <div className={styles.body_slide_bar + ' ' + styles.slide_bar_3} onClick={() => setSlider(3)}>
                            검사실안내
                        </div>
                        <div className={slider === 3 ? styles.body_slide_card + ' ' + styles.active : styles.body_slide_card}>
                            <div className={styles.card_container} style={{ backgroundImage: "url('/imgs/img/slider1.png')" }}>
                                <div className={styles.white_box}>
                                    <div className={styles.sub_title}>
                                        “보다 더 건강한 삶과 생명을 생각하는”
                                        </div>
                                    <div className={styles.title}>
                                        의료법인 신원의료재단
                                        </div>

                                    <div className={styles.name}>
                                        검사실안내
                                        </div>
                                    <div className={styles.description}>
                                        신원의료재단 검사센터는 최첨단 진단기법과 특수검사 개발과 적용을 위해<br />
                                        끊임없는 연구를 하고 있으며 최상의 진료 서비스를 진행하고 있습니다.
                                        </div>

                                    <Link to="/center/1" className={styles.more}>
                                        상세보기
                                        </Link>
                                </div>
                            </div>

                        </div>

                        <div className={styles.body_slide_bar + ' ' + styles.slide_bar_2} onClick={() => setSlider(2)}>
                            검사절차
                        </div>
                        <div className={slider === 2 ? styles.body_slide_card + ' ' + styles.active : styles.body_slide_card}>
                            <div className={styles.card_container} style={{ backgroundImage: "url('/imgs/img/slider2.png')", backgroundPosition: "right" }}>
                                <div className={styles.white_box}>
                                    <div className={styles.sub_title}>
                                        “모든 사람이 건강한 세상”
                                        </div>
                                    <div className={styles.title}>
                                        신원의료재단이 만들어 갑니다.
                                        </div>

                                    <div className={styles.name}>
                                        검사절차
                                        </div>
                                    <div className={styles.description}>
                                        검사의 절차는 안내에 따라 검체 채취등의 방법등을 준수하여 진행됩니다.<br />
                                        신원의료재단의 적합한 절차에 따른 검사로 최고의 신뢰성을 자신합니다.
                                        </div>

                                    <Link to="/introduction/1" className={styles.more}>
                                        상세보기
                                        </Link>
                                </div>
                            </div>

                        </div>

                        <div className={styles.body_slide_bar + ' ' + styles.slide_bar_1} onClick={() => setSlider(1)}>
                            질환별안내
                        </div>
                        <div className={slider === 1 ? styles.body_slide_card + ' ' + styles.active : styles.body_slide_card}>
                            <div className={styles.card_container} style={{ backgroundImage: "url('/imgs/img/slider3.png')", backgroundPosition: "right" }}>
                                <div className={styles.white_box}>
                                    <div className={styles.sub_title}>
                                        모든 생명의 가치를 위한 열정의 노력
                                        </div>
                                    <div className={styles.title}>
                                        신원의료재단이 하고 있습니다.
                                        </div>

                                    <div className={styles.name}>
                                        질환별검사
                                        </div>
                                    <div className={styles.description}>
                                        질환의 종류에 따라 분류하여 최고의 전문의와 최첨단 검사장비로<br />
                                        각종 질환에 대한 정확한 정보를 분석합니다.
</div>

                                    <Link to="/introduction/6" className={styles.more}>
                                        상세보기
                                        </Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <MainForm/>
            </div>
            <div className={styles.body_lower}>
                <div className={styles.body_list}>
                    <MainHoverContent type="gray" img="/imgs/img/foundation-guide.png" text="재단안내" />
                    <MainHoverContent type="white" img="/imgs/img/network.svg" text="네트워크" />
                    <MainHoverContent type="gray" img="/imgs/img/doctor.svg" text="전문의" />
                    <MainHoverContent type="white" img="/imgs/img/new.svg" text="공문" />
                    <MainHoverContent type="gray" img="imgs/img/download.svg" text="양식다운로드" />
                </div>
                <div className={styles.body_sites}>
                    <Notice/>
                    <div className={styles.body_row}>
                        <FamilySite/>
                        <CustomerService/>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
    )
}

export default Main