import React, { useState } from 'react'
import styles from './css/Disease.module.scss'
import SectionTitle from '../../../components/SectionTitle'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Disease = () => {

    AOS.init()

    const [ num, setNum ] = useState(0)

    const DefaultContent = () => {
        return(
            <div data-aos="fade-up"  data-aos-duration="2000" className={styles.section}>
                <div className={styles.section_title}>질환별 검사 안내입니다.</div>
                <img src="../imgs/img/default-disease.png" alt="" className={styles.img}/>
            </div>
        )
    }

    const Gene = () => {
        return(
            <div data-aos="fade-up"  data-aos-duration="2000" className={styles.section}>
                <div className={styles.section_title}>유전자 검사 안내입니다.</div>
                <img src="../imgs/img/gene-disease.png" alt="" className={styles.img}/>
            </div>
        )
    }
 
    const Tumor = () => {
        return(
            <div data-aos="fade-up"  data-aos-duration="2000" className={styles.section}>
                <div className={styles.section_title}>종양 검사 안내입니다.</div>
                <img src="../imgs/img/tumor-disease.png" alt="" className={styles.img}/>
            </div>
        )
    }

    const Disease1 = () => {
        return(
            <div data-aos="fade-up"  data-aos-duration="2000" className={styles.section}>
                <div className={styles.section_title}>난소암/지방간/심장질환/혈관질환 검사 안내입니다.</div>
                <img src="../imgs/img/disease-1.png" alt="" className={styles.img}/>
            </div>
        )
    }

    const Disease2 = () => {
        return(
            <div data-aos="fade-up"  data-aos-duration="2000" className={styles.section}>
                <div className={styles.section_title}>당뇨/신장질환/관절염/입원검사 검사 안내입니다.</div>
                <img src="../imgs/img/disease-2.png" alt="" className={styles.img}/>
            </div>
        )
    }

    const Liver = () => {
        return(
            <div data-aos="fade-up"  data-aos-duration="2000" className={styles.section}>
                <div className={styles.section_title}>간 기능 검사 안내입니다.</div>
                <img src="../imgs/img/liver-disease.png" alt="" className={styles.img}/>
            </div>
        )
    }

    const Thyroid = () => {
        return(
            <div data-aos="fade-up"  data-aos-duration="2000" className={styles.section}>
                <div className={styles.section_title}>갑상선 종합/빈혈 검사 안내입니다.</div>
                <img src="../imgs/img/thyroid-disease.png" alt="" className={styles.img}/>
            </div>
        )
    }

    const Disease3 = () => {
        return(
            <div data-aos="fade-up"  data-aos-duration="2000" className={styles.section}>
                <div className={styles.section_title}>골다공증/통풍관련질환/호르몬 검사 안내입니다.</div>
                <img src="../imgs/img/disease-3.png" alt="" className={styles.img}/>
            </div>
        )
    }

    const OAG1 = () => {
        return(
            <div data-aos="fade-up"  data-aos-duration="2000" className={styles.section}>
                <div className={styles.section_title}>산부인과 그룹검사1 검사 안내입니다.</div>
                <img src="../imgs/img/disease-OAG1.png" alt="" className={styles.img}/>
            </div>
        )
    }

    const OAG2 = () => {
        return(
            <div data-aos="fade-up"  data-aos-duration="2000" className={styles.section}>
                <div className={styles.section_title}>산부인과 그룹검사2 검사 안내입니다.</div>
                <img src="../imgs/img/disease-OAG2.png" alt="" className={styles.img}/>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <SectionTitle kor="질환별 검사" eng="Disease Test"/>
                <div className={styles.top_text}>신원의료재단이 검사하는 검사항목 분류입니다.</div>
                <div className={styles.test_item_wrapper}>
                    <div onClick={num===1 ? () => setNum(0) : () => setNum(1)} className={num===1 ? styles.test_item + " " + styles.test_item_selected : styles.test_item}>유전자검사</div>
                    <div onClick={num===2 ? () => setNum(0) : () => setNum(2)} className={num===2 ? styles.test_item + " " + styles.test_item_selected : styles.test_item}>각종 종양 검사</div>
                    <div onClick={num===3 ? () => setNum(0) : () => setNum(3)} className={num===3 ? styles.test_item + " " + styles.test_item_selected : styles.test_item}>난소암/지방간/심장질환/혈관질환</div>
                    <div onClick={num===4 ? () => setNum(0) : () => setNum(4)} className={num===4 ? styles.test_item + " " + styles.test_item_selected : styles.test_item}>당뇨/신장질환/관절염/입원검사</div>
                    <div onClick={num===5 ? () => setNum(0) : () => setNum(5)} className={num===5 ? styles.test_item + " " + styles.test_item_selected : styles.test_item}>간기능 검사</div>
                    <div onClick={num===6 ? () => setNum(0) : () => setNum(6)} className={num===6 ? styles.test_item + " " + styles.test_item_selected : styles.test_item}>갑상선 종합/빈혈</div>
                    <div onClick={num===7 ? () => setNum(0) : () => setNum(7)} className={num===7 ? styles.test_item + " " + styles.test_item_selected : styles.test_item}>골다공증/통풍관련질환/호르몬 검사</div>
                    <div onClick={num===8 ? () => setNum(0) : () => setNum(8)} className={num===8 ? styles.test_item + " " + styles.test_item_selected : styles.test_item}>산부인과 그룹검사1</div>
                    <div onClick={num===9 ? () => setNum(0) : () => setNum(9)} className={num===9 ? styles.test_item + " " + styles.test_item_selected : styles.test_item}>산부인과 그룹검사2</div>
                </div>
            </div>
            {num===0 ? <DefaultContent/> :
            num===1 ? <Gene/> :
            num===2 ? <Tumor/> : 
            num===3 ? <Disease1/> :
            num===4 ? <Disease2/> :
            num===5 ? <Liver/> :
            num===6 ? <Thyroid/> :
            num===7 ? <Disease3/> :
            num===8 ? <OAG1/> :
            <OAG2/>}
        </div>
    )
}

export default Disease