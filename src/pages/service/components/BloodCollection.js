import React from 'react'
import styles from './css/BloodCollection.module.scss'
import SectionTitle from '../../../components/SectionTitle'

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
                        <img src="../imgs/img/blood-collection.png" alt="" className={styles.sub_img}/>
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
                    <img src="../imgs/img/sub-num-table.svg" alt="" className={styles.sub_num_table}/>
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
                    <img src="../imgs/img/blood-tips.png" alt="" className={styles.tips_img}/>
                    <div className={styles.tips_bold}>
                        구혈대(Tourniquet)을 상박둘레에 맨다. 구혈대는 한번만 잡아 당기면 잘 풀릴 수 있게 묶는다.<br/>
                        채혈하고자 하는 위치에서 10cm 이상 떨어진 곳에 묶어야 한다. 
                    </div>
                    <div className={styles.tips_text}>
                        육안적으로 확인하고 촉진으로 확인하여 적당한 정맥을 고른다. <br/>
좀 더 쉽게 정맥이 부풀어 오르게 하려면 환자는 주먹을 몇 번 쥐었다 편다.  <br/>
<br/>
알코올 솜으로 여러 번 문질러 천자할 부위를 닦아내고 알코올이 마르도록 자시 내버려둔다.(30-60 seconds)  <br/>
구혈대는 2분 이상 묶지 말아야 하며, 2분내 채혈을 마치지 못한 경우 구혈대를 풀었다 다시 묶어 주어야 한다.  <br/>
구혈대를 6분 이상 둔 경우 아래와 같은 상황이 발생된다.  <br/>
가) Hemoconcentration (혈액농축)  <br/>
너무 오랫동안 구혈대(Tourniquet)를 묶거나 너무 세게 묶었을 경우  <br/>
나) 구혈대(Tourniquet)를 6분 이상 묶었을 경우 :  <br/>
Enzymes, bilirubin, albumin, total protein, cholesterol (6-10% 증가)  <br/>
Triglyceride, iron, calcium, RBC, hemoglobin (3-6% 증가)  <br/>
Potassium, Chloride, Creatinine, Urea, Glucose, Leukocytes, Inorganic, Phosphate (5% 감소)  <br/>
다) 구혈대(Tourniquet)를 5분 묶었을 경우 : Cholesterol 5-20%증가  <br/>
<br/>
- 진공채혈관을 이용한 정맥천자  <br/>
① 바늘(vacutainer needle)의 녹색부위를 왼속으로 잡고 오른손으로 위의 반투명한 뚜껑을 돌려 제거하면 <br/>
&nbsp;&nbsp;&nbsp;adapter 속으로 들어갈 고무로 피막 된 짧은 바늘이 나타나는데, <br/>
&nbsp;&nbsp;&nbsp;adapter의 좁은 쪽 입구로 돌려 끼워넣어 움직이지 않도록 고정시킨다.  <br/>
② 진공채혈관을 고무뚜껑이 짧은 바늘 쪽으로 향하도록 adapter의 큰 쪽 입구를 통해 넣되 <br/>
&nbsp;&nbsp;&nbsp;고무뚜껑이 바늘에 찔리지 않도록 느슨하게 둔다.  <br/>
③ 주사기를 사용할 때와 같은 요령으로 정맥을 찾아 찌르면 감각으로 정맥에 바늘이 들어갔다는 것을 알 수 있으며, <br/>
&nbsp;&nbsp;&nbsp;이때 주사기를 지지하던 요령으로 왼손을 사용하여 adapter 사이에 adapter를 끼우고 엄지손가락으로 <br/>
&nbsp;&nbsp;&nbsp;진공채혈관을 작은 바늘 쪽으로 힘껏 밀어넣어 뚜껑이 바늘에 의해 뚫림과 동시에 혈액이 채혈관 안으로 채취된다.<br/>  
④ 진공채혈관은 목적에 따라 적당한 압력으로 내압이 조정되어 있으므로 <br/>
&nbsp;&nbsp;&nbsp;일정량의 혈액이 얻어지면 더 이상 혈액이 나오지 않는다.  <br/>
&nbsp;&nbsp;&nbsp;따라서 이때 왼손은 그대로 두고 가볍게 채혈관을 adapter로부터 분리하면 된다.  <br/>
⑤ 채혈을 더 할것이면 새로운 진공채혈관만 adapter 속으로 넣고 힘껏 밀어 주면 된다. <br/>
&nbsp;&nbsp;&nbsp;채혈관을 10회 이상 뒤집어 항응고제가 섞이게 한다.  <br/>
⑥ 채혈관은 반드시 labeling이 되어 있는 것을 사용하여야 하며 채혈되는 동안 이름을 확인 할 수 있어 <br/>
&nbsp;&nbsp;&nbsp;매 튜브마다 확인해야 한다.  <br/>
     <br/>
