import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import MainForm from './components/MainForm'
import MainHoverContent from './components/MainHoverContent'
import styles from '../../css/Main.module.scss'
import { Link } from 'react-router-dom'
import CustomerService from '../../components/CustomerService'
import FamilySite from './components/FamilySite'
import Notice from './components/Notice'

function Main() {

    const [slider, setSlider] = useState(1)

    useEffect(() => {
        let slider_index = 1
        const interval = setInterval(() => {
            slider_index = slider_index % 3 + 1
            setSlider(slider_index)
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Layout>
            <div className={styles.body_wrapper}>
            <div className={styles.body_upper}>
                <div className={styles.body_slide}>
                    <div className={styles.body_slide_box}>
                        <div className={styles.body_slide_bar + ' ' + styles.slide_bar_3} onClick={() => setSlider(3)}>
                            검사센터
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
                                        검사센터
                                        </div>
                                    <div className={styles.description}>
                                        신원의료재단 검사센터는 최첨단 진단기법과 특수검사 개발과 적용을 위해<br />
                                        끊임없는 연구를 하고 있으며 최상의 진료 서비스를 진행하고 있습니다.
                                        </div>

                                    <Link to="/introduction/6" className={styles.more}>
                                        상세보기
                                        </Link>
                                </div>
                            </div>

                        </div>

                        <div className={styles.body_slide_bar + ' ' + styles.slide_bar_2} onClick={() => setSlider(2)}>
                            검사절차
                        </div>
                        <div className={slider === 2 ? styles.body_slide_card + ' ' + styles.active : styles.body_slide_card}>
                            <div className={styles.card_container} style={{ backgroundImage: "url('/imgs/img/slider2.png')" }}>
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
                            <div className={styles.card_container} style={{ backgroundImage: "url('/imgs/img/slider3.png')" }}>
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

                                    <Link to="/center" className={styles.more}>
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
                    <MainHoverContent type="white" img="/imgs/img/tech-sup.svg" text="원격지원" />
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