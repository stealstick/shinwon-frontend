import React, { useState, useEffect } from 'react'
import styles from './Admin.module.css'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html'
import axios from 'axios'
import './editor.css'

function Admin(){
    const [ isAdmin, setIsAdmin ] = useState(false)
    const [ editorState, setEditorState ] = useState(EditorState.createEmpty());
    const [ password, setPassword ] = useState("")
    const [ input, setInput ] = useState({
        title: "",
        email: "",
        fileurl: "",
        fileurl2: "",
        fileurl3: "",
        reg_id: "",
        reg_name: "",
        b_idx: 1,
        idx: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    const { title, email, fileurl, fileurl2, fileurl3, reg_id, reg_name, b_idx, idx } = input

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
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    const uploadImage = (file) => {
        return new Promise((resolve, reject) => {
            var formData = new FormData()
            formData.append("image", file)
            axios.post("https://api.shinwon.org/image/", formData)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject({data: err})
            })
        })
    }


    const uploadCallback = (file) => {
        return new Promise(async(resolve, reject) => {
            const upload_image = await uploadImage(file)
            resolve({
                data: {
                    link: upload_image.image
                }
            })
        })
    }

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
        const editorHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        axios.post("https://api.shinwon.org/board/", ({
            title: title,
            email: email,
            fileurl: fileurl,
            fileurl2: fileurl2,
            fileurl3: fileurl3,
            reg_id: reg_id,
            reg_name: reg_name,
            b_idx: b_idx,
            contents: editorHtml,
            idx: Number(idx),
            regdate: getCurrentTime()
        }))
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        }) 
    }
    
    return(
        <>
            {isAdmin ? 
                <div className={styles.editor_container}>
                    <input onChange={onChange} value={title} name="title" placeholder="제목" className={styles.input}/>
                    <input onChange={onChange} value={email} name="email" placeholder="이메일(선택)" className={styles.input}/>
                    <input onChange={onChange} value={fileurl} name="fileurl" placeholder="첨부파일1(선택)" className={styles.input}/>
                    <input onChange={onChange} value={fileurl2} name="fileurl2" placeholder="첨부파일2(선택)"  className={styles.input}/>
                    <input onChange={onChange} value={fileurl3} name="fileurl3" placeholder="첨부파일3(선택)"  className={styles.input}/>
                    <input onChange={onChange} value={reg_id} name="reg_id" placeholder="등록 ID(admin)"  className={styles.input}/>
                    <input onChange={onChange} value={reg_name} name="reg_name" placeholder="등록자(관리자)"  className={styles.input}/>
                    <input onChange={onChange} value={idx} name="idx" placeholder="idx" className={styles.input}/>
                    <select onChange={onChange} name="b_idx">
                        <option value={1}>공문</option>
                        <option value={7}>인증서</option>
                        <option value={5}>의뢰지/동의서</option>
                        <option value={3}>FAQ</option>
                    </select>
                    <div className={styles.editor_wrapper}>
                        <Editor
                            wrapperClassName="wrapper-class"
                            editorClassName="editor"
                            toolbarClassName="toolbar-class"
                            toolbar={{
                                list: { inDropdown: true },
                                textAlign: { inDropdown: true },
                                link: { inDropdown: true },
                                history: { inDropdown: false },
                                image: { uploadCallback: uploadCallback }
                            }} 
                            placeholder="내용을 작성해주세요."
                            localization={{
                                locale: 'ko',
                            }}
                            editorState={editorState}
                            onEditorStateChange={onEditorStateChange}
                        />
                    </div>
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

export default Admin