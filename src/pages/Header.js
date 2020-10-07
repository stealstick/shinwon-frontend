import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalContent from '../components/ModalContent'

function Header(){

    const [ showContent, setShowContent ] = useState(false)

    const setModalOff = () => {
        setShowContent(false)
    }

    const setModalOn = () => {
        setShowContent(true)
        setTimeout(() => {
            console.log(showContent)
        }, 0)
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
                    <div className="content-wrapper">
                        <Link to="/foundation/1" className="content">재단안내</Link>
                        <div className="header-content-shown foundation menu1">
                            <Link to="/foundation/1" className="header-shown-text">인사말</Link>
                            <Link to="/foundation/2" className="header-shown-text">사명과 가치</Link>
                            <Link to="/foundation/3" className="header-shown-text">재단연혁</Link>
                            <Link to="/foundation/4" className="header-shown-text">조직도</Link>
                            <Link to="/foundation/5" className="header-shown-text">전국 네트워크</Link>
                            <Link to="/foundation/6" className="header-shown-text">전문의</Link>
                        </div>
                    </div>
                    <div className="content-wrapper">
                        <Link to="/introduction/1" className="content">검사안내</Link>
                        <div className="header-content-shown introduction menu2">
                            <Link to="/introduction/1" className="header-shown-text">검사절차</Link>
                            <Link to="/introduction/2" className="header-shown-text">검체취급</Link>
                            <Link to="/introduction/3" className="header-shown-text">검사종류</Link>
                            <Link to="/introduction/4" className="header-shown-text">종합검사프로필</Link>
                            <Link to="/introduction/5" className="header-shown-text">산전관리검사</Link>
                            <Link to="/introduction/6" className="header-shown-text">질환별검사</Link>
                            <Link to="/introduction/7" className="header-shown-text">결과확인방법</Link>
                        </div>
                    </div>
                    <div className="content-wrapper">
                        <Link to="/center/1" className="content">검사센터</Link>
                        <div className="header-content-shown center menu3">
                            <Link to="/center/1" className="header-shown-text">부서별안내</Link>
                            <Link to="/center/2" className="header-shown-text">병리과안내</Link>
                            <Link to="/center/3" className="header-shown-text">정도관리</Link>
                        </div>
                    </div>
                    <div className="content-wrapper content__last">
                        <Link to="/service/1" className="content" >고객서비스</Link>
                        <div className="header-content-shown service menu4">
                            <Link to="/service/1" className="header-shown-text">공문</Link>
                            <Link to="/service/2" className="header-shown-text">자료실</Link>
                            <Link to="/service/3" className="header-shown-text">감염지침</Link>
                            <Link to="/service/4" className="header-shown-text">FAQ</Link>
                            <Link to="/service/5" className="header-shown-text">오시는길</Link>
                            <Link to="/service/6" className="header-shown-text">채용공고</Link>
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