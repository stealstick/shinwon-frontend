import React, { useState } from 'react'
import './css/InputForm.scss'
import { Link } from 'react-router-dom'

const InputForm = () => {

    const [ testName, setTestName ] = useState("")

    const onChange = (e) => {
        const { value } = e.target
        setTestName(value)
    }

    return(
        <div className="forms-wrapper">
            <div className="forms login">
                <div className="forms-sticky">
                    <div className="forms-title">검사결과조회</div>
                    <div className="input-wrapper">
                        <a target="blank" href="http://61.252.130.67:200/" className="input-btn">SEARCH</a>
                    </div>
                </div>
            </div>
            <div className="forms search">
                <div className="forms-sticky">
                    <div className="forms-title">검사항목조회</div>
                    <div className="input-wrapper">
                        <input type="text" className="input" onChange={onChange} value={testName} placeholder="검사명"/>
                        <Link to={`/introduction/8/?name=${testName}`} className="input-btn">SEARCH</Link>
                    </div>
                </div>
            </div>
            <div className="forms-btn-wrapper forms-btn-wrapper-border">
                <a target="blank" href="https://939.co.kr/swcl/" className="forms-btn forms-border-right forms-btn__gray">
                    <img src={require("./css/icon-gear.svg")} alt="" className="forms-btn-icon"/>
                    <div className="forms-btn-text">원격지원</div>
                </a>
                <Link to="/service/2" className="forms-btn forms-btn__gray">
                    <img src={require("./css/icon-download.svg")} alt="" className="forms-btn-icon"/>
                    <div className="forms-btn-text">양식다운로드</div>
                </Link>
            </div>
            <div className="forms-btn-wrapper">
                <Link to="/service/1" className="forms-btn forms-border-right forms-btn__gray">
                    <img src={require("./css/new.svg")} alt="" className="forms-btn-icon"/>
                    <div className="forms-btn-text">공문</div>
                </Link>
                <a target="blank" href="https://blog.naver.com/junchae42" className="forms-btn forms-btn__gray">
                    <img src={require("./css/blog.svg")} alt="" className="forms-btn-icon"/>
                    <div className="forms-btn-text">블로그</div>
                </a>
            </div>
            
        </div>
    )
}

export default InputForm