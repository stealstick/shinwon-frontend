import React, { useState } from 'react'
import './css/CenterComponent.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Analysis = () => {

    AOS.init()

    const [ num, setNum ] = useState(0)

    const ContentBefore = () => {
        return(
            <div className="progress-before">
                <div data-aos="fade-up"  data-aos-duration="2000" className="content-title-wrapper">
                    <div className="content-title-kor">정도관리</div>
                    <div className="content-title-eng">ANALYSIS MANAGEMENT</div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-intro">
                    의료법인 신원의료재단에서는 대한임상검사 정도관리협회에서 주관하는 외부정도관리 프로그램과<br/>
                    대한진단검사의학과에서 주관하는 검사실 신임 인증프로그램에 참여하여 계속적인 Data관리를 실시<br/>
                    하여 우수 검사실 신임인증서를 획득하였습니다.<br/>
                    의료법인 신원의료재단에서는 환자들의 진단과 치료에 신속하고 정확한 검사 Data를 제공하기 위해<br/>
                    열정을 가지고 노력하고 있습니다.
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info">
                    <div className="analysis-info-title">정도관리란?</div>
                    <div className="analysis-info-content">
                        신뢰도 높은 검사결과를 제공하기 위하여,<br/>
                        검체 채취로부터 검사결과 보고에 이르기까지의 모든 과정과 요소(인력, 장비, 시약, 환경 등)를 관리하는 System입니다.<br/>
                        정도관리를 통하여 오류(Error)를 최소화하고, 검사의 정확도 및 정밀도를 검정하여 검사실 Data 시스템 체계를 평가하며 신뢰받는
                        결과를 제공하여 진단과 치료에 도움이 되고자 합니다.
                    </div>
                </div>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/analysis-progress.png" alt="" className="analysis-info-img"/>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info">
                    <div className="analysis-info-title">정도관리의 목적</div>
                    <div className="analysis-info-content">
                        신원의학연구소에서는 대한임상검사 정도관리협회에서 주관하는 외부정도관리 프로그램과 대한진단검사의학과에서<br/>
                        주관하는 검사실 신임 인증프로그램에 참여하여 계속적인 Data관리를 실시하여 우수 검사실 신임인증서를 획득하였습니다.<br/>
                        의료법인 신원의료재단에서는 환자들의 진단과 치료에 신속하고 정확한 검사 Data를 제공하기 위해 열정을 가지고 노력하고 있습니다.
                    </div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-reliable">
                    <img src="../imgs/img/reliable.png" alt="" className="reliable"/>
                    <div className="reliable-contents-sticky">
                        <div className="reliable-title">
                            신뢰성 있는 검사정보를<br/>
                            제공하는데 그 목적이 있습니다.
                        </div>
                        <div className="reliable-separator"></div>
                        <div className="reliable-contents">
                            <div className="reliable-content">검사의 정밀도 유지</div>
                            <div className="reliable-content">검사의 정확도 유지</div>
                            <div className="reliable-content">검사 방법 및 장비의 비교 선택</div>
                            <div className="reliable-content">임상병리사의 분석 능력에 대한 지침 제공</div>
                        </div>
                    </div>
                </div>
                <div className="analysis-contents-wrapper">
                    <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-content-sticky">
                        <div className="analysis-content-top">
                            <div className="rect"></div>
                            <div className="analysis-content-title">분석오차 (Analytical error)</div>
                        </div>
                        <div className="analysis-content-emphasis">임상병리검사의 보고치(reported value) = 참값 또는 기대치</div>
                        <div className="analysis-content-text">
                            실제로는 다양한 분석적 변이, 부적확성, 편차가 존재<br/>
                            분석오차 : 우연오차(random error, 정밀도) + 계통오차(systemic error, 정확도)<br/>
                            우연오차 : 분석기, 시약, 전압 등의 불안정성과 사무적 실수, 검사자의 우연한 실수<br/>
                            계통오차 : 평균치로부터 음이나 양의 방향으로 측정치들이 이행.
                        </div>
                    </div>
                    <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-content-sticky">
                        <div className="analysis-content-top">
                            <div className="rect"></div>
                            <div className="analysis-content-title">계통오차 (Systemic error)</div>
                        </div>
                        <div className="analysis-content-emphasis">
                            어떤 일정한 방향으로 계통적으로 나타나는 오차.<br/>
                            정밀도 (precision)가 우수하다는 전제하에 설명될 수 있는 종류임.<br/>
                            즉, 매일 측정으로 하여 갈 때 어떤 날부터 갑자기 계단적인 측정치를 얻게 되는 경우를 뜻함.<br/>
                        </div>
                        <div className="analysis-content-text">
                            개인적인 습관<br/>
                            각 측정 기기의 계통적 부정확성<br/>
                            측정 환경의 계통적인 부적격성<br/>
                            측정법 자체의 습성<br/>
                        </div>
                    </div>
                    <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-content-sticky">
                        <div className="analysis-content-top">
                            <div className="rect"></div>
                            <div className="analysis-content-title">우연오차 (Random error)</div>
                        </div>
                        <div className="analysis-content-emphasis">
                            한 측정법에서 계통적 오차를 일으키는 모든 원인을 제거한 후에 비로소 설명될 수 있는 오차.<br/>
                            즉, 우연오차는 허용오차 범위 내에 포함되어야 하는 점이며 이에 벗어난 우연오차가 발생된다면 그 측정 방법에는<br/>
                            사용될 수 없습니다.
                        </div>
                    </div>
                    <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-content-sticky">
                        <div className="analysis-content-top">
                            <div className="rect"></div>
                            <div className="analysis-content-title">정확도 (Accuracy)</div>
                        </div>
                        <div className="analysis-content-emphasis">측정값이 참값에 근접하는 정도입니다.</div>
                    </div>
                    <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-content-sticky analysis-content-sticky__last">
                        <div className="analysis-content-top">
                            <div className="rect"></div>
                            <div className="analysis-content-title">정밀도 (Precison)</div>
                        </div>
                        <div className="analysis-content-emphasis">동일검체를 동시에 중복 측정하거나 날짜를 바꾸어서 측정하여도 항상 같은 결과를 얻는지 관찰합니다.</div>
                    </div>
                </div>
            </div>
        )
    }

    const ContentFirst = () => {
        return(
            <div className="progress-first">
                <div data-aos="fade-up"  data-aos-duration="2000" className="content-title-wrapper">
                    <div className="content-title-kor">분석 전 단계</div>
                    <div className="content-title-eng">STEP BEFORE ANALYSIS</div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-intro">
                    의료법인 신원의료재단에서는 대한임상검사 정도관리협회에서 주관하는 외부정도관리 프로그램과 <br/>
                    대한진단검사의학과에서 주관하는 검사실 신임 인증프로그램에 참여하여 계속적인 Data관리를 실시<br/>
                    하여 우수 검사실 신임인증서를 획득하였습니다.<br/>
                    의료법인 신원의료재단에서는 환자들의 진단과 치료에 신속하고 정확한 검사 Data를 제공하기 위해 <br/>
                    열정을 가지고 노력하고 있습니다.
                </div>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/analysis-progress-step1.png" alt="" className="analysis-info-img"/>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info mg-tp-30">
                    <div className="analysis-info-title">인력 및 인사규정</div>
                    <div className="analysis-info-content">
                        검사기술부의 팀별운영체제를 확립하고 지속적인 교육을 통해 검사에 관한 기술 및 지식을 함양시켜<br/>
                        검사의 질이 일정하게 유지될 수 있도록 합니다.<br/>
                        또한 이에 대한 능력을 주기적으로 평가하여 업무에 대한 책임감을 뚜렷이 하며 교육에 대한 의욕을 높일 수 있도록 합니다.
                    </div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info">
                    <div className="analysis-info-title">공급 및 재고관리 시스템</div>
                    <div className="analysis-info-content">
                        국내 최고수준의 Quality Reagent를 공급하여, 검사 안정성 확보에 최선을 다하고 있습니다. <br/>
                        One-step구매 System체계를 구축하여 매월 1회 적정량을 파악하여 시약을 공급, 관리하고 있습니다.
                    </div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info">
                    <div className="analysis-info-title">검체 채취 및 취급</div>
                    <div className="analysis-info-content">
                        검체는 검사의뢰 안내서에 의한 방법에 따라 적절하게 채취되어 영업사원에게 전달될 수 있도록 교육, 홍보하고 있습니다.
                    </div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info mg-bt-150">
                    <div className="analysis-info-title">검체접수</div>
                    <div className="analysis-info-content">
                        접수되는 검체는 검사지침서에 따라 요구되는 용기에 적절한 양이 포함되었는지 확인합니다.<br/>
                        검사에 적합하지 않은 상태인 경우 팀장 또는 담당전문의에게 알려 조치를 취합니다.<br/>
                        당일 검사가 시행되지 않은 검체는 적절한 온도에 보관하며 검사가 끝난 검체는 정해진 기간 동안 보관한 후 폐기합니다.<br/>
                        확인 불명의 검체를 폐기한 경우에는 검사실 내 모든 병리사와 담당전문의에게 확인 후 시행합니다.
                    </div>
                </div>
            </div>
        )
    }

    const ContentSecond = () => {
        return(
            <div className="progress-second">
                <div data-aos="fade-up"  data-aos-duration="2000" className="content-title-wrapper">
                    <div className="content-title-kor">분석단계 - 내부 정도 관리</div>
                    <div className="content-title-eng">STEP ANALYSIS</div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-intro">
                    의료법인 신원의료재단에서는 대한임상검사 정도관리협회에서 주관하는 외부정도관리 프로그램과<br/>
                    대한진단검사의학과에서 주관하는 검사실 신임 인증프로그램에 참여하여 계속적인 Data관리를 실시<br/>
                    하여 우수 검사실 신임인증서를 획득하였습니다.<br/>
                    의료법인 신원의료재단에서는 환자들의 진단과 치료에 신속하고 정확한 검사 Data를 제공하기 위해 <br/>
                    열정을 가지고 노력하고 있습니다.
                </div>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/analysis-progress-step1.png" alt="" className="analysis-info-img"/>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info mg-tp-30">
                    <div className="analysis-info-title">검사지침서</div>
                    <div className="analysis-info-content">
                        검사실에서 시행되는 모든 검사에 대하여 검사지침서를 마련하여 매년 담당전문의에 의해 적극적인 검토가 이루어지고 있으며 <br/>
                        검사담당자는 이를 숙지하고 있으며 항상 손쉽게 이용할 수 있도록 관리합니다.
                    </div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info">
                    <div className="analysis-info-title">시약</div>
                    <div className="analysis-info-content">
                        시약에 대한 Labeling이 잘되어 있는지 확인, 관리하고 제조 및 보관의 원칙을 준수하여 유효기간 내 사용합니다.
                    </div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info">
                    <div className="analysis-info-title">Control & Standard</div>
                    <div className="analysis-info-content">
                        모든 검체에는 적절한 control과 standard를 사용하여 검사의 신뢰도를 확인하며 <br/>
                        기준을 벗어난 경우 적절한 조치를 취하고 이에 대한 기록을 남기며 매일 팀장이 검토합니다.
                    </div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info">
                    <div className="analysis-info-title">기기 및 장비</div>
                    <div className="analysis-info-content">
                        모든 기기 및 장비는 정해진 규칙에 따라 주기적으로 기능을 검증하며 장비 기능을 효율적으로 유지하고<br/>
                        고장 예방을 위해 청결상태 유지, 점검 목록 등을 마련하여 일간별, 주간별 월간별등 주기를 정하여 점점합니다.<br/>
                        이상이 발견된 경우에는 즉시 팀장 또는 전문의에게 알려 조치를 취하게 합니다.
                    </div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-textbox">
                    정도관리는 control 물질을 분석하여 현재의 결과와 기대치를 비교하여<br/>
                    만족할 만한 업무의 질을 지속하기 위하여 시행되는 지침과 술식들로 구성되어 있습니다. <br/>
                    검사실 내 내부정도관리는 자체 내 기계나 검사성적에 대한 일내, 일차 변동을 관리하는 방법으로<br/> 
                    정도관리물질을 이용하여 검사 과정의 정확도와 정밀도를 검정합니다.<br/>
                    각 검사별로 정도관리 물질과 방법을 문서화 하여 원칙에 따라 정도관리를 시행하고 있습니다.<br/>
                    또한 검사 기기의 점검 및 유지, 온도 기록 등을 문서화 하여 원칙대로 시행하여 <br/>
                    기록에서 벗어난 결과를 관찰하는 즉시 보고하여 적절한 조치를 취하고 장부에 기록해 놓습니다.<br/>
                    내부정도관리를 통해 검사실 내 작은 오차나 오류도 발생하지 않도록 노력하고 있습니다.
                </div>
                <div className="analysis-contents-wrapper">
                    <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-content-sticky">
                        <div className="analysis-content-top">
                            <div className="rect"></div>
                            <div className="analysis-content-title">정도관리물질의 종류</div>
                        </div>
                        <div className="analysis-content-emphasis-2 bld">1. 참고물질</div>
                        <div className="analysis-content-text">	
                            기기의 calibration이나 검사 방법의 정확성을 입증하는데 쓸 수 있도록 제조된 혈청(primary reference material)으로<br/>
                            학계에서 인증된 Reference methode에 의해 정해진 값을 가지게 됩니다.
                        </div>
                        <div className="analisis-content-emphasis-2 bld">2. Calibration material</div>
                        <div className="analysis-content-text">
                            검체의 농도를 계산해 내기 위해 필요한 기준이 되는 물질로 여러 단계의 농도 별로 있습니다.
                        </div>
                        <div className="analysis-content-emphasis-2 bld">3. 대조물질(Control material)</div>
                        <div className="analysis-content-text">
                            Calibration 목적 즉, 정해진 농도의 측정을 위해 사용하는 것이 아니라 검사방법의 정확성을 monitoring 하고 <br/>
                            매일매일의 정도관리를 위해 사용되는 물질로서 그 농도가 표시되어 있습니다.
                        </div>
                    </div>
                    <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-content-sticky">
                        <div className="analysis-content-top">
                            <div className="rect"></div>
                            <div className="analysis-content-title">관리물질의 조건</div>
                        </div>
                        <div className="analysis-content-text">	
                            일정기간동안 안정성을 유지해야 함.<br/>
                            분석물질들의 농도가 임상적인 유용성이 있어야 함.<br/>
                            가능한한 사람의 검체와 같아야 함.<br/>
                            가격이 사용가능한 수준이어야 함.<br/>
                        </div>
                    </div>
                    <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/analysis-bt-img.png" alt="" className="analysis-bt-img"/>
                </div>
            </div>
        )
    }

    const ContentThird = () => {
        return(
            <div className="progress-third">
                <div data-aos="fade-up"  data-aos-duration="2000" className="content-title-wrapper">
                    <div className="content-title-kor">분석단계 - 외부 정도 관리</div>
                    <div className="content-title-eng">STEP ANALYSIS</div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-intro">
                    의료법인 신원의료재단에서는 대한임상검사 정도관리협회에서 주관하는 외부정도관리 프로그램과<br/>
                    대한진단검사의학과에서 주관하는 검사실 신임 인증프로그램에 참여하여 계속적인 Data관리를 실시<br/>
                    하여 우수 검사실 신임인증서를 획득하였습니다.<br/>
                    의료법인 신원의료재단에서는 환자들의 진단과 치료에 신속하고 정확한 검사 Data를 제공하기 위해 <br/>
                    열정을 가지고 노력하고 있습니다.
                </div>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/analysis-progress-step2.png" alt="" className="analysis-info-img"/>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-contents-wrapper">
                    <div className="analysis-content-sticky">
                        <div className="analysis-content-top">
                            <div className="rect30"></div>
                        </div>
                        <div className="analysis-content-text no-title">
                            내부정도관리에 의존하다보면 실험실에서 감지하지 못하는 내부 변화를 찾아내기 어렵습니다.<br/>
                            외부정도관리 참여를 통해 검사 결과의 신뢰도를 더욱 높이고 시설간, 장비간, 측정방법간 차이에서 발생하는 계통오차를 해결,<br/>
                            정확도를 유지하기 위한 목적으로 실시합니다.<br/>
                            대한임상병리정도관리협회(The Korea Association of Quality Assurance for Clinical Pathology)의 임상화학분과,<br/>
                            진단혈액분과, 면역혈청학분과, 임상미생물분과, 임상검경학분과 등의 정도관리 프로그램에 참여하여 검사실의 정확도를<br/>
                            인증받고 있습니다.
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="emphasis2 bld mg-lft-0">대한임상검사정도관리협회의 외부정도관리 분과별 사업계획</div>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/plan.png" alt="" className="analysis-info-img mg-bt-150 mg-tp-12"/>
            </div>
        )
    }

    const ContentFourth = () => {
        return(
            <div className="progress-fourth">
                <div data-aos="fade-up"  data-aos-duration="2000" className="content-title-wrapper">
                    <div className="content-title-kor">분석 후 단계</div>
                    <div className="content-title-eng">STEP END ANALYSIS</div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-intro">
                    의료법인 신원의료재단에서는 대한임상검사 정도관리협회에서 주관하는 외부정도관리 프로그램과<br/>
                    대한진단검사의학과에서 주관하는 검사실 신임 인증프로그램에 참여하여<br/>
                    계속적인 Data관리를 실시하여 우수 검사실 신임인증서를 획득하였습니다.<br/>
                    의료법인 신원의료재단에서는 환자들의 진단과 치료에 신속하고 정확한 검사 Data를 제공하기 위해 <br/>
                    열정을 가지고 노력하고 있습니다.
                </div>
                <img data-aos="fade-up"  data-aos-duration="2000" src="../imgs/img/analysis-progress-step3.png" alt="" className="analysis-info-img"/>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info mg-tp-30">
                    <div className="analysis-info-title">결과보고</div>
                    <div className="analysis-info-content">
                        모든 검사항목에 대해 상, 하한치 및 보고 가능한 범위가 정의되고 검증되어야 하며<br/>
                        검사결과는 정해진 검증 과정을 거쳐 가능한 빠른 시간내 보고합니다. <br/>
                        결과 수정시에는 담당 전문의의 결정에 따라 시행되고 환자를 담당하는 의료진에게 반드시 즉시 알립니다.
                    </div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info">
                    <div className="analysis-info-title">검사실 안전</div>
                    <div className="analysis-info-content">
                        검사실 전체의 안전준수 지침이 모든 직원에게 적용되며 이에 따라 철저한 점검 및 시행이 이루어져야 합니다.
                    </div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info">
                    <div className="analysis-info-title">사고나 오류발생</div>
                    <div className="analysis-info-content">
                        사고나 오류는 즉시 팀장에게 보고하며 팀장은 이를 담당전문의와 상의하여 조치방법을 결정하고<br/>
                        필요한 경우 관련 부서에 알려 그 처리를 분명히 합니다.
                    </div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info">
                    <div className="analysis-info-title">기록 보관</div>
                    <div className="analysis-info-content">
                        ① 내부 정도관리 결과 (최소 2년)<br/>
                        ② 외부 정도관리 결과 (최소 2년)<br/>
                        ③ 환자의 결과 (최소 10년)<br/>
                        ④ 장비관리에 대한 기록 (일일, 주중, 월별, 연중)은 그 장비 보유기간동안 보관을 원칙으로 합니다.
                    </div>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="analysis-info mg-bt-150">
                    <div className="analysis-info-title">Quality improvement</div>
                    <div className="analysis-info-content">
                        검사의 질 향상과 환자 서비스 개선을 위하여 계속적인 개발과 노력을 가하며 매년 계획되는 진단검사의학부 전체적인 C.Q.I 계획에<br/>
                        적극 참여하여 그 분석결과를 매년 정리하여 다음 해의 C.Q.I 계획을 수립합니다.
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="body-content-sticky">
            <div className="content-header">
                <div onClick={num===1 ? () => setNum(0) : () => setNum(1)} className={num===1 ? "content-header-item progress-selected" : "content-header-item"}>분석전단계</div>
                <div onClick={num===2 ? () => setNum(0) : () => setNum(2)} className={num===2 ? "content-header-item progress-selected" : "content-header-item"}>내부정도관리</div>
                <div onClick={num===3 ? () => setNum(0) : () => setNum(3)} className={num===3 ? "content-header-item progress-selected" : "content-header-item"}>외부정도관리</div>
                <div onClick={num===4 ? () => setNum(0) : () => setNum(4)} className={num===4 ? "content-header-item progress-selected" : "content-header-item"}>분석후단계</div>
            </div>
            {num===0 ? <ContentBefore/> : num===1 ? <ContentFirst/> : num===2 ? <ContentSecond/> : num===3 ? <ContentThird/> : <ContentFourth/>}
        </div>
    )
}

export default Analysis