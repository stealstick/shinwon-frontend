import React from 'react'
import './css/CenterComponent.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Pathology = () => {

    AOS.init()

    return(
        <div class="body-content-sticky">
            <div data-aos="fade-up" class="content-title-wrapper">
                <div class="content-title-kor">병리학부</div>
                <div class="content-title-eng">PATHOLOGY CENTER</div>
            </div>
            <div data-aos="fade-up" class="pathology-intro">
                신원의료재단 병리과는 환자의 병변 부위에서 채취하는 조직, 체액, 세포검체를 신속 정확하게 검사하여<br/>
                치료와 예후 측정에 필요한 정보를 전문 의료인에게 제공하여 환자의 치료 방침에 기여하려 최선을 다하고 있습니다.
            </div>
            <div data-aos="fade-up" class="pathology-test-info">
                <div class="test-title">조직병리검사</div>
                <div class="test-content">
                    인체의 각종 장기에서 채취한 생검 및 절제조직 검체를 육안 검사를 통해 병변을 확인하고,<br/>
                    현미경 파독을 위한 슬라이드로 제작하여 병리전문의 선생님이 최종 진단을 내리는 분야로<br/> 
                    신속 정확한 진단으로 환자의 치료 방향 및 예후를 판정하는 중요한 업무를 수행하고 있습니다.
                </div>
            </div>
            <div data-aos="fade-up" class="pathology-test-info">
                <div class="test-title">세포병리검사</div>
                <div class="test-content">
                    부인과 탈락 세포 도말표본 검사와 기타 암세포 의심 부위의 체액(소변, 객담, 복수, 흉수 등),<br/>
                    세침 흡인 검사(갑상선 종괴, 유방 종괴 등)를 채취하여 유리슬라이드에 도말한 후 염색하여 현미경으로 검경하고,<br/>
                    암세포의 존재 유무를 판독하여 신속 정확하게 결과를 보고합니다.
                </div>
            </div>
            <div class="equipment-wrapper">
                <div data-aos="fade-up" class="equipment-title">병리과 장비안내</div>
                <div data-aos="fade-up" class="equipment-content">
                    <div class="equipment-desc">
                        <div class="equipment-desc-upper">Tissue-Tek VIP®6</div>
                        <div class="equipment-desc-lower">
                            <div class="lower-text">조직표본 자동 침투기</div>
                        </div>
                    </div>
                    <div class="equipment-img-wrapper">
                        <img src="../imgs/equipments/Tissue-Tek-VIP®6.png" alt="" class="equipment-img"/>
                    </div>
                </div>
                <div data-aos="fade-up" class="equipment-content">
                    <div class="equipment-desc">
                        <div class="equipment-desc-upper">Tissue-Tek® TEC5</div>
                        <div class="equipment-desc-lower">
                            <div class="lower-text">자동 파라핀 포매기</div>
                        </div>
                    </div>
                    <div class="equipment-img-wrapper">
                        <img src="../imgs/equipments/Tissue-Tek®-TEC5.png" alt="" class="equipment-img"/>
                    </div>
                </div>
                <div data-aos="fade-up" class="equipment-content">
                    <div class="equipment-desc">
                        <div class="equipment-desc-upper">Tissue-Tek Prisma® E2D/E2S</div>
                        <div class="equipment-desc-lower">
                            <div class="lower-text">자동 슬라이드 염색기</div>
                        </div>
                    </div>
                    <div class="equipment-img-wrapper">
                        <img src="../imgs/equipments/Tissue-Tek-Prisma®-E2D:E2S.png" alt="" class="equipment-img"/>
                    </div>
                </div>
                <div data-aos="fade-up" class="equipment-content">
                    <div class="equipment-desc">
                        <div class="equipment-desc-upper">Histo-Tek® SRMII</div>
                        <div class="equipment-desc-lower">
                            <div class="lower-text">조직 블럭 박절기</div>
                        </div>
                    </div>
                    <div class="equipment-img-wrapper">
                        <img src="../imgs/equipments/Histo-Tek®-SRMII.png" alt="" class="equipment-img"/>
                    </div>
                </div>
                <div data-aos="fade-up" class="equipment-content">
                    <div class="equipment-desc">
                        <div class="equipment-desc-upper">올림푸스 현미경 (BX41)</div>
                        <div class="equipment-desc-lower">
                            <div class="lower-text">screening</div>
                        </div>
                    </div>
                    <div class="equipment-img-wrapper">
                        <img src="../imgs/equipments/microscope(BX41).png" alt="" class="equipment-img"/>
                    </div>
                </div>
                <div data-aos="fade-up" class="equipment-content">
                    <div class="equipment-desc">
                        <div class="equipment-desc-upper">올림푸스 현미경 (BX51)</div>
                        <div class="equipment-desc-lower">
                            <div class="lower-text">screening, micropicture</div>
                        </div>
                    </div>
                    <div class="equipment-img-wrapper">
                        <img src="../imgs/equipments/microscope(BX51).png" alt="" class="equipment-img"/>
                    </div>
                </div>
                <div data-aos="fade-up" class="equipment-content">
                    <div class="equipment-desc">
                        <div class="equipment-desc-upper">올림푸스 현미경 (BX53)</div>
                        <div class="equipment-desc-lower">
                            <div class="lower-text">screening, micropicture</div>
                        </div>
                    </div>
                    <div class="equipment-img-wrapper">
                        <img src="../imgs/equipments/microscope(BX53).png" alt="" class="equipment-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default Pathology