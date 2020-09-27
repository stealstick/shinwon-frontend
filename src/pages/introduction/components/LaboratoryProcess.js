import React from 'react'
import styles from './css/LaboratoryProcess.module.scss'
import SectionTitle from '../../../components/SectionTitle'

const LaboratoryProcess = () => {
    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <SectionTitle kor="검사절차" eng="LABORATORY PROCESS"/>
                <div className={styles.process_title}>신원의료재단의 검사 절차(PROCESS)는 아래와 같습니다.</div>
                <div className={styles.process_img_wrapper}>
                    <img src="../imgs/img/test-process-1.svg" alt="" className={styles.process_img}/>
                    <img src="../imgs/img/test-process-2.svg" alt="" className={styles.process_img}/>
                    <img src="../imgs/img/test-process-3.svg" alt="" className={styles.process_img}/>
                    <img src="../imgs/img/test-process-4.svg" alt="" className={styles.process_img}/>
                    <img src="../imgs/img/test-process-5.svg" alt="" className={styles.process_img}/>
                </div>
            </div>
            <div className={styles.section}>
                <SectionTitle kor="의뢰지 기입방법" eng="HOW TO WRITE"/>
                <div className={styles.process_title}>신원의료재단의 의뢰지 기입방법입니다.</div>
                <div className={styles.how_to_write}>
                    <div className={styles.rect}/>
                    <div className={styles.htw_title}>의뢰서 기입 요령</div>
                    <div className={styles.htw_content}>의뢰항목에 적합한 신원의학연구소 전의뢰지를 사용하여 필요한 내용을 반드시 기록하여 주십시오.</div>
                </div>
                <img src="../imgs/img/how-to-write-requisition.svg" alt="" className={styles.htw_img}/>
                <div className={styles.ref_text}>※ 검사안내서를 참고하시어 적합한 검체를 채취하시고 검사항목은 외뢰종목란에 표시하십시오.</div>
                <div className={styles.ref_text}>※ 종목이 의뢰지에 없는 경우는 의뢰서 기타란에 검사명과 검사방법을 함께 기록하여 주십시오.</div>
            </div>
            <div className={styles.section}>
                <SectionTitle kor="검체채취방법" eng="SAMPLE COLLECTION METHOD"/>
                <div className={styles.process_bold_text}>검체는 신원의학연구소에 공급하는 용기에 채취하시고,</div>
                <div className={styles.process_bold_text}>각 의료기관의 고유용기를 사용할 경우 이에 준하는 용기를 사용하십시오.</div>
                <div className={styles.method_table_wrapper}>
                    <div className={styles.method_table_content}>
                        <div className={styles.method_table_title}>검체</div>
                        <div className={styles.method_table_text}>각 검체는 신원의료재단의 검사종목에 적합하게 채취합니다.</div>
                    </div>
                    <div className={styles.method_table_content}>
                        <div className={styles.method_table_title}>용기</div>
                        <div className={styles.method_table_text}>용기에 부착되어 있는 라벨에 환자명, 연령, 성별을 반드시 기록합니다.</div>
                    </div>
                    <div className={styles.method_table_content}>
                        <div className={styles.method_table_title}>검체수</div>
                        <div className={styles.method_table_text}>동일한 환자에게 한가지 이상의 검체종류를 의뢰하는 경우는, 라벨에 각각 검체명과 검사명을 적습니다.</div>
                    </div>
                    <div className={styles.method_table_content}>
                        <div className={styles.method_table_title}>연속검사</div>
                        <div className={styles.method_table_text}>동일한 환자에게 시간별로 연속적으로 채취한 검체는 채취시간, 날짜, 번호를 정확하게 기록하여야 합니다.</div>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <SectionTitle kor="검체 제출과 수송방법" eng="SAMPLE SUBMISSION / TRANSPORT"/>
                <div className={styles.process_bold_text}>검체 의뢰 및 수송과정에 특별한 주의가 필요한 검체 (예:냉동운반, 즉시운반 등)는</div>
                <div className={styles.process_bold_text}>신원안내서의 검사항목별 지침내용을 따라 주십시오.</div>
                <div className={styles.process_bold_text}>검체는 신원 담당직원에게 전달하여 주십시요. </div>
                <div className={styles.process_bold_text}>전달된 검체는 즉시 수거되어 각 지역영업소로 집하되고, 당일에 본사 운송 및 검사가 이루어집니다.</div>
            </div>
            <div className={styles.section}>
                <SectionTitle kor="검체수거" eng="SAMPLE COLLECTION"></SectionTitle>
                <div className={styles.collection_table_wrapper}>
                    <div className={styles.collection_table_content}>
                        <div className={styles.collection_table_title}>평일</div>
                        <div className={styles.collection_table_text}>
                            당일오전연락 : 당일수거<br/>
                            당일오후연락 : 응급이 아닌 경우 다음날 오전수거
                        </div>
                    </div>
                    <div className={styles.collection_table_content}>
                        <div className={styles.collection_table_title}>토요일</div>
                        <div className={styles.collection_table_text}>
                            오전 09시이전 연락 : 당일수거<br/>
                            오전 12시이후 연락 : 월요일 오전수거
                        </div>
                    </div>
                </div>
                <div className={styles.ref_text}>※ 1일 1회 방문을 원칙으로 하며 응급검사 의뢰시 각 지역 영업소 또는 영업 담당자에게 연락하시기 바랍니다.</div>
            </div>
            <div className={styles.section}>
                <SectionTitle kor="결과 / 재검사 / 추가검사" eng="RESULT / RETEST / ADDITIONAL"/>
                <div className={styles.text_normal}>
                    1. 검사결과는 의뢰하신 병원에서 인터넷을 통하여 실시간 조회가 가능합니다.<br/>
                    2. 결과는 당사 전용용지를 사용하여 익일 출력하여 드립니다.<br/>
                    3. 기타응급을 요하는 경우는 전화로 확인 할 수 있으며 팩스 이용도 가능합니다.<br/>
                    4. 재검사 및 추가검사가 있으면 1주 이내에 영업소로 신청하여 주십시오.<br/>
                </div>
            </div>
            <div className={styles.section}>
                <SectionTitle kor="검사의뢰 및 학술에 대한 상담" eng="REQUEST / ACADEMIC"/>
                <div className={styles.text_normal}>
                    1. 신규 인터넷 조회신청은 학술부 전산팀으로 문의하시면 바로 처리해드립니다.<br/>
                    2. 검사결과에 대한 문의사항, 검체전처리방법, 신규검사항목 및 연구용검사에 관한 사항등 검사내용에 대한 상담을 하고있습니다.
                </div>
            </div>
        </div>
    )
}

export default LaboratoryProcess