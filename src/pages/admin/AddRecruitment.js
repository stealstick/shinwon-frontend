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
        inquiry: "",
        method: "",
        document: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    const { title, start_period, end_period, field_sector, field_title, progress, etc, inquiry, method, document } = input

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
            inquiry: inquiry,
            document: document,
            method: method
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
                inquiry: "",
                method: "",
                document: ""
            })
            alert("????????? ??????")
        })
        .catch(err => {
            console.log(err)
            alert("????????? ??????")
        }) 
    }

    const handleLogin = () => {
        if(password==="admin"){
            sessionStorage.setItem("admin", password)
            setIsAdmin(true)
            setPassword("")
        } else {
            alert("?????? ??????")
            setPassword("")
        }
    }
    
    return(
        <>
            {isAdmin ? 
                <div className={styles.editor_container}>
                    <LinkContent/>
                    <div className={styles.title}>????????????</div>
                    <input onChange={onChange} value={title} name="title" placeholder="?????????" className={styles.input}/>
                    <input onChange={onChange} value={start_period} name="start_period" placeholder="?????? ?????? ??????" className={styles.input}/>
                    <input onChange={onChange} value={end_period} name="end_period" placeholder="?????? ?????? ??????" className={styles.input}/>
                    <textarea onChange={onChange} value={field_title} name="field_title" placeholder="???????????? ??? ????????????"  className={styles.textarea}/>
                    <textarea onChange={onChange} value={method} name="method" placeholder="????????????"  className={styles.textarea}/>
                    <textarea onChange={onChange} value={document} name="document" placeholder="???????????? ??? ??????"  className={styles.textarea}/>
                    <textarea onChange={onChange} value={progress} name="progress" placeholder="????????????"  className={styles.textarea}/>
                    <textarea onChange={onChange} value={etc} name="etc" placeholder="??????" className={styles.textarea}/>
                    <input onChange={onChange} value={inquiry} name="inquiry" placeholder="??????" className={styles.input}/>
                    <div className={styles.upload_button_wrapper}>
                        <div className={styles.upload_button} onClick={handleUpload}>?????????</div>
                    </div>
                </div>
            : 
                <div className={styles.login_container}>
                    <input className={styles.login_input} value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
                    <div onClick={handleLogin} className={styles.login_button}>??????</div>
                </div>
            }
        </>
    )
}

export default AddRecruitment