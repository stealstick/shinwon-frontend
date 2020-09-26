import React from 'react'
import styles from './css/Contact.module.scss'
import SectionTitle from '../../../components/SectionTitle'

const Contact = () => {
    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <SectionTitle kor="위치안내" eng="CONTACT US"/>
                <div className={styles.title_normal}>의료법인 신원의료재단으로 오시는 길 안내입니다.</div>
                <div className={styles.address_wrapper}>
                    <div className={styles.address_content}>
                        <div className={styles.address_title}>도로명 주소</div>
                        <div className={styles.address_text}>경기도 광명시 소하로 109번길 13-8</div>
                    </div>
                    <div className={styles.address_content}>
                        <div className={styles.address_title}>지번 주소</div>
                        <div className={styles.address_text}>경기도 광명시 소하동 1338-3</div>
                    </div>
                    <div className={styles.address_content}>
                        <div className={styles.address_title}>우편번호</div>
                        <div className={styles.address_text}>423-050</div>
                    </div>
                </div>
                <div className={styles.contact_title}>오시는 길</div>
                <div className={styles.contact_section_wrapper}>
                    <img src="imgs/img/car.svg" alt="" className={styles.contact_icon}/>
                    <div className={styles.contact_section_text}>차량이용시</div>
                </div>
                <div className={styles.car_content}>
                    <div className={styles.car_content_title}>서울에서 출발</div>
                    <div className={styles.car_content_text}>
                    금천IC 방향 남부순환로 진입하여 직진 → 금천IC에서 ‘안양, 시흥대교’방면으로 우측방향 → 안양천로를 따라 1.36km 이동 →<br/>
우회전하여 금하로를 따라 874m 이동 → 광명소방서 지나 좌회전하여 소하로를 따라 81m 이동 → 첫 신호에서 다시 좌회전 후 <br/>
우회전 하여 직진  →  전방에 보이는 e-mart 옆 목적지 도착
                    </div>
                </div>
                <div className={styles.car_content}>
                    <div className={styles.car_content_title}>인천에서 출발</div>
                    <div className={styles.car_content_text}>
                    광명IC 방향 제2경인 고속도로 진입하여 직진 → 광명IC에서 ‘광명’방면으로 우측방향 → 광명IC입구에서 ‘서울디지털 산업단지,<br/>
하얀동’방명으로 우회전 → 범안사거리에서 ‘광명역(고속철도), 소하동’ 방면으로 우회전 →구름산터널 진입 후 금하로를 따라<br/>
1.43km 이동 → 가리대사거리 지나 ‘ 기아자동차’ 방면으로 우회전 → 첫 신호에서 좌회전 후 우회전 하여 e-mart 옆 목적지 도착
                    </div>
                </div>
                <div className={styles.car_content}>
                    <div className={styles.car_content_title}>지방에서 출발</div>
                    <div className={styles.car_content_text}>
                    광명역 IC 방향 서해안 고속도로 진입 → 광명역 IC에서 ‘광명역(고속철도)’방면으로 우측 고속도로 출구 → 광명역(고속철도)지나<br/>
‘서울, 광명시청’방면으로 우회전  → 터널 진입 후 덕안로를 따라 2.61km 이동  → 소하휴먼시아 7단지 아파트 앞에서 좌회전  → <br/>
소하로를 따라 676m 이동 e-mart 앞 우회전 → 140m 이동하여 좌회전 목적지 도착
                    </div>
                </div>
                <div className={styles.contact_section_wrapper}>
                    <img src="imgs/img/subway.svg" alt="" className={styles.contact_icon}/>
                    <div className={styles.contact_section_text}>대중교통이용시</div>
                </div>
                <div className={styles.subway_content_wrapper}>
                    <div className={styles.subway_content}>
                        <img src="imgs/img/subway-text.svg" alt="" className={styles.icons}/>
                        <div className={styles.subway_text}>7호선 철산역 하차 →</div>
                        <img src="imgs/img/bus-text.svg" alt="" className={styles.icons}/>
                        <div className={styles.subway_text}>
                        3, 3-1 승차 → 가리대사거리. 소화상업지구 정류장 하자 → <br/>
가리대 사거리. 소하상업지구 정류장 하차
                        </div>
                    </div>
                    <div className={styles.subway_content}>
                        <img src="imgs/img/high-speed-text.svg" alt="" className={styles.icons}/>
                        <div className={styles.subway_text}>고속철도 광명역 하차 →</div>
                        <img src="imgs/img/bus-text.svg" alt="" className={styles.icons}/>
                        <div className={styles.subway_text}>5627, 5633, 3-1, 12 → 가리대사거리. 소화상업지구 정류장 하자</div>
                    </div>
                    <div className={styles.subway_content}>
                        <img src="imgs/img/bus-text.svg" alt="" className={styles.icons}/>
                        <div className={styles.subway_text}>
                        소하동이마트 정류장 하차 - 금천09, 2<br/>
                        가리대사거리. 소하상업지구 정류장 하차 - 2, 3, 3-1, 7, 12, 17, 75, 5627, 5633<br/>
                        가리대. 소하3단지. 소하상업지구 정류장 하차 - 3-1, 12, 5627, 5633<br/>
                        소하3단지, 소하4단지 정류장 하차 - 6014, 101
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact