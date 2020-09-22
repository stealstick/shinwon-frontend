import React from 'react'
import styles from './css/Greeting.module.scss'

const Greeting = () => {
    return(
        <div className={styles.container}>
            <div className={styles.greeting_top_wrapper}>
                <img src="imgs/img/greeting-top.png" alt="" className={styles.greeting_top_img}/>
            </div>
            <div className={styles.section}>
                <div className={styles.greeting_title}>인사말</div>
                <div className={styles.greeting_content_wrapper}>
                    <div className={styles.greeting_img_wrapper}>
                        <img src="imgs/img/greeting-img.png" alt="" className={styles.greeting_img}/>
                        <div className={styles.greeting_img_text_wrapper}>
                            <div className={styles.img_text}>이사장</div>
                            <img src="imgs/img/greeting-name.png" alt="" className={styles.greeting_name}/>
                        </div>
                    </div>
                    <div className={styles.greeting_content_text}>
                        <div className={styles.greeting_content_text_title}>
                            안녕하십니까?<br/>
                            신원의료재단에 오신 것을 진심으로 환영합니다.
                        </div>
                        <div className={styles.greeting_content_text_normal}>
                            저희 신원의료재단은 2005년에 개원하여 각종 우수 검사법을 도입, 운영하였습니다.<br/>
                            최근 빠르게 진화하는 검사분야의 발전에 따라 자동분석검사를 대폭 증강 실시하여<br/>
                            수탁기관의 검사 정밀도를 한차원 높여 질 높은 진료를 위하여 앞장서 왔습니다.<br/>
                            <br/>
                            신원의료재단은 전문의, 박사, 임상병시라 등 우수한 전문 인력들이<br/>
                            전국 병의원으로부터 검체 검사를 위탁 받아 최고 품질의 검사결과 서비스를 제공하는<br/>
                            국내 대표적인 수탁검사 전문 기관입니다.<br/>
                            <br/>
                            그동안 축적된 경험을 바탕으로 정확하고 신속한 검사결과 제공은 물론<br/>
                            고객께서 만족할 수 있는 높은 서비스를 드리고자 최선을 다할 것이며<br/>
                            최신의 자동화 설비 도입 및 인재양성을 통한 신뢰받는 수탁기관이 될 수 있도록 할 것입니다.<br/>
                            <br/>
                            지금까지 아낌없는 성원에 감사드리며 앞으로도 우리 신원의료재단의 임직원들은<br/>
                            성실과 정직을 바탕으로 최고의 수탁검사기관으로 앞장서 나갈 것을 약속드립니다.<br/>
                            <br/>
                            감사합니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Greeting