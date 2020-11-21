import React from 'react'
import styles from './css/Recruitment.module.scss'
import SectionTitle from '../../../components/SectionTitle'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const Recruitment = () => {

    AOS.init()

    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <SectionTitle kor="채용정보" eng="Recruitment Guide"/>
                <div data-aos="fade-up"  data-aos-duration="2000" className={styles.title_normal}>의료법인 신원의료재단의 채용정보 안내입니다.</div>
                <div data-aos="fade-up"  data-aos-duration="2000" className={styles.title_text_wrapper}>
                    <span className={styles.quot}>“</span>
                    <div className={styles.title_text}>
                        신원의료재단이 추구하는 <br/>
                        <span className={styles.emphasis}>인재상</span>
                    </div>
                    <span className={styles.quot}>”</span>
                </div>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/recruitment-1.png" alt="" className={styles.img_1}/>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/interview-process.png" alt="" className={styles.img}/>
            </div>
            <div className={styles.section}>
                <SectionTitle kor="전형절차"/>
                <div className={styles.process_wrapper}>
                    <div className={styles.process_text}>1. 서류전형</div>
                    <div className={styles.process_text}> →</div>
                    <div className={styles.process_text}>2. 면접전형</div>
                    <div className={styles.process_text}> →</div>
                    <div className={styles.process_text}>3. 인성검사</div>
                    <div className={styles.process_text}> →</div>
                    <div className={styles.process_text}>4. 합격자 신체검사</div>
                </div>
            </div>
            <div className={styles.section}>
                <SectionTitle kor="지원공통서류 / 지원방법"/>
                <div data-aos="fade-up"  data-aos-duration="2000" className={styles.rec_wrapper}>
                    <div className={styles.rec_text}>
                    1. 이력서 및 자기소개서 1부<br/>
2. 주민등록등본(주민번호 표기) 1부<br/>
3. 운전면허증 1부<br/>
4. 전학년 성적증명서(석차 및 평균학점 반드시 기재)<br/>
5. 취업보호대상자 증명서(해당자)
                    </div>
                    <div className={styles.rec_text_wrapper}>
                        <div className={styles.rec_text_2}>지원서 접수는 전자메일로만 접수</div>
                        <div className={styles.rec_text_3}>recruit@shinwon.org</div>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <SectionTitle kor="경력직 지원공통서류 / 지원방법"/>
                <div data-aos="fade-up"  data-aos-duration="2000" className={styles.rec_wrapper}>
                    <div className={styles.rec_text}>
                    1. 인사기록카드 1부<br/>
2. 이력서 및 자기소개서 1부<br/>
3. 졸업(예정)증명서 (모든 학위 증명서) 1부<br/>
4. 면허증 및 자격증 사본 각 1부<br/>
5. 경력증명서 1부<br/>
6. 최종학교 전학년 성적증명서 1부
                    </div>
                    <div className={styles.rec_text_wrapper}>
                        <div className={styles.rec_text_2}>지원서 접수는 전자메일로만 접수</div>
                        <div className={styles.rec_text_3}>recruit@shinwon.org</div>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.notice_wrapper}>
                    <div className={styles.notice_title}>부서별 채용공고</div>
                    <Link to="/recruitment" className={styles.notice_button}>채용 공고 확인  →</Link>
                </div>
                
            </div>
            <div className={styles.section}>
                <SectionTitle kor="문의처"/>
                <div data-aos="fade-up"  data-aos-duration="2000" className={styles.rec_wrapper}>
                    <div className={styles.rec_text}>
                    본사 인사팀 1899-1510<br/>
전자메일 <span className={styles.emphasis}>recruit@shinwon.org</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recruitment