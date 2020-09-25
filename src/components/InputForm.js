import React from 'react'
import './css/InputForm.scss'

const InputForm = () => {
    return(
        <div className="forms-wrapper">
            <div className="forms login">
                <div className="forms-sticky">
                    <div className="forms-title">검사결과조회</div>
                    <div className="input-wrapper">
                        <a href="http://61.252.130.67:200/" className="input-btn">SEARCH</a>
                    </div>
                </div>
            </div>
            <div className="forms search">
                <div className="forms-sticky">
                    <div className="forms-title">검사항목조회</div>
                    <div className="input-wrapper">
                        <input type="text" className="input" placeholder="검사명"/>
                        <div className="input-btn">SEARCH</div>
                    </div>
                </div>
            </div>
            <div className="forms-btn-wrapper">
                <a href="https://939.co.kr/swcl/" className="forms-btn forms-btn__gray">
                    <img src="imgs/icons/icon-gear.svg" alt="" className="forms-btn-icon"/>
                    <div className="forms-btn-text">원격지원</div>
                </a>
                <div className="forms-btn forms-btn__blue">
                    <img src="imgs/icons/icon-download.svg" alt="" className="forms-btn-icon"/>
                    <div className="forms-btn-text light">양식다운로드</div>
                </div>
            </div>
        </div>
    )
}

export default InputForm