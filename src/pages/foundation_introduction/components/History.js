import React from 'react'
import styles from './css/History.module.scss'

const History = () => {
    return(
        <div className={styles.container}>
            <div className={styles.greeting_top_wrapper}>
                <img src="../imgs/img/greeting-top.png" alt="" className={styles.greeting_top_img}/>
            </div>
            <div className={styles.section}>
                <div className={styles.history_wrapper}>
                    <div className={styles.history_bar}>
                        <div className={styles.bar_text_1}>2015 - 현재</div>
                        <div className={styles.bar_text_2}>2010 - 2014</div>
                        <div className={styles.bar_text_3}>2005 - 2009</div>
                    </div>
                    <div className={styles.history_text_wrapper}>
                        <div className={styles.history_text_1}>
                            을지의료재단 MOU체결, 을지임상 검사센터 인수<br/>
                            메디포럼(MEDIFORUM) MOU 체결<br/>
                            ㈜ EDGC MOU 체결<br/>
                            ㈜ 바이오코리아 MOU 체결	<br/>
                            IRB(기관생명윤리 위원회) 기관 등록<br/>	
                            ㈜ 한국기업데이터 기술 역량 우수기업 인증<br/>	
                            전문의 부임(진단검사, 병리과)<br/>
                            병리과 / 진단검사의학과 정도관리 및 수탁인증 A등급 인증<br/>
                            분자유전학 연구소 확장 증설	<br/>
                            질병관리본부 메르스 및 지카바이러스 유전자 검사 실시기관 등록<br/>
                            유한대학교 산학협력 체결	<br/>
                            (주)휴먼패스(HUMANPASS) 업무제휴<br/>	
                            (주)JW바이오사이언스(중외) 업무제휴	<br/>
                            행정, 사무국, 광명 본사 통합	<br/>
                            진단 병리과 개설	<br/>
                            (주)마이크로젠(MACROGEN) 업무제휴
                        </div>
                        <div className={styles.history_text_2}>
                            사옥 확장 매입<br/>
                            (주)바이오인프라(BIOINFRA) 업무제휴	<br/>
                            (주)케어빌(CAREVILL) 업무제휴<br/>	
                            유비의학연구소 인수 / 합병<br/>	
                            (주)비즈먼트 수탁연동 업무제휴	<br/>
                            의료법인 신원의료재단 설립	<br/>
                            본사 이전 (광명시 소재 사옥 매입)<br/>	
                            전산 센터 서버 추가 도입	<br/>
                            검사정보 시스템 서버 증설	<br/>
                            자체 LIS 프로그램 개발 완료	<br/>
                            부천시 문화재단 후원	<br/>
                            검사정보관리 프로그램 (LIS) 자체 개발 착수<br/>
                            (주) 미애로 네트워크 MOU 체결
                        </div>
                        <div className={styles.history_text_3}>
                            부천시 우수 기업 표창<br/>
                            부천시 “Fifan 복사골” 문화 행사 후원<br/>
                            유전자 분석 연구실 개설<br/>
                            재단법인 청아장학재단 신원의학연구소로 변경	<br/>
                            메디원 임상검사센터 인수 합병 (M&A)	<br/>
                            난치성 환자 및 불우학생 장학금 지급	<br/>
                            분석 연구실 확장 증설	<br/>
                            명휘원 장애시설 봉사활동 후원<br/>	
                            (주)아주오토렌탈 업무 협약 체결	<br/>
                            전국 영업망 구축 (6개 사무소)<br/>
                            신생아대사이상 검사 인증 취득	<br/>
                            을지재단 임상검사센터 인수<br/>
                            성요셉의원 자원봉사 활동 및 후원<br/>
                            신원진단검사의학과의원 (신원의학연구소) 설립<br/>
                            대한진단검사의학회 KSCP 인증 획득<br/>
                            대한암예방학회 우수 검사실 인증 획득<br/>	
                            인구보건복지협회 기술 및 업무 제휴<br/>	
                            로슈 진단 업무 제휴 체결	<br/>
                            티앤씨병리과의원 업무 체결	<br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History