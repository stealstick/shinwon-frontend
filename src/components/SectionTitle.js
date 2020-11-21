import React from 'react'
import './css/SectionTitle.scss'

const SectionTitle = ({kor, eng}) => {
    return(
        <div className="section-title-wrapper">
            <div className="section-title-kor">{kor}</div>
            <div className="section-title-eng">{eng}</div>
        </div>
    )
}

export default SectionTitle