import React, { useState } from 'react'
import './css/CenterComponent.scss'

const Deparment = () => {

    const [ num, setNum ] = useState(1)

    const ContentFirst = () => {
        return(
            <div className="transform-div first">
                <div className="department-name">
                    <img src="imgs/img/gene.svg" alt="" className="department-icon"/>
                    <div className="department-title-text">임상화학부</div>
                </div>
                <div className="intro">
                    임상화학부(생화학부)는 인체의 체액 내 화학적 성분 및 그 변화를 임상에 적용토록 알아내는 주요한 검사입니다.<br/>
                    의료수준의 발달과 함께 임상화학검사 결과는 환자의 정확한 진단과 치료에 중요한 정보로 활용되고 있습니다.<br/>
                    저희 임상화학부는 미래의 변화하는 의료환경과 환자의 요구에 적극적으로 대응하고자 임상양상에 따른<br/>
                    최적의 검사기법과 이해를 바탕으로 적절한 검사결과 판독자료를 일선 병・의원에 제공하여<br/>
                    환자의 진료에 도움을 주고자 최선을 다하고 있습니다.<br/>
                    모든 검사는 다양한 최신의 분석장비를 이용하여 전신화, system화, 자동화된 체계에 의해 24시간 분석 체제로 운영됩니다.<br/>
                    보다 높은 정확성과 신뢰성 있는 결과를 위해 모든 검사결과는 Interface를 통해 검사결과를 빠르고 정확하게 보고하도록 <br/>
                    전산화되어 있으며 <span className="emphasis">검사의 정도관리, 검사결과의 Delta & Panic check 등의 검증, 이상자 검사결과검색등의 SYSTEM을 통하여</span><br/>
                    항상 최고 수준의 검사가 시행되도록 노력하겠습니다.
                </div>
                <div className="task-wrapper">
                    <div className="task-text">주요 검사 업무</div>
                    <div className="task-content-sticky">
                        <div className="task-content">· 간기능검사 (Liver function test)</div>
                        <div className="task-content">· 신장기능검사 (Renal function test)</div>
                        <div className="task-content">· 전해질검사 (Electrolyte test)</div>
                        <div className="task-content">· 당뇨병(혈당)검사</div>
                    </div>
                </div>
                <div className="equipment-wrapper">
                    <div className="equipment-title">임상화학부 장비안내</div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">Cobas c702</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">일반 생화학검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/Cobas-c702.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">Integra 400</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">TDM 검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/Integra-400.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">Rapidchem 850</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">Ionized Calcium</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/Rapidchem-850.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const ContentSecond = () => {
        return(
            <div className="transform-div second hidden">
                <div className="department-name">
                    <img src="imgs/img/blood-drop.svg" alt="" className="department-icon"/>
                    <div className="department-title-text">진단면역학부</div>
                </div>
                <div className="intro">
                    진단면역학부에서는 혈액을 이용하여 인체의 면역관련 검사를 수행하는 학부입니다.<br/>
                    항원-항체반응을 기본 원리로 하는 각종 바이러스 검사 및 호르몬 물질 분석 및 감영성 질환에 대한<br/>
                    바이러스 검사 및 종양 표지자검출, 자가면역질환, 알러지 질환 등 광범위한 면역질환에 대한 검사를 실시하고 있습니다.<br/>
                    과거의 면역검사는 시간이 오래 걸린다는 고정관념을 깨고 첨단 면역화학장비를 이용하여 숙련된<br/>
                    검사인력으로 <span className="emphasis">모든 검사가 1일 이내</span>에 처리되고 있으며 또한 신속하고 정확한 검사수행에 노력하고 있습니다.<br/>
                    앞으로 더욱 다양한 검사에 대한 연구와 개발로 빠르고 정확한 진단에 도움이 되는 학부가 되도록 최선의 노력을 다하겠습니다.
                </div>
                <div className="task-wrapper">
                    <div className="task-text">주요 검사 업무</div>
                    <div className="task-content-sticky">
                        <div className="task-content">· 간염바이러스 검사</div>
                        <div className="task-content">· 바이러스에 대한 항체검사</div>
                        <div className="task-content">· 종양표지자 검사</div>
                        <div className="task-content">· 갑상선 기능 검사</div>
                        <div className="task-content">· 자가면역질환검사</div>
                        <div className="task-content">· 감염증 관련 검사</div>
                        <div className="task-content">· 선천성 대사질환검사</div>
                        <div className="task-content">· 알러지, 각종 호르몬 검사 등</div>
                    </div>
                </div>
                <div className="equipment-wrapper">
                    <div className="equipment-title">진단면역학부 장비안내</div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">Cobas e602</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">간염</div>
                                <div className="lower-text">갑상선</div>
                                <div className="lower-text">종양</div>
                                <div className="lower-text">호르몬 검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/Cobas-e602.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">E 170</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">간염</div>
                                <div className="lower-text">갑상선</div>
                                <div className="lower-text">종양</div>
                                <div className="lower-text">호르몬 검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/E-170.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">DXI 800</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">산전 기형아 검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/DXI-800.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">Evolis</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">면역 관련검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/Evolis.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">ARCHITECT i2000SR</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">면역 관련검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/ARCHITECT-i2000SR.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">Advansure AlloStation smart Ⅱ</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">MAST Allergy</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/Advansure-AlloStation-smart-Ⅱ.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">Chorus</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">면역 관련검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/Chorus.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const ContentThird = () => {
        return(
            <div className="transform-div third hidden">
                <div className="department-name">
                    <img src="imgs/img/blood-drop.svg" alt="" className="department-icon"/>
                    <div className="department-title-text">진단혈액학부</div>
                </div>
                <div className="intro">
                    혈액내에서 영양분 및 산소 등을 운반 공급하며, 인체의 모든 장기를 순환하여 노폐물을 실어 나르는 기능을 합니다.<br/>
                    혈액학부는 혈액관련 질병・빈혈, 백혈병, 세균성감염, 바이러스 성 장염, 말라리아 감염등의 각종 혈액 질환의<br/>
                    진단과 치료에 도움이 되는 일반 혈액 검사에서부터 뇌혈관 질환의 추적 관리 및 혈전검사의 관리를 할 수 있는<br/>
                    혈액응고 검사와 각종 체액 검사 등을 수행하는 학부입니다.<br/>
                    <br/>
                    <span className="emphasis">24시간 운영되는 자동혈구 분석기</span>는 백혈구, 적혈구, 혈소판 수의 크기와 모양을 신속하고 정확하게 측정할 수 있고<br/>
                    비정상 소견을 보이는 환자의 경우에는 숙련된 병리사와 진단 검사의학 전문의가 직접 말초혈액도말을<br/>
                    상세히 관찰하여 혈액질환의 <span className="emphasis">기초적인 진단 및 학술자문 등을 제시</span>해 드립니다.<br/>
                    앞으로도 질벼의 진단, 치료 및 예후 판정에 도움을 드릴 수 있도록 최선의 노력을 다하겠습니다.
                </div>
                <div className="task-wrapper">
                    <div className="task-text">주요 검사 업무</div>
                    <div className="task-content-sticky">
                        <div className="task-content">· 일반혈액검사</div>
                        <div className="task-content">· 혈액응고 검사</div>
                        <div className="task-content">· 혈액형 검사</div>
                        <div className="task-content">· 불규칙 항체 검사</div>
                        <div className="task-content">· 각종 체액 검사</div>
                        <div className="task-content">· 말초혈액도말 검사등</div>
                    </div>
                </div>
                <div className="equipment-wrapper">
                    <div className="equipment-title">진단혈액학부 장비안내</div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">XE-2100</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">일반혈액검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/XE-2100.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">CA-1500</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">혈액응고검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/CA-1500.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">SO 1000i</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">말초혈액도말 표본 제작</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/SO-1000i.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">Variant turbo 2.0</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">HbA1c</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/Variant-turbo-2.0.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">TEST 1</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">ESR(적혈구침강속도) 측정검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/TEST-1.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const ContentFourth = () => {
        return(
            <div className="transform-div fourth hidden">
                <div className="department-name">
                    <img src="imgs/img/cell-2.svg" alt="" className="department-icon"/>
                    <div className="department-title-text">임상미생물학부</div>
                </div>
                <div className="intro">
                    자연계에는 인류와 함께 존재하는 많은 미생물이 존재하며,<br/>
                    과학의 발전과 환경오염에 의해 인체에 해로운 병원 미생물의 종류가 새롭게 생성되고있습니다.<br/>
                    임상미생물학부는 그러한 인류와 함께 공존하여 병원성을 발현하게 되는<br/>
                    미생물이라는 생명체를 대상으로 연구하는 생명과학의 한 분야입니다.<br/>
                    인류가 발견하지 못했던 새로운 미생물과, 미량의 항생제로 치료효과를 보이던 미생물들이 강한 내성을 갖게됨에 따라 인류는<br/>
                    <span className="emphasis">더 정확한 미생물에 대한 분석과 검사</span>가 필요하게 되고있습니다.<br/>
                    본원의 임상미생물학부에서는 <span className="emphasis">진단검사의학 전문의에 의한 검토 및 확인작업</span>이 이루어지고 있으며<br/>
                    그 내용을 미생물학팀의 모든 병리사가 교육받고 숙지하에 매 검사마다 새로운 연구이론을 만들어가고 있습니다.
                </div>
                <div className="task-wrapper">
                    <div className="task-text">주요 검사 업무</div>
                    <div className="task-content-sticky">
                        <div className="task-content">· Gram stain</div>
                        <div className="task-content">· AFB stain</div>
                        <div className="task-content">· KOH preparation</div>
                        <div className="task-content">· Culture & Identification</div>
                        <div className="task-content">· Antibiotic sensitivity</div>
                        <div className="task-content">· AFB Culture</div>
                        <div className="task-content">· Blood Culture</div>
                    </div>
                </div>
                <div className="equipment-wrapper">
                    <div className="equipment-title">임상미생물학부 장비안내</div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">Micro-Scan WalkAway 96</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">세균동정 및 약제감수성 검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/Micro-Scan-WalkAway-96.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const ContentFifth = () => {
        return(
            <div className="transform-div fifth hidden">
                <div className="department-name">
                    <img src="imgs/img/beaker.svg" alt="" className="department-icon"/>
                    <div className="department-title-text">진단면역학부</div>
                </div>
                <div className="intro">
                    요검경학부에서 일반소변검사와 24시간 소변검사 및 분변을 이용한 여러 검사를 수행하고 있습니다.
                    인체 노폐물의 성분을 검출 분석함으로 대사이상 및 질병의 조기발견에 노력하고 있습니다.
                    여러 검사 중 기본이 되는 검사로, 생략되어서는 안 될 분야의 검사입니다.
                    새로운 의학 정보가 나오고 분자생물학, 유전공학, 체세포 복제 등등 매스컴에 각광을 받는 분야들이
                    현재 우리가 안고 있는 의학적 문제 해결책의 전부인것처럼 여겨지는 현대에 <span className="emphasis">기본을 고수하여 끊임없이 노력하고 있습니다.</span>
                </div>
                <div className="task-wrapper">
                    <div className="task-text">주요 검사 업무</div>
                    <div className="task-content-sticky">
                        <div className="task-content">· 일반뇨검사 및 뇨침사</div>
                        <div className="task-content">· 24시간 뇨검사 및 분석</div>
                        <div className="task-content">· 약물검사</div>
                        <div className="task-content">· 정액검사</div>
                        <div className="task-content">· 분변검사</div>
                        <div className="task-content">· 기생충검사</div>
                    </div>
                </div>
                <div className="equipment-wrapper">
                    <div className="equipment-title">요검경학부 장비안내</div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">Uriscan Super Plus</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">일반 요화학 검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/Uriscan-Super-Plus.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">Uriscan Pro Ⅱ</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">일반 요화학 검사</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/Cobas-c702.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                    <div className="equipment-content">
                        <div className="equipment-desc">
                            <div className="equipment-desc-upper">UF 1000i</div>
                            <div className="equipment-desc-lower">
                                <div className="lower-text">요침사 검사(유세포 분석)</div>
                            </div>
                        </div>
                        <div className="equipment-img-wrapper">
                            <img src="imgs/equipments/UF-1000i.png" alt="" className="equipment-img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const ContentSixth = () => {
        return(
            <div className="transform-div sixth hidden">
                <div className="department-name">
                    <img src="imgs/img/gene.svg" alt="" className="department-icon"/>
                    <div className="department-title-text">분자유전학부</div>
                </div>
                <div className="textbox-wrapper">
                    <div className="textbox-title">STI(Sexully Transmitted Infection) 란?</div>
                    <div className="textbox-text">
                        성매개감염질환(Sexually Transmitted Infection)는<br/>
                        사람이나 동물 등의 성적 접촉을 통해 전염될 확률이 대단히 높은 질병입니다.<br/>
                        또한, 주사 바늘을 통해 전염되거나 출산을 통한 수직감염, 모유 수유를 통해 전염될 수도 있습니다.
                    </div>
                </div>
                <div className="textbox-wrapper">
                    <div className="textbox-title">STI(Sexully Transmitted Infection) 검사의 의의</div>
                    <div className="textbox-text">
                        성매개감염의 대부분이 무증상이며 자연 치유되는 경우도 적고<br/>
                        조기치료하지 않는경우 치명적인 질환으로 발전하기도 합니다.<br/>
                        여성질염, 자궁경부염, 요도염등의 질환으로 발전할수 있으며, 심한경우 영구불임, 자궁외 임신, 태아감염등<br/>
                        산모의 경우 자신뿐만 아니라 태아에게도 영향을 미칠수 있습니다.
                    </div>
                </div>
                <div className="textbox-wrapper">
                    <div className="textbox-title">STI(Sexully Transmitted Infection) 검사 설명</div>
                    <div className="textbox-text">
                        환자의 시료에서 DNA를 추출하고, 각 원인균에 특이적인 primer 를 사용하여 PCR(중합효소연쇄반응법)로 증폭하고 확인합니다.<br/>
                        <br/>	
                        <span className="emphasis2">14종 원인균</span><br/>
                        Neisseria gonorrhoeae (임질), Chlamydia trachomatis (클라미디아) , Ureaplasma urealyticum (유레아플라즈마),<br/>
                        Mycoplasma genitalium (마이코플라즈마 G), Mycoplasma hominis (마이코플라즈마 H) <br/>
                        Trichomonas vaginalis (트리코모나스) , Ureaplasma parvum (유레아플라즈마), Candida albicans (캔디다),<br/>
                        Gardnerella vaginalis (가드넬라), Trichomonas vaginalis (트리코모나스) , HSV 1 (Herpes simplex virus 1),<br/>
                        HSV 2 (Herpes simplex virus 2), Treponema palladium (매독균) Haemophilus ducreyi<br/>
                        <br/>
                        검체의 종류	<br/>
                        Urine(VB1, VB3), SEMEN, EPS(Expressed Prostatic Secretion), Cercical Swab
                    </div>
                </div>
                <div className="textbox-wrapper">
                    <div className="textbox-title">HPV(Human papillomavirus) 란?</div>
                    <div className="textbox-text">
                        유두종바이러스 또는 파필로마바이러스(papillomavirus)는 직경이 52~55nm인 DNA 바이러스입니다.<br/> 
                        현재까지 130여종의 인간 유두종바이러스(human papillomavirus, HPV)가 발견되었습니다.<br/>
                        HPV의 경우, 자궁경부암, 고환암과 같은 암을 발생시킨다.<br/>
                        특히, HPV 16 형과 HPV 18 형의 경우, 전 세계 자궁경부암 환자의 70%에서 발견되고 있습니다.
                    </div>
                </div>
                <div className="textbox-wrapper">
                    <div className="textbox-title">HPV(Human papillomavirus) 검사의의</div>
                    <div className="textbox-text">
                        HPV 검사는 세포진검사 (암검사)에 이상이 나타나기 이전에 자궁경부암의 발병 가능성을 알아 낼 수 있는 검사입니다.<br/>
                        세포진검사의 경우 자궁경부의 세포를 보는 검사이므로 세포가 암으로 변화할 조짐이 보여야 진단이 가능하지만 <br/>
                        세포의 변화 이전에 암으로 발전할 위험도를 미리 예측할 수 있습니다.
                    </div>
                </div>
                <div className="textbox-wrapper">
                    <div className="textbox-title">HPV(Human papillomavirus) 검사설명</div>
                    <div className="textbox-text">
                        Reverse Blot Hybridization Assay를 이용하여 HPV 32종의 genotype과 80여종의 HPV를 검출합니다.<br/>
                        고위험군 : HPV 16, 18, 26, 31, 33, 35, 39, 45, 51, 52, 53, 56, 58, 66, 59, 68, 69, 73<br/>
                        중위험군 : HPV34<br/>
                        저위험군 : HPV6 11, 32, 40, 42, 43, 44, 54, 70, 72, 81, 84, 87
                    </div>
                </div>
                <div className="textbox-wrapper">
                    <div className="textbox-title">HLA-B27(Human Leukocyte Antigen-B27) 검사란?</div>
                    <div className="textbox-text">
                        HLA-B27 검사는 강직성 척추염, 반응성 관절염, 혹은 간혹 앞포도막염의 진단이 의심될 때 진단의 확인 및 도움을 주기 위한 검사입니다.
                    </div>
                </div>
                <div className="textbox-wrapper">
                    <div className="textbox-title">HLA-B27 검사의 의의</div>
                    <div className="textbox-text">
                        HLA-B27 유전자를 가지고 있어도 반드시 강직성 척추염등의 질환이 발병한다는 의미는 아닙니다. <br/>
                        만약 HLA-B27 양성이고 만성통증 및 염증과(혹은) 뼈의 X선 검사 상 나타나는 퇴행성 변화가 있을 경우 위 질환을 의심할수 있습니다.<br/>
                        <br/>
                        강직성척추염- 환자의 약 90%에 HLA-B27이 양성<br/>
                        연소기류마티스관절염—환자의 약 80%에서 HLA-B27 양성<br/>
                        반응성관절염—약 60-85%에서 HLA-B27양성	<br/>
                        단독성, 급성 앞 포도막염—약 40-70%에서 HLA-B27양성
                    </div>
                </div>
                <div className="textbox-wrapper">
                    <div className="textbox-title">HLA-B27 검사방법</div>
                    <div className="textbox-text">
                        혈장에서 염색체 DNA 를 추출하여 B27 유전자 특이 primer 로 PCR(중합효소연쇄반응법)을 이용하여 증폭하고,<br/>
                        전기영동하여 결과를 확인합니다.
                    </div>
                </div>
                <div className="textbox-wrapper">
                    <div className="textbox-title">HBV(Hepatitis B Virus) 란?</div>
                    <div className="textbox-text">
                        크기가 42 nm로서 DNA 바이러스 중 가장 작으며,<br/>
                        내부에는 원형의 DNA가 피각(capsid)으로 되어있는 20면체의 외피로 둘러싸여 있습니다.<br/>
                        B형 간염 바이러스(Hepatitis B Virus, HBV) 감염은 전세계적으로 발생 빈도가 높을 뿐만 아니라 <br/>
                        간경화나 간세포암과 같은 만성 간질환으로 진행될 가능성이 높습니다.
                    </div>
                </div>
                <div className="textbox-wrapper">
                    <div className="textbox-title">HBV검사의 임상적 의의</div>
                    <div className="textbox-text">
                        HBV의 혈중 농도는 간경화나 간세포암종과 같은 합병증의 발생 위험과 직접 관련이 있다는 연구도 있어 <br/>
                        HBV DNA 농도 측정은 환자를 치료하고 예후를 예측하는데 있어 매우 중요한 검사입니다.<br/>
                        HBV의 증식을 억제하여 간염을 완화하며 섬유화를 방지할 수 있습니다. <br/>
                        검사상의 지표로는 gpt(ALT)의 정상화, 혈청 HBV DNA의 감소, HBeAg의 혈청소실 혹은 혈청전환, 조직소견의 호전입니다.
                    </div>
                </div>
                <div className="textbox-wrapper">
                    <div className="textbox-title">HBV검사방법</div>
                    <div className="textbox-text">
                        HBV 감염된 사람의 혈장 또는 혈청에서 B형 간염바이러스 DNA를 실시간중합효소연쇄반응법을 이용하여 정량 측정하는 방법으로,<br/>
                        DNA 의 추출부터 증폭까지 자동화장비를 사용하여 일정한 결과를 얻을 수 있습니다.
                    </div>
                </div>
                <div className="task-wrapper">
                    <div className="task-text">주요 검사 업무</div>
                    <div className="task-content-sticky">
                        <div className="task-content">· STI(Sexully Transmitted Infection)</div>
                        <div className="task-content">· HPV(Human papillomavirus)	</div>
                        <div className="task-content">· HLA-B27(Human Leukocyte Antigen-B27)</div>
                        <div className="task-content">· HBV(Hepatitis B Virus)</div>
                    </div>
                </div>
                <div className="equipment-wrapper">
                    <div className="equipment-title">분자유전학부 장비안내</div>
                    <div className="equipment-content-2">
                        <div className="equipment-desc-2">
                            <div className="equipment-desc-upper">Bio-rad CFX-96</div>
                            <div className="equipment-desc-lower-2">
                                <div className="lower-text mg-bt-12 mg-tp-20">DNA 증폭</div>
                                <img src="imgs/equipments/Bio-rad-CFX-96.png" alt="" className="equipment-img mg-tp-12"/>
                            </div>
                        </div>
                        <div className="equipment-desc-2">
                            <div className="equipment-desc-upper">Bioneer EXISTATION</div>
                            <div className="equipment-desc-lower-2">
                                <div className="lower-text mg-bt-12 mg-tp-20">DNA 증폭</div>
                                <img src="imgs/equipments/Bioneer-EXISTATION.png" alt="" className="equipment-img mg-tp-12"/>
                            </div>
                        </div>
                        <div className="equipment-desc-2">
                            <div className="equipment-desc-upper">Veriti 96</div>
                            <div className="equipment-desc-lower-2">
                                <div className="lower-text mg-bt-12 mg-tp-20">DNA 증폭</div>
                                <img src="imgs/equipments/Veriti-96.png" alt="" className="equipment-img mg-tp-12"/>
                            </div>
                        </div>
                        <div className="equipment-desc-2">
                            <div className="equipment-desc-upper">SimpliAMP</div>
                            <div className="equipment-desc-lower-2">
                                <div className="lower-text mg-bt-12 mg-tp-20">DNA 증폭</div>
                                <img src="imgs/equipments/SimpliAMP.png" alt="" className="equipment-img mg-tp-12"/>
                            </div>
                        </div>
                        <div className="equipment-desc-2">
                            <div className="equipment-desc-upper">Bio-rad C1000</div>
                            <div className="equipment-desc-lower-2">
                                <div className="lower-text mg-bt-12 mg-tp-20">DNA 증폭</div>
                                <img src="imgs/equipments/Bio-rad-C1000.png" alt="" className="equipment-img mg-tp-12"/>
                            </div>
                        </div>
                        <div className="equipment-desc-2">
                            <div className="equipment-desc-upper">Abbott m2000 sp</div>
                            <div className="equipment-desc-lower-2">
                                <div className="lower-text mg-bt-12 mg-tp-20">DNA 증폭</div>
                                <img src="imgs/equipments/Abbott-m2000-sp.png" alt="" className="equipment-img mg-tp-12"/>
                            </div>
                        </div>
                        <div className="equipment-desc-2">
                            <div className="equipment-desc-upper">Abbott m2000rt</div>
                            <div className="equipment-desc-lower-2">
                                <div className="lower-text mg-bt-12 mg-tp-20">DNA 증폭</div>
                                <img src="imgs/equipments/Abbott-m2000rt.png" alt="" className="equipment-img mg-tp-12"/>
                            </div>
                        </div>
                        <div className="equipment-desc-2">
                            <div className="equipment-desc-upper">HybREAD 480</div>
                            <div className="equipment-desc-lower-2">
                                <div className="lower-text mg-bt-12 mg-tp-20">Genotyping 용</div>
                                <img src="imgs/equipments/HybREAD-480.png" alt="" className="equipment-img mg-tp-12"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="body-content-sticky">
            <div className="content-title-wrapper">
                <div className="content-title-kor">검사센터</div>
                <div className="content-title-eng">LOBORATORY CENTER</div>
            </div>
            <div className="department-list-wrapper">
                <div className="department-list-text">신원의료재단의 각 검사센터 부서별 안내입니다.</div>
                <div className="department-list-sticky">
                    <div onClick={() => setNum(1)} className={num===1 ? "department-list-content department-selected" : "department-list-content"}>임상화학부</div>
                    <div onClick={() => setNum(2)} className={num===2 ? "department-list-content department-selected" : "department-list-content"}>진단면역학부</div>
                    <div onClick={() => setNum(3)} className={num===3 ? "department-list-content department-selected" : "department-list-content"}>진단혈액학부</div>
                    <div onClick={() => setNum(4)} className={num===4 ? "department-list-content department-selected" : "department-list-content"}>임상미생물학부</div>
                    <div onClick={() => setNum(5)} className={num===5 ? "department-list-content department-selected" : "department-list-content"}>요검경학부</div>
                    <div onClick={() => setNum(6)} className={num===6 ? "department-list-content department-selected" : "department-list-content"}>분자유전학부</div>
                </div>
            </div>
            {num===1 ? <ContentFirst/> : num===2 ? <ContentSecond/> : num===3 ? <ContentThird/> : num===4 ? <ContentFourth/> : num===5 ? <ContentFifth/> : <ContentSixth/>}
        </div>
    )
}

export default Deparment