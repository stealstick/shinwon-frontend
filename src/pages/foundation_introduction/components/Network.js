import React, { useState } from 'react'
import styles from './css/Network.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Network = () => {

    AOS.init()

    const [ area, setArea ] = useState("서울")

    const Seoul = () => {
        return(
        <div className={styles.network_area_contents}>
            <div className={styles.network_area_content}>
                <div className={styles.network_area_content_title}>&nbsp;&nbsp;영업본부</div>
                <div className={styles.network_area_content_bold}>연락처: 
                    <span className={styles.network_area_content_text}>사무실 1899-1510 팩스 02-801-5100</span>
                </div>
                <div className={styles.network_area_content_bold}>우편번호:
                    <span className={styles.network_area_content_text}>14316</span>
                </div>
                <div className={styles.network_area_content_bold}>주소:
                    <span className={styles.network_area_content_text}>경기도 광명시 소하로 109번길 15 소하토피아 502호</span>
                </div>
                <div className={styles.network_area_content_bold}>담당지역:
                    <span className={styles.network_area_content_text}>서울 전 지역</span>
                </div>
            </div>
            <div className={styles.network_area_content}>
                <div className={styles.network_area_content_title}>&nbsp;&nbsp;강남영업소</div>
                <div className={styles.network_area_content_bold}>연락처: 
                    <span className={styles.network_area_content_text}>사무실 031-751-1815, 031-751-1840 팩스 031-751-1816</span>
                </div>
                <div className={styles.network_area_content_bold}>우편번호:
                    <span className={styles.network_area_content_text}>06376</span>
                </div>
                <div className={styles.network_area_content_bold}>주소:
                    <span className={styles.network_area_content_text}>경기도 성남시 수정구 위례서일로 30 307호</span>
                </div>
                <div className={styles.network_area_content_bold}>담당지역:
                    <span className={styles.network_area_content_text}>서울 전 지역</span>
                </div>
            </div>
            <div className={styles.network_area_content}>
                <div className={styles.network_area_content_title}>&nbsp;&nbsp;강북1영업소</div>
                <div className={styles.network_area_content_bold}>연락처: 
                    <span className={styles.network_area_content_text}>사무실 02-936-3330 팩스 02-936-9397</span>
                </div>
                <div className={styles.network_area_content_bold}>우편번호:
                    <span className={styles.network_area_content_text}>01905</span>
                </div>
                <div className={styles.network_area_content_bold}>주소:
                    <span className={styles.network_area_content_text}>서울시 노원구 월계동 321-2번지 희성프라자 305호</span>
                </div>
                <div className={styles.network_area_content_bold}>담당지역:
                    <span className={styles.network_area_content_text}>서울 강북 지역, 의정부시, 포천시, 남양주시, 구리시</span>
                </div>
            </div>
            
            <div className={styles.network_area_content}>
                <div className={styles.network_area_content_title}>&nbsp;&nbsp;강북2영업소</div>
                <div className={styles.network_area_content_bold}>연락처: 
                    <span className={styles.network_area_content_text}>사무실 02-971-0010 팩스 02-972-0130</span>
                </div>
                <div className={styles.network_area_content_bold}>우편번호:
                    <span className={styles.network_area_content_text}>01905</span>
                </div>
                <div className={styles.network_area_content_bold}>주소:
                    <span className={styles.network_area_content_text}>서울시 노원구 월계동 321-2번지 희성프라자 302호</span>
                </div>
                <div className={styles.network_area_content_bold}>담당지역:
                    <span className={styles.network_area_content_text}>서울 전 지역</span>
                </div>
            </div>
            <div className={styles.network_area_content}>
                <div className={styles.network_area_content_title}>&nbsp;&nbsp;강북3영업소</div>
                <div className={styles.network_area_content_bold}>연락처: 
                    <span className={styles.network_area_content_text}>사무실 02-3296-6333 팩스 02-3296-6335</span>
                </div>
                <div className={styles.network_area_content_bold}>우편번호:
                    <span className={styles.network_area_content_text}>01905</span>
                </div>
                <div className={styles.network_area_content_bold}>주소:
                    <span className={styles.network_area_content_text}>서울시 노원구 월계동 321-2번지 희성프라자 408호</span>
                </div>
                <div className={styles.network_area_content_bold}>담당지역:
                    <span className={styles.network_area_content_text}>동대문구, 중랑구, 성동구, 광진구일부, 노원구일부, 남양주시, 구리시</span>
                </div>
            </div>
            <div className={styles.network_area_content}>
                <div className={styles.network_area_content_title}>&nbsp;&nbsp;동부영업소</div>
                <div className={styles.network_area_content_bold}>연락처: 
                    <span className={styles.network_area_content_text}>사무실 02-443-8710 팩스 02-443-8712</span>
                </div>
                <div className={styles.network_area_content_bold}>우편번호:
                    <span className={styles.network_area_content_text}>05801</span>
                </div>
                <div className={styles.network_area_content_bold}>주소:
                    <span className={styles.network_area_content_text}>서울시 송파구 문정동 102-1 402호</span>
                </div>
                <div className={styles.network_area_content_bold}>담당지역:
                    <span className={styles.network_area_content_text}>서울 남동부 지역, 하남시, 성남시, 수원시</span>
                </div>
            </div>
            <div className={styles.network_area_content}>
                <div className={styles.network_area_content_title}>&nbsp;&nbsp;서부영업소</div>
                <div className={styles.network_area_content_bold}>연락처: 
                    <span className={styles.network_area_content_text}>사무실 02-6401-8330 팩스 02-6401-7550</span>
                </div>
                <div className={styles.network_area_content_bold}>우편번호:
                    <span className={styles.network_area_content_text}>07551</span>
                </div>
                <div className={styles.network_area_content_bold}>주소:
                    <span className={styles.network_area_content_text}>서울시 강서구 양천로 564 등촌두산위브센티움 211호</span>
                </div>
                <div className={styles.network_area_content_bold}>담당지역:
                    <span className={styles.network_area_content_text}>서울 남서부 지역</span>
                </div>
            </div>
            <div className={styles.network_area_content}>
                <div className={styles.network_area_content_title}>&nbsp;&nbsp;중부영업소</div>
                <div className={styles.network_area_content_bold}>연락처: 
                    <span className={styles.network_area_content_text}>사무실 02-376-9031 팩스 02-376-9033</span>
                </div>
                <div className={styles.network_area_content_bold}>우편번호:
                    <span className={styles.network_area_content_text}>03493</span>
                </div>
                <div className={styles.network_area_content_bold}>주소:
                    <span className={styles.network_area_content_text}>서울시 은평구 증산로3길 26-1 우방아파트 상가동 202호</span>
                </div>
                <div className={styles.network_area_content_bold}>담당지역:
                    <span className={styles.network_area_content_text}>서울 북서부 지역, 고양시</span>
                </div>
            </div>
        </div>
        )
    }

    const Gyeonggi = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;경기1영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 031-213-8601 팩스 031-213-8604</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>16226</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>경기도 수원시 영통구 이의동 1277-1번지,1층</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>경기 전 지역</span>
                    </div>
                </div>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;경기2영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 031-213-8601 팩스 031-213-8604</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>16226</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>경기도 수원시 영통구 이의동 1277-1번지,1층</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>경기 전 지역</span>
                    </div>
                </div>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;광명영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 02-899-7080 팩스 02-899-7078</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>14316</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>경기도 광명시 소하로 109번길 15 소하토피아 504호</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>경기 전 지역</span>
                    </div>
                </div>
            </div>
        )
    }  

    const Incheon = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;경인영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 032-321-5851 팩스 032-321-5855</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>14548</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>경기도 부천시 중동로 248번길 38 메트로폴리스2차 A동 208호</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>부천시, 김포시, 인천 일부</span>
                    </div>
                </div>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;인천1영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 032-465-7621 팩스 032-465-7623</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>21532</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>인천시 남동구 장수동 778-4 진환빌딩 B1</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>인천 전 지역</span>
                    </div>
                </div>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;인천2영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 031-434-8828 팩스 031-434-8830</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}></span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>경기도 시흥시 정왕동 1772-6 시흥배곧신도시C1판매시설 A동 249호</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>인천 전 지역</span>
                    </div>
                </div>
            </div>
        )
    }

    const Busan = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;부산사무소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 051-943-6881 팩스 051-943-6882</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>48239</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>부산광역시 수영구 망미동 979-72 현대한누리 상가 202호</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>부산 전 지역</span>
                    </div>
                </div>
            </div>
        )
    }

    const Gyeongnam = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;부산사무소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 051-943-6881 팩스 051-943-6882</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>48239</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>부산광역시 수영구 망미동 979-72 현대한누리 상가 202호</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>경남 전 지역</span>
                    </div>
                </div>
            </div>
        )
    }

    const Ulsan = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;부산사무소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 051-943-6881 팩스 051-943-6882</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>48239</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>부산광역시 수영구 망미동 979-72 현대한누리 상가 202호</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>울산 전 지역</span>
                    </div>
                </div>
            </div>
        )
    }

    const Daegu = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;대구영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 053-745-9395 팩스 053-745-9396</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>41250</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>대구광역시 동구 동부로 22길 76 2층</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>대구 전 지역</span>
                    </div>
                </div>
            </div>
        )
    }

    const Gyeongbuk = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;대구영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 053-745-9395 팩스 053-745-9396</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>41250</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>대구광역시 동구 동부로 22길 76 2층</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>경북 전 지역</span>
                    </div>
                </div>
            </div>
        )
    }

    const Daejeon = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;대전영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 042-485-6001 팩스 042-483-9001</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>35209</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>대전광역시 서구 둔산동 939번지 매그놀리아 23층 2307호</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>대전 전 지역</span>
                    </div>
                </div>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;대전2영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 042-824-7585 팩스 042-824-7584</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>34167</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>대전광역시 유성구 궁동 480-2 카리나오피스텔 202호</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>대전 전 지역</span>
                    </div>
                </div>
            </div>
        )
    }

    const Chungbuk = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;충주영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 043-853-4701 팩스 043-843-4701</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>27356</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>충청북도 충주시 연수동 1280번지 1층</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>충주 전 지역</span>
                    </div>
                </div>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;청주영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 010-8836-2441 팩스 043-241-2441</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>27356</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>충청북도 청주시 서원구 구룡산로51번나길 6 골든빌 1층 101호</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>청주 전 지역</span>
                    </div>
                </div>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;청주2영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 043-904-0008 팩스 043-904-0088</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>28376</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>충청북도 청주시 홍덕구 강서동 51-7 1층</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>청주 전 지역</span>
                    </div>
                </div>
            </div>
        )
    }

    const Chungnam = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;천안영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 041-622-6855 팩스 041-622-6956</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>31087</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>충청남도 천안시 서북구 백석동 1077번지(워너빌)1층</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>충남 전 지역</span>
                    </div>
                </div>
            </div>
        )
    }

    const Gangwon = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;원주영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 033-737-0131 팩스 033-737-0133</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>26423</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>강원도 원주시 단계동 835-5번지 1층 좌측상가</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>강원 전 지역</span>
                    </div>
                </div>
            </div>
        )
    }

    const Jeonbuk = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;전북영업소</div>
                    <div className={styles.network_area_content_bold}>연락처: 
                        <span className={styles.network_area_content_text}>사무실 063-905-5588 팩스 063-905-5591</span>
                    </div>
                    <div className={styles.network_area_content_bold}>우편번호:
                        <span className={styles.network_area_content_text}>55018</span>
                    </div>
                    <div className={styles.network_area_content_bold}>주소:
                        <span className={styles.network_area_content_text}>전라북도 전주시 덕진구 인후동1가 849-9 2층</span>
                    </div>
                    <div className={styles.network_area_content_bold}>담당지역:
                        <span className={styles.network_area_content_text}>전북 전 지역</span>
                    </div>
                </div>
            </div>
        )
    }

    const Gwangju = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;지역영업소 준비중입니다.</div>
                </div>
            </div>
        )
    }
    
    const Jeonnam = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;지역영업소 준비중입니다.</div>
                </div>
            </div>
        )
    }

    const Jeju = () => {
        return(
            <div className={styles.network_area_contents}>
                <div className={styles.network_area_content}>
                    <div className={styles.network_area_content_title}>&nbsp;&nbsp;지역영업소 준비중입니다.</div>
                </div>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <div className={styles.greeting_top_wrapper}>
                <img src="../imgs/img/greeting-top.png" alt="" className={styles.greeting_top_img}/>
            </div>
            <div className={styles.section}>
                <div data-aos="fade-up"  data-aos-duration="2000" className={styles.network_top_wrapper}>
                    <img src="../imgs/img/network-pin-big.svg" alt="" className={styles.network_top_icon}/>
                    <div className={styles.network_top_text}>신원의료재단 전국네트워크 영업소 위치안내</div>
                </div>
                <div className={styles.network_content_wrapper}>
                    <div data-aos="fade-up"  data-aos-duration="2000" className={styles.network_map_wrapper}>
                        <div className={styles.network_map_sticky}>
                            <div onClick={() => setArea("서울")} className={styles.pin_seoul + " " + styles.pin}/>
                            <div onClick={() => setArea("강원")} className={styles.pin_gangwon + " " + styles.pin}/>
                            <div onClick={() => setArea("인천")} className={styles.pin_incheon + " " + styles.pin}/>
                            <div onClick={() => setArea("경기")} className={styles.pin_gyeonggi + " " + styles.pin}/>
                            <div onClick={() => setArea("충남")} className={styles.pin_chungnam + " " + styles.pin}/>
                            <div onClick={() => setArea("충북")} className={styles.pin_chungbuk + " " + styles.pin}/>
                            <div onClick={() => setArea("대전")} className={styles.pin_daejeon + " " + styles.pin}/>
                            <div onClick={() => setArea("경북")} className={styles.pin_gyeongbuk + " " + styles.pin}/>
                            <div onClick={() => setArea("대구")} className={styles.pin_daegu + " " + styles.pin}/>
                            <div onClick={() => setArea("울산")} className={styles.pin_ulsan + " " + styles.pin}/>
                            <div onClick={() => setArea("부산")} className={styles.pin_busan + " " + styles.pin}/>
                            <div onClick={() => setArea("전남")} className={styles.pin_jeonnam + " " + styles.pin}/>
                            <div onClick={() => setArea("전북")} className={styles.pin_jeonbuk + " " + styles.pin}/>
                            <div onClick={() => setArea("광주")} className={styles.pin_gwangju + " " + styles.pin}/>
                            <div onClick={() => setArea("경남")} className={styles.pin_gyeongnam + " " + styles.pin}/>
                            <div onClick={() => setArea("제주")} className={styles.pin_jeju + " " + styles.pin}/>
                        </div>
                        
                    </div>
                    <div data-aos="fade-up"  data-aos-duration="2000" className={styles.network_area_wrapper}>
                        <div className={styles.network_area_title_wrapper}>
                            <div className={styles.network_area_title}>{area}지역</div>
                            <div className={styles.network_area_subtitle}>
                                {area}지역 네트워크 위치입니다.<br/>
                                지역 영업소의 위치/연락처를 알려드리고 있습니다.
                            </div>
                        </div>
                        {area==="서울" ? <Seoul/> : 
                        area==="경기" ? <Gyeonggi/> : 
                        area==="인천" ? <Incheon/> : 
                        area==="부산" ? <Busan/> : 
                        area==="경남" ? <Gyeongnam/> : 
                        area==="울산" ? <Ulsan/> : 
                        area==="대구" ? <Daegu/> : 
                        area==="경북" ? <Gyeongbuk/> :
                        area==="대전" ? <Daejeon/> :
                        area==="충북" ? <Chungbuk/> :
                        area==="충남" ? <Chungnam/> :
                        area==="강원" ? <Gangwon/> :
                        area==="전북" ? <Jeonbuk/> : 
                        area==="전남" ? <Jeonnam/> :
                        area==="광주" ? <Gwangju/> : 
                        area==="제주" ? <Jeju/> : null}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Network