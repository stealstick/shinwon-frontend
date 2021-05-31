import React, { useState, useEffect } from 'react'
import styles from './Admin.module.css'
import axios from 'axios'
import LinkContent from './LinkContent'

function AddPopup(){
    const [ isAdmin, setIsAdmin ] = useState(false)
    const [ password, setPassword ] = useState("")
    const [ input, setInput ] = useState({
        title: "",
        s_date: "",
        e_date: "",
        p_height: "",
        p_width: "",
        file_url: "",
        use_y_n: "Y",
        reg_id: "admin",
        idx: "",
        regdate: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    const { title, s_date, e_date, p_height, p_width, file_url, use_y_n, reg_id, idx } = input

    useEffect(() => {
        if(sessionStorage.getItem("admin")==="admin"){
            setIsAdmin(true)
        }
    }, [])

    const getCurrentTime = () => {
        var date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth()
        var day = date.getDate()
        var hour = date.getHours()
        var minute = date.getMinutes()
        var second = date.getSeconds()
        return year+"/"+month+1+"/"+day+" "+hour+":"+minute+":"+second
    }

    const handleUpload = () => {
        setInput({
            ...input,
            regdate: getCurrentTime()
        })
        axios.post(`https://api.shinwon.org/popup/`, input)
        .then(res => {
            setInput({
                title: "",
                s_date: "",
                e_date: "",
                p_height: "",
                p_width: "",
                file_url: "",
                use_y_n: "Y",
                reg_id: "admin",
                idx: 0,
                regdate: ""
            })
            alert("업로드 완료")
        })
        .catch(err => {
            console.log(err)
            alert("업로드 실패")
        }) 
    }

    const handleLogin = () => {
        if(password==="admin"){
            sessionStorage.setItem("admin", password)
            setIsAdmin(true)
            setPassword("")
        } else {
            alert("접속 실패")
            setPassword("")
        }
    }
    
    return(
        <>
            {isAdmin ? 
                <div className={styles.editor_container}>
                    <LinkContent/>
                    <div className={styles.title}>팝업</div>
                    <input onChange={onChange} value={title} name="title" placeholder="팝업 제목" className={styles.input}/>
                    <input onChange={onChange} value={s_date} name="s_date" placeholder="팝업 생성 날짜" className={styles.input}/>
                    <input onChange={onChange} value={e_date} name="e_date" placeholder="팝업 제거 날짜" className={styles.input}/>
                    <input onChange={onChange} value={p_height} name="p_height" placeholder="높이(픽셀)"  className={styles.input}/>
                    <input onChange={onChange} value={p_width} name="p_width" placeholder="너비(픽셀)"  className={styles.input}/>
                    <input onChange={onChange} value={file_url} name="file_url" placeholder="이미지 이름"  className={styles.input}/>
                    <input onChange={onChange} value={use_y_n} name="use_y_n" placeholder="use_y_n" className={styles.input}/>
                    <input onChange={onChange} value={idx} name="idx" placeholder="idx" className={styles.input}/>
                    <div className={styles.upload_button_wrapper}>
                        <div className={styles.upload_button} onClick={handleUpload}>업로드</div>
                    </div>
                </div>
            : 
                <div className={styles.login_container}>
                    <input className={styles.login_input} value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
                    <div onClick={handleLogin} className={styles.login_button}>접속</div>
                </div>
            }
        </>
    )
}

export default AddPopup