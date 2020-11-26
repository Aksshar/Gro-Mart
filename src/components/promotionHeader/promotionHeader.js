import React from 'react'
import './promotionHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'



function PromotionHeader(){
    return(
        <div className="promotion">
            <div className='header'>
            <FontAwesomeIcon icon={faBullhorn }  /><span>
            5% discount on orders above Rs.1000.00</span></div>
       
        </div>

    );
}
export default PromotionHeader