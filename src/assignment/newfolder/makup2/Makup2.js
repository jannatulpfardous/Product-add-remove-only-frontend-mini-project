import React from 'react';
import "./Makup2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Makup2 = ({value,ottachar}) => {
    
    //fakedata value

    const {category,name,img,price,description} = value;



    return (
        <div >

        <div class="serviceBox purple">
                <div class="service-icon">
                    <span> <img style={{height:'60px',width:"60px"}} src={img} alt="" /></span>
                </div>


                <h5 style={{fontFamily: 'Besley'}}>{category}</h5>
                <h6 style={{fontFamily: 'Besley'}}>{name}</h6>
                <p style={{fontFamily: 'Besley'}} class="description">{description}</p>

                <h6>Price : $ {price}</h6>
                <button onClick={()=>ottachar(value)} style={{backgroundColor:'#F22F46',color:'white',fontFamily: 'Besley'}} class="btn">
                    Add to Cart  <FontAwesomeIcon icon={faArrowAltCircleRight } /></button>

                
            </div>
            
        </div>
    );
};

export default Makup2;