import React from 'react'

function Footer(){
    return(
        <div className="footer">
            <div className="footer-sticky">
                <div className="footer-text-wrapper">
                    <div className="footer-text">경기도 광명시 소하동 소하로 109번길 13-8</div>
                    <div className="footer-text">대표전화 : 1899-0510 학술지원 : 02-801-5170/2 전산지원 : 02-801-5150/2</div>
                    <div className="footer-bottom-wrapper">
                        <div className="footer-bottom-text">개인정보취급방침</div>
                        <div className="footer-bottom-text">위치안내</div>
                        <div className="footer-bottom-text">사이트맵</div>
                        <div className="copyright">COPYRIGHT 2020 BY Shinwon medical foundation ALL RIGHT RESERVED</div>
                    </div>
                </div>
                <img src="/imgs/img/logo.png" alt="" className="footer-logo"/>
            </div>
        </div>
    )
}

export default Footer