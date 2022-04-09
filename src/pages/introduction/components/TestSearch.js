import React, { useState, useEffect } from 'react'
import styles from './css/TestSearch.module.scss'
import SectionTitle from '../../../components/SectionTitle'
import axios from 'axios'
import queryString from 'query-string'
import printJS from 'print-js'
import html2canvas from 'html2canvas'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { searchAtom } from '../../../store'

const TestSearch = ({props}) => {

    const [ input, setInput ] = useRecoilState(searchAtom)
    const [ testing, setTesting ] = useState(null)
    const [ isSearchDetail, setIsSearchDetail ] = useState(false)
    const [ detailData, setDetailData ] = useState({})
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ count, setCount ] = useState(0)

    const pageNumber = []
    for(let i=1; i<=count; i++){
        pageNumber.push(i)
    }

    const history = useHistory()
    

    const PageNumContent = ({num}) => {
        return(
            <span className={num===currentPage ? styles.pagenum_selected : styles.pagenum_wrapper} onClick={() => paginate(num)}>
                <div className={styles.pagenum}>{num}</div>
            </span>
        )
    }

    const pageNumberList = pageNumber.filter(num => {
        if(currentPage>=10){
            return currentPage-8<=num && num<=currentPage+1
        } else {
            return num<=10
        }
    }).map(num => (
        <PageNumContent
            key={num}
            num={num}
        />
    ))

    const paginate = (number) => {
        setCurrentPage(number)
    }

    const { name, code1, code2 } = input

    const onChange = (e) => {
        const { name, value } = e.target
        if(name==='code2'){
            if(/^\d*\.?\d*$/.test(value)){
                setInput({
                    ...input,
                    [name]: value
                })
            }
        } else {
            setInput({
                ...input,
                [name]: value
            })
        }
    }

    const onKeyPress = (e) => {
        if(e.key==='Enter'){
            history.push(`/introduction/8/?data1=${name}&data17=${code1}&ord_cd=${code2}`)
        }
    } 

    const changeScreen = (data) => {
        setIsSearchDetail(true)
        setDetailData(data)
    }

    function numberPad(n, width) {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
    }

    const TestingContent = (data) => {
        return(
            <div className={styles.testingcontent_wrapper} onClick={() => changeScreen(data)}>
                <div className={styles.testingcontent_ord_cd}>{numberPad(data.ord_cd, 5)}</div>
                <div className={styles.testingcontent_data1}>{data.data1}</div>
                <div className={styles.testingcontent_data10}>{data.data10}</div>
                <div className={styles.testingcontent_data13}>{data.data13}</div>
                <div className={styles.testingcontent_data11}>{data.data11}</div>
                <div className={styles.testingcontent_data17}>{data.data17}</div>
                <div className={styles.testingcontent_data14}>{data.data14}</div>
            </div>
        )
    }

    const PrintTest = () => {
        printJS('print', 'html')
    }

    useEffect(() => {
        setInput({
            name: !props ? "" : queryString.parse(props).data1,
            code1: !props ? "" : queryString.parse(props).data17,
            code2: !props ? "" : queryString.parse(props).ord_cd
        })
        var ord_cd = code2
        axios.get(`https://api.shinwon.org/testing/search_testing/?data1=${name}&data17=${code1}&ord_cd=${ord_cd}&page=${currentPage}`)
        .then(res => {
            setTesting(res.data['data'].filter(el => String(el.ord_cd).indexOf(String(code2))!==-1))
            setCount(res.data['count'])
        })
        .catch(err => {
            console.log(err)
        })
    }, [props, currentPage])

    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <SectionTitle kor="검사항목조회" eng="TEST LIST SEARCH"/>
                <div className={styles.list_title}>자동분석검사를 대폭 증강 실시하여 검사 정밀도를 한차원 높여 질 좋은 진료를 위하여 앞장서고 있습니다.<br/>현재 적용된 수가는 2022년 수가입니다.</div>
                {isSearchDetail ? 
                <div className={styles.detail_wrapper} >
                    <div className={styles.detail_title}>상세보기</div>
                    <div id="print">
                    <div className={styles.detail_table}>
                        <div className={styles.detail_table_long}>
                            <div className={styles.table_title}>검사명</div>
                            <div className={styles.table_content}>{detailData.data1}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>검사코드</div>
                            <div className={styles.table_content}>{numberPad(detailData.ord_cd, 5)}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>검체명</div>
                            <div className={styles.table_content}>{detailData.data3}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>검사단위</div>
                            <div className={styles.table_content}>{detailData.data9}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>검체량</div>
                            <div className={styles.table_content}>{detailData.data10}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>보존방법</div>
                            <div className={styles.table_content}>{detailData.data11}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>검사요일</div>
                            <div className={styles.table_content}>{detailData.data12}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>검사방법</div>
                            <div className={styles.table_content}>{detailData.data13}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>검사 소요일</div>
                            <div className={styles.table_content}>{detailData.data14}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>보험분류</div>
                            <div className={styles.table_content}>{detailData.data15}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>비급여 코드</div>
                            <div className={styles.table_content}>{detailData.data16}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>보험코드</div>
                            <div className={styles.table_content}>{detailData.data17}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>급여비용</div>
                            <div className={styles.table_content}>{detailData.data18}</div>
                        </div>
                        <div className={styles.detail_table_long} style={{height: "70px"}}>
                            <div className={styles.table_title}>참고치</div>
                            <div className={styles.table_content}>{detailData.data19}</div>
                        </div>
                        <div className={styles.detail_table_long_warn} style={{height: "120px"}}>
                            <div className={styles.table_title}>주의사항</div>
                            <div className={styles.table_content}>{detailData.data20}</div>
                        </div>
                        <div className={styles.detail_table_long_warn}>
                            <div className={styles.table_title}>비고</div>
                            <div className={styles.table_content}>{detailData.data22}</div>
                        </div>
                    </div>
                    <div className={styles.detail_table2}>
                        <div className={styles.table2_top_title}>{detailData.data5}</div>
                        <div className={styles.table2_wrapper}>
                            <div className={styles.table2_img_wrapper}>
                                {detailData.data24 ? 
                                <img crossOrigin="anonymous" src={`https://api.shinwon.org/media/TestingTable/${detailData.data24}`} alt="" className={styles.table2_img}/>
                                : 
                                <div className={styles.table2_img}/>
                                }
                                
                            </div>
                            <div className={styles.table2_sticky}>
                                <div className={styles.table2_row}>
                                    <div className={styles.table2_title}>첨가제</div>
                                    <div className={styles.table2_content}>{detailData.data4}</div>
                                </div>
                                <div className={styles.table2_row}>
                                    <div className={styles.table2_title}>해당검사</div>
                                    <div className={styles.table2_content}>{detailData.data5}</div>
                                </div>
                                <div className={styles.table2_row}>
                                    <div className={styles.table2_title}>검체량</div>
                                    <div className={styles.table2_content}>{detailData.data6}</div>
                                </div>
                                <div className={styles.table2_row}>
                                    <div className={styles.table2_title}>보존</div>
                                    <div className={styles.table2_content}>{detailData.data7}</div>
                                </div>
                                <div className={styles.table2_row}>
                                    <div className={styles.table2_title}>참고사항</div>
                                    <div className={styles.table2_content}>{detailData.data8}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={styles.button_wrapper}>
                        <div className={styles.button} onClick={() => setIsSearchDetail(false)}>목록으로</div>
                        <div className={styles.button} onClick={() => PrintTest()}>
                            <img src="../imgs/img/printer.svg" alt=""/>인쇄하기
                        </div>
                    </div>
                </div>
                :
                <>
                <div className={styles.search_wrapper}>
                    <div className={styles.search_title}>검색어를 입력 후 조회버튼을 눌러주세요.</div>
                    <div className={styles.search_row}>
                        <div className={styles.search_row_name}>검사명</div>
                        <input className={styles.search_row_input} placeholder="검사명 입력" onKeyPress={onKeyPress} value={name} onChange={onChange} name="name"/>
                        <div className={name==="" ? styles.search_row_button : styles.search_row_button + " " + styles.active} onClick={() => history.push(`/introduction/8/?data1=${name}&data17=${code1}&ord_cd=${code2}`)}>조회</div>
                    </div>
                    <div className={styles.search_row}>
                        <div className={styles.search_row_name}>보험코드</div>
                        <input className={styles.search_row_input} placeholder="보험코드 입력" onKeyPress={onKeyPress} value={code1} onChange={onChange} name="code1"/>
                        <div className={code1==="" ? styles.search_row_button : styles.search_row_button + " " + styles.active} onClick={() => history.push(`/introduction/8/?data1=${name}&data17=${code1}&ord_cd=${code2}`)}>조회</div>
                    </div>
                    <div className={styles.search_row}>
                        <div className={styles.search_row_name}>검사코드</div>
                        <input className={styles.search_row_input} placeholder="검사코드 입력" onKeyPress={onKeyPress} value={code2} onChange={onChange} name="code2"/>
                        <div className={code2==="" ? styles.search_row_button : styles.search_row_button + " " + styles.active} onClick={() => history.push(`/introduction/8/?data1=${name}&data17=${code1}&ord_cd=${code2}`)}>조회</div>
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
                            <div className={styles.pagenumberlist}>
                                <div className={styles.previous} onClick={() => setCurrentPage(currentPage - 1)}/>
                                {pageNumberList}
                                <div className={styles.next} onClick={() => setCurrentPage(currentPage + 1)}/>
                            </div>
                        </>
                    }
                </div>
                </>
                }
            </div>
        </div>
    )
}

export default TestSearch

