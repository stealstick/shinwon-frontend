import React from 'react'
import styles from './css/BloodCollection.module.scss'

const BloodCollection = () => {
    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.section_title}>채혈지침</div>
                <div className={styles.text_normal_500}>
                    아래의 지침은 채혈을 담당하는 의사, 간호사, 임상병리사, 채혈을 담당하는 모든 직원이 숙지하여야한다.<br/>
                    소아, 성인의 규정은 동일하며 아래의 지침에 준한다.<br/>
                    검체의 채취 및 취급은 적절한 검체채취와 취급에 관한 별도의 지침서가 마련되어<br/>
                    진단검사의학과 근무자와 검체를 채취하는 모두에게 사용이 가능해야 하며 <br/>
                    또한 채혈 업무는 환자의 권리와 사생활 보호에 관한 윤리강령과 환자 권리장전에 명시된 내용을 숙지하고 이해하여야한다.<br/>
                </div>
                <div className={styles.sub_wrapper}>
                    <div className={styles.sub_title_wrapper}>
                        <div className={styles.rect}/>
                        <div className={styles.sub_title_text}>환자의 채혈업무</div>
                    </div>
                    <div className={styles.sub_text}>
                        환자의 이름, 등록번호, 진료과, 진료일, 검사항목을 확인 한 후 검사항목에 따른 채혈 가능여부를 환자에게 공지한다.<br/>
                        당일 채혈이 불가능한 환자는 채혈 날짜와 주의사항을 전달한 후 다음에 채혈할 것을 알려주어야하며<br/>
                        당일검사가 가능한 항목은 채혈로 재차 병원을 방문하는 일이 없도록 처리한다.<br/>
                        채혈과 소변검사가 같이 있는 경우, 바코드(환자인적사항)를 붙인 튜브에 채혈한 후 소변컵에 바코드를 붙이고<br/>
                        소변을 받도록 하여 소변컵의 뇨를 검체를 놓는 장소에 두게 한다.<br/>
                        소변검사만 있는 경우, 소변컵에 바코드(환자인적사항)를 붙이고 채뇨 후 뇨 검체 두는 장소에 놓으라고 안내한다.
                    </div>
                </div>
                <div className={styles.sub_wrapper}>
                    <div className={styles.sub_title_wrapper}>
                        <div className={styles.rect}/>
                        <div className={styles.sub_title_text}>환자응대</div>
                    </div>
                    <div className={styles.sub_text}>
                        의료기간 전 직원은 채혈실을 방문하는 모든 환자에게 최대의 자세한 설명 및 친절한 안내로<br/>
                        불편함이 없도록 최선의 노력을 기울여야 한다.
                    </div>
                    <div className={styles.sub_num_wrapper}>
                        <div className={styles.rect}/>
                        <div className={styles.sub_num_title}>1. 환자가 채혈실로 방문하였을 때 자세</div>
                    </div>
                    <div className={styles.sub_num_text}>
                        전 직원은 신분증을 착용하고 채혈실을 찾은 모든 환자에게 친절한 자세로 맞이하여야 한다.<br/>
                        전 직원은 찾아오신 모든 환자에게 다른 업무를 처리하고 있는 경우를 제외하고는 대기시간을 최대한 짧게 하여야 한다.<br/>
                        소요일이 오래 걸리는 검사에 대해서는 결과가 나오는 날짜와 시간을 알려드려야 한다.
                    </div>
                    <div className={styles.sub_num_wrapper}>
                        <div className={styles.rect}/>
                        <div className={styles.sub_num_title}>2. 환자가 전화로 검사문의를 하였을때</div>
                    </div>
                    <div className={styles.sub_num_text}>
                        “인사말, 소속, 이름”을 정중히 밝히고 문의에 답하여야 한다.<br/>
                        담당자가 부재중이라도 최선을 다해 답해드리고 미처리 부분에 대해서는 담당자가 직접 전화를 드릴 수 있도록 메모를 남긴 후<br/>
                        빠른 시간 안에 조치하도록 한다.
                    </div>
                    <div className={styles.sub_num_wrapper}>
                        <div className={styles.rect}/>
                        <div className={styles.sub_num_title}>3. 채혈 대기 중 환자가 불만을 표현할 때</div>
                    </div>
                    <div className={styles.sub_num_text}>
                        의료기관 책임자는 환자를 채혈 대기실 공간에서 분리하여 단둘이 있을만한 곳으로 이동시키고<br/>
                        그 불편사항의 내용을 파악하고 설명해야하며 그 내용을 상급자에게 반드시 보고해야 한다.
                    </div>
                </div>
                <div className={styles.section_title}>채혈절차</div>
                <div className={styles.section_num_wrapper}>
                    <div className={styles.section_num_content}>
                        <div className={styles.section_num_title}>1. 채혈접수</div>
                        <div className={styles.section_num_text}>
                            - 환자의 등록번호가 있는 진료카드나 영수증을 이용하여 환자본인임을 확인하고 접수한다.<br/>
                            - 검사항목에 맞는 적절한 검체용기를 선택하여 검진기록지(검사의뢰서)의 수검자이름, 주민등록번호, 접수번호와 같은<br/>
                            &nbsp;&nbsp;신원정보를 검진일/검체 채취일을 기록하고 검체의 용기에도 동일한 인적 사항을 기록하여 식별을 용이하게 한다.<br/>
                            &nbsp;&nbsp;(또는 바코드를 발행시켜 올바르게 부착 시킨다.) 
                        </div>
                    </div>
                    <div className={styles.section_num_content}>
                        <div className={styles.section_num_title}>2. 환자확인</div>
                        <div className={styles.section_num_text}>
                            - 환자의 이름을 직접 호명한다.<br/>
                            - 채혈의자에 앉으면 환자의 성명과 등록번호 또는 성별, 생년월일 등 2가지 이상의 방법으로 환자의뢰지의 인적사항을<br/>
                            &nbsp;&nbsp;확인하며, 환자의 성함을 먼저 부르기 보다는 이름을 직접 물어 확인한다.(동명이인구분) 
                        </div>
                    </div>
                    <div className={styles.section_num_content}>
                        <div className={styles.section_num_title}>3. 검체채취</div>
                        <div className={styles.section_num_text}>
                            - 검사에 적합한 용기에 해당라벨(바코드)이 정확히 부착되었는지 확인하고, 라벨지(바코드)에 채혈자 서명한다.<br/>
                            - (동일한 바코드를 사용해서 모 검체에서 분리된 자 검체를 식별한다.)<br/>
                            - 친절하게 올바른 채혈방식에 따라 채혈한다. 
                        </div>
                    </div>
                </div>
                <div className={styles.section_title}>올바른 채혈 방법</div>
                <div className={styles.sub_wrapper}>
                    <div className={styles.sub_title_wrapper}>
                        <div className={styles.rect}/>
                        <div className={styles.sub_title_text}>채혈</div>
                    </div>
                    <div className={styles.sub_text_wrapper}>
                        <div className={styles.sub_text}>
                            마스크 등 보호구를 착용해야 하며 환자채혈전 손씻기를 시행한다. <br/>
                            채혈 전 감염관리 안전관리 규칙에 준하여 손씻기를 해야 한다. <br/>
                            채혈실에서는 알코올 손소독제를 사용하는 법을 수행하며 그 방법은  <br/>
                            다음과 같다.  <br/>
                            <br/>
                            다음) 알코올 손소독제를 사용할 때  한 손바닥에 소독제를 <br/>
                            던 후 양손으로 소독제가 마를 때까지 손과 손가락 표면을 모두 문지른다.  <br/>
                            사용량은 일반적으로 엄지손톱만큼의 분량이며 제조회사의 <br/>
                            권장사항을 따른다.(그림 1) <br/>
                        </div>
                        <img src="imgs/img/blood-collection.png" alt="" className={styles.sub_img}/>
                    </div>
                    
                    <div className={styles.sub_num_wrapper}>
                        <div className={styles.rect}/>
                        <div className={styles.sub_num_title}>1. 환자준비</div>
                    </div>
                    <div className={styles.sub_num_text}>
                        환자의 혈액검체를 채취하기 전에 환자의 인적사항을 확인하여야 하며<br/>
                        환자는 편안하게 앉거나 누운 상태에서 검체를 채취한다.  불안해하는 환자는 눕도록 하는 것이 좋다. <br/>
                        정맥천자 시 사용되는 의자는 편안해야 하며 의자에세 실신하는 환자를 적게 하기 위해서  될 수 있으면 팔을 편하게 하고 미<br/>
                        끄러지지 않는 좌우 팔 받침대가 있는 의자를 사용한다. <br/>
                        정맥천자를 어린아이들이나 협조가 어려운 환자에게 시행할 경우에는 정맥전차 할 부위(팔등)을 서서히 단단하게 <br/>
                        고정시킨 후 장갑을 착용한 다음 정맥천자를 시행한다. <br/>
                        정맥천자시의 주사바늘은 멸균된 것을 사용하여 채취과정 동안 멸균상태를 유지한다. <br/>
                        <br/>
                        금식이 필요한 검사 (콜레스트렐, 혈당검사 등)가 처방된 환자인 경우 8시간 이상 공복을 유지하였는지 확인하여야 한다. 
                    </div>
                    <div className={styles.sub_num_text}>
                        특정 음식물(또는 약물)등의 섭취를 금해야 하는 검사 처방인지를 확인 후 채혈해야 한다. <br/>
                        채혈하기 전 환자에게 채혈 할 것을 설명해야 하며 환자의 이름을 물어서 확인한다.  <br/>
                        채혈하고자 하는 환자의 성명과와 수검자의 검진 기록지의 인적사항을 반드시 확인하고, <br/>
                        환자가 확인 된 다음에는 바코드가 부착된 튜브의 정보를 다시 한 번 확인한다.  <br/>
                        환자의 팔을 책상 위(심장 위치와 같은)에 올려놓고 힘을 뺀 상태로 손바닥이 위를 향하게 (supination)하며, <br/>
                        주관절은 되도록 신전상태가 되어야 하며 경우에 따라서는 팔꿈치 밑에 받을 만한 물건을 놓아 주는 것이 좋다.  <br/>
                        정맥주사용 주사제를 맞고 있는 경우는 반대쪽 혈관을 이용해야 한다.  <br/>
                        혈액응고검사가 있는 경우 수액(생리적 항응고제등)을 맞고 있는 쪽에서는 절대로 채혈을 하여서는 안 되며, <br/>
                        조직액이 삽입될 수 있으므로 채혈 시 첫 번째 튜브로 검체를 삽입하여서는 안 된다.  <br/>
                        채혈을 마친 후 환자와 검체를 다시 한 번 확인하여야 한다.  
                    </div>
                    <div className={styles.sub_num_wrapper}>
                        <div className={styles.rect}/>
                        <div className={styles.sub_num_title}>
                            2.정맥주사를 맞고 있는 라인에서 채혈을 해야 하는 경우 fluid 주입을 막은 상태에서 먼저 충분한 양<br/>
                            (약 30㎖ 정도)의 혈액을 빼 낸 후 혈액을 채취한 후 바코드가 부착된 튜브에 검체를 담아야 한다.  
                        </div>
                    </div>
                    <div className={styles.sub_num_wrapper}>
                        <div className={styles.rect}/>
                        <div className={styles.sub_num_title}>3. 주사기 준비</div>
                    </div>
                    <div className={styles.sub_num_text}>
                        주사기를 사용할 경우 주사바늘 뚜껑이 닫힌 채로 주사기 몸체와 바르게 결합되어 있는지 확인한 다음 플런저를 한 번<br/>
                        살짝 잡아당겨  보아 부드럽게 움직이는지 확인한다.  <br/>
                        다량의 혈액을 주사기로 이용할 경우 진공채혈 주사기나 나비바늘을 이용한다. 
                    </div>
                    <div className={styles.sub_num_wrapper}>
                        <div className={styles.rect}/>
                        <div className={styles.sub_num_title}>4. 채혈시기</div>
                    </div>
                    <div className={styles.sub_num_text}>
                        의심되는 질환의 진단 가능성이 가장 높은 상태에서 채혈해야 한다.  <br/>
                        발열기 채혈 &nbsp;&nbsp;&nbsp;가) 말라리아 진단을 위한 혈액도말  <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;나) 아급성 심내막염 진단을 위한 혈액배양의 경우 <br/> 
                        식이에 영향을 받는 혈당이나 중성지방검사는 식전에 채혈  <br/>
                        일중변동이 있는 호르몬 검사  <br/>
                        투약시간과의 연관성이 중요한 약물검사  <br/>
                        일상뇨 검사: 아침 첫 소변(중간소변)  <br/>
                        호르몬이나 단백질, 전해질 정량을 검사하기 위한 24시간 뇨 검사: 첫날 오전 7시에 방광을 완전히 비우고 나서 <br/>
                        수집을 시작하여 다음날 오전 7시의 마지막 요까지 완전하게 모아야한다. 
                    </div>
                </div>
                <div className={styles.tips_wrapper}>
                    <img src="imgs/img/blood-tips.png" alt="" className={styles.tips_img}/>
                </div>
            </div>
        </div>
    )
}

export default BloodCollection