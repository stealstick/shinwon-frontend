import React from 'react'
import './css/InputForm.scss'

const InputForm = () => {
    return(
        <div className="forms-wrapper">
            <div className="forms login">
                <div className="forms-sticky">
                    <div className="forms-title">검사결과조회</div>
                    <div className="input-wrapper">
                        <div className="input-sticky">
                            <input type="text" className="input" placeholder="아이디"/>
                            <input type="text" className="input input__last" placeholder="비밀번호"/>
                        </div>
                        <div className="input-btn">LOGIN</div>
                    </div>
                    <div className="forms-footer">
                        <input type="checkbox" className="checkbox"/>
                        <div className="forms-footer-text">아이디저장</div>
                        <div className="forms-footer-text forms-footer-text__last">아이디/비밀번호 찾기</div>
                    </div>
                </div>
            </div>
            <div className="forms search">
                <div className="forms-sticky">
                    <div className="forms-title">검사항목조회</div>
                    <div className="input-wrapper">
                        <div className="input-sticky">
                            <input type="text" className="input" placeholder="검사명"/>
                            <input type="text" className="input input__last" placeholder="검색어"/>
                        </div>
                        <div className="input-btn">SEARCH</div>
                    </div>
                </div>
            </div>
            <div className="forms-btn-wrapper">
                <div className="forms-btn forms-btn__gray">
                    <img src="imgs/icons/icon-gear.svg" alt="" className="forms-btn-icon"/>
                    <div className="forms-btn-text">원격지원</div>
                </div>
                <div className="forms-btn forms-btn__blue">
                    <img src="imgs/icons/icon-download.svg" alt="" className="forms-btn-icon"/>
                    <div className="forms-btn-text light">양식다운로드</div>
                </div>
            </div>
        </div>
    )
}

export default InputForm