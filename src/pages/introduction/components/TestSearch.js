import React, { useState } from 'react'
import styles from './css/TestSearch.module.scss'
import SectionTitle from '../../../components/SectionTitle'
import axios from 'axios'

const TestSearch = () => {

    const [ input, setInput ] = useState({
        name: "",
        code1: "",
        code2: ""
    })
    const [ testing, setTesting ] = useState(null)

    const { name, code1, code2 } = input

    const onChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const searchData = () => {
        axios.get(`http://13.125.200.188:8080/testing/?data1=${name}&data17=${code1}&ord_cd=${code2}`)
        .then(res => {
            setTesting(res.data['results'])
        })
        .catch(err => {
            console.log(err)
        })
    }

    const TestingContent = ({ord_cd, data1, data10, data13, data11, data17, data14}) => {
        return(
            <div className={styles.testingcontent_wrapper}>
                <div className={styles.testingcontent_ord_cd}>{ord_cd}</div>
                <div className={styles.testingcontent_data1}>{data1}</div>
                <div className={styles.testingcontent_data10}>{data10}</div>
                <div className={styles.testingcontent_data13}>{data13}</div>
                <div className={styles.testingcontent_data11}>{data11}</div>
                <div className={styles.testingcontent_data17}>{data17}</div>
                <div className={styles.testingcontent_data14}>{data14}</div>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <SectionTitle kor="검사항목조회" eng="TEST LIST SEARCH"/>
                <div className={styles.list_title}>자동분석검사를 대폭 증강 실시하여 검사 정밀도를 한차원 높여 질 좋은 진료를 위하여 앞장서고 있습니다.</div>
                <div className={styles.search_wrapper}>
                    <div className={styles.search_title}>검색어를 입력 후 조회버튼을 눌러주세요.</div>
                    <div className={styles.search_row}>
                        <div className={styles.search_row_name}>검사명</div>
                        <input className={styles.search_row_input} placeholder="검사명 입력" value={name} onChange={onChange} name="name"/>
                        <div className={styles.search_row_button} onClick={searchData}>조회</div>
                    </div>
                    <div className={styles.search_row}>
                        <div className={styles.search_row_name}>보험코드</div>
                        <input className={styles.search_row_input} placeholder="보험코드 입력" value={code1} onChange={onChange} name="code1"/>
                        <div className={styles.search_row_button} onClick={searchData}>조회</div>
                    </div>
                    <div className={styles.search_row}>
                        <div className={styles.search_row_name}>검사코드</div>
                        <input className={styles.search_row_input} placeholder="검사코드 입력" value={code2} onChange={onChange} name="code2"/>
                        <div className={styles.search_row_button} onClick={searchData}>조회</div>
                    </div>
                </div>
                <div className={styles.result_wrapper}>
                    <div className={styles.result_title}>조회 목록</div>
                    {testing===null ? null :
                        <>
                            <div className={styles.result_top_bar}>
                                <div className={styles.result_top_bar_content}>검사코드</div>
                                <div className={styles.result_top_bar_content}>검사명</div>
                                <div className={styles.result_top_bar_content}>검체/검사량</div>
                                <div className={styles.result_top_bar_content}>검사방법</div>
                                <div className={styles.result_top_bar_content}>보존방법</div>
                                <div className={styles.result_top_bar_content}>보험코드</div>
                                <div className={styles.result_top_bar_content}>검사일/소요일</div>
                            </div>
                            {testing.map(test => (
                                <TestingContent 
                                    {...test}
                                    key={test.ord_cd}
                                />
                            ))}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default TestSearch