- 주사기를 이용하여 채혈하는 경우  <br/>
① 일반적으로 21G 바늘이 연결되어있는 주사기를 사용한다.  <br/>
② 채혈하고자 하는 부위에서 3~5cm 아래쪽을 누르며 혈관을 팽팽히 당겨 고장시켜 찌르기 쉽게 하고<br/>
&nbsp;&nbsp;&nbsp;환자의 불편함도 감소시킨다.  <br/>
③ 알코올이 건조된 후 바늘의 사면을 위로하여 15℃정도로 약 1cm 정도 찌른다. <br/>
&nbsp;&nbsp;&nbsp;만약 너무 깊게 찌르면 혈관벽이 천공될 위험이 있다.  <br/>
&nbsp;&nbsp;&nbsp;만약 동맥천공이 의심되면 바늘을 재빨리 제거한 후 적어도 5분이상 출혈이 멈출 때까지 해당부위를 강하게 압박하고 <br/>
&nbsp;&nbsp;&nbsp;담당의에게 즉시 연락한다.  <br/>
④ 일반혈관의 경우 채혈관에 혈류가 유입되기 시작하면 곧바로 지혈대를 풀고 환자의 주먹을 펴도록 한다.  <br/>
                    </div>
                </div>
                <div className={styles.sub_wrapper}>
                    <div className={styles.sub_num_text}>검체가 많을 때 일반적인 튜브별 채혈하는 순서는 아래와 같다.</div>
                    <div className={styles.sub_tube_wrapper}>
                        <img src="../imgs/img/blood-tubes.png" alt="" className={styles.sub_tube_img}/>
                    </div>
                    <div className={styles.sub_num_text}>채혈을 마친 튜브는 튜브별 특징에 맞게 mix하여야 한다.</div>
                </div>
                <div className={styles.mixing_title}>Mixing / 믹싱</div>
                <div className={styles.mixing_content_wrapper}>
                    <img src="../imgs/img/mixing.png" alt="" className={styles.mixing_img}/>
                    <div className={styles.mixing_text_wrapper}>
                        <div className={styles.mixing_text_top}>
                            Mixing 목적은 각 tube 안에 포함된 일정량의 시약 함유되어 있는 것을<br/>
                            mixing을 통해 tube 내 혈액과 잘 혼합되어 원활한 작용 유도한다.<br/>
                            Mixing 시기 : 채혈 후 곧바로 부드럽게 시행<br/>
                            Mixing 방법 : Tube를 똑바로 잡고 180˚ 아래로 내려 들어 올리면 1회 실기,<br/>
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;각 검사 tube 별로 mixing 횟수를 반복	
                        </div>
                        <div className={styles.mixing_text_bot}>
                            부적절한 Mixing으로 인한 문제 : EDTA, Sodium citrate, Heparin tube- Clot,<br/>
                            SSTⅡ tube- 응고가 덜 된 상태 발생
                        </div>
                    </div>
                </div>
                <div className={styles.section_title + " " + styles.mg_lft_50}>검체 채취용 용기 종류 및 혼합 방법</div>
                <div className={styles.section_title + " " + styles.mg_lft_50}>검체채취과정</div>
                <img src="../imgs/img/extraction.png" alt="" className={styles.extraction_img}/>
                <div className={styles.extraction_last_wrapper}>
                    <img src="../imgs/img/extraction-last.png" alt="" className={styles.extraction_last}/>
                    <div className={styles.extraction_last_text}>
                        * 뒤처리  - 주사기 사용 후 주사기 뚜껑은 recapping을 해서는 안된다.<br/>
                        사용한 needle은 주사침통에 넣어 폐기물 처리되어야 한다.
                    </div>
                </div>
                <div className={styles.section_title + " " + styles.mg_lft_50}>검체 분리 및 보관</div>
                <div className={styles.text_light + " " + styles.mg_lft_50}>
                - 채혈을 마친 검체는 적절한 온도에서 임상화학, 면역용 혈청(장)분리 또는 전혈 상태로 보관하다가 위탁하여야 한다.<br/>
