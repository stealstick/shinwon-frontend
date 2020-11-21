import React from 'react'
import './css/CustomerService.scss'

const CustomerService = () => {
    return(
        <div className="customerservice-container">
            <img src="../imgs/icons/icon-phone.svg" alt="" className="customerservice-icon"/>
            <div className="text-wrapper">
                <div className="text-top">고객센터 대표번호</div>
                <div className="text-bot">1899-1510</div>
            </div>
        </div>
    )
}

export default CustomerService