import React, { useState, useEffect } from 'react'
import styles from './Admin.module.css'
import axios from 'axios'
import LinkContent from './LinkContent'

function AddReference(){
    const [ isAdmin, setIsAdmin ] = useState(false)
    const [ password, setPassword ] = useState("")
    const [ input, setInput ] = useState({
        title: "",
        fileurl: "",
        reg_id: "",
        reg_name: "",
        regdate: "",
        b_idx: 1,
        idx: 0
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    const { title, fileurl, reg_id, reg_name, b_idx, idx, regdate } = input

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
        axios.post(`https://api.shinwon.org/reference/`, ({
            title: title,
            fileurl: fileurl,
            reg_id: reg_id,
            reg_name: reg_name,
            b_idx: b_idx,
            idx: idx,
            regdate: regdate
        }))
        .then(res => {
            setInput({
                title: "",
                fileurl: "",
                reg_id: "",
                reg_name: "",
                regdate: "",
                b_idx: 1,
                idx: ""
            })
            alert("업로드 완료")
        })
        .catch(err => {
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
                    <div className={styles.title}>인증서/의뢰지/동의서</div>
                    <input onChange={onChange} value={title} name="title" placeholder="제목" className={styles.input}/>
                    <input onChange={onChange} value={fileurl} name="fileurl" placeholder="이미지 이름(확장자 포함)" className={styles.input}/>
                    <input onChange={onChange} value={reg_id} name="reg_id" placeholder="등록 ID(admin)"  className={styles.input}/>
                    <input onChange={onChange} value={reg_name} name="reg_name" placeholder="등록자(관리자)"  className={styles.input}/>
                    <input onChange={onChange} value={regdate} name="regdate" placeholder="입력 날짜"  className={styles.input}/>
                    {/*<input onChange={onChange} value={idx} name="idx" placeholder="idx" className={styles.input}/>*/}
                    <select onChange={onChange} name="b_idx">
                        <option value={7}>인증서</option>
                        <option value={5}>의뢰지/동의서</option>
                    </select>
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

export default AddReference