import React, { useState } from 'react'
import './css/ModalContent.css'
import MainForm from '../pages/main/components/MainForm'
import { Link } from 'react-router-dom'

const ModalContent = ({setModalOff}) => {

    const [ showContent, setShowContent ] = useState(0)

    return(
        <div className="modal-container">
            
            <div className="modal-sticky-container">
                <div className="modal-top-icon">
                    <img src="../imgs/icons/ic-x.svg" alt="" className="modal-x-icon" onClick={setModalOff}/>
                </div>
                <MainForm/>
                <div className="modal-contents-wrapper">
                    <div className="modal-content-wrapper">
                        <Link onClick={setModalOff} to="/foundation/1" className="modal-content-title">재단안내</Link>
                        <div className="modal-content-icon">
                            <img src="../imgs/icons/down-icon.svg" alt="" onClick={showContent===1 ? () => setShowContent(0) : () => setShowContent(1)} className="down-icon"/>
                        </div>
                    </div>
                    {showContent===1 ? 
                    <div className="hiddencontent-wrapper a-f">
                        <Link onClick={setModalOff} to="/foundation/1" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">인사말</div>
                        </Link>
                        <Link onClick={setModalOff} to="/foundation/2" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">사명과가치</div>
                        </Link>
                        <Link onClick={setModalOff} to="/foundation/3" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">조직도</div>
                        </Link>
                        <Link onClick={setModalOff} to="/foundation/4" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">재단연혁</div>
                        </Link>
                        <Link onClick={setModalOff} to="/foundation/5" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">전국네트워크</div>
                        </Link>
                        <Link onClick={setModalOff} to="/foundation/6" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">전문의</div>
                        </Link>
                    </div> 
                    : null}
                    <div className="modal-content-wrapper">
                        <Link onClick={setModalOff} to="/introduction/1" className="modal-content-title">검사안내</Link>
                        <div className="modal-content-icon">
                            <img src="../imgs/icons/down-icon.svg" alt="" onClick={showContent===2 ? () => setShowContent(0) : () => setShowContent(2)} className="down-icon"/>
                        </div>
                    </div>
                    {showContent===2 ?
                    <div className="hiddencontent-wrapper a-s">
                        <Link onClick={setModalOff} to="/introduction/1" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">검사절차</div>
                        </Link>
                        <Link onClick={setModalOff} to="/introduction/2" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">검체취급</div>
                        </Link>
                        <Link onClick={setModalOff} to="/introduction/3" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">검사종류</div>
                        </Link>
                        <Link onClick={setModalOff} to="/introduction/4" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">종합검사프로필</div>
                        </Link>
                        <Link onClick={setModalOff} to="/introduction/5" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">산전관리검사</div>
                        </Link>
                        <Link onClick={setModalOff} to="/introduction/6" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">질환별검사</div>
                        </Link>
                        <Link onClick={setModalOff} to="/introduction/7" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">결과확인방법</div>
                        </Link>
                    </div> 
                    : null}
                    <div className="modal-content-wrapper">
                        <Link onClick={setModalOff} to="/center/1" className="modal-content-title">검사센터</Link>
                        <div className="modal-content-icon">
                            <img src="../imgs/icons/down-icon.svg" alt="" onClick={showContent===3 ? () => setShowContent(0) : () => setShowContent(3)} className="down-icon"/>
                        </div>
                    </div>
                    {showContent===3 ? 
                    <div className="hiddencontent-wrapper a-t">
                        <Link onClick={setModalOff} to="/center/1" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">부서별안내</div>
                        </Link>
                        <Link onClick={setModalOff} to="/center/2" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">병리과안내</div>
                        </Link>
                        <Link onClick={setModalOff} to="/center/3" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">정도관리</div>
                        </Link>
                    </div> 
                    : null}
                    <div className="modal-content-wrapper">
                        <Link onClick={setModalOff} to="service/1" className="modal-content-title">고객서비스</Link>
                        <div className="modal-content-icon">
                            <img src="../imgs/icons/down-icon.svg" alt="" onClick={showContent===4 ? () => setShowContent(0) : () => setShowContent(4)} className="down-icon"/>
                        </div>
                    </div>
                    {showContent===4 ?
                    <div className="hiddencontent-wrapper a-f2">
                        <Link onClick={setModalOff} to="/service/1" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">공문</div>
                        </Link>
                        <Link onClick={setModalOff} to="/service/2" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">자료실</div>
                        </Link>
                        <Link onClick={setModalOff} to="/service/3" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">감염지침</div>
                        </Link>
                        <Link onClick={setModalOff} to="/service/4" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">FAQ</div>
                        </Link>
                        <Link onClick={setModalOff} to="/service/5" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">오시는길</div>
                        </Link>
                        <Link onClick={setModalOff} to="/service/6" className="hiddencontent-sticky">
                            <div className="hiddencontent-title">채용정보</div>
                        </Link>
                    </div> 
                    : null}
                </div>
            </div>
            <div className="modal-opacity" onClick={setModalOff}></div>
        </div>
        
    )
}

export default ModalContent