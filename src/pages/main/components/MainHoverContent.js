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
                    대해 안내해드립니다.
                </div>
            </Link>
            : text==="네트워크" ? 
            <Link to="/foundation/5" className={styles.hover_container}>
                <div className={styles.hover_title}>{text}</div>
                <div className={styles.hover_separator}/>
                <div className={styles.hover_text}>
                    의료법인 신원의료재단의<br/>
                    전국적인 네트워크 현황입니다.
                </div>
            </Link>
            : text==="전문의" ? 
            <Link to="/foundation/6" className={styles.hover_container}>
                <div className={styles.hover_title}>{text}</div>
                <div className={styles.hover_separator}/>
                <div className={styles.hover_text}>
                    의료법인 신원의료재단은
                    최고의 전문의, 박사, 임상병리사 등
                    우수한 전문 인력들의
                    축적된 경험을 바탕으로 정확하고
                    신속한 검사결과를 제공합니다.
                </div>
            </Link>
            : text==="원격지원" ? 
            <a href="https://939.co.kr/swcl/" target="blank" className={styles.hover_container}>
                <div className={styles.hover_title}>{text}</div>
                <div className={styles.hover_separator}/>
                <div className={styles.hover_text}>
                    의료법인 신원의료재단이<br/>
                    협력기관에게 원격지원을<br/>
                    제공합니다.
                </div>
            </a>
            :
            <Link to="/service/2" className={styles.hover_container}>
                <div className={styles.hover_title}>{text}</div>
                <div className={styles.hover_separator}/>
                <div className={styles.hover_text}>
                    의료법인 신원의료재단의<br/>
                    모든 양식을 제공하고 있습니다.
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