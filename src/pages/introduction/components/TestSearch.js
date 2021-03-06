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
        const qName = queryString.parse(props).data1
        const qCode1 = queryString.parse(props).data17
        const qCode2 = queryString.parse(props).ord_cd
        setInput({
            name: !props ? "" : qName,
            code1: !props ? "" : qCode1,
            code2: !props ? "" : qCode2
        })
        var ord_cd = code2
        axios.get(`https://api.shinwon.org/testing/search_testing/?data1=${qName}&data17=${qCode1}&ord_cd=${qCode2}&page=${currentPage}`)
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
                <SectionTitle kor="??????????????????" eng="TEST LIST SEARCH"/>
                <div className={styles.list_title}>????????????????????? ?????? ?????? ???????????? ?????? ???????????? ????????? ?????? ??? ?????? ????????? ????????? ???????????? ????????????.<br/>?????? ????????? ????????? 2022??? ???????????????.</div>
                {isSearchDetail ? 
                <div className={styles.detail_wrapper} >
                    <div className={styles.detail_title}>????????????</div>
                    <div id="print">
                    <div className={styles.detail_table}>
                        <div className={styles.detail_table_long}>
                            <div className={styles.table_title}>?????????</div>
                            <div className={styles.table_content}>{detailData.data1}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>????????????</div>
                            <div className={styles.table_content}>{numberPad(detailData.ord_cd, 5)}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>?????????</div>
                            <div className={styles.table_content}>{detailData.data3}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>????????????</div>
                            <div className={styles.table_content}>{detailData.data9}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>?????????</div>
                            <div className={styles.table_content}>{detailData.data10}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>????????????</div>
                            <div className={styles.table_content}>{detailData.data11}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>????????????</div>
                            <div className={styles.table_content}>{detailData.data12}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>????????????</div>
                            <div className={styles.table_content}>{detailData.data13}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>?????? ?????????</div>
                            <div className={styles.table_content}>{detailData.data14}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>????????????</div>
                            <div className={styles.table_content}>{detailData.data15}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>????????? ??????</div>
                            <div className={styles.table_content}>{detailData.data16}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>????????????</div>
                            <div className={styles.table_content}>{detailData.data17}</div>
                        </div>
                        <div className={styles.detail_table_short}>
                            <div className={styles.table_title}>????????????</div>
                            <div className={styles.table_content}>{detailData.data18}</div>
                        </div>
                        <div className={styles.detail_table_long} style={{height: "70px"}}>
                            <div className={styles.table_title}>?????????</div>
                            <div className={styles.table_content}>{detailData.data19}</div>
                        </div>
                        <div className={styles.detail_table_long_warn} style={{height: "120px"}}>
                            <div className={styles.table_title}>????????????</div>
                            <div className={styles.table_content}>{detailData.data20}</div>
                        </div>
                        <div className={styles.detail_table_long_warn}>
                            <div className={styles.table_title}>??????</div>
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
                                    <div className={styles.table2_title}>?????????</div>
                                    <div className={styles.table2_content}>{detailData.data4}</div>
                                </div>
                                <div className={styles.table2_row}>
                                    <div className={styles.table2_title}>????????????</div>
                                    <div className={styles.table2_content}>{detailData.data5}</div>
                                </div>
                                <div className={styles.table2_row}>
                                    <div className={styles.table2_title}>?????????</div>
                                    <div className={styles.table2_content}>{detailData.data6}</div>
                                </div>
                                <div className={styles.table2_row}>
                                    <div className={styles.table2_title}>??????</div>
                                    <div className={styles.table2_content}>{detailData.data7}</div>
                                </div>
                                <div className={styles.table2_row}>
                                    <div className={styles.table2_title}>????????????</div>
                                    <div className={styles.table2_content}>{detailData.data8}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={styles.button_wrapper}>
                        <div className={styles.button} onClick={() => setIsSearchDetail(false)}>????????????</div>
                        <div className={styles.button} onClick={() => PrintTest()}>
                            <img src="../imgs/img/printer.svg" alt=""/>????????????
                        </div>
                    </div>
                </div>
                :
                <>
                <div className={styles.search_wrapper}>
                    <div className={styles.search_title}>???????????? ?????? ??? ??????????????? ???????????????.</div>
                    <div className={styles.search_row}>
                        <div className={styles.search_row_name}>?????????</div>
                        <input className={styles.search_row_input} placeholder="????????? ??????" onKeyPress={onKeyPress} value={name} onChange={onChange} name="name"/>
                        <div className={name==="" ? styles.search_row_button : styles.search_row_button + " " + styles.active} onClick={() => history.push(`/introduction/8/?data1=${name}&data17=${code1}&ord_cd=${code2}`)}>??????</div>
                    </div>
                    <div className={styles.search_row}>
                        <div className={styles.search_row_name}>????????????</div>
                        <input className={styles.search_row_input} placeholder="???????????? ??????" onKeyPress={onKeyPress} value={code1} onChange={onChange} name="code1"/>
                        <div className={code1==="" ? styles.search_row_button : styles.search_row_button + " " + styles.active} onClick={() => history.push(`/introduction/8/?data1=${name}&data17=${code1}&ord_cd=${code2}`)}>??????</div>
                    </div>
                    <div className={styles.search_row}>
                        <div className={styles.search_row_name}>????????????</div>
                        <input className={styles.search_row_input} placeholder="???????????? ??????" onKeyPress={onKeyPress} value={code2} onChange={onChange} name="code2"/>
                        <div className={code2==="" ? styles.search_row_button : styles.search_row_button + " " + styles.active} onClick={() => history.push(`/introduction/8/?data1=${name}&data17=${code1}&ord_cd=${code2}`)}>??????</div>
                    </div>
                </div>
                <div className={styles.result_wrapper}>
                    <div className={styles.result_title}>?????? ??????</div>
                    {testing===null ? null :
                        <>
                            <div className={styles.result_top_bar}>
                                <div className={styles.result_top_bar_content}>????????????</div>
                                <div className={styles.result_top_bar_content}>?????????</div>
                                <div className={styles.result_top_bar_content}>??????/?????????</div>
                                <div className={styles.result_top_bar_content}>????????????</div>
                                <div className={styles.result_top_bar_content}>????????????</div>
                                <div className={styles.result_top_bar_content}>????????????</div>
                                <div className={styles.result_top_bar_content}>?????????/?????????</div>
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

