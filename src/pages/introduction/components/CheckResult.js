import React from 'react';
import styles from './css/CheckResult.module.scss'
import SectionTitle from '../../../components/SectionTitle'
import AOS from 'aos'
import 'aos/dist/aos.css'

const CheckResult = () => {

    AOS.init()

    const TypeTitle = ({title}) => {
        return(
            <div className={styles.type_title_wrapper}>
                <div className={styles.rect}/>
                <div className={styles.type_content_title}>{title}</div>
            </div>
        )
    }


    return(
        <div className={styles.container}>
            <div data-aos="fade-up" className={styles.section}>
                <SectionTitle kor="결과확인방법" eng="Check the result"/>
                <div className={styles.top_text}>신원의료재단의 결과 확인방법입니다.</div>
            </div>
            <div data-aos="fade-up" className={styles.type_content_wrapper}>
                <TypeTitle title="검사결과 조회 안내"/>
                <div className={styles.type_content_text}>
                1. 검사결과는 웹사이트, 스마트폰 또는 전용 프로그램을 이용하여 진행여부와 결과를 신속하게 조회 하실 수 있습니다.<br/>
2. 로그인 계정 또는 전용프로그램 설치 안내는 당사 담당자에게 문의하여 주시기 바랍니다.
                </div>
            </div>
            <img data-aos="fade-up" className={styles.img} src="imgs/img/checkresult.png" alt=""/>
            <div data-aos="fade-up" className={styles.type_content_wrapper}>
                <TypeTitle title="검사결과 조회 방법"/>
                <div className={styles.type_content_text}>
                1. 검사결과는 일반검사/미생물/분자유전/조직/세포 별로 구분 조회 가능합니다.<br/>
2. 의뢰 기간별 환자명, 챠트번호, 접수번호, 생년월일로 조회가 가능합니다.<br/>
3. 결과를 이미지로 저장 하시고자 하는 경우 전용 프로그램을 이용하여 주시기 바랍니다.(당사 담당자 또는 전산실)<br/>
<br/>
기타 자세한 문의 사항은 당사 전산실 1899-1510(내선: 500,501)으로 연락하여 주시기 바랍니다.
                </div>
            </div>
        </div>
    )
}

export default CheckResult