- 혈청이나 혈장을 분리하기 위해서는 혈액을 잘 혼합 한 다음 20-30분 경과 후 3000rpm에서 10분 원심분리 합니다.<br/>
&nbsp;&nbsp;특히 혈당 검사 시에는 30분 이내에 혈청을 분리해 두고 가급적 NaF 용기 사용을 권장한다.<br/>
- SST의 경우 분리된 혈청은 다른 용기에 옮길 필요 없이 그대로 보관하면 된다.<br/>
- 혈청을 분리하지않고 전혈상태로 냉장 보관 시 검사결과(특히 전해질 검사 중 porassium  상승, 혈당 감소)에 영향을 준다.<br/>
- 분리된 검체는 냉장 보관해 주고 특별한 보관이 필요한 검사의 경우에는 검사 안내서를 참고하여 보관하여야 한다.<br/>
&nbsp;&nbsp;(검사별 보관조건을 확인한다.)<br/>
- 검사가 끝난 검체는 검사결과의 재 검사 등 기타의 사유로 일정기관보관 후 폐기물 관리법에 따라 폐기한다. <br/>
&nbsp;&nbsp;(혈청:7일, 일반 혈액 검체:3일)	
                </div>
                <div className={styles.tips_wrapper}>
                    <div className={styles.tips_text_bold}>
                    ▶ 주의 : 보관 검체로 검사 진행된 항목의 경우 보관 상태에 따라 결과 값에 영향을 줄 수 있으므로 <br/>
                 <span className={styles.mg_lft_50}>이점을 의뢰의료기관 담당자에게 알려 적절한 조치를 취하게 한다.</span><br/>
                    <br/>
                    <span className={styles.mg_lft_50}>* 채혈 후 반드시 분리 보관해야 하는 검사 항목</span>
                    </div>
                    <div className={styles.tips_items_wrapper}>
                        <div className={styles.tips_item}>FDF(B1613)</div>
                        <div className={styles.tips_item}>ACTH(C3590)</div>
                        <div className={styles.tips_item}>Renin(C7360)</div>
                        <div className={styles.tips_item}>Aldosterol(C7358)</div>
                        <div className={styles.tips_item}>BNP(CZ204)</div>
                        <div className={styles.tips_item}>ADH(C7365)</div>
                        <div className={styles.tips_item}>Lupus anticoagulant(B1711, B1712006)</div>
                    </div>
                </div>
                <SectionTitle/>
                <div className={styles.section_title}>감염관리 지침</div>
                <div className={styles.text_normal_500}>
                    병원감염과 관련하여 취급자는 검체의 채취, 수송, 조작, 분석 과정 등에서 감염성 물질에 노출될 위험이 큽니다.<br/>
                    따라서 이러한 과정에서 야기될 수 있는 감염원으로부터의 노출을 최소화 하여 환자와 직원들을 감염으로부터 <br/>
                    예방·보호 하여야 합니다.
                </div>
                <div className={styles.section_num_wrapper}>
                    <div className={styles.section_num_content}>
                        <div className={styles.section_num_title}>1. 일반적인 지침</div>
                        <div className={styles.section_num_text}>
                            검사실내 환경을 항상 청결하게 유지하여야 하며, 감염되었거나 감염이 의심되는 것은 멸균 소독해야 합니다.<br/> 
                            환자로부터 직원이 감염되거나 환자간의 교차 감염을 방지하기 위해서 채혈자는 채혈 규정을 검체 취급자는 검체 취급 규정을<br/>
                            엄수해야 합니다.   <br/>
                            검사물을 처리하는 지역에서는 식사, 흡연, 화장 등을 해서는 안됩니다.<br/>
                            식품이나 음료 등을 화학약품, 시약, 생물학적 재료등과 같은 냉장고에 넣지 않습니다.  <br/>
                            검체를 취급하고 장갑을 벗은 후 검사실을 떠나기 전에는 반드시 손을 씻어야 합니다. <br/>
                        </div>
                    </div>
                    <div className={styles.section_num_content}>
                        <div className={styles.section_num_title}>2. 검체 취급 시 주의사항</div>
                        <div className={styles.section_num_text}>
                        검체 취급 전, 후에는 반드시 손을 씻어야 합니다.  <br/>
