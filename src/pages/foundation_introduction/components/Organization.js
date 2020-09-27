import React from 'react'
import styles from './css/Organization.module.scss'

const Organization = () => {
    return(
        <div className={styles.container}>
            <div className={styles.greeting_top_wrapper}>
                <img src="../imgs/img/greeting-top.png" alt="" className={styles.greeting_top_img}/>
            </div>
            <div className={styles.section}>
                <div className={styles.greeting_title}>조직도</div>
                <div className={styles.org_wrapper}>
                    <img src="../imgs/img/ceo.svg" alt="" className={styles.org_ceo}/>
                    <img src="../imgs/img/org-oval.svg" alt="" className={styles.org_oval}/>
                    <div className={styles.org_content_wrapper}>
                        <div className={styles.org_content_line}>
                            <div className={styles.org_top_content}>
                                <div className={styles.org_top_title}>경영센터</div>
                                <div className={styles.org_top_eng}>행정원장 / 센터장</div>
                                <div className={styles.org_top_small}>Executice Director</div>
                            </div>
                            <div className={styles.org_content}>
                                <div className={styles.org_content_title}>재단사무국</div>
                                <div className={styles.org_content_class}>상무이사</div>
                                <div className={styles.org_content_eng}>Executice Director</div>
                                <div className={styles.org_content_team}>
                                    인사총무팀<br/>
                                    재경팀<br/>
                                    물류팀<br/>
                                    구매팀
                                </div>
                            </div>
                            <div className={styles.org_content}>
                                <div className={styles.org_content_title}>경영기획실</div>
                                <div className={styles.org_content_class}>상무이사</div>
                                <div className={styles.org_content_eng}>Management Director</div>
                                <div className={styles.org_content_team}>
                                    법무감사팀<br/>
                                    신사업개발팀<br/>
                                    특영사업팀<br/>
                                    인력개발팀
                                </div>
                            </div>
                            <div className={styles.org_content}>
                                <div className={styles.org_content_title}>사업본부</div>
                                <div className={styles.org_content_class}>상무이사</div>
                                <div className={styles.org_content_eng}>Business Director</div>
                                <div className={styles.org_content_team}>
                                    영업본부<br/>
                                    학술/고객지원부<br/>
                                    전국네트워크
                                </div>
                            </div>
                            <div className={styles.org_content}>
                                <div className={styles.org_content_title}>전산팀</div>
                                <div className={styles.org_content_eng}></div>
                                <div className={styles.org_content_team}>
                                    운영팀<br/>
                                    개발팀
                                </div>
                            </div>
                        </div>
                        <div className={styles.org_content_line}>
                            <div className={styles.org_top_content}>
                                <div className={styles.org_top_title}>의료센터</div>
                                <div className={styles.org_top_eng}>대표원장 / 센터장</div>
                                <div className={styles.org_top_small}>Head of M.C</div>
                            </div>
                            <div className={styles.org_content}>
                                <div className={styles.org_content_title}>전문의</div>
                                <div className={styles.org_content_eng}>Medical Doctor</div>
                                <div className={styles.org_content_team}>
                                    센터부원장<br/>
                                    원장<br/>
                                    원장
                                </div>
                            </div>
                            <div className={styles.org_content}>
                                <div className={styles.org_content_title}>진단검사부</div>
                                <div className={styles.org_content_class}>이사</div>
                                <div className={styles.org_content_eng}>Director</div>
                                <div className={styles.org_content_team}>
                                    진단면역팀<br/>
                                    진단혈액팀<br/>
                                    임상미생물팀<br/>
                                    요검경학팀<br/>
                                    임상화학팀
                                </div>
                            </div>
                            <div className={styles.org_content}>
                                <div className={styles.org_content_title}>분자유전부</div>
                                <div className={styles.org_content_class}>상무이사</div>
                                <div className={styles.org_content_eng}>Business Director</div>
                                <div className={styles.org_content_team}>
                                    관리팀<br/>
                                    STD팀<br/>
                                    HPV팀<br/>
                                    T/D팀
                                </div>
                            </div>
                        </div>
                        <div className={styles.org_content_line}>
                            <div className={styles.org_top_content}>
                                <div className={styles.org_top_title}>병리센터</div>
                                <div className={styles.org_top_eng}>대표원장 / 센터장</div>
                                <div className={styles.org_top_small}>Head of P.C</div>
                            </div>
                            <div className={styles.org_content}>
                                <div className={styles.org_content_title}>전문의</div>
                                <div className={styles.org_content_eng}>Medical Doctor</div>
                                <div className={styles.org_content_team}>
                                    센터부원장<br/>
                                    원장<br/>
                                    원장
                                </div>
                            </div>
                            <div className={styles.org_content}>
                                <div className={styles.org_content_title}>조직병리부</div>
                                <div className={styles.org_content_eng}>Histopathology</div>
                            </div>
                            <div className={styles.org_content}>
                                <div className={styles.org_content_title}>세포병리부</div>
                                <div className={styles.org_content_eng}>Cell pathology</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.org_table_wrapper}>
                    <div className={styles.org_table_title}>고객지원 대표번호 &nbsp;1899-1510</div>
                    <div className={styles.org_table_sticky}>
                        <div className={styles.org_table_content}>
                            <div className={styles.table_title}>업무내용</div>
                            <div className={styles.table_text}>일반행정, 인사, 재무</div>
                            <div className={styles.table_text}>영업부서 총괄</div>
                            <div className={styles.table_text}>전산업무 관련</div>
                            <div className={styles.table_text}>검사 관련 문의</div>
                        </div>
                        <div className={styles.org_table_content}>
                            <div className={styles.table_title}>담당 부서</div>
                            <div className={styles.table_text}>경영관리부</div>
                            <div className={styles.table_text}>영업 본부</div>
                            <div className={styles.table_text}>전산부</div>
                            <div className={styles.table_text}>고객지원부</div>
                        </div>
                        <div className={styles.org_table_content}>
                            <div className={styles.table_title}>전화번호</div>
                            <div className={styles.table_text}>내선 104 ~ 106</div>
                            <div className={styles.table_text}>내선 201 ~ 202</div>
                            <div className={styles.table_text}>내선 502 , 500</div>
                            <div className={styles.table_text}>내선 702 , 700</div>
                        </div>
                        <div className={styles.org_table_content}>
                            <div className={styles.table_title}>팩스번호</div>
                            <div className={styles.table_text}>02-801-5100</div>
                            <div className={styles.table_text}>02-801-5100</div>
                            <div className={styles.table_text}>02-801-5100</div>
                            <div className={styles.table_text}>02-801-5100</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organization