import React from 'react'
import './css/InputForm.scss'

const InputForm = () => {
    return(
        <div class="forms-wrapper">
            <div class="forms login">
                <div class="forms-sticky">
                    <div class="forms-title">검사결과조회</div>
                    <div class="input-wrapper">
                        <div class="input-sticky">
                            <input type="text" class="input" placeholder="아이디"/>
                            <input type="text" class="input input__last" placeholder="비밀번호"/>
                        </div>
                        <div class="input-btn">LOGIN</div>
                    </div>
                    <div class="forms-footer">
                        <input type="checkbox" class="checkbox"/>
                        <div class="forms-footer-text">아이디저장</div>
                        <div class="forms-footer-text forms-footer-text__last">아이디/비밀번호 찾기</div>
                    </div>
                </div>
            </div>
            <div class="forms search">
                <div class="forms-sticky">
                    <div class="forms-title">검사항목조회</div>
                    <div class="input-wrapper">
                        <div class="input-sticky">
                            <input type="text" class="input" placeholder="검사명"/>
                            <input type="text" class="input input__last" placeholder="검색어"/>
                        </div>
                        <div class="input-btn">SEARCH</div>
                    </div>
                </div>
            </div>
            <div class="forms-btn-wrapper">
                <div class="forms-btn forms-btn__gray">
                    <img src="imgs/icons/icon-gear.svg" alt="" class="forms-btn-icon"/>
                    <div class="forms-btn-text">원격지원</div>
                </div>
                <div class="forms-btn forms-btn__blue">
                    <img src="imgs/icons/icon-download.svg" alt="" class="forms-btn-icon"/>
                    <div class="forms-btn-text light">양식다운로드</div>
                </div>
            </div>
        </div>
    )
}

export default InputForm