모든 혈액, 체액, 혈청 등은 감염의 가능성이 있는 것으로 간주하여 다루어야 합니다.<br/>  
병원성 진균, 세균, Mycobacterium 배양 등을 위한 검체의 접종은 biosafety cabinet 시설이 되어있는 곳에서 실시해야 합니다. <br/> 
결핵배양 요기나 검체를 다루다가 엎질렀거나, 용기를 깨뜨렸을 때는 종이 타올로 덮고 <br/>
10배 희석한 치아염소산(spdium hypocolorite)액을 부어 30분 이상 적셔두며, <br/>
자외선 등(UV lamp)을 켠 채 24시간을 봉쇄하고 모든 직원은 그 방을 떠나 있게 합니다.  <br/>
혈액이나 체액 또는 감염성 물질을 엎질렀을 때는 다음과 같이 처리합니다.  <br/>
일과가 끝난 후 작업대는 규정에 따른 소독제로 오염을 제거합니다.  <br/>
환자의 검체는 규정에 따른 소독제로 오염을 제거 합니다.  <br/>
<br/>
<span className={styles.emphasis}>가. 청소할 때 사용하는 두꺼운 장갑을 착용합니다.  <br/>
나. 깨진 유리나 다른 물질이 섞여있을 때는 직접 만지지 말고 딱딱한 종이 등을 이용하여 적출물 처리 용기에 버립니다.  <br/>
다. 종이 타올 등을 이용하여 검사물을 흡수시킨 후 생물재해용기에 버립니다.  <br/>
라.소독제를 오염된 표면에 부어 놓는다. 이때 표면에 구멍이 많거나 거친 표면이라면 치아염소산을 10배, 표면이 딱딱하고 매끄러운 <br/>
      곳이면 100배로 희석하여 사용합니다.  <br/>
마. 30분정도 지난 후 종이 타올이나 휴지로 소독제를 흡수시켜 생물재해용기에 버립니다.  <br/>
바. 물로 표면을 닦아 소독제의 성분이 남아있지 않도록 합니다.  <br/>
사. 오염제거에 사용한 모든 물품은 적출물로 간주하여 취급하도록 합니다.  </span><br/>
<br/>
환자의 검체는 규정에 따라 소독한 후 폐기합니다.  <br/>
검체 채취와 관계되는 바늘, 칼날, 기타 날카로운 물질은 열에 안전성이 있고 단단하며 뚫어지지않는 지정된 용기에 넣어 규정에 따라 <br/>
소독한 후 폐기합니다.  <br/>
검체를 수송하는 상자에 검사물이 엎질렀으면, 1% 치아염소산액에 30분간 담그어서 소독합니다. <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BloodCollection