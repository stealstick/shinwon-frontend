import React, { useState, useEffect } from 'react'
import styles from './Admin.module.css'
import axios from 'axios'
import LinkContent from './LinkContent'

function AddRecruitment(){
    const [ isAdmin, setIsAdmin ] = useState(false)
    const [ password, setPassword ] = useState("")
    const [ input, setInput ] = useState({
        title: "",
        start_period: "",
        end_period: "",
        field_title: "",
        field_sector: "",
        progress: "",
        etc: "",
        inquiry: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    const { title, start_period, end_period, field_sector, field_title, progress, etc, inquiry } = input

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
        axios.post(`https://api.shinwon.org/recruit/`, ({
            title: title,
            start_period: start_period,
            end_period: end_period,
            field_sector: field_sector,
            field_title: field_title,
            progress: progress,
            etc: etc,
            inquiry: inquiry
        }))
        .then(res => {
            setInput({
                title: "",
                start_period: "",
                end_period: "",
                field_title: "",
                field_sector: "",
                progress: "",
                etc: "",
                inquiry: ""
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
                    <div className={styles.title}>인증서/의뢰지/동의서</div>
                    <input onChange={onChange} value={title} name="title" placeholder="공고명" className={styles.input}/>
                    <input onChange={onChange} value={start_period} name="start_period" placeholder="모집 시작 날짜" className={styles.input}/>
                    <input onChange={onChange} value={end_period} name="end_period" placeholder="모집 완료 날짜" className={styles.input}/>
                    <input onChange={onChange} value={field_title} name="field_title" placeholder="모집분야"  className={styles.input}/>
                    <input onChange={onChange} value={field_sector} name="field_sector" placeholder="모집부문"  className={styles.input}/>
                    <input onChange={onChange} value={progress} name="progress" placeholder="지원절차"  className={styles.input}/>
                    <input onChange={onChange} value={etc} name="etc" placeholder="기타" className={styles.input}/>
                    <input onChange={onChange} value={inquiry} name="inquiry" placeholder="문의" className={styles.input}/>
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

export default AddRecruitment