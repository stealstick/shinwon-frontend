import React, { useState } from 'react'
import styles from './css/MainHoverContent.module.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const MainHoverContent = ({img, text, type}) => {

    const [ isMouseOver, setIsMouseOver ] = useState(false)

    return(
        <div className={styles.top_container} onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
            {isMouseOver ? 
            text==="재단안내" ? 
            <Link to="/foundation/1" className={styles.hover_container}>
                <div className={styles.hover_title}>{text}</div>
                <div className={styles.hover_separator}/>
                
                <div className={styles.hover_text}>
                    의료법인 신원의료재단에<br/>
                    대한 안내입니다.
                </div>
            </Link>
            : text==="네트워크" ? 
            <Link to="/foundation/5" className={styles.hover_container}>
                <div className={styles.hover_title}>{text}</div>
                <div className={styles.hover_separator}/>
                <div className={styles.hover_text}>
                    의료법인 신원의료재단의<br/>
                    전국 네트워크 현황입니다.
                </div>
            </Link>
            : text==="전문의" ? 
            <Link to="/foundation/6" className={styles.hover_container}>
                <div className={styles.hover_title}>{text}</div>
                <div className={styles.hover_separator}/>
                <div className={styles.hover_text}>
                    의료법인 신원의료재단은<br/>
                    최고 전문의, 박사, 임상병리사<br/> 
                    등 우수한 전문인력들의 경험과<br/>
                    기술로 정확하고 신속한 검사<br/>
                    결과를 제공합니다.
                </div>
            </Link>
            : text==="공문" ? 
            <Link to="/service/1" className={styles.hover_container}>
                <div className={styles.hover_title}>{text}</div>
                <div className={styles.hover_separator}/>
                <div className={styles.hover_text}>
                    의료법인 신원의료재단의<br/>
                    공문을 확인 하실 수 있습니다.
                </div>
            </Link>
            :
            <Link to="/service/2" className={styles.hover_container}>
                <div className={styles.hover_title}>{text}</div>
                <div className={styles.hover_separator}/>
                <div className={styles.hover_text}>
                    의뢰서, 동의서, 인증서 등을<br/>
                    확인할 수 있습니다.
                </div>
            </Link>
            :
            <div className={classNames(styles.container, styles[type])}>
                <div className={styles.img_wrapper}>
                    <img src={img} alt="" className={styles.img}/>
                </div>
                <div className={styles.text}>{text}</div>
            </div>
            }
        </div>
    )
}

export default MainHoverContent