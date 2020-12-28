import React from 'react'
import styles from './css/History.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const History = () => {

    AOS.init()

    return(
        <div className={styles.container}>
            <div className={styles.greeting_top_wrapper}>
                <img src="../imgs/img/greeting-top.png" alt="" className={styles.greeting_top_img}/>
            </div>
            <div className={styles.section}>
                <div className={styles.history_wrapper}>
                    <div className={styles.divider}/>
                    <span data-aos="fade-up"  data-aos-duration="2000" className={styles.year_wrapper}>
                    <div className={styles.big_round}>2020</div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>임상적성능시험기관지정(식약청)</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>서울시 개원내과의사회 춘계학회 참여</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>진단검사의학부 검사 장비 증설, 업무공간 확장</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>COVID-19 유전자 진단검사기관 지정</div>
                    </div>
                    </span>
                    <span data-aos="fade-up"  data-aos-duration="2000" className={styles.year_wrapper}>
                    <div className={styles.big_round}>2019</div>
                    
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>신원의료재단 봉사단 출범(연탄나눔봉사)</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>영업부문 6개 영업소 증설(구 BML)</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>병리과 Tissue Process 추가 도입</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>   
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>IRB(기관생명윤리위원회)개원 승인</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    </span>
                    <span data-aos="fade-up"  data-aos-duration="2000" className={styles.year_wrapper}>
                    <div className={styles.big_round}>2018</div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>을지의료재단 MOU체결, 을지임상 검사센터 인수</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>메디포럼(MEDIFORUM) MOU 체결</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>㈜ EDGC MOU 체결</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>㈜ 바이오코리아 MOU 체결</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>IRB(기관생명윤리 위원회) 기관 등록</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>㈜ 한국기업데이터 기술 역량 우수기업 인증</div>
                    </div>
                    </span>
                    <span data-aos="fade-up"  data-aos-duration="2000" className={styles.year_wrapper}>
                    <div className={styles.big_round}>2017</div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>전문의 부임(진단검사, 병리과)</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>병리과 / 진단검사의학과 정도관리 및 수탁인증 A등급 인증</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>분자유전학 연구소 확장 증설</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    </span>
                    <span data-aos="fade-up"  data-aos-duration="2000" className={styles.year_wrapper}>
                    <div className={styles.big_round}>2016</div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>질병관리본부 메르스 및 지카바이러스 유전자 검사 실시기관 등록</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>유한대학교 산학협력 체결</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>(주)휴먼패스(HUMANPASS) 업무제휴</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>(주)JW바이오사이언스(중외) 업무제휴</div>
                    </div>
                    </span>
                    <span data-aos="fade-up"  data-aos-duration="2000" className={styles.year_wrapper}>
                    <div className={styles.big_round}>2015</div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>행정, 사무국, 광명 본사 통합</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>    
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>진단 병리과 개설</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>(주)마이크로젠(MACROGEN) 업무제휴</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    </span>
                    <span data-aos="fade-up"  data-aos-duration="2000" className={styles.year_wrapper}>
                    <div className={styles.big_round}>
                        <div className={styles.two_line_text}>2010</div>
                        <div className={styles.two_line_flow}>~</div>
                        <div className={styles.two_line_text}>2014</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>사옥 확장 매입</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>(주)바이오인프라(BIOINFRA) 업무제휴</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>(주)케어빌(CAREVILL) 업무제휴</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>유비의학연구소 인수 / 합병</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>(주)비즈먼트 수탁연동 업무제휴</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>본사 이전 (광명시 소재 사옥 매입)</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>전산 센터 서버 추가 도입</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>검사정보 시스템 서버 증설</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>자체 LIS 프로그램 개발 완료</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>부천시 문화재단 후원</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>검사정보관리 프로그램 (LIS) 자체 개발 착수</div>
                    </div>
                    <div className={styles.row_right}>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                        <div className={styles.row_text}>(주) 미애로 네트워크 MOU 체결</div>
                    </div>
                    </span>
                    <span data-aos="fade-up"  data-aos-duration="2000" className={styles.year_wrapper}>
                    <div className={styles.big_round}>
                        <div className={styles.two_line_text}>2005</div>
                        <div className={styles.two_line_flow}>~</div>
                        <div className={styles.two_line_text}>2009</div>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>부천시 우수 기업 표창</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>부천시 “Fifan 복사골” 문화 행사 후원</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>유전자 분석 연구실 개설</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>재단법인 청아장학재단 신원의학연구소로 변경</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>메디원 임상검사센터 인수 합병 (M&A)</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>난치성 환자 및 불우학생 장학금 지급</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>분석 연구실 확장 증설</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>명휘원 장애시설 봉사활동 후원</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>(주)아주오토렌탈 업무 협약 체결</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>전국 영업망 구축 (6개 사무소)</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>신생아대사이상 검사 인증 취득</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>을지재단 임상검사센터 인수</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>성요셉의원 자원봉사 활동 및 후원</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>신원진단검사의학과의원 (신원의학연구소) 설립</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>대한진단검사의학회 KSCP 인증 획득</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>대한암예방학회 우수 검사실 인증 획득</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>인구보건복지협회 기술 및 업무 제휴</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    <div className={styles.row_left}>
                        <div className={styles.row_text}>로슈 진단 업무 제휴 체결</div>
                        <img src={require('./css/small-round.svg')} alt="" className={styles.small_round}/>
                    </div>
                    </span>
                    
                </div>
            </div>
        </div>
    )
}

export default History