import React, { useState } from 'react'
import './css/InputForm.scss'
import { Link, useHistory } from 'react-router-dom'

const InputForm = () => {

    const [ input, setInput ] = useState({
        data1: "",
        data17: "",
        ord_cd: ""
    })

    const onChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const history = useHistory()

    const onKeyPress = (e) => {
        if(e.key==='Enter'){
            history.push(`/introduction/8/?data1=${data1}&data17=${data17}&ord_cd=${ord_cd}`)
        }
    }

    const { data1, data17, ord_cd } = input

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
                        <input type="text" className="input" onChange={onChange} value={data1} name="data1" onKeyPress={onKeyPress} placeholder="검사명"/>
                        <input type="text" className="input" onChange={onChange} value={data17} name="data17" onKeyPress={onKeyPress} placeholder="보험코드"/>
                        <input type="text" className="input" onChange={onChange} value={ord_cd} name="ord_cd" onKeyPress={onKeyPress} placeholder="검사코드"/>
                        <Link to={`/introduction/8/?data1=${data1}&data17=${data17}&ord_cd=${ord_cd}`} className="input-btn">SEARCH</Link>
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