import React, { useState } from 'react'
import styles from './css/LaboratoryType.module.scss'
import SectionTitle from '../../../components/SectionTitle'

const PrenatalManagement = () => {

    const [ num, setNum ] = useState(1)
    
    const TypeTitle = ({title}) => {
        return(
            <div className={styles.type_title_wrapper}>
                <div className={styles.rect}/>
                <div className={styles.type_content_title}>{title}</div>
            </div>
        )
    }

    const SubTitle = ({title}) => {
        return(
            <div className={styles.subtitle_wrapper}>
                <div className={styles.rect}/>
                <div className={styles.subtitle_text}>{title}</div>
            </div>
        )
    }

    const PrenatalManage = () => {
        return(
            <div className={styles.section}>
                <SectionTitle kor="산전관리검사" eng="Prenatal Management Inspection"/>
                    <div className={styles.prenatal_wrapper}>
                        <div className={styles.prenatal_title}>산전관리란?</div>
                        <div className={styles.prenatal_text}>
                            임신중인 모성의 건강관리를 의미하여<br/>
                            엄마와 아빠, 태어날 아기의 건강 유지 및 보호를 위한 조기 진찰과 규칙적인 관리 및 정기적인 검사 등 모두를 말합니다.<br/>
                            임신중의 조기진찰과 규칙적인 진찰로 임산부와 태아에게 일어날 수 있는<br/>
                            여러 가지 질병 및 이상 ( 임신중독증, 유산, 조산, 난산, 및 사산 등 ) 을 조속히 찾아내고,<br/>
                            임신중의 영양관리, 영양섭취 등을 교육하여 성숙하고 건강한 아기를 안전하게 분만하는데 목적이 있습니다.
                        </div>
                    </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="임신전 건강관리"/>
                    <div className={styles.type_content_text}>
                        여성은 임신을 하게 되면 건강 유지에 대한 이중의 책임을 지게 됩니다.<br/>
                        산모 자신의 건강이 곧 태속의 아기 건강이기 때문입니다. 산모의 몸속으로 들어오는 모든 것이 <br/>
                        태아에게도 영향을 주기 때문에 임신 전 관리 중 가장 중요한 것은 예비 부모들의 임신전 약물복용주의. 금주, 금연 등입니다.<br/>
                        이러한 성분들은 임신 몇 개월전부터 미리 중단하여 자신의 건강상태를 최고의 상태로 <br/>
                        유지한 후 임신을 하도록 하는 지혜가 필요합니다. 남편은 다르다고 생각할 지 모르나 남자의 몸에서 정액이 만들어 지려면 <br/>
                        약 3개월이 걸리기 때문에 예비 아빠들도	임신전의 정액에 나쁜 영향을 받을 수 있으므로 함께 주의하고 노력해야 합니다.<br/>
                        <br/>
                        임신, 그 생명의 시작<br/>
                        임신은 남성의 정자와 여성의 난자의 결합으로 시작됩니다. 여성이 한달 중에 임신할 수 있는 시기(가임기)는<br/>
                        월경주기가 28일로 규칙적인 경우에 최종 월경일과 다음 월경 예정일의 중간 쯤입니다.<br/>
                        즉 다음 월경 예정일로부터 14일 전을 배란일로 보아 그를 전후한 일주일 정도로 폭넓게 계산합니다.<br/>
                        수정란이 착상되기까지는 약 일주일이 걸리며, 수정 후 266일 후 분만하게 됩니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="임신을 알리는 신호들"/>
                    <div className={styles.type_content_text}>
                        월경이 없어집니다. 호르몬의 영향에 의해 배란이 억제되기 때문입니다.<br/>
                        체온이 평소보다 높고 왠지 나른하며 감기에 걸린 듯한 증상이 나타납니다.<br/>
                        입덧 : 마지막 생리시작일로부터 6주 경부터 메슥거리는 증상이 나타나고 특정한 음식을 먹거나 냄새를 맡았을 때<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;비위가 상해 헛구역질을 하는 경우가 있습니다.<br/>
                        자꾸 소변이 보고 싶어집니다. 자궁이 커지기 때문에 방광이 압박을 받습니다.
                        유방이 부풀고 조금 아프기도 합니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="임신시 건강체크법"/>
                    <div className={styles.type_content_text}>
                        모든 약물의 복용을 중단합니다.<br/>
                        꼭 필요한 약물의 경우 의사선생님과 상의하시어 복용여부를 결정하도록 합니다.<br/>
                        금주, 금연 합니다. 간접흡연도 피해야 하며, 흡연한 사람과 함께 수면을 취하는 것도 해롭다고 합니다.<br/>
                        종합건강진단을 실시하도록 합니다.<br/>
                        태아에게 해를 줄 수 있는 질병을 미리 진단하여 임신중에 치료해야 하는 질병을 미리 예방합니다.<br/>
                        X-Ray 및 공해환경은 피해야 합니다.<br/>
                        영양소가 풍부하고 건강에 좋은 음식을 균형있게 고루 섭취합니다.<br/>
                        인스턴트 식품은 사모와 태아 모두에게 알러지를 유발할 수 있으니 가급적 삼가하시는 것이 좋습니다.<br/>
                        활동과 휴식의 균형을 유지하고 충분한 수면을 취하도록 합니다.<br/>
                        걷기, 스트레칭 등 가벼운 운동으로 몸의 긴장을 풀어줍니다.<br/>
                        납, 동, 카드뮴, 알미늄 등의 수치분석을 통하여 마시는 음료를 주의합니다.<br/>
                        탄산수나 카페인 음료수는 좋지 않으므로 생수를 권해드립니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="임신의 불편감"/>
                </div>
                <div className={styles.prenatal_wrapper}>
                    <div className={styles.prenatal_title}>산전검사항목</div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="빈혈검사"/>
                    <div className={styles.type_content_text}>
                        임신중에는 태반이나 태아 때문에 혈액량이 늘어나고<br/>
                        말초 혈관에서의 혈액유출로 인해 전보다 1.5배 정도의 혈액량이 증가합니다.<br/>
                        그런데 산소를 운반하는 주요 성분인 적혈구의 증가는 그에 미치지 못하므로<br/>
                        상대적으로 적혈구의 농도가 떨어지면서 빈혈이 발생합니다.<br/>
                        임산부는 이신으로 인한 태아와 태반의 요구량, 자연적인 배설을 통한 손실을 보충하지 못하고 부족하게 됩니다.<br/>
                        이는 철의 부족으로 인한 철결핍성빈혈이라고 부르는데, 철분이 부족하면 태아의 경우 자궁 내 성장에 지장을 주고<br/>
                        조산의 우려가 증가한다고 알려져 있습니다.	
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="혈액형검사"/>
                    <div className={styles.type_content_text}>
                        산모는 출산 전 다량의 출형에 의한 수혈사고나,<br/>
                        태아(신생아) 적아구증을 예방하기 위해 자신의 혈액형을 정확히 알고 있어야 합니다.<br/>
                        특히, Rh 계열의 혈액형까지 반드시 확인해야 합니다.	
                    </div>
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="A B O 혈액형검사"/>
                        <div className={styles.micro_content_text}>
                            혈액형을 결정하는 유전자는 9번 염색체에 위치하고 있으며 태아는 아빠, 엄마에게서 각각 하나씩 유전되어 물려 받게 됩니다.<br/>
                            이러한 유전자는 혈구의 세포막에 작용하여 특이적인 항원 물질인 A와 B를 만들어 내고, 혈청에는 각각의 항원에 대해<br/>
                            반응하지 않는 항체를 생성하게 합니다. A형에게는 Anti-B, B형에게는 Anti-A, O형에게는 Anti-A,B 모두 생성하고,<br/>
                            AB형에게는 둘다 생성하지 않게 됩니다. 그래서 혈액형 검사를 할 때에는 혈구와 혈청을 이용하여<br/>
                            각각 2회 검사를 하는 것이 바람직합니다.	
                        </div>
                    </div>
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="RH 혈액형"/>
                        <div className={styles.micro_content_text}>
                            Rh혈액형은 ABO 혈액형과 전혀 다른 별개의 혈액형으로 Rh 혈액형군에는 D, C, c, E, e 등을 포함한 45가지의 혈액형이<br/>
                            존재합니다. 우리가 보통 Rh 혈액형이라고 하는 것은 이중에서 D 혈액형을 지칭하는데 Rh가 양성인 경우는 D 혈액형을<br/>
                            가지고 있는 경우이고 Rh가 음성인 경우는 D 혈액형을 가지지 않는 경우입니다. 전세계적으로 Rh 음성혈액형은 서구인들<br/>
                            사이에는 15%가량 되지만, 한국인에는 0.1%정도 됩니다.<br/>
                            이렇게 되어 인체의 혈액형은 ABO 유전자와 Rh 유전자에 의해 표현됩니다.<br/>
                            ABO 및 Rh 혈액형은 수많은 종류의 꽃들이나 수많은 종류의 사람들처럼 "다양성"을 나타내는 물질중의 하나입니다.
                        </div>
                    </div>
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="임산부가 Rh 음성인 경우, 출산과 아기의 건강문제"/>
                        <div className={styles.micro_content_text}>
                            Rh 음성 혈액형을 가진 여자가 Rh 양성인 남자와 결혼하여 Rh 양성인 아기를 임신하게 되면 Rh음성이 산모와 혈액형이 달라서<br/>
                            출산 시 아기의 적혈구가 요혈되어 신생아용혈성질환을 일으킬 수 있는 문제가 있었으나 현대의학의 발전으로 이를 해결할 수 있는<br/>
                            약제가 개발되었습니다.<br/>
                            아기의 적혈구를 용혈시키는 항체를 만들 수 없게 예방하는 방법입니다.<br/>
                            Rh 음성인 산모는 분만 후 72시간 이내에 Rh 면역글로불린제재를 근육내로 주사 맞아야 하고, 더 안전하게 하기 위해서는<br/>
                            Rh 면역글로불린제를 임신 28주에 첫번째 한번 맞고, 분만 직후에 다시 한번 투여 받으면 이후 임신하는 아기에서 Rh 혈액형과<br/>
                            관련된 문제는 없게 됩니다.<br/>
                            이제는 Rh 음성인 분들이 임신을 해도 걱정하지 마시고 편안한 심리상태를 유지하시어 태교에 도움이 되시길 바랍니다.
                        </div>
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="간염검사"/>
                    <div className={styles.type_content_text}>
                        간염이란 바이러스, 알코올, 약물, 자가면역대사질환 등에 의해 간에 염증이 생겨 간세포가 손상되는 상태를 말하는 것으로<br/>
                        현재까지 알려진 간염 바이러스는 A, B, C, D, E, G 형 등이 있으며 <br/>
                        우리나라에서 가장 문제가 되는 것은 A, B, C 형이며 만성간질환을 유발할 수 있는 것은 B형과 C형 입니다. <br/>
                        특히 산모에게 있어 좀 더 주의해야 하는 간염은 B형 감염입니다.<br/>
                        B형간염 : B형 간염은 여러 경로로 감염될 수 있는데 그 중 가장 맣은 부분을 차지하는 감염경로가 보균자 엄마로부터 출산된<br/>
                        신생아 감염입니다. 다음으로는 유아기 때의 보균자 엄마로부터 감염되는 경로 입니다. 음식물을 씹어서 주거나 잦은 입맞춤,<br/>
                        그 외 주사기에 의한 오염 등으로 감염될 수 있습니다.<br/>
                        산모가 항원이 양성인 경우 활동성 간염검사를 받으시고 적절한 처방을 받으셔야 합니다.<br/>
                        활동성감염인 산모의 경우 입덧도 훨씬 심하고 음식도 못 먹기 대문에 감염의 상태가 <br/>
                        더욱 악화되어 간기능까지 나빠질 수 있으므로, 임신기간 동안 충분히 휴식을 취하도록 해야 합니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="간기능검사"/>
                    <div className={styles.type_content_text}>
                        간은 단백질, 알부민, 혈액응고인자, 탄수화물의 합성 및 지방의 대사, 각종 비타민의 저장,<br/>
                        내분비 호르몬의 합성 및 저장 등 대사, 합성 및 분비, 배출에 관여하는 수백 종의 기능을 수행하고 있어<br/>
                        한 두가지 검사로 간기능을 종합적으로 평가하기는 어렵지만,<br/>
                        일반적으로 임상검사실에서 실시하는 간기능검사에는<br/>
                        단백질, 알부민, 트란스아미나제(형정 지오티, 지피티), 감마지티피, 빌리루빈, 알칼라인 포스파타제 검사들이 있습니다.<br/>
                        간의 기능이 좋지 않으면, 산모는 쉽게 피로하고 기운이 없으며<br/>
                        입덧이 심하고 입맛이 없어지고 태아의 건강에도 좋지 않은 영향을 주게 됩니다.<br/>
                        임신 중에는 생기는 특정한 간질환이 있기는 하나 입덧에 의해 간수치가 상승하는 경우도 흔히 있으니<br/>
                        따라서 일반인의 간수치와 비교하시면 안되고 반드시 주치의와 상의하시어 적절한 관리를 받으셔야 합니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="신장기능검사"/>
                    <div className={styles.type_content_text}>
                        신장은 등쪽 허리보다 조금 위에, 척추의양 옆 좌우에 하나씩 위치하는 장기로<br/>
                        구조는 작은 모세혈관이 실타래처럼 영켜있는 사구체와 세뇨관으로 이루어져 있습니다. <br/>
                        사구체에서는 혈액중으 수분과 노폐물이 걸러지고 세뇨관이라는 가늘고 긴 관을 통과하는 동안<br/>
                        소변이 농축되고, 필요한 성분은 다시 몸 속으로 재흡수 되어 최종적으로 우리 몸 밖으로 소변이 배출됩니다.<br/>
                        임신 중의 신장기능이 좋지 않을 경우엔 단백뇨가 나오는데 <br/>
                        이 때엔 신장질환, 요로감염, 임신중독증 등의 질환을 의심하기도 합니다.<br/>
                        건강한 출산을 위해 산모는 주기적으로 소변검사를 하셔야 합니다.<br/>
                        <br/>
                        첫째, 신장염 방광염 확인을 위해 소변 내 염증세포, 혈액 등이 검출되는지 확인합니다.<br/>
                        둘째, 당뇨병검사 소변내의 당의 배출을 검사하여 당뇨여부를 측정합니다.<br/>
                        셋째, 임신중독증 확인, 임신 중반기 이후 소변 내 단백질 배출량을 측정하여 임신중독증 발생 여부를 예측합니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="혈당검사"/>
                    <div className={styles.type_content_text}>
                        췌장에서의 인슐린 부족, 또는 인슐린 기능 부전 등에 의해 몸 안의 당대사에 장애가 생겨 <br/>
                        신진대사가 정상적으로 이루어지지 못하는 질병으로 <br/>
                        혈액중에 당 성분이 필요이상으로 많이 쌓여 고혈당의 상태가 되어 소변으로 당이 배설되는 증세를 말합니다.<br/>
                        임신성 당뇨는 당대사 장애의 정도에 상관없이 임신 중에 처음 발생하였거나, 처음 발견된 당뇨병으로 규정하고 있습니다.<br/>
                        임산부의 약 4%정도에서 당뇨병이 동반되고 이 중 90%정도가 임신성 당뇨병으로 알려져 있습니다. <br/>
                        대부분 출산 후에 정상 대사기능	상태로 회복되지만 <br/>
                        장기적으로는 35% 이상에서 당뇨병이 지속되는 것으로 알려져 있습니다.
                    </div>
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="임신성당뇨의 진단검사방법"/>
                        <div className={styles.micro_content_text}>
                            임신 24~28주 사이에 금식여부나 검사기관에 관계없이 50g의 포도당을 복용하고 1시간 후에 혈당을 검사하여 140mg/dL 이상일<br/>
                            경우 정밀검사를 합니다. 정밀검사는 8~14시간 금식 후 공복 혈당과 100g 포도당을 복용한 뒤 1시간, 2시간, 3시간 째 혈당을<br/>
                            검사합니다. 검사 후 주치의와 상의하시어 적절한 관리를 받으셔야 합니다.
                        </div>
                    </div>
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="임신성당뇨병의 관리"/>
                        <div className={styles.micro_content_text}>
                            ① 규칙적인 식사와 균형잡힌 영양섭취<br/>
                            ② 스트레스 해소<br/>
                            ③ 규칙적인 운동<br/>
                            ④ 정기적인 혈당 및 뇨당 검사
                        </div>
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="소변검사"/>
                    <div className={styles.type_content_text}>
                        소변검사는 소변을 생성하는 신장을 비롯하여 그 통로인 요관, 방광, 요도의 병변 등을 진단 할 수 있고 <br/>
                        임신중에는 임신 중독의 판정에 중요한 역할을 합니다. <br/>
                        그 외에도 무증상의 방광염, 신우염을 발견하여 만성으로 진행되는 것을 방지하고 조기진통, 신우염을 예방할 수 있습니다.<br/>
                        뿐만 아니라 소변 속에는 전신의 대사산물이 배설되고 있으므로 <br/>
                        비뇨기 이외의 전신적인 질환의 진단에도 소변검사가 널리 시행됩니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="매독검사"/>
                    <div className={styles.type_content_text}>
                        매독은 나선형인 Treponema palliadum 균이 원인균이며, 병소와의 접촉으로 감염되며, <br/>
                        성매개 질환이므로 매독인 사람과의 성 접촉에 의해서 전파될 수 있고, 감염된 산모로부터 출생된 신생아도 감염이 될 수 있으며, <br/>
                        이러한 경우를 선천성 매독이라고 합니다.	<br/>
                        매독은 성기에 연성하감이 생기는 제 1기 매독, 증상 소실 후 다양한 발진을 동반하는 제 2기 매독, <br/>
                        감염된지 3~12년 후에 피부 점막이나 지방층, 근육층, 골 등에 고무같이 물렁물렁한 혹이 생기며 심장, 혈관, 신경계에도 <br/>
                        균이 침범하여 사망까지 이를 수 있는 제 3기 매독으로 구분합니다. <br/>
                        암시야 검사에서 매독균을 발견하거나 매독혈청검사에 양성반응이 나오면 진단이 가능하면, Penicillin으로 치료를 합니다.<br/>
                        산모가 매독에 걸릴 경우 조기 진통, 태아사망, 그리고 신생아매독을 일으킬 수 있으므로 <br/>
                        모든 임산부는 산전에 반드시 매독혈청검사를	받으셔야 하며, <br/>
                        매독은 심신 초기에 치료하면 태아에게 전염되지 않을 수 있으므로 조기에 발견하여 치료하는 것이 좋습니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="에이즈검사"/>
                    <div className={styles.type_content_text}>
                        정확이 에이즈를 일으키는 바이러스의 명칭은 인간면역결핍바이러스(Humanlmmunodeficiency Virus ; HIV) 이고 <br/>
                        에이즈는 HIV에 감염된 후 여러 가지 증상이 나타나는 질병 상태를 말합니다. <br/>
                        감염원으로서 중요한 것은 HIV 환자 및 감염자의 혈액, 정액, 질 분비액입니다. <br/>
                        따라서 HIV는 주로 성행위 및 혈액을 매개로 전파되고, 어머니로부터 태아로의 모자감염도 가능합니다. <br/>
                        침, 눈물, 땀에 의한 감염이나 곤충 매개에 의해서는 감염이 일어나지 않습니다.<br/>
                        HIV에 감염된 후 바이러스가 증식하면서 면연력을 잃고 에이즈 증상이 나타나는 시기는 수개월에서 12년 이상까지 사람마다 <br/>
                        다양하지만 평균 10년 정도 걸리는 것으로 보고 되고 있습니다. <br/>
                        감염된 환자는 면역력 감소로 인하여 보통 사람들에서는 문제가 되지 않는 균이나 바이스, 기생충 등에 쉽게 감염되고 <br/>
                        이로 인한 폐렴, 결핵 등에 의해 사망하게 됩니다.	<br/>
                        에이즈에 감염된 여성이 임신을 하는 경우 태아가 감염될 확률은 30%정도 이며 <br/>
                        이런 경우에는 신생아를 즉시 검사해보면 잠복기로 인한 음성으로 나올 수 있기 때문에 계속 추적 검사를 하여야 합니다. <br/>
                        또한 출산 후에도 모유수유를 하는 경우 바이러스 전파 위험성이 약 14%정도로 보고되고 있기 때문에<br/>
                        집중적인 추적 관찰이 필요합니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="풍진검사"/>
                    <div className={styles.type_content_text}>
                        풍진은 풍진 바이러스(rubella virus)에 의해 발생하는 급성 바이러스성 질환으로<br/>
                        감염자의 비인두 분비액의 비말(공기)이나 직접 접촉에 의해 감염되며 보통 풍진에 감염된 환자는 <br/>
                        피부발진이 시작되기 전 7일 경부터 피부발진이 소실된 후 5~7일까지 다른 사람에게 병을 옮길 수 있습니다. <br/>
                        선천성풍진 증후군에 걸린 소아는 고농도의 바이러스를 배출하므로 <br/>
                        중요한 감염원이 되고 이 경우 1년까지 남에게 감염력을 가지기도 합니다.<br/>
                        임신초기의 산모가 풍진에 감염되면 유산의 확률이 높고 <br/>
                        만약 분만하더라도 선천성 기형 및 중추신경계 이상부터 안구질환, 심장질환, 신경질환, 성장부전, 감염, 폐렴, 골질환, <br/>
                        혈액질환, 염색체 이상 등 다양한 질환 및 기혁이 초래 될 수 있습니다.<br/>
                        풍진 바이러스는 잠재적인 기형유발인자 이지만 임신 중 가장 위험한 시기는 임신 15~16주 이전이고 <br/>
                        그 후에는 풍진 바이러스에 산모가 감염되어도 태아에 대한 영향은 거의 없다고 알려져 있습니다.<br/>
                        그러나 임신초기에 풍진에 감염되었다고 태아에게 전염 되는것도 아니고 <br/>
                        태아에게 감염이 되었다고 반드시 기형아를 초래하는 것이 아니기 때문에 정확한 검사를 실시하여 <br/>
                        태아의 기형유무를 조사하여야만 합니다.	<br/>
                        이 질환의 예방을 위해서 가장 중요한 것은 환자와의 접촉을 피하고 예방접종을 하는 것입니다. <br/>
                        모든 가임여성은 예방주사를 맞아야 하며	특히 출산이나 유산 후에라도 예방접종을 실시해야 합니다. <br/>
                        그러나 풍진예방접중은 약독화(attenuated) 생바이러스이기 때문에 <br/>
                        임신 중이나 임신을 바로 계획하는 여성에서는 피해야 합니다.
                    </div>
                </div>
            </div>
        )
    }
    
    const Hygiene = () => {
        return(
            <div className={styles.section}>
                
            </div>
        )
    }

    return(
        <div className={style.container}>
            <PrenatalManage/>
            
        </div>
    )
}

export default PrenatalManagement