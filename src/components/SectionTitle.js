import React from 'react'
import './css/SectionTitle.scss'

const SectionTitle = ({kor, eng}) => {
    return(
        <div class="section-title-wrapper">
            <div class="section-title-kor">{kor}</div>
            <div class="section-title-eng">{eng}</div>
        </div>
    )
}

export default SectionTitle