import React from 'react'

function Footer(){
    return(
        <div className="footer">
            <div className="footer-sticky">
                <div className="footer-left">
                    <div className="footer-text-wrapper">
                        <div className="footer-text-sticky">
                            <div className="footer-text">경기도 광명시 소하로 109번길 13-8</div>
                            <div className="footer-text">대표전화 : 1899-1510</div>
                            <div className="copyright">COPYRIGHT 2020 BY Shinwon medical foundation ALL RIGHT RESERVED</div>
                        </div>
                    
                    </div>
                    <div className="footer-bottom-wrapper">
                        <div className="footer-bottom-text">개인정보취급방침</div>
                        <div className="footer-bottom-text">위치안내</div>
                        <div className="footer-bottom-text">사이트맵</div>
                    
                    </div>
                </div>
                <div className="footer-right">
                    <img src="/imgs/img/footer-logo.png" alt="" className="footer-logo"/>
                </div>
                
            </div>
        </div>
    )
}

export default Footer