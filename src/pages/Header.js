import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className="header">
            <img src="/imgs/img/header-top.svg" alt="" className="header-oval"/>
            <div className="header-contents">
                <div className="contents-left">
                    <div className="content-wrapper">
                        <Link to="/foundation" className="content">재단안내</Link>
                    </div>
                    <div className="content-wrapper">
                        <Link to="/introduction" className="content">검사안내</Link>
                    </div>
                    <div className="content-wrapper">
                        <Link to="/center" className="content">검사센터</Link>
                    </div>
                    <div className="content-wrapper content__last">
                        <Link to="/service" className="content">고객서비스</Link>
                    </div>
                </div>
                <div className="contents-right">
                    <Link to="/"><img src="/imgs/img/logo.png" alt="" className="header-logo"/></Link>
                </div>
            </div>
        </div>
    )
}

export default Header