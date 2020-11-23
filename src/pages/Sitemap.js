import React from 'react'
import Layout from './Layout'
import styles from '../css/Sitemap.module.css'
import { Link } from 'react-router-dom'

const Sitemap = () => {
    return(
        <Layout>
            <div className={styles.container}>
                <div className={styles.sticky_container}>
                    <div className={styles.title}>사이트맵</div>
                    <div className={styles.sitemap_table}>
                        <Link to="/foundation/1" className={styles.table_title}>재단안내</Link>
                        <div className={styles.table_content_wrapper}>
                            <Link to="/foundation/1" className={styles.table_content}>
                                <div className={styles.table_content_title}>인사말</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                            <Link to="/foundation/2" className={styles.table_content}>
                                <div className={styles.table_content_title}>사명과 가치</div>
                                <div className={styles.table_content_text}>사명과 가치</div>
                                <div className={styles.table_content_text}>경영방침</div>
                                <div className={styles.table_content_text}>경영목표</div>
                                <div className={styles.table_content_text}>IDENTITY</div>
                            </Link>
                            <Link to="/foundation/3" className={styles.table_content}>
                                <div className={styles.table_content_title}>재단연혁</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                            <Link to="/foundation/4" className={styles.table_content}>
                                <div className={styles.table_content_title}>조직도</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                            <Link to="/foundation/5" className={styles.table_content}>
                                <div className={styles.table_content_title}>전국네트워크</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                            <Link to="/foundation/6" className={styles.table_content}>
                                <div className={styles.table_content_title}>전문의</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                            <Link to="/foundation/7" className={styles.table_content}>
                                <div className={styles.table_content_title}>오시는길</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.sitemap_table}>
                        <Link to="/introduction/1" className={styles.table_title}>검사안내</Link>
                        <div className={styles.table_content_wrapper}>
                            <Link to="/introduction/1" className={styles.table_content}>
                                <div className={styles.table_content_title}>검사절차</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                            <Link to="/introduction/2" className={styles.table_content}>
                                <div className={styles.table_content_title}>검체취급</div>
                                <div className={styles.table_content_text}>검체체취/취급방법</div>
                                <div className={styles.table_content_text}>검체용기안내</div>
                            </Link>
                            <Link to="/introduction/3" className={styles.table_content}>
                                <div className={styles.table_content_title}>검사종류</div>
                                <div className={styles.table_content_text}>혈청</div>
                                <div className={styles.table_content_text}>전혈</div>
                                <div className={styles.table_content_text}>요</div>
                                <div className={styles.table_content_text}>선천성대사이상</div>
                                <div className={styles.table_content_text}>산전태아 이상선별</div>
                                <div className={styles.table_content_text}>분변</div>
                                <div className={styles.table_content_text}>체액</div>
                                <div className={styles.table_content_text}>분자진단</div>
                                <div className={styles.table_content_text}>세포유전학</div>
                                <div className={styles.table_content_text}>미생물</div>
                                <div className={styles.table_content_text}>바이러스 배양검사 검체취급</div>
                                <div className={styles.table_content_text}>조직병리학/세포병리학</div>
                            </Link>
                            <Link to="/introduction/4" className={styles.table_content}>
                                <div className={styles.table_content_title}>종합검사프로파일</div>
                                <div className={styles.table_content_text}>산전검사</div>
                                <div className={styles.table_content_text}>건강관리와 위생</div>
                                <div className={styles.table_content_text}>기형아 조기진단</div>
                                <div className={styles.table_content_text}>임산부의 영양/태교</div>
                                <div className={styles.table_content_text}>태아의 변화</div>
                            </Link>
                            <Link to="/introduction/5" className={styles.table_content}>
                                <div className={styles.table_content_title}>질환별검사</div>
                                <div className={styles.table_content_text}>유전자검사</div>
                                <div className={styles.table_content_text}>각종 종양검사</div>
                                <div className={styles.table_content_text}>난소암/지방간/신장질환/혈관질환</div>
                                <div className={styles.table_content_text}>당뇨/신장질환/관절염/입원검사</div>
                                <div className={styles.table_content_text}>간기능검사</div>
                                <div className={styles.table_content_text}>갑상성 종합/빈혈</div>
                                <div className={styles.table_content_text}>골다공증/통풍관련질환/호르몬 검사</div>
                                <div className={styles.table_content_text}>산부인과 그룹검사1</div>
                                <div className={styles.table_content_text}>산부인과 그룹검사2</div>
                            </Link>
                            <Link to="/introduction/6" className={styles.table_content}>
                                <div className={styles.table_content_title}>결과확인방법</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                            <Link to="/introduction/7" className={styles.table_content}>
                                <div className={styles.table_content_title}>검사항목조회</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.sitemap_table}>
                        <Link to="/center/1" className={styles.table_title}>검사실안내</Link>
                        <div className={styles.table_content_wrapper}>
                            <Link to="/center/1" className={styles.table_content}>
                                <div className={styles.table_content_title}>진단검사의학부</div>
                                <div className={styles.table_content_text}>임상화학부</div>
                                <div className={styles.table_content_text}>진단면역학부</div>
                                <div className={styles.table_content_text}>진단혈액학부</div>
                                <div className={styles.table_content_text}>임상물미생학부</div>
                                <div className={styles.table_content_text}>요검경학부</div>
                                <div className={styles.table_content_text}>분자유전학부</div>
                            </Link>
                            <Link to="/center/2" className={styles.table_content}>
                                <div className={styles.table_content_title}>병리학부</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                            <Link to="/center/3" className={styles.table_content}>
                                <div className={styles.table_content_title}>정도관리</div>
                                <div className={styles.table_content_text}>분석전단계</div>
                                <div className={styles.table_content_text}>내부정도관리</div>
                                <div className={styles.table_content_text}>외부정도관리</div>
                                <div className={styles.table_content_text}>분석후단계</div>
                            </Link>
                            <Link to="/center/4" className={styles.table_content}>
                                <div className={styles.table_content_title}>인증서</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.sitemap_table}>
                        <Link to="/service/1" className={styles.table_title}>고객서비스</Link>
                        <div className={styles.table_content_wrapper}>
                            <Link to="/service/1" className={styles.table_content}>
                                <div className={styles.table_content_title}>공문</div>
                            </Link>
                            <Link to="/service/2" className={styles.table_content}>
                                <div className={styles.table_content_title}>의뢰지/동의서</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                            <Link to="/service/3" className={styles.table_content}>
                                <div className={styles.table_content_title}>감염지침</div>
                            </Link>
                            <Link to="/service/4" className={styles.table_content}>
                                <div className={styles.table_content_title}>FAQ</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                            <Link to="/service/5" className={styles.table_content}>
                                <div className={styles.table_content_title}>채용공고</div>
                                <div className={styles.table_content_text}></div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.sitemap_table}>
                        <Link to="/rnd" className={styles.table_title}>R&D</Link>
                        <div className={styles.table_content_wrapper}>
                            <Link to="/rnd" className={styles.table_content}>
                                <div className={styles.table_content_title}>임상연구센터</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Sitemap