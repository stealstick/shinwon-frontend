import React from 'react'
import Layout from './Layout'
import styles from '../css/Personal.module.css'

const Personal = () => {
    return(
        <Layout>
            <div className={styles.container}>
                <div className={styles.sticky_container}>
                    <div className={styles.title}>개인정보 취급방침</div>
                    <div className={styles.text}>'의료법인 신원의료재단'은 (이하 "본원" 이라함)은 귀하의 개인정보보호를 중요시하며, 『정보통신망이용촉진및정보보호등에관한법률』 및 『개인정보보호법』 을 준수하고 있습니다. 본원은 개인정보취급방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.</div>
                    <div className={styles.subtitle}>개인정보 취급방침의 순서는 다음과 같습니다.</div>
                    <div className={styles.text}>1. 수집하는 개인정보의 항목 및 수집방법</div><br/>
                    <div className={styles.text}>2. 개인정보의 수집 및 이용목적</div><br/>
                    <div className={styles.text}>3. 개인정보 제공 및 공유</div><br/>
                    <div className={styles.text}>4. 수집한 개인정보의 취급위탁</div><br/>
                    <div className={styles.text}>5. 개인정보의 보유 및 이용기간</div><br/>
                    <div className={styles.text}>6. 개인정보의 파기절차 및 그 방법적</div><br/>
                    <div className={styles.text}>7. 동의철회 방법</div><br/>
                    <div className={styles.text}>8. 개인정보 자동 수집 장치의 설치/운영 및 그 거부에 관한 사항탁</div><br/>
                    <div className={styles.text}>9. 개인정보관리책임자</div><br/>
                    <div className={styles.text}>10. 정책 변경에 따른 공지의무</div><br/>
                    <div className={styles.text}>11. 기타</div>
                    <div className={styles.subtitle}>1. 수집하는 개인정보의 항목 및 수집방법</div>
                    <div className={styles.text}>본원은 의료기관에서 위탁받은 검사를 시행하여 검사결과를 제공하기 위해 필요한 최소한의 개인정보만을 수집합니다.</div>
                    <div className={styles.text}>1.1 개인정보 항목</div><br/>
                    <div className={styles.text}>

[위탁검사시 수집항목]<br/>
- 필수항목 : 성명, 주민등록번호, 외국인등록번호(외국인에 한함), 성별(외국인에 한함), 생년월일(외국인에 한함), 사업자번호<br/>
- 선택항목 : 전화번호,주소,휴대폰번호, 이메일
서비스 이용 과정이나 서비스 제공 업무 처리 과정에서 다음과 같은 정보들이 자동으로 생성되어 수집될 수 있습니다:(서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보)<br/>
* 그 외 특정 목적을 위해 단기적으로 개인정보를 수집할 경우에는 별도로 공지하고 수집합니다.</div><br/>
                    <div className={styles.text}>1.2 개인정보 수집방법</div><br/>
                    <div className={styles.text}>다음과 같은 방법으로 개인정보를 수집합니다. 서면양식, 팩스, 전화, 이메일</div>
                    <div className={styles.subtitle}>2. 개인정보의 수집목적 및 이용목적</div>
                    <div className={styles.text}>본원은 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br/><br/>

① 검사, 접수, 결과조회 서비스 이용에 따른 본인 확인 절차에 이용<br/>
② 고지사항 전달, 불만처리 등을 위한 원활한 의사소통 경로의 확보, 새로운 서비스 및 행사정보 등의 안내<br/>
③ 차별화 된 의료 콘텐츠 제공<br/>
④ 증명서 발송 등 물품 배송<br/>
⑤ 검사, 진단 및 치료를 위한 진료서비스와 청구, 수납 및 환급 등의 원무서비스 제공<br/>
⑥ 외주 수탁검사 및 임상시험심사를 위한 기초자료<br/>
⑦ 서, 제증명서, 검건진 및 검사관련 물품 발송<br/>
⑧ 소비자 기본법 제 52조에 의거한 소비자를 위한 정보 수집</div>
                    <div className={styles.subtitle}>3. 개인정보 제공 및 공유</div>
                    <div className={styles.text}>
                    본원은 귀하의 동의가 있거나 관련법령의 규정에 의한 경우를 제외하고는 어떠한 경우에도 『개인정보의 수집 및 이용목적』에서 고지한 범위를 넘어 귀하의 개인정보를 이용하거나 타인 또는 타기업·기관에 제공<br/>
다만, 아래의 경우에는 예외로 합니다.<br/><br/>

① 이용자들이 사전에 공개에 동의한 경우<br/>
② 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우<br/>
③ 통계작성ㆍ학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 가공하여 제공하는 경우<br/><br/>

본원은 귀하에게 보다 더 나은 서비스를 제공하기 위하여 개인정보를 본원의 가족사에게 제공하거나 가족사 등과 공유할 수 있습니다. 개인정보를 제공하거나 공유할 경우에는 사전에 귀하께 가족사 등이 누구인지, 제공 또는 공유되는 개인정보항목이 무엇인지, 왜 그러한 개인정보가 제공되거나 공유되어야 하는지, 언제까지 어떻게 보호, 관리되는지에 대해 개별적으로 고지하여 동의를 구하는 절차를 거치게 되며, 귀하께서 동의하지 않는 경우에는 가족사 등에게 제공하거나 가족사 등과 공유하지 않습니다. 또한 귀하가 일단 개인정보의 제공에 동의하더라도 언제든지 그 동의를 철회할 수 있습니다.
                    </div>
                    <div className={styles.subtitle}>4. 수집한 개인정보 취급위탁</div>
                    <div className={styles.text}>
                    본원은 검사 및 진료 업무의 개인정보를 위탁하고 있으며, 계약서 및 검사의뢰서, 전산 Interface, Homepage, 결과지 등에 관계 법령에 따라 위탁계약 시 개인정보가 안전하게 관리될수 있도록 필요한 사항을 규정<br/>
본원의 위탁업체 및 위탁업무의 내용은 하기와 같습니다.<br/><br/>

- 위탁업체명, 위탁업무, 위택개인정보 등 기재
                    </div>
                    <div className={styles.subtitle}>5. 개인정보 보유 및 이용기간</div>
                    <div className={styles.text}>본원은 개인정보의 수집목적 도는 제공받은 목적이 달성된 때에는 귀하의 개인정보를 지체 없이 파기합니다.<br/>
검사 정보 제공을 위하여 수집한 경우 : 의료법에 명시된 진료기록 보관 기준에 준하여 보관한다.<br/>
다만, 수집목적 또는 제공받은 목적이 달성된 경우에도 상법 등 법령의 규정에 의하여 보존할 필요성이 있는 경우에는 귀하의 개인정보를 보유할 수 있습니다.</div>
                    <div className={styles.subtitle}>6. 개인정보의 파기절차 및 그 방법</div>
                    <div className={styles.text}>본원은 『개인정보의 수집 및 이용목적』이 달성된 후에는 개인정보를 즉시 파기합니다. 파기절차 및 방법은 다음과 같습니다.<br/><br/>

6.1 [파기절차]<br/>
이용자가 입력한 정보는 목적이 달성된 후 파기방법에 의하여 즉시 파기합니다.<br/>
개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.<br/><br/>

6.2 [파기방법]<br/>
전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.<br/>
종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</div>
                    <div className={styles.subtitle}>7. 동의철회, 회원탈퇴 방법</div>
                    <div className={styles.text}>본원에 해당하는 사항이 없습니다.</div>
                    <div className={styles.subtitle}>8. 개인정보 자동 수집 장치의 설치 / 운영 및 그 거부에 관한 사항</div>
                    <div className={styles.text}>본원은 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)'를 운용합니다. 쿠키란 병원의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다.<br/>
본원은 다음과 같은 목적을 위해 쿠키를 사용합니다.<br/>
귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. 귀하께서 쿠키 설치를 거부하셨을 경우 일부 서비스 제공에 어려움이 있습니다.</div>
                    <div className={styles.subtitle}>9. 개인정보관리책임자</div>
                    <div className={styles.text}>
                    귀하의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 본원은 아래와 같이 개인정보관리책임자를 두고 있습니다.<br/><br/>

- 개인정보관리책임자 : 전산실 차장 장기주  <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;연락처 : 1899-1510(내선 500)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;메일주소 : admin@shinwon.org<br/><br/>

• 귀하께서는 본원의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다.<br/>
본원은 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다. 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.<br/>

                    </div>
                    <a className={styles.link} href="http://www.1336.or.kr" target="blank">- 개인분쟁조정위원회 (http://www.1336.or.kr / 1336)</a>
                    <a className={styles.link} href="http://www.eprivacy.or.kr" target="blank">- 정보보호마크인증위원회 (http://www.eprivacy.or.kr / (02) 580-0533~4)</a>
                    <a className={styles.link} href="http://www.spo.go.kr" target="blank">- 대검찰청 첨단범죄수사과 (http://www.spo.go.kr / (02) 3480-2000)</a>
                    <a className={styles.link} href="http://www.ctrc.go.kr" target="blank">- 경찰청 사이버테러대응센터 (http://www.ctrc.go.kr / (02) 392-0330)</a>
                    <div className={styles.subtitle}>10. 방침변경에 따른 공지의무</div>
                    <div className={styles.text}>이 개인정보취급방침은 2003년 4월 1일에 제정되었으며 법령ㆍ정책 또는 보안기술의 변경에 따라 내용의 추가ㆍ삭제 및 수정이 있을 시에는 변경되는 개인정보취급방침을 시행하기 최소 7일전에 본원 홈페이지를 통해 변경이유 및 내용 등을 공지하도록 하겠습니다.<br/><br/>

공고일자: 2020년 5월 11일<br/>
시행일자: 2020년 5월 7일</div>
                    <div className={styles.subtitle}>11. 기타</div>
                    <div className={styles.text}>본원이 운영하는 여러 웹페이지를 포함한 링크 또는 배너를 클릭하여 다른 사이트 또는 웹페이지로 옮겨갈 경우 개인정보보호방침은 그 사이트 운영기관이 게시한 방침이 적용되므로 새로 방문한 사이트의 방침을 확인하시기 바랍니다.</div>
                </div>
            </div>
        </Layout>
    )
}

export default Personal