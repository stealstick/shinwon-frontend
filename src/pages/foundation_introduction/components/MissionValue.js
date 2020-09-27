import React, { useState } from 'react'
import styles from './css/MissionValue.module.scss'
import classNames from 'classnames'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MissionValue = () => {

    AOS.init()

    const [ num, setNum ] = useState(1)

    const Content1 = () => {
        return(
            <div className={styles.section}>
                <div className={styles.mission_imgs_wrapper}>
                    <div data-aos="fade-up" className={styles.mission_content}>
                        <div className={styles.mission_img_wrapper}>
                            <img src="../imgs/img/mission1.png" alt="" className={styles.mission_img}/>
                        </div>
                        <div className={styles.mission_content_text}>
                            국민의 건강하고 행복한 삶을 위한<br/>
                            신원의 노력은 계속됩니다.
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.mission_content}>
                        <div className={styles.mission_img_wrapper}>
                            <img src="../imgs/img/mission2.svg" alt="" className={styles.mission_img}/>
                        </div>
                        <div className={styles.mission_content_text}>
                            질 높은 의료검사의 제공<br/>
                            정확한 질병의 진단 및 치료
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.mission_content}>
                        <div className={styles.mission_img_wrapper}>
                            <img src="../imgs/img/mission3.svg" alt="" className={styles.mission_img}/>
                        </div>
                        <div className={styles.mission_content_text}>
                            지속적인 정도관리<br/>
                            신 검사 도입/연구/개발/학술 교육<br/>
                            고객서비스 우선주의의 실천
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.mission_content}>
                        <div className={styles.mission_img_wrapper}>
                            <img src="../imgs/img/mission4.svg" alt="" className={styles.mission_img}/>
                        </div>
                        <div className={styles.mission_content_text}>
                            소통과 협력을 통한 고객만족<br/>
                            구성원의 자아개발 및 행복추구의 지원<br/>
                            지역사회 발전에 노력
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.mission_content}>
                        <div className={styles.mission_img_wrapper}>
                            <img src="../imgs/img/mission5.svg" alt="" className={styles.mission_img}/>
                        </div>
                        <div className={styles.mission_content_text}>
                            진단검사 자동화 시스템 구축<br/>
                            시장점유 확대<br/>
                            연구, 개발분야 해외시장 개척<br/>
                            국내외 병원과 협력 및 연구
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.mission_content}>
                        <div className={styles.mission_img_wrapper}>
                            <img src="../imgs/img/mission6.svg" alt="" className={styles.mission_img}/>
                        </div>
                        <div className={styles.mission_content_text}>
                            함께 사는 세상에 대한 배려와<br/>
                            최선을 다하는 열정 정직한 마음으로<br/>
                            진취적인 상상력 열린 소통과 화합
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const Content2 = () => {
        return(
            <div className={styles.section}>
                <div className={styles.policy_wrapper}>
                    <div data-aos="fade-up" className={styles.policy_content}>
                        <div className={styles.policy_title}>
                            신원의료재단<br/>
                            경영방침
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.policy_content}>
                        <div className={styles.policy_content_title}>Business Management Motto</div>
                        <div className={styles.policy_img_wrapper}>
                            <img src="../imgs/img/policy1.svg" alt="" className={styles.policy_img}/>
                        </div>
                        
                        <div className={styles.policy_summary}>효율적이고 창의적인 조직 운영관리</div>
                        <div className={styles.policy_text}>
                            봉사와 사회공헌 활동의 위한 조직체 구성<br/>
                            정직하고 투명한 경영<br/>
                            발전적인 미래에 대한 비젼 제시
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.policy_content}>
                        <div className={styles.policy_content_title}>Compution and Information</div>
                        <div className={styles.policy_img_wrapper}>
                            <img src="../imgs/img/policy2.svg" alt="" className={styles.policy_img}/>
                        </div>
                        <div className={styles.policy_summary}>시스템으로 구성된 스마트전산구축</div>
                        <div className={styles.policy_text}>
                            통합의료시스템 개발/관리<br/>
                            자체개발 LIS 프로그램 통합 구축<br/>
                            전산 센터 스마트화 구축<br/>
                            S.M.T.P 구축/제공	
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.policy_content}>
                        <div className={styles.policy_content_title}>Diagnostic Inventory</div>
                        <div className={styles.policy_img_wrapper}>
                            <img src="../imgs/img/policy3.svg" alt="" className={styles.policy_img}/>
                        </div>
                        <div className={styles.policy_summary}>정확한 결과로 최고의 품질제공</div>
                        <div className={styles.policy_text}>
                            지속적 투자를 바탕으로한 의료 장비 고급화<br/>
                            검사 원가 절감과 더불어 운용의 효율성 확보<br/>
                            정확한 QC 관리<br/>
                            Smart LAB 구현
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.policy_content}>
                        <div className={styles.policy_content_title}>Sales Dept</div>
                        <div className={styles.policy_img_wrapper}>
                            <img src="../imgs/img/policy4.svg" alt="" className={styles.policy_img}/>
                        </div>
                        <div className={styles.policy_summary}>창조적 시장개척</div>
                        <div className={styles.policy_text}>
                            도덕적의식 바탕의 영업 건전성 확보<br/>
                            효과적인 계획 수립과 관리를 통한 고객관리<br/>
                            지속적이고 탄력적인 고객서비스 제공 및 관리
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.policy_content}>
                        <div className={styles.policy_content_title}>Medical Information</div>
                        <div className={styles.policy_img_wrapper}>
                            <img src="../imgs/img/policy5.svg" alt="" className={styles.policy_img}/>
                        </div>
                        <div className={styles.policy_summary}>고객만족/가치향상</div>
                        <div className={styles.policy_text}>
                            홍보전략 강화 및 R&D 투자 확대<br/>
                            신규 ITEM 개발 및 관리<br/>
                            학술정보에 대한 교육 강화<br/>	
                            효율적인 부서간 협조 체계 구축<br/>	
                            고객 서비스에 대한 만족도 극대	
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const Content3 = () => {
        return(
            <div className={styles.section}>
                <div data-aos="fade-up" className={styles.goal_top}>
                    <img src="../imgs/img/goal1.svg" alt="" className={styles.goal_top_img}/>
                    <div className={styles.goal_top_text}>냉철하되 너그럽고 착하게 경영하자!</div>
                </div>
                <img data-aos="fade-up" src="../imgs/img/goal2.svg" alt="" className={styles.goal_img_2}/>
                <div data-aos="fade-up" className={styles.goal_img_wrapper}>
                    <img src="../imgs/img/goal3.svg" alt="" className={styles.goal_img_3}/>
                    <img src="../imgs/img/goal4.svg" alt="" className={styles.goal_img_4}/>
                </div>
                <div data-aos="fade-up" className={styles.goal_text}>
                    끊임없는 도전과 열정으로 21세기 의학 발전에 기여하고<br/>
                    보다 높은 수준의 진단 검사 및 교육을 통하여 양질의 서비스를 제공할 것을 약속드립니다.<br/><br/>
                    이를 위해 우리는 상호 존중하는 인격과 책임 의식을 바탕으로 부단한 연구를 통하여 모든 사람들이 건강하고,<br/>
                    행복한 삶을 추구하는데 앞장서며 사랑과 봉사의 정신으로 실천하는 신원의료재단이 되겠습니다.<br/>
                </div>
            </div>
        )
    }

    const Content4 = () => {
        return(
            <div className={styles.section}>
                <div data-aos="fade-up" className={styles.identity_title}>CI (Identity) / SYMBOL</div>
                <div className={styles.identity_wrapper}>
                    <div data-aos="fade-up" className={styles.identity_content_top}>
                        <div className={styles.identity_subtitle}>
                            <div className={styles.rect}/>
                            <div className={styles.subtitle_text}>국문</div>
                        </div>
                        <div className={styles.identity_img_wrapper}>
                            <img src="../imgs/img/identity2.svg" alt="" className={styles.identity_img}/>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.identity_content_bot}>
                        <div className={styles.identity_symbol_wrapper}>
                            <div className={styles.identity_subtitle}>
                                <div className={styles.rect}/>
                                <div className={styles.subtitle_text}>SYMBOL</div>
                            </div>
                            <div className={styles.symbol_img_wrapper}>
                                <img src="../imgs/img/identity4.svg" alt="" className={styles.symbol_img}/>
                            </div>
                        </div>
                        <div className={styles.identity_color_wrapper}>
                            <div className={styles.color_wrapper}>
                                <div data-aos="fade-up" className={styles.identity_subtitle}>
                                    <div className={styles.rect}/>
                                    <div className={styles.subtitle_text}>COLOR</div>
                                </div>
                                <div data-aos="fade-up" className={styles.color_contents}>
                                    <div className={styles.color_content}/>
                                    <div className={styles.color_content}/>
                                    <div className={styles.color_content}/>
                                    <div className={styles.color_content}/>
                                </div>
                            </div>
                            <div data-aos="fade-up" className={styles.download_wrapper}>
                                <div className={styles.identity_subtitle}>
                                    <div className={styles.rect}/>
                                    <div className={styles.subtitle_text}>CI DOWNLOAD</div>
                                </div>
                                <div className={styles.download_sticky}>신원의료재단 로고 다운로드</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <div className={styles.mission_top_wrapper}>
                <div onClick={() => setNum(1)} className={num===1 ? classNames(styles.mission_top_content, styles.mission_top_selected) : styles.mission_top_content}>사명과가치</div>
                <div onClick={() => setNum(2)} className={num===2 ? classNames(styles.mission_top_content, styles.mission_top_selected) : styles.mission_top_content}>경영방침</div>
                <div onClick={() => setNum(3)} className={num===3 ? classNames(styles.mission_top_content, styles.mission_top_selected) : styles.mission_top_content}>경영목표</div>
                <div onClick={() => setNum(4)} className={num===4 ? classNames(styles.mission_top_content, styles.mission_top_selected) : styles.mission_top_content}>IDENTITY</div>
            </div>
            <div className={styles.greeting_top_wrapper}>
                <img src="../imgs/img/greeting-top.png" alt="" className={styles.greeting_top_img}/>
            </div>
            {num===1 ? <Content1/> :
            num===2 ? <Content2/> :
            num===3 ? <Content3/> : 
            <Content4/>}
        </div>
    )
}

export default MissionValue