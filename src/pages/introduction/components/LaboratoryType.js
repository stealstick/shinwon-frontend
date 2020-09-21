import React, { useState } from 'react'
import styles from './css/LaboratoryType.module.scss'
import SectionTitle from '../../../components/SectionTitle'


const LaboratoryType = () => {

    const [ num, setNum ] = useState(1)

    const TypeTitle = ({title}) => {
        return(
            <div className={styles.type_title_wrapper}>
                <div className={styles.rect}/>
                <div className={styles.type_content_title}>{title}</div>
            </div>
        )
    }

    const TypeContentTitle = ({kor, eng}) => {
        return(
            <div className={styles.type_content_title_wrapper}>
                <div className={styles.type_content_title_wrapper_kor}>{kor}</div>
                <div className={styles.type_content_title_wrapper_eng}>{eng}</div>
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

    const Serum = () => {
        return(
            <div className={styles.section}>
                <TypeContentTitle kor="혈청" eng="Serum"/>
                <div className={styles.text_normal_500}>Serum을 이용하는 검사</div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="일반 주사기 채혈 시 주의사항"/>
                    <div className={styles.type_content_text}>
                        혈액채취향은 안내서를 참고하시어 항목별 필요량을 미리 계산하신 후 채혈하셔야 합니다. (필요 혈청량의 2~3배 이상)<br/>
                        채혈시에는 touniquet을 1분이상 묶지 않은 상태에서 적당한 속도로 거품이 나지 않도록 채혈하십시오.<br/>
                        혈액의 농축 및 용혈은 검사결과에 변동을 초래할 수 있습니다.<br/>
                        채혈하신 후 혈액을 tube에 옮겨 넣으실 때에는 반드시 주사기 바늘을 제거하고<br/>
                        진공 tube 뚜껑을 여신 다음 입구를 tube 기벽에 대고천천히 넣어 주십시오.<br/>
                        심하게 주입하는 경우 검체가 용혈 (Hemolysis)되어 결과의 신뢰도를 저하시킬 수 있습니다.<br/>
                        혈액은 항응고제가 들어있지 않은 tube에 먼저 분주합니다.<br/>
                        (이 때 tube별 혈액채취량을 지켜주셔야 신뢰할 수 있는 결과를 얻게 됩니다.)<br/>
                        분리된 검체는 냉장보관해 주시고 특별한 보관이 필요한 검사의 경우에는 안내서를 참고하시어 보관하여 주십시오.<br/>
                        SST tube의 경우 분리된 혈청을 다른 용기에 옮길 필요없이 그대로 보관하시면 됩니다.<br/>
                        혈청분리관에 혈청을 분리하여 보내실 때에는 혈청분리관 입구를 완전히 밀봉하여 보내주시기 바랍니다.<br/>
                        치료약물 모니터링 혹은 독성학적 분석을 위한 검체는 혈청분리관을 사용하지 마시기 바랍니다.<br/>
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="진공혈청관(vaccumtainer tube)으로 채혈 시 주의사항"/>
                    <div className={styles.type_content_text}>
                        진공채혈기를 사용하시는 경우 뚜껑을 여실 필요없이 채혈하시면 적정량이 채취됩니다.
                    </div>
                </div>
            </div>
        )
    }

    const WholeBlood = () => {
        return(
            <div className={styles.section}>
                <TypeContentTitle kor="전혈" eng="Whole Blood"/>
                <div className={styles.text_normal_500}>Whole Blood(전혈)을 이용하는 검사</div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="CBC(일반혈액)검사"/>
                    <div className={styles.type_content_text}>
                        혈액 3.0㎖을 채취하여 EDTA tube에 넣고 tube를 위 아래로 5~10회 정도 기울여<br/>
                        항응고제와 혈액이 충분히 섞이도록 잘 혼합합니다.<br/>
                        이때, 항응고제 (EDTA)와 혈액량의 비율이 적합하지 않거나, <br/>
                        혼합이 불충분할 경우 micro clot이 생겨 cell count 등 결과의 오차가 발생할 수 있으므로 주의합니다.<br/>
                        검사는 2시간 이내에 이루어져야 하지만<br/>
                        즉시 검사할 수 없을 경우에는 4℃에서 보관하며, 24시간까지는 CBC 결과가 안정합니다.<br/>
                        실온에서 6시간 이상 방치 시 MCV, ESR, PLT, WBC count, Reticulocyte(2일내 소실) 등 결과에 영향을 미칠 수 있습니다.<br/>
                        냉동 보관된 검체는 분석이 불가능합니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="혈액도말/혈구관찰검사"/>
                    <div className={styles.type_content_text}>
                        신선한 혈액을 사용하여 얇고, 고르게 도말 슬라이드를 제작합니다.<br/>
                        도말의 길이는 약 3~4cm가 좋으며 세포 변형을 초래할 수 있으므로, 슬라이드는 신속하게 건조시켜야 합니다.<br/>
                        혈구의 형태감별을 위한 검사는 일반 혈액검사와 함께 의뢰하거나 귀원의 검사실에서 실시한 검사의 결과지와<br/>
                        도말 slide, 소견서를 첨부하여 주시면 정확한 임상 진단과 결과 판독에 도움이 됩니다.<br/>
                        <span className={styles.emphasis}>특수염색이 필요한 경우는 사전에 연락을 드리겠습니다.</span>
                    </div>
                    <div className={styles.img_wrapper}>
                        <img src="imgs/img/whole-blood-slide.png" alt="" className={styles.img}/>
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="혈액응고검사"/>
                    <div className={styles.type_content_text}>
                        단독 의뢰 시 첫번째 채혈한 검체는 폐기하고 두번째 채혈한 검체로 검사하며,<br/>
                        다른 검사와 함께 의뢰된 경우 두번째 혹은 세번째로 채혈한 검체를 사용합니다. <br/>
                        (채혈 시 조직액이 미량 섞이는 것을 방지하기 위함)<br/>
                        Heparin 오염의 우려가 있는 카테터(catheter)로 채혈하는 경우 5.0mL<br/>
                        또는 catheter dead space volume의 6배를 뽑아낸 후 검체를 채취합니다.<br/>
                        PT는 24시간, APTT는 4시간, 다른 응고검사는 4시간 이내에 검사를 시행하는 것이 원칙이지만 <br/>
                        불가능할 경우 혈소판 결핍 혈장 (platelet poor plasma, PPT)을 분리하여 냉동 보관합니다. (-20℃에서 14일 동안 안정)<br/>
                        Hct의 값이 45%일때, 항응고제와 혈액량의 비율은 1:9로 채혈합니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="세포면역감사 (Iymphocytes subset)"/>
                    <div className={styles.type_content_text}>
                        K2 EDTA tube를 사용하여 3.0mL을 채취한 후 반드시 실온 보관하며,<br/>
                        토요일 및 주중 공휴일 전날 검체 접수 삼가하여 주시기 바랍니다. (검체에 검체채취 일시 기재)<br/>
                        4℃ 보관 또는 림프구 분리 후 보관은 양성률이 낮으며 CD8 세포에 비하여 CD4 세포가 저하될 수 있습니다.
                    </div>
                    <div className={styles.type_refuse_wrapper}>
                        <div className={styles.type_refuse_title}>검체거절기준</div>
                        <div className={styles.type_refuse_content}>
                            <div className={styles.type_refuse_item}>• 응고된 검체</div>
                            <div className={styles.type_refuse_item}>• 24시간 이상 경과되었거나 냉장보관된 검체</div>
                            <div className={styles.type_refuse_item}>• 검체량이 부족하거나 심하게 용혈된 검체</div>
                            <div className={styles.type_content_item}>• Heparin whole blood 또는 EDTA 이외의 항응고제를 사용한 검체</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const Urine = () => {
        return(
            <div className={styles.section}>
                <TypeContentTitle kor="요" eng="Urine"/>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="일시적 요"/>
                    <div className={styles.type_content_text}>
                        수시뇨(random urine)라고도 하며 일반뇨 현미경검사와 화학검사를 위한 뇨는<br/>
                        일반적으로 식후 시간 이내와 격렬한 운동 후를 피한 요이면 무방하다. <br/>
                        아침 기상 직후의 첫 뇨가 가장 잘 농축되어 있으며 성분도 안정 상태에 있으므로 가장 적당하다. <br/>
                        처음에 떨어지는 소변은 버리고 이어서 신선한 중간소변을 플라스틱 컵에 1/2컵 (20ml 이상) 받는다.<br/>
                        수검자가 소변을 미리 본 경우는 적어도 4시간이 지난 뒤에 채뇨하도록 한다.<br/>
                        (주의 : 소변을 빨리 보기 위해 과도한 수분이나 카페인이 들어있는 커피 등을 섭취하지 않도록 한다.)<br/>
                        ▶ 보관 방법 : 의뢰하기 전까지 반드시 냉장 보관한다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="24시간 뇨"/>
                    <div className={styles.type_content_text}>
                        주의할 점은 시간을 정하여 채뇨를 시작하는데,<br/>
                        지정된 시간 (예, 오전 07:00)에 환자로 하여금 소변을 보게 하여 이것은 버리고, <br/>
                        그 이후부터 요를 전부 모으되 다음날 오전 07:00에는 소변이 마렵지 않아도 소변을 완전히 봐서 용기에 넣어야 한다. <br/>
                        대변볼 때 나오는 소변도 모두 받는다. <br/>
                        검체 채취 중 100㎖ 이상 검체가 유실된 경우에는 새로 검체를 모은다. <br/>
                        24시간 뇨 검사에서 오차의 가장 흔한 원인은 검체 채취 및 보존상의 잘못에 기인한다. <br/>
                        24시간 소변을 받는 동안 일반 소변검사를 위해 검체의 일부를 따로 받는 것을 금한다.<br/>
                        대부분의 화학검사용 소변은 용기에 받아 냉장 보관한다. <br/>
                        냉장 보관을 안하면 측정할 물질이 변성되어 검사에 큰 오차가 생긴다.<br/>
                        소변은 깨끗한 컵을 이용해서 받은 후 채뇨백으로 옮겨 담을 수 있다.<br/>
                        (24시간 뇨 검사의 오차는 검체 채취 및 보존상의 오차이므로 검사종목에 따른 보관방법과 보존제를 첨가하도록 한다. <br/>
                        특히, 음식이나 약물복용을 금해야 한다.)	
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="주간뇨 / 야간뇨 구별이 필요할시(12시간뇨 12hr’s Urine)"/>
                    <div className={styles.urine_table}>
                        <div className={styles.urine_table_item}>
                            <div className={styles.table_item_title}>주간뇨</div>
                            <div className={styles.table_item_text}>오전 9시부터 오후 9시까지 채뇨하되 아침식사는 채뇨 시작 후에 하십시오.</div>
                        </div>
                        <div className={styles.urine_table_item}>
                            <div className={styles.table_item_title}>야간뇨</div>
                            <div className={styles.table_item_text}>오후 9시부터 오전 9시까지 채뇨하되 저녁식사는 오후 5시에 하십시오.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const MetabolicAbnormality = () => {
        return(
            <div className={styles.section}>
                <div className={styles.type_content_title_wrapper_kor}>선천성 대사이상</div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="신생아 선청성 대사이상검사를 위한 검체 채취시기"/>
                    <div className={styles.type_content_text}>
                        건강한 신생아의 경우 가장 이상적인 채혈시기는 생후 48~72시간 사이로, 일반적으로 퇴원전 채혈하는 것이 좋습니다.<br/>
                        <span className={styles.emphasis}>(특정 아미노산의 혈중 증가율은 질환의 심각성이나 단백질 섭취량에 따라 달라지므로 너무 일찍 검사를 실시하는 경우<br/>
                        위음성을, 또한 정상 신생아에서 출생 직후 TSH surge가 있으므로 48시간 이전에 채취한 검체에서는 갑상선 저하증에<br/>
                        대한 위양성의 결과를 초래할 수 있습니다.)<br/></span>
                        수혈이 필요한 경우는 가능하면 수혈받기 전에 초기검체를 채취하도록 하며, 수혈 전 채취한 검체가 생후 24시간 이내에<br/>
                        채취되었을 경우 생후 30일 및 60일에 재검을 실시하는 것이 좋습니다.<br/>
                        또한 채혈 card에 수혈 후 검체를 채취하였다는 내용과 함께 가장 최근 수혈한 날짜를 반드시 기입하여 주십시오.<br/>
                        입원기간이 연장되는 미숙아 등에서는 생후 7일 정도에 검체를 채취하는 것이 좋으며, 입원일이 14일을 초과하는 경우는<br/>
                        퇴원시, 1개월 이상일 경우는 1개월째 재검을 실시함이 바람직합니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="주간뇨 / 야간뇨 구별이 필요할시(12시간뇨 12hr’s Urine)"/>
                    <div className={styles.type_content_text}>다음은 신생아 선천성 대사이상검사를 위한 검체채취방법입니다.</div>
                    <div className={styles.type_tips_wrapper}>
                        <div className={styles.type_tips_title}>신생아 발뒤꿈치의 모세혈관에서 filter paper(혈액여지)를 이용하여 검체를 채취하는 요령입니다.</div>
                        <div className={styles.type_tips_text}>
                            장갑을 착용합니다.<br/>
                            발에 혈류를 증가시키기 위해 환아의다리를 심장보다 아래쪽에 위치하도록 합니다.<br/>
                            3분정도 따뜻한 물수건으로 뒤꿈치를 감싸 혈류를 증가시키는 등의 방법으로 발뒤꿈치를 따뜻하게 합니다.<br/>
                            검체를 채취하는 동안 오염방지를 위한 filter paper에 그려진 원을 절대 손으로 만져서는 안됩니다.<br/>
                            또한 filter paper가 물이나 알코올, 방부제, 로션, 파우더 등에 닿지 않도록 주의해야 합니다.<br/>
                            채혈부위를 70% isopropanol로 닦고 남아 있는 알코올은 <br/>
                            마른 dry sterile gauze로 닦아 낸 후 마르도록 기다립니다.<br/>
                            신생아의 발뒤꿈치 바닥에 소독한 일회용 lancet(2.4mm point이하)을 이용하여 재빨리 깨끗한 puncture를 합니다.<br/>
                            처음 나온 혈액은 소독된 gauze pad로 한방울 닦아낸 후 커다란 방울이 되도록 합니다.<br/>
                            Filter paper를 커다란 혈액방울에 대어서 충분한 양의 혈액이 <br/>
                            한번에 filter paper에 그려진 원을 채워 흡수되도록 합니다
                        </div>
                        <div className={styles.type_tips_bottom_wrapper}>
                            <img src="imgs/img/tips-foot.png" alt="" className={styles.type_tips_img}/>
                            <div className={styles.type_tips_bottom_text}>
                                ① Paper를 채혈부위에 대고 눌러서는 안되며, 채혈부위를 쥐어짜도 안됩니다.<br/>
                                ② 혈액을 filter paper의 한쪽 면에만 묻히도록 합니다.<br/>
                                ③ 계속해서 나오는 혈액방울을 동일한 원 안에 다시 묻혀서는 안되며, 혈류가 감소하여<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;원이 완전히 채워지지 않았으면 새로운 원에 채혈을 다시 합니다.<br/>
                                ④ 이러한 과정을 반복하여 filter paper에 있는 네 개의 원을 완전히 채우십시오.<br/>
                                ⑤ Capillary tubes를 사용하지 마십시오.<br/>
                                ⑥ 채혈 후 발을 몸보다 위에 위치하도록 하고, 피가 멈출 때까지 채혈부위를 소독하고<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;거즈나 손으로 꼭 눌러 주십시오.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="채취 후 검체 운송시 주의점"/>
                    <div className={styles.type_content_text}>
                        4시간 이상 실온에서 채혈지를 건조시키며 수평상태에서 건조시켜 주십시오.<br/>
                        건조시 채혈지의 표면에 다른 물질이 닿지 않도록 주위하시고 검체가 채취된 채혈지를 열이나 직사광선에 직접<br/>
                        노출시켜서는 안됩니다.<br/>
                        채혈지가 완전히 건조되기 전에는 봉투 속에 넣지 말아 주십시오.<br/>
                        환자 정보가 빠짐없이 기재되었는지 확인하여 주십시오. (17-OHP의 경우 반드시 출생시의 체중을 기입하여 주십시오.)<br/>
                        검체가 완전히 마른 후 모아 넣거나 방치하지 말고 가능한 채취 후 24시간 내에 검사실에 보내주십시오.<br/>
                    </div>
                </div>
            </div>
        )
    }

    const FetalIdealism = () => {
        return(
            <div className={styles.section}>
                <div className={styles.type_content_title_wrapper_kor}>산전 태아 이상성별</div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="산전관련 검사의뢰서의 기재 사항은 반드시 작성하여 첨부합니다."/>
                    <div className={styles.type_content_text}>
                        아래의 사항을 의뢰지에 빠짐없이 기록하여야 합니다.<br/><br/>			
                        <span className={styles.emphasis2}>체중<br/>
                        최종월경일(LMP)<br/>
                        임신 주수 ( 초음파(BPD),LMP) NT(Nuchal Translucency) 등<br/>
                        과거력 (Down, ONTD) 출산아 경험, 인슐린 의존성당뇨 (IDDM)등 재검 의뢰시 1차결과, 기타 소견 등</span>
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="검사시기"/>
                    <div className={styles.fetal_table_wrapper}>
                        <div className={styles.fetal_table_item_title}>
                            <div className={styles.fetal_table_item_text}>검사시기</div>
                            <div className={styles.fetal_table_item_text}>분류</div>
                            <div className={styles.fetal_table_item_text}>검사항목</div>
                            <div className={styles.fetal_table_item_text}>검체량</div>
                        </div>
                        <div className={styles.fetal_table_item_content}>
                            <div className={styles.fetal_table_item_content_text1}>임신 10~13주</div>
                            <div className={styles.fetal_table_item_content_text2}>선별검사</div>
                            <div className={styles.fetal_table_item_content_text3}>
                                First double marker (PAPP-A, Free β-HCG)<br/>
                                Integerted test 1차 (PAPP-A)<br/>
                                Sequential test 1차 (PAPP-A, Free β-HCG)<br/>
                            </div>
                            <div className={styles.fetal_table_item_content_text4}>혈청 1.0㎖</div>
                        </div>
                        <div className={styles.fetal_table_item_content}>
                            <div className={styles.fetal_table_item_content_text1}>임신 14~22주</div>
                            <div className={styles.fetal_table_item_content_text2}></div>
                            <div className={styles.fetal_table_item_content_text3}>
                                Triple test (AFP, uE3, hCG)<br/>
                                Quadruple test 2차 (AFP, uE3, hCG, inhibin-A)<br/>
                                Integerted test 2차 (AFP, uE3, hCG, Inhibin-A)<br/>
                                Sequenrial test 2차 (AFP, uE3, hCG, Inhibin-A)<br/>
                            </div>
                            <div className={styles.fetal_table_item_content_text4}>혈청 1.0㎖</div>
                        </div>
                        <div className={styles.fetal_table_item_content}>
                            <div className={styles.fetal_table_item_content_text1}>임신 15~22주</div>
                            <div className={styles.fetal_table_item_content_text2}>생화학 정밀검사</div>
                            <div className={styles.fetal_table_item_content_text3}>
                                AFP(양수)<br/>
                                Acetylcholinesterase 정성
                            </div>
                            <div className={styles.fetal_table_item_content_text4}>
                                양수 2.0㎖<br/>
                                양수 3.0㎖
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const Stool = () => {
        return(
            <div className={styles.section}>
                <TypeContentTitle kor="분변 (Stool)"/>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="분변(Stool) 검체"/>
                    <div className={styles.type_content_text}>
                        단회 분변 : 2-3g을 대변용기에 채취하여 의뢰한다.<br/>
                        24시간 분변 (24 hours stool)<br/>
                        채취한 검체의 총 무게를 측정 한 후 검체 내용물을 균등하게 혼합합니다.<br/>
                        멸균된 플라스틱 용기에 검사에 필요한 적당량 (약 4~5g)을 채취한 후 밀봉하여 냉장 보관하고,<br/>
                        검사의뢰서와 용기에 채취 시간과 총 무게를 기재합니다.
                    </div>
                    <div className={styles.stool_table_wrapper}>
                        <div className={styles.stool_table_item}>
                            <div className={styles.item_title}>검체의 준비</div>
                            <div className={styles.item_text}>
                                ① 월경기간중이나 월경 3일 전후에는 검체를 채취하지 말고, 치질 또는 혈뇨가 있는 환자의 경우는<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;위양성의 결과나 나타날 수 있으니 주의 하여야 한다.	<br/>
                                ② 검사 2일전에는 과도한 음주 또는 아스피린과 같은 약물의 과용은<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;소화관의 출혈을 야기할 수 있으므로 주의한다.
                            </div>
                        </div>
                        <div className={styles.stool_table_item}>
                            <div className={styles.item_title}>검체의 체취</div>
                            <div className={styles.item_text}>
                                ① 사람의 신선한 분변을 검체로 사용한다.<br/>	
                                ② 분변의 채취는 채변 봉으로 분변의 표면과 내부를 폭넓게 문지르거나,<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;또는 3~4개소를 깊이 찔러서 채변봉의 끝부분에 분변을 취한다.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="24hr 대변채취"/>
                    <div className={styles.type_content_text}>
                        검체 요구사항을 주의 깊게 읽어 주십시오.<br/>
                        미리 무게를 잰 후, 잘 봉해진 요익에 채취합니다.<br/>
                        전체 검체의 무게를 측정합니다.<br/>
                        균등한 혼합물을 만들기 위하여 검체 내용물을 혼합합니다.<br/>
                        나사마개의 플라스틱 용기에 필요한 양(약 4~5g) 만큰 채취해 넣고 잘 봉합니다.<br/>
                        전체무게와 채취시간을 검체용기와 검사의뢰지에 모두 기록합니다.<br/>
                        다른 별도 지시가 없는 한 채취한 대변을 전부 보내지 마십시오.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="단화대변"/>
                    <div className={styles.type_content_text}>
                        2~3g을 대변용기에 채취하여 보내 주십시오.<br/>		
                        Occult Blood에 대한 주의사항은 본 안내서 점경, 미생물학 검사편을 참고하여 주십시오.
                    </div>
                </div>
            </div>
        )
    }

    const BodyFluid = () => {
        return(
            <div className={styles.section}>
                <TypeContentTitle kor="체액(Body fluid)"/>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="체액검사의 검체종류"/>
                    <div className={styles.fluid_table_wrapper}>
                        <div className={styles.body_table_item}>
                            <div className={styles.body_table_item_title}>C.S.F (뇌척수액)</div>
                            <div className={styles.body_table_item_content}>일반 tube에 채혈합니다.</div>
                        </div>
                        <div className={styles.body_table_item}>
                            <div className={styles.body_table_item_title}>Pleural fluid (흉수)</div>
                            <div className={styles.body_table_item_content}>항응고제 tube에 채혈합니다.</div>
                        </div>
                        <div className={styles.body_table_item}>
                            <div className={styles.body_table_item_title}>Ascitic fluid (복수)</div>
                            <div className={styles.body_table_item_content}>항응고제 tube에 채혈합니다.</div>
                        </div>
                        <div className={styles.body_table_item}>
                            <div className={styles.body_table_item_title}>Joint fluid (관절낭액)</div>
                            <div className={styles.body_table_item_content}>항응고제 tube에 채혈합니다.</div>
                        </div>
                    </div>
                    <div className={styles.fluid_csf_progress}>
                        <div className={styles.csf_title}>※ 뇌척수액 수집 순서</div>
                        <div className={styles.csf_content}>
                            <span className={styles.emphasis}>첫번째</span> 나온 뇌척수액은 화학 및 <span className={styles.emphasis}>면역혈청용</span>에 검사 bottle에 담아야 한다.<br/>
                            <span className={styles.emphasis}>두번째</span> 나온 뇌척수액은 <span className={styles.emphasis}>세균검사용</span>으로 사용한다.<br/>
                            <span className={styles.emphasis}>세번째</span>로 나온 뇌척수액은 <span className={styles.emphasis}>세포 수 산정 및 감별</span>에 담아야 한다.
                        </div>
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="체액 (Body fluid)의 주의사항"/>
                    <div className={styles.type_content_text}>
                        검체 채취 후 clot 되기 쉬운 pleural, ascitic, synovial fluid (CSF제외-C.S.F(뇌척수액) : 일반 tube에 채혈)등은<br/>
                        EDTA tube에 1~5mL를 채취(cell count 및 microscopy 검사용)하고,<br/>
                        나머지 (chemisty 및 육안 검사용)는 plain tube에 채취하도록 한다.<br/>
                        단 joint fluid에서 crystal을 보고자 하는 경우는 Heparin을 사용한다.
                    </div>
                    <div className={styles.fluid_table_wrapper}>
                        <div className={styles.body_table_item_second}>
                            <div className={styles.body_table_item_title}>EDTA 사용</div>
                            <div className={styles.body_table_item_content}>Cell count, Diff, Chemistry 일부 종목</div>
                        </div>
                        <div className={styles.body_table_item_second}>
                            <div className={styles.body_table_item_title}>Plain tube 사용</div>
                            <div className={styles.body_table_item_content}>Chemistry 종목 ( Clot안된경우 ), 세포학적 검사</div>
                        </div>
                        <div className={styles.body_table_item_second}>
                            <div className={styles.body_table_item_title}>Heparin tube 사용</div>
                            <div className={styles.body_table_item_content}>Joint fluid에서 crystal 검출시</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const MoleculeDiagnosis = () => {
        return(
            <div className={styles.section}>
                <TypeContentTitle kor="분자진단"/>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="분자진단검사 의뢰 시 주의사항"/>
                    <div className={styles.type_content_text}>
                        분자진단 검사에서 가장 중요한 것은 적절한 검체와 오염의 방지입니다.<br/>
                        모든 혈액 및 골수를 이용하여 PCR 검사를 의뢰하고자 할 경우 원칙적으로 모든 검체는 EDTA blood를 사용합니다.<br/>
                        (항응고제 중 heparine은 Taq. polymerase의 활성화를 억제하여 검사 불가능.<br/>
                        Hepatitis virus 관련 검사는 항응고제가 없는 SST-Ⅱ tube의 사용을 원칙으로 합니다.<br/> 
                        (HCV RNA 검사의 경우 RNA가 빨리 분해되므로 혈액을 채취하여 당일 접수해 주십시오)<br/>
                        조직을 의뢰하는 경우는 formalin 고정없이 멸균 saline에 넣어 의뢰합니다.<br/>
                        감염질환을 위한 검체는 즉시 검사실로 보내는 것이 바람직하며, 지연될 경우 요, 객담, 호흡기 검체, 변, C.trachomatis와 <br/>
                        바이러스 검사를 위한 검체는 냉장 보관하여 정상 균 무리의 증식을 막아야 합니다. <br/>
                        뇌척수액, 체액, 혈액 및 임균을 위한 검체는 실온보관 합니다.<br/>
                        <br/>
                        페렴 및 호흡기 바이러스 검사 검체<br/>			
                        ① Nasopharyngral aspirate(비인두흡인액) 및 nasophartngeal swab(비인두 도말)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Nasopharyngral aspirate가 nasophartngeal swab보다 바이러스 분리율이 우수합니다.<br/>
                        ② Throat swab(인후도말)			<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Posterior pharyns tonsilla area 사이의 감염된 부위를 면봉으로 도말하여 adenovius의 분리에 이용할 수 있으나,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;혀나 구강점막, 이, 잇몸이 닿지 않도록 합니다.		<br/>
                        ③ Bronchaoalveolar lavage(기관 세척액)<br/><br/>
                        참고그림<br/>
                    </div>
                    <div className={styles.img_wrapper}>
                        <img src="imgs/img/molecule.png" alt="" className={styles.img}/>
                    </div>
                    <div className={styles.type_content_text}>
                        <br/>인유두종(HPV)관련 검사는 각 종목에 해당되는 전용용기를 반드시 사용해야 검사가 가능합니다.<br/>
                        안내서에 수록된 각 검사항목의 검체종류를 확인하시고 적절한 용기를 사용하여 주십시오
                    </div>
                </div>
            </div>
        )
    }

    const CellInheritance = () => {
        return(
            <div className={styles.section}>
                <TypeContentTitle kor="세포유전학"/>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="검체취급의 공통적 주의사항"/>
                    <div className={styles.type_content_text}>
                        검체는 무균적으로 채취 되어야 합니다.<br/>		
                        세포유전학 검체는 가능한 검사실에 빨리 도착되어야 한다. <br/>
                        단, 검체 접수시간까지 시간이 걸릴 경우 (24시간이상 경과할 경우) 해당 배지에 담아 냉장보관 후 <br/>
                        냉장보관 사태로 최대한 빨라 세포유전학부로 검체가 접수되어야 한다. <br/>
                        시간이 경과가 지연된 세포유전학 검체의 배양 성공률은 지체된 시간이 오래될수록 낮아진다.<br/>
                        검체 보관 및 운송은 실온 상태로 한다.<br/>
                        의뢰 이유와 가족력을 의뢰지에 반드시 기록한다.<br/>
                        세포유전학 검사 의뢰서와 유전자 검사, 연구 동의서를 반드시 기록하여 의뢰한다.<br/>
                        태아를 대상으로 하는 염색체 검사는 필요하다면 검체 채취 전에 이 검사의 정확성 및 검사 한계에 대해 <br/>
                        환자나 보호자에게 충분히 설명을 하여 동의를 얻은 후에 검사를 시행하는 것이 바람직하다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="말초혈액 (Peripheral blood ; PB)"/>
                    <div className={styles.type_content_text}>
                        혈액 5ml(소아 3ml)를 무균적으로 채취합니다.<br/>
                        응고된 검체는 검사가 불가능하므로 Sodium heparin 용기에 넣어 응고되지 않도록<br/>
                        서서히 아래, 위로 혼합하여 응고를 방지합니다.<br/>
                        항응고제는 Sodium heparin 이외 것을 사용하시면 세포분열능 저하로 배양에 실패할 확률이 높습니다.<br/>
                        검체 보관 및 운송은 실온상태로 합니다.<br/>
                        환자의 임상소견 및 추정진단에 따라 검사방법 자체가 달라지므로 반드시 의뢰서를 기록합니다.<br/>
                        검체 채취부터 배양까지 24hr이상이 경과되면 검사에 실패할 확률이 높습니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="태아조직 (Prodution of conceptus ; P.O.C)"/>
                    <div className={styles.type_content_text}>
                        오염될 확률이 높은 태아 조직의 경우 무균적으로 채취한 조직을 보원이 제공하는 전용 운송배지에 넣어 의뢰합니다.<br/>
                        자궁내에서 사망한지 24시간 경과한 검체는 배양에 실패할 확률이 높습니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="양수 (Amniotic fluid ; A.F)"/>
                    <div className={styles.type_content_text}>
                        검체의 모체세포가 혼입되는 것을 방지하기 위해 채취 시<br/>
                        반드시 처음 미소량(약 2㎖ 정도)을 버리신 다음 약 20~30㎖ 정도의 양수를 채취하셔야 합니다.<br/>
                        양수 20~30㎖ 채취하여 본원이 제공하는 50㎖ conical tube로 옮겨 의뢰합니다.<br/>
                        양수 내 태아 유래세포가 적은 경우 (원심 후 침전물이 육안으로 확이 안됨)나 육안적으로 검체의 색깔이 빨갛거나<br/>
                        (혈액 혼입되었음을 의미)짙은 갈색인 경우는 배양에 실패할 수도 있습니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="융모막 (Chronic Villi Sampling ; C.V.S)"/>
                    <div className={styles.type_content_text}>
                        20~40㎖의 융모막을 채취하여 본원이 제공하는 융모막 전용 운송용 배지에 넣어 의뢰합니다.<br/>
                        (검사전에 미리 CVS 용기 신청을 부탁드립니다.)	<br/>
                        순수한 융모막이 적을 경우 (Zoom-stereo Microscope로 관찰)에는 직접법, In Suit와 플라스크 방법을 병행할 수 없고,<br/>
                        단지 플라스크 방법만으로 시행함으로써 모체세포의 오염 가능성이 높아지고 결과가 지연되거나 혹은 배양에<br/>
                        실패할 수도 있습니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="제대혈 혈액 (Cord Blood)"/>
                    <div className={styles.type_content_text}>
                        응고가 잘 되는 제대혈은 채취 후 즉시 Sodium heparin 용기에 넣어 여러 번 잘 혼합하여 검체의 응고를 방지합니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="종양질환의 진단, 예후 추정을 위한 염색체 검사"/>
                    <div className={styles.type_content_text}>
                        금성 백혈병, 만성 백혈병, 골수 증식성질환, 골수 이형성증후군, 기타 혈액질환의 진단 및 예후 추정에 필요한 검사입니다.<br/>
                    </div>
                    <div className={styles.cell_table_wrapper}>
                    <div className={styles.cell_table_item}>
                        <div className={styles.cell_table_item_title}>골수</div>
                        <div className={styles.cell_table_item_content}>
                            ① 골수 천자액 3를 채취하여 본 원에서 제공하는 Sodium heparin 용기에 넣어 의뢰합니다.<br/>
                            ② 환자의 임상소견 및 추정 진단에 따라 검사방법 자체가 달라지므로 반드시 의뢰서를 기록합니다.<br/>
                            ③ 혈액 종양에서는 세포 배양시 혈액 검사결과를 고려해서 적절한 세포수가 되도록 배양해야 하므로 <br/>
                            귀 원에서 시행한 일반혈액검사(CBC결과)를 반드시 기록해 주십시오.<br/>
                            ④ 검체 채취부터 배양까지 24시간 이상이 지연될 경우에는 <br/>
                            검사과정이 지연되거나 검사에 실패할 수도 있습니다.<br/>
                            ⑤ 응고된 검체는 검사가 불가능합니다.			
                        </div>
                    </div>
                    <div className={styles.cell_table_item}>
                        <div className={styles.cell_table_item_title}>
                            말초혈액
                            <div className={styles.cell_title_text1}>(Peripheral Blood ; PB)</div>
                        </div>
                        <div className={styles.cell_table_item_content}>
                            위의 말초혈액 채취편을 참고하시기 바랍니다.<br/>
                            말초혈액 검사는 다음과 같은 경우에 시행합니다.<br/>
                            <br/>
                            <span className={styles.emphasis}>선천적 염색체 이상의 진단</span><br/>	
                            ① 다발성 선천성 기형의 진단이 필요한 경우 ( 다운증후군, 에드워드증후군 등)<br/>
                            ② 발육부전/정신지체/비정상 핵형이 의심되는 경우<br/>
                            ③ 불임부부/3회 이상의 반복 유산/사산의 기왕력을 가진 부부<br/>
                            ④ 2차적 성징이 지연되거나 나타나지 않는 경우	<br/>	
                            <br/>
                            <span className={styles.emphasis}>산전 태아의 염색체 이상 진단</span><br/>			
                            ① 35세이상 고령인 산모의 경우<br/>		
                            ② 모체 혈청을 이용한 Triple test에서 염색체 증후군이 의심되는 경우<br/>
                            ③ 부모가 Recoprocal Balanced Tranclocation인 경우 ( 염색체 이상의 보인자인 경우 )<br/>
                            ④ 태아의 초음파 검사에서 이상 소견을 보인 경우<br/>
                            ⑤ 염색체 이상의 자녀를 출산한 기왕력이 있는 경우<br/>
                            ⑥ 융모막을 이용한 염색체 검사상 Mosaicism을 보인 경우에는 양수/제대혈을 이용하여 확인검사를<br/>
                            시행하는 것이 바람직합니다.<br/>
                            ⑦ 습관성 유산의 기왕력이 있는 경우	
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }

    const MicroOrganism = () => {
        return(
            <div className={styles.section}>
                <TypeContentTitle kor="미생물"/>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="미생물 검체 (세균배양을 위한 검체 채취)"/>
                    <div className={styles.type_content_text}>
                        미생물학적 검사에서 가장 중요한 것은 검체의 적절한 채취와 보존방법입니다.<br/>
                        부적절하게 채취된 검체 및 잘못 보존된 검체는 검사를 하더라도 무의미할 뿐 아니라 잘못된 결과를 가져와<br/>
                        환자의 치료에 오히려 혼란을 줄 수 있기 때문입니다.<br/>
                        그러므로 검체의 적절한 취급방법은 아무리 여러 번 강조해도 지나치지 않습니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="검체의 채취시기"/>
                    <div className={styles.type_content_text}>
                        검체 채취의 가장 적절한 시기는 원인균이 가장 많이 함유되어 있다고 생각되는 시기입니다.<br/>
                        ① 발병 초기 또는 급성기	<br/>
                        ② 패혈증 등에서 이완열이 있는 경우는 열의 상승직전	<br/>
                        ③ 화학요법 개시 전			<br/>
                        ④ 화학요법 개시 후의 환자에 있어서는 48시간 투약 중지 후<br/>
                        ⑤  ③,④가 불가능한 경우는 다음 회 투약직전에 채취
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="미생물검체 채취법"/>
                    <div className={styles.type_content_text}>
                        <span className={styles.emphasis}>(1) 검사원칙</span><br/>
                        모든 검체는 규정된 멸균용기에 채취하여야 하고 채취조작은 모두 무균조작으로 시행해야 합니다.<br/>
                        면봉, 시험관, 수송배지, 혈액배양용 배지 등은 사용하기 전에 오염된 것, 마개가 열린 것 등을 검토하고<br/> 
                        의심스러우면 새 것으로 바꾸도록 합니다.<br/>
                        용기는 의뢰 시 신원의료재단에서 검사에 맞는 용기를 받아 채취 해 주셔야 합니다.<br/>
                        모든 검체는 채취 후 지체 없이 보내도록 합니다.<br/>
                        (시간이 늦어질 경우에는 적절한 조건에서 보관하였다가 다음날 의뢰하는 것으로 합니다.)<br/>
                        CSF smear 검사는 응급검사로 당일 중에 의뢰 하셔야 합니다.<br/>
                        Swab culture와 gram stain을 동시에 의뢰할 때에는 swab한 면봉 2개를 모두 보내어야 두 가지 검사가 가능합니다.<br/>
                        의뢰서에는 임상소견, 의심되는 균종, 검체 종류, 채취 부위, 채취 시각, 항생제 투여 여부 등을 반드시 기입하여야 합니다.
                    </div>
                    <img src="imgs/img/micro.png" alt="" className={styles.micro_img}/> 
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="혈액 (Blood)"/>
                        <div className={styles.micro_content_text}>
                            피부소독용 iodine이 완전히 마른 후 채혈합니다. (Lodine은 마르는 동안 소독효과를 보입니다.)<br/>
                            무균조작으로 10ml를 채혈하여 Trypticase soy broth 와 thioglycollate broth 에 각각 5ml씩 넣습니다.<br/>
                            최소 30분 간격으로 각기 다른 부위에서 3회 채혈합니다.
                        </div>
                    </div>
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="뇌척수액 (CSF)"/>
                        <div className={styles.micro_content_text}>
                            최소 2ml 이상을 채취하도록 합니다.응급검사이므로 빨리 검사실로 보냅니다.<br/>
                            Meningococcus 배양을 위해서는 실온 보관합니다. (냉장보관시 세균이 쉽게 사멸됩니다.)
                        </div>
                    </div>
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="객담 (Sputum)"/>
                        <div className={styles.micro_content_text}>
                            아침에 일어나서 맹물로 입안을 가볍게 헹군 후 객담을 3ml 이상 받습니다.<br/>
                            이 때 침만 많이 뱉지 않도록 합니다. 결핵군 배양 및 염색을 하고자 할 때는 3일 연속 객담검사를 해야합니다.
                        </div>
                    </div>
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="대변 (Stool)"/>
                        <div className={styles.micro_content_text}>
                            Shigellosis 의심시는 rectal swab을 해서 수송배지에 넣고, Salmonellosis를 의심하는 경우에는<br/>
                            stool specimen을 12g 채취하여 stool box에 넣어 보냅니다.
                        </div>
                    </div>
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="소변 (Urine)"/>
                        <div className={styles.micro_content_text}>
                            Colony count를 실시하므로 요도입구를 잘 소독한 후 중간뇨를 받도록 환자에게 채취 전 교육을 합니다.<br/>
                            채취시간을 기록하고 검사실에 빨리 보낼 수 없는 경우는 냉장보관 합니다.
                        </div>
                    </div>
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="면봉(Swab)검체"/>
                        <div className={styles.micro_content_text}>
                            면봉검체로 배양과 염색 모두를 의뢰할 때는 면봉 2개(하나는 염색용, 하나는 배양검사용)로 검체를 채취하여<br/>
                            수송배지(stuart transport media)에 넣어 보냅니다.
                        </div>
                    </div>
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="농 (Pus)"/>
                        <div className={styles.micro_content_text}>
                            주사기로 직접 화농부위의 농을 흡인하여 주사침 마개로 주사침을 막은 후 그대로 검사실에 보냅니다.<br/>
                            Swab으로 검체를 채취할 경우는 상기 내용 중 면봉(Swab) 검체를 참조하여 주십시오.
                        </div>
                    </div>
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="혐기성검체"/>
                        <div className={styles.micro_content_text}>
                            주사기를 사용하여 채취한 후 공기를 배출시키고 주사침을 고무마개로 막고 즉시 검사실로 보냅니다.<br/>
                            Aspiration을 해야하며, swab은 하지 않습니다.	
                        </div>
                    </div>
                    <div className={styles.micro_content_wrapper}>
                        <SubTitle title="관절액, 흉수, 복수검체 (Body fluid)"/>
                        <div className={styles.micro_content_text}>
                            무균용기에 넣으시고 cell count를 위한 검체는 응고되기 쉬우므로 흉수, 복수, 관절액을 EDTA 항응고제를 이용하여<br/>
                            tube에 넣어 잘 혼합한 후 검사실로 보냅니다. 단, 관절액에서 crystal을 보고자 하는 경우는 heparin을 이용합니다
                        </div>
                    </div>
                    <div className={styles.micro_banner_wrapper}>
                        <div className={styles.micro_banner_title}>결과보고일은 다음과 같습니다.</div>
                        <div className={styles.micro_banner_text}>
                            ① 혈액배양 : 3~7일 ( 최종보고 7일 소요 )<br/>
                            ② 일반배양 : 3~4일 최종보고<br/>
                            ③ 결핵균배양 : 4주 후 중간보고 ( 최종보고 8주 소요)
                        </div>
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="검체수송시 주의사항"/>
                    <div className={styles.type_content_text}>
                        모든 검체는 채취즉시 검사실로 보내 주시고, 수송 시 검체가 흘러 질병을 전염시키지 않도록 마개를 완전히 밀봉하여야 합니다.<br/>
                        대부분의 병원균은 온도변화에 큰 영향을 받지 않지만, 건조한 환경에서는 생존이 어려우므로 수송배지를 이용합니다.<br/>
                        단, Meningococcus와 Gonococcus는 반드시 실온 보관하며, 의뢰지에 의심균을 기재해 주시면<br/>
                        보다 정확한 결과를 얻을 수 있습니다.<br/>
                        <span className={styles.emphasis3}>※ AIDS환자의 검체는 검체용기에 ‘AIDS주의’ 라고 표기합니다.</span>
                    </div>
                </div>
            </div>
        )
    }

    const VirusCulture = () => {
        return(
            <div className={styles.section}>
                <TypeContentTitle kor="바이러스 배양검사 검체취급"/>
                <div className={styles.text_normal_500}>바이러스 감염 시 원인 바이러스를 검출하는 방법은 일반세균의 검출방법과는 다소 차이가 있습니다.</div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="검체 채취 및 운송"/>
                    <div className={styles.type_content_text}>
                        바이러스 배양법은 원인 바이러스가 자랄 수 있는 세포를 사용하므로, 검체 또한 감염병소에서 채취해야 합니다.<br/>
                        일반적으로 질병 경과가 길수록 바이러스 검출율은 낮아지므로, 바이러스 농도가 높은 감염초기에 채취하는 것이 좋습니다.<br/>
                        주로 이용하는 검체는 체액, 삼출액, 조직, 상기도 세척액, 대변 등입니다.<br/>
                        바이러스 운송용 배지는 안내서에 권유한 내용대로 사용하시고, 운송배지는 세균의 증식을 억제하는 성분이 함유되어 있습니다.<br/>
                        검체는 채취 즉시 검사실로 보내져야 하며,<br/>
                        즉시 실험하여야 하나 만약 그렇지 못한 경우에는 3~4일 이내에 접종이 이루어져야 하며,<br/>
                        장기간 보관시에는 -70℃에 냉동 보관합니다.
                    </div>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="검체유형별 바이러스 배양검사 안내"/>
                    <div className={styles.type_content_text}>
                        검체는 반드시 ice pack과 함께 비닐봉투에 넣어 운반하도록 합니다.<br/>
                        검체 운반시 2~3일 이상 지연이 예상되면 검체를 deep freezer에 보관하고 운반시는 dry ice와 함께 운반합니다.<br/>
                        검체는 얼렸다 녹이는 과정이 반복되어서는 안됩니다.<br/>
                        CMV 배양검사용 검체는 얼리지 않도록 하고 Whole blood 검체는 휴일 전날이나 토요일에 접수되지 않게 주십시오
                    </div>
                </div>
                <img src="/imgs/img/virusculture.png" alt="" className={styles.img}/>
            </div>
        )
    }

    const Pathology = () => {
        return(
            <div className={styles.section}>
                <TypeContentTitle kor="조직병리학/세포병리학"/>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="조직병리학적 검사"/>
                    <img src="/imgs/img/pathology.png" alt="" className={styles.img}/>
                </div>
                <div className={styles.type_content_wrapper}>
                    <TypeTitle title="세포병리학 검사"/>
                    <div className={styles.type_content_text}>
                        세포 검사용 검체는 세포 변성을 방지하여 정확한 세포 관찰을 할 수 있도록 95% Ethylalcohol<br/>
                        또는 Cytospray 등 피복고정제 (Coating fixation)로 반드시 고정하십시오.<br/>
                        <br/>
                        - 95% 에탄올 (Ethyl Alcohol)로 고정하는 경우 적어도 30분 이상 고정해야 합니다.<br/>
                        - 피복고정제 (Coating fixation)는 도말된 슬라이드로부터 25~30cm 거리를 둔 위치에서 분무합니다.
                    </div>
                    <div className={styles.pathology_subtitle}>각 검체별 고정 방법</div>
                    <div className={styles.pathology_content_wrapper}>
                        <div className={styles.subtitle_wrapper}>
                            <div className={styles.rect}/>
                            <div className={styles.subtitle_text}>
                                1) 부인과 세포검사 (GY Cytology) :<br/>
                                자궁 질부(Vagina Portions), 자궁 경부(Cervix), 자궁 내막(Endometrium)
                            </div>
                        </div>
                        <div className={styles.pathology_content_text}>
                            검체는 Cytobrush를 이용하여 한번에 많이 채취한 후 Slide에 얇고 균일하게 도말하고, 세포 고정제를 분무하여 고정합니다.<br/>
                            검체 채취 하루 전에 질내 치료나 피임약제 등의 사용을 금해 주십시오.<br/>
                            검체 채취 전 외상 치료나 biopsy 등을 행하지 마십시오. 혈액의 RBC가 슬라이드에 도말되어 판독이 어려워집니다.<br/>
                            액상세포용기를 사용하는 경우 Cytobrush로 채취한 모든 세포를<br/>
                            액상용기안의 액체에 풀어 넣은 다음 새지 않게 뚜겅을 잘 막아 보내십시오.
                        </div>
                    </div>
                    <div className={styles.pathology_content_wrapper}>
                        <SubTitle title="2) 객담 (Sputum)"/>
                        <div className={styles.pathology_content_text}>
                            아침 첫 객담을 받아 병적인 부분(변색 된 부분, 짙은 살색부분, 혈액이 있는 부분)을 두장의 Slide에 넣고, <br/>
                            전후 좌우로 비벼 펼친 다음, 즉시 95% Ethyl alcohol에 고정하십시오.<br/>
                            채취시 타액이 섞이지 않도록 주의하고, 객담자체를 의뢰할 경우 24시간 이내로 보내주십시오.
                        </div>
                    </div>
                    <div className={styles.pathology_content_wrapper}>
                        <SubTitle title="3) 체액 (Body fluid), 흉수액(Pleural fluid), 복수액(Ascitic fluid)"/>
                        <div className={styles.pathology_content_text}>
                            가능한 전량을 혼합하여 원심한 후 Egg albumin을 핌사에 펌가하여 Slide에 도말하고, 즉시 95% Ethyl alcohol에 고정하십시오.
                        </div>
                    </div>
                    <div className={styles.pathology_content_wrapper}>
                        <SubTitle title="4) 소변, 뇌척수액 등 protein 양이 적은 검체"/>
                        <div className={styles.pathology_content_text}>
                            원심분리기 1500rpm에서 10분간 원심하여 침전물을 Slide에 도말한 후 고정하여 보내주십시오.<br/>
                            원심이 불가능할 경우 검체에 50% Ethyl alcohol을 검체의 양과 같은 양으로 혼합 후 그대로 보냅니다.
                        </div>
                    </div>
                    <div className={styles.pathology_content_wrapper}>
                        <SubTitle title="5) 천차액 (Aspiration)"/>
                        <div className={styles.pathology_content_text}>
                            유선, 갑상선, 림프액 등<br/>
                            2~4장의 Slide에 도말한 후 일부는 즉시 고정하고, 일부는 Slide 자연건조 후 고정합니다.<br/>
                            검체량이 적은 경우 주사바늘과 주사통을 생리식염수로 세정하고 원심하여 침전물을 도말 한 후 고정합니다.
                        </div>
                    </div>
                    <div className={styles.pathology_content_wrapper}>
                        <SubTitle title="6) pH가 낮은 검체"/>
                        <div className={styles.pathology_content_text}>
                            위액, 담즙 등<br/>
                            검체는 얼음을 채운 후 Box에 보관하고, 가능하면 수분 이내로 원심하여 도말 Slide를 만들어 고정합니다.<br/>
                            고정이 불가능할 경우 70% Ethyl alcohol을 검체의 1/3~1/4 정도의 양이 되도록 넣은 후, 얼음 Box에 넣어 즉시 보내주십시오.
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <SectionTitle kor="검사종류" eng="LOBORATORY ITEMS"/>
                <div className={styles.text_normal}>신원의료재단이 검사하는 검사항목 분류입니다.</div>
                <div className={styles.type_wrapper}>
                    <div onClick={() => setNum(1)} className={num===1 ? styles.type_item__selected : styles.type_item}>혈청 Serum</div>
                    <div onClick={() => setNum(2)} className={num===2 ? styles.type_item__selected : styles.type_item}>전혈 Whole Blood</div>
                    <div onClick={() => setNum(3)} className={num===3 ? styles.type_item__selected : styles.type_item}>요(Urine)</div>
                    <div onClick={() => setNum(4)} className={num===4 ? styles.type_item__selected : styles.type_item}>선천성 대사이상</div>
                    <div onClick={() => setNum(5)} className={num===5 ? styles.type_item__selected : styles.type_item}>산전 태아 이상성별</div>
                    <div onClick={() => setNum(6)} className={num===6 ? styles.type_item__selected : styles.type_item}>분변 (Stool)</div>
                    <div onClick={() => setNum(7)} className={num===7 ? styles.type_item__selected : styles.type_item}>체액(Body fluid)</div>
                    <div onClick={() => setNum(8)} className={num===8 ? styles.type_item__selected : styles.type_item}>분자진단</div>
                    <div onClick={() => setNum(9)} className={num===9 ? styles.type_item__selected : styles.type_item}>세포유전학</div>
                    <div onClick={() => setNum(10)} className={num===10 ? styles.type_item__selected : styles.type_item}>미생물</div>
                    <div onClick={() => setNum(11)} className={num===11 ? styles.type_item__selected : styles.type_item}>바이러스 배양검사 검체취급</div>
                    <div onClick={() => setNum(12)} className={num===12 ? styles.type_item__selected : styles.type_item}>조직병리학/세포병리학 </div>
                </div>  
            </div>
            {num===1 ? <Serum/> : 
            num===2 ? <WholeBlood/> : 
            num===3 ? <Urine/> : 
            num===4 ? <MetabolicAbnormality/> : 
            num===5 ? <FetalIdealism/> : 
            num===6 ? <Stool/> : 
            num===7 ? <BodyFluid/> : 
            num===8 ? <MoleculeDiagnosis/> : 
            num===9 ? <CellInheritance/> : 
            num===10 ? <MicroOrganism/> : 
            num===11 ? <VirusCulture/> : 
            <Pathology/>}
        </div>
    )
}

export default LaboratoryType