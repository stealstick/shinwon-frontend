import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalContent from '../components/ModalContent'

function Header(){

    const [ showContent, setShowContent ] = useState(false)
    const [ num, setNum ] = useState(0)

    const setModalOff = () => {
        setShowContent(false)
    }

    const setModalOn = () => {
        setShowContent(true)
        setTimeout(() => {
            console.log(showContent)
        }, 0)
    }

    const setBorderBottom = (num) => {
        setNum(num)
    }

    return(
        <div className="header">
            {showContent===false ? null : <ModalContent setModalOff={setModalOff}/>}
            <img src="/imgs/img/header-top.svg" alt="" className="header-oval"/>
            <div className="header-contents">
                <div className="contents-none">
                    <img src="../imgs/img/menu.svg" alt="" className="icon" onClick={(setModalOn)}/>
                </div>
                <div className="contents-left">
                    <div className="content-wrapper menu1" style={num===1 ? {borderBottom: "5px solid #00284b"} : null}>
                        <Link to="/foundation/1" className="content">재단안내</Link>
                    </div>
                    <div className="content-wrapper  menu2" style={num===2 ? {borderBottom: "5px solid #00284b"} : null}>
                        <Link to="/introduction/1" className="content">검사안내</Link>
                    </div>
                    <div className="content-wrapper  menu3" style={num===3 ? {borderBottom: "5px solid #00284b"} : null}>
                        <Link to="/center/1" className="content">검사실안내</Link>
                    </div>
                    <div className="content-wrapper  menu4" style={num===4 ? {borderBottom: "5px solid #00284b"} : null}>
                        <Link to="/service/1" className="content" >고객서비스</Link>
                    </div>
                    <div className="content-wrapper menu5" style={num===5 ? {borderBottom: "5px solid #00284b"} : null}>
                        <Link to="/" className="content">R&D</Link>
                    </div>
                    <div className="header-hover-content">
                        <div className="hover-sticky">
                        <div className="hover-content-left">
                            <div className="header-content-shown foundation" onMouseOver={() => setBorderBottom(1)} onMouseLeave={() => setBorderBottom(0)}>
                                <Link to="/foundation/1" className="header-shown-text">인사말</Link>
                                <Link to="/foundation/2" className="header-shown-text">사명과 가치</Link>
                                <Link to="/foundation/3" className="header-shown-text">재단연혁</Link>
                                <Link to="/foundation/4" className="header-shown-text">조직도</Link>
                                <Link to="/foundation/5" className="header-shown-text">전국 네트워크</Link>
                                <Link to="/foundation/6" className="header-shown-text">전문의</Link>
                                <Link to="/foundation/7" className="header-shown-text">오시는길</Link>
                            </div>
                            <div className="header-content-shown introduction hover2" onMouseOver={() => setBorderBottom(2)} onMouseLeave={() => setBorderBottom(0)}>
                                <Link to="/introduction/1" className="header-shown-text">검사절차</Link>
                                <Link to="/introduction/2" className="header-shown-text">검체취급</Link>
                                <Link to="/introduction/3" className="header-shown-text">검사종류</Link>
                                <Link to="/introduction/4" className="header-shown-text">종합검사프로파일</Link>
                                <Link to="/introduction/5" className="header-shown-text">산전관리검사</Link>
                                <Link to="/introduction/6" className="header-shown-text">질환별검사</Link>
                                <Link to="/introduction/7" className="header-shown-text">결과확인방법</Link>
                                <Link to="/introduction/8" className="header-shown-text">검사항목조회</Link>
                            </div>
                            <div className="header-content-shown center hover3" onMouseOver={() => setBorderBottom(3)} onMouseLeave={() => setBorderBottom(0)}>
                                <Link to="/center/1" className="header-shown-text">진단검사의학부</Link>
                                <Link to="/center/2" className="header-shown-text">병리학부</Link>
                                <Link to="/center/3" className="header-shown-text">정도관리</Link>
                                <Link to="/center/4" className="header-shown-text">인증서</Link>
                            </div>
                            <div className="header-content-shown service hover4" onMouseOver={() => setBorderBottom(4)} onMouseLeave={() => setBorderBottom(0)}>
                                <Link to="/service/1" className="header-shown-text">공문</Link>
                                <Link to="/service/2" className="header-shown-text">의뢰지/동의서</Link>
                                <Link to="/service/3" className="header-shown-text">감염지침</Link>
                                <Link to="/service/4" className="header-shown-text">FAQ</Link>
                                <Link to="/service/6" className="header-shown-text">채용공고</Link>
                            </div>
                            <div className="header-content-shown rnd hover5" onMouseOver={() => setBorderBottom(5)} onMouseLeave={() => setBorderBottom(0)}></div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="contents-right">
                    <Link className="header-logo-sticky" to="/"><img src="/imgs/img/logo.png" alt="" className="header-logo"/></Link>
                </div>
            </div>
        </div>
    )
}

export default Header