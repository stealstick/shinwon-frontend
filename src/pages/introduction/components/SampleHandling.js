import React, { useState } from 'react'
import styles from './css/SampleHandling.module.scss'
import SectionTitle from '../../../components/SectionTitle'

const SampleHandling = () => {

    const [ num, setNum ] = useState(1)

    const ContentFirst = () => {
        return(
            <div>
                <div className={styles.section}>
                    <SectionTitle kor="검체 채취 / 취급방법" eng="SAMPLE HANDLING"/>
                    <div data-aos="fade-up" className={styles.text_normal}>일반원칙</div>
                    <div data-aos="fade-up" className={styles.text_light}>
                        각 검체에 대한 채취 시 안내서에 기재된 검체량을 참고하여 주시기 바랍니다.<br/>
                        검체는 지정된 용기를 이용해 주시고 전용용기가 필요한 경우에는 미리 신청해 주십시오.<br/>
                        검체가 slide에 도말된 경우에는 연필로 이름과 성별, 나이를 기재해 주십시오.<br/>
                        검사물을 채취하거나 다루실 때에는 글러브, 가운 등과 같은 적절한 보호장치를 사용하시어 검사자의 안전에 유의하십시오.<br/>
                        일반 주사기를 사용하여 한 환자에서 여러종류의 검체용기에 채취해야 할 경우 다음의 순서를 따라주십시오.
                    </div>
                    <img data-aos="fade-up" src="../imgs/img/samplehandling-progress.svg" alt="" className={styles.sample_handling_progress}/>
                    <div data-aos="fade-up" className={styles.ref_text}>
                        ※주)SST (Gel tube) 기벽에는 clot activor가 묻어있기 때문에 짧은 시간에도 강력한 clot을 형성하기 때문에<br/>
                        &nbsp;&nbsp;절대로 혈액검사용 tube (EDTA, sood, citrate)로 옮겨서는 안됩니다.
                    </div>
                </div>
                <div className={styles.section}>
                    <div data-aos="fade-up" className={styles.sample_title}>
                        모든 검사물 채취용기에는 반드시 환자의 인적사항을 기재하시어 확인 후 채취하십시오.<br/>
                        오염방지를 위해 채취용기의 가장자리에 가급적 검체가 묻지않게 주의해 주십시오.<br/>
                        수액주사 중인 혈관에서 채혈하시면 검사결과가 부정확하므로 검체로 적합하지 않습니다.
                    </div>
                    <div data-aos="fade-up" className={styles.sample_list_wrapper}>
                        <img src="../imgs/samples/blood-culture.png" alt="" className={styles.sample_img}/>
                        <img src="../imgs/samples/plain-tube.png" alt="" className={styles.sample_img}/>
                        <img src="../imgs/samples/sod-citrate-tube.png" alt="" className={styles.sample_img}/>
                        <img src="../imgs/samples/sst-tube.png" alt="" className={styles.sample_img}/>
                        <img src="../imgs/samples/heparin-tube.png" alt="" className={styles.sample_img}/>
                        <img src="../imgs/samples/EDTA-tube.png" alt="" className={styles.sample_img}/>
                        <img src="../imgs/samples/NaF-tube.png" alt="" className={styles.sample_img}/>
                    </div>
                </div>
                <div className={styles.section}>
                    <div data-aos="fade-up" className={styles.sample_handling_content}>
                        <div className={styles.sample_handling_title_wrapper}>
                            <div className={styles.rect}/>
                            <div className={styles.sample_handling_title}>채혈과 관련된 용혈의 원인</div>
                        </div>
                        <div className={styles.text_blue}>
                            ① 첨가제가 들어 있는 시험관에 채혈 후 심하게 흔들어 혼합할 때<br/>
                            ② 혈종이 생긴 정맥에서 무리하게 채혈할 때<br/>
                            ③ syringe 주사기로 채혈 시 너무 세게 피스톤을 당길 때<br/>
                            ④ 너무 가느다란 주사침 (23G)을 사용하여 세게 당겨 뽑거나 진공용량이 큰 시험관에 채혈할 때<br/>
                            ⑤ syringe 주사기에 주사침을 헐겁게 끼웠을 때 (공기에 의해 거품이 생기며 용혈)<br/>
                            ⑥ syringe 주사기에 채혈한 혈액을 진공시험관으로 옮기려고 피스톤을 세게 밀어 내릴 때<br/>
                            ⑦ 소독부위의 알코올이 남아 있는 상태에서 채혈할 때 (알코올에 의한 용혈)<br/>
                            ⑧ 피부천자 후 너무 세게 짜낼 때<br/>
                            ⑨ 시험관 안에 세제 또는 물이 남아 있을 때 (재사용 시험관을 사용 하는 경우)
                        </div>
                        <div className={styles.text_light_dark}>
                            모든 검사물 채취용기에는 반드시 환자의 인적사항을 기재하시어 확인 후 채취하십시오.<br/>
                            오염방지를 위해 채취용기의 가장자리에 가급적 검체가 묻지않게 주의해 주십시오.<br/>
                            수액주사 중인 혈관에서 채혈하시면 검사결과가 부정확하므로 검체로 적합하지 않습니다.<br/>
                            채혈을 마친 튜브는 튜브별 특징에 맞게 mix하여야 한다.
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sample_handling_content}>
                        <div className={styles.sample_handling_title_wrapper}>
                            <div className={styles.rect}/>
                            <div className={styles.sample_handling_title}>Mixing / 믹싱</div>
                        </div>
                        <div className={styles.mixing_contents}>
                            <img src="../imgs/samples/mixing.png" alt="" className={styles.mixing_img}/>
                            <div className={styles.mixing_texts}>
                                <div className={styles.text_light_dark}>
                                    Mixing 목적은 각 tube 안에 포함된 일정량의 시약 함유되어 있는 것을<br/>
                                    mixing을 통해 tube 내 혈액과 잘 혼합되어 원활한 작용 유도한다.<br/>
                                    Mixing 시기 : 채혈 후 곧바로 부드럽게 시행<br/>
                                    Mixing 방법 : Tube를 똑바로 잡고 180˚ 아래로 내려 들어 올리면 1회 실기,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    각 검사 tube 별로 mixing 횟수를 반복	
                                </div>
                                <div className={styles.text_blue}>
                                    부적절한 Mixing으로 인한 문제 : EDTA, Sodium citrate, Heparin tube- Clot,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    SSTⅡ tube- 응고가 덜 된 상태 발생
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sample_handling_content}>
                        <div className={styles.sample_handling_title_wrapper}>
                            <div className={styles.rect}/>
                            <div className={styles.sample_handling_title}>검체채취과정</div>
                        </div>
                        <img src="../imgs/samples/sample-process.png" alt="" className={styles.sample_handling_process}/>
                    </div>
                    <div data-aos="fade-up" className={styles.sample_handling_content}>
                        <div className={styles.sample_handling_title_wrapper}>
                            <div className={styles.rect}/>
                            <div className={styles.sample_handling_title}>검체 분리 및 보관</div>
                        </div>
                        <div className={styles.text_light_dark}>
                            - 채혈을 마친 검체는 적절한 온도에서 임상화학, 면역용 혈청(장)분리 또는 전혈 상태로 보관하다가 위탁하여야 한다.<br/>
                            - 혈청이나 혈장을 분리하기 위해서는 혈액을 잘 혼합 한 다음 20-30분 경과 후 3000rpm에서 10분 원심분리 합니다.<br/>
                            &nbsp;특히 혈당 검사 시에는 30분 이내에 혈청을 분리해 두고 가급적 NaF 용기 사용을 권장한다.<br/>
                            - SST의 경우 분리된 혈청은 다른 용기에 옮길 필요 없이 그대로 보관하면 된다.<br/>
                            - 혈청을 분리하지않고 전혈상태로 냉장 보관 시 검사결과(특히 전해질 검사 중 porassium  상승, 혈당 감소)에 영향을 준다.<br/>
                            - 분리된 검체는 냉장 보관해 주고 특별한 보관이 필요한 검사의 경우에는 검사 안내서를 참고하여 보관하여야 한다.<br/>
                            &nbsp;(검사별 보관조건을 확인한다.)<br/>
                            - 검사가 끝난 검체는 검사결과의 재 검사 등 기타의 사유로 일정기관보관 후 폐기물 관리법에 따라 폐기한다.<br/>
                            &nbsp;(혈청:7일, 일반 혈액 검체:3일)<br/>
                        </div>
                        <div className={styles.text_blue}>
                            <br/>▶ 주의 : 보관 검체로 검사 진행된 항목의 경우 보관 상태에 따라 결과 값에 영향을 줄 수 있으므로<br/>
                            &nbsp;&nbsp;&nbsp;이점을 의뢰의료기관 담당자에게 알려 적절한 조치를 취하게 한다.
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const ContentSecond = () => {
        return(
            <div>
                <div className={styles.section}>
                    <SectionTitle kor="검체 용기안내" eng="SAMPLE CONTAINER INFO"/>
                    <div className={styles.sample_img3_wrapper}>
                        <img data-aos="fade-up" src="../imgs/samples/urine.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/acd.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/bap.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/blood1.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/blood2.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/capillary.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/chlamydia.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/conical.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/cvs.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/edta1.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/edta2.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/endotoxin.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/gh-urine.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/heparin.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/naf.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/nmp22.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/oxytocin.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/plain.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/pyruvic.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/serotonin.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/sst.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/citrate.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/slide.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/slide2.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/std.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/urea.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/utm.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/inf.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/29.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/30.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/31.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/32.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/33.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/sst2.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/35.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/36.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/37.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/38.png" alt="" className={styles.sample_img3}/>
                        <img data-aos="fade-up" src="../imgs/samples/tg.png" alt="" className={styles.sample_img3}/>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.separation_wrapper}>
                    <div onClick={() => setNum(1)} className={num===1 ? styles.separation_selected : styles.separation_content}>검체 채취 / 취급방법</div>
                    <div onClick={() => setNum(2)} className={num===2 ? styles.separation_selected : styles.separation_content}>검체 용기안내</div>
                </div>
            </div>
            {num===1 ? <ContentFirst/> : <ContentSecond/>}
        </div>
    )
}

export default SampleHandling