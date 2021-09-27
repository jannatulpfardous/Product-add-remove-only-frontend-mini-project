import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Makup3 = ({value}) => {

  //total value added here

 let total =0

    value.map(v=> {
       
      return total += v.price
      
    })


   //if any one click same product and don't want to see it again and again
   // remove dublicated value

  let uniqueChars = [...new Set(value)];

          
  



    
    return (
        <div className='m-2'>
            

             <h5>Item Added Total : {value.length}</h5>
              <hr />

             <div className="row">


                 <ol className="ms-3">

                 {uniqueChars.map(v =>


                  <li>
                   <div className="col-12">

                     <div className="row">
                         <div className="col-5">{v.name}</div>
                         <div className="col-3"> 

                         <img style={{width: '40px', height: "40px"}} src={v.img} alt="" />
                         
                         
                         </div>
                         <div className="col-2"><button className="btn"><FontAwesomeIcon icon={faTrashAlt } /></button></div>
                     </div>
                
                   
                   </div>
                  
                  
                  </li>
                 
                 
                 
                   )}
                 
                 
                 
                 
                 
                 </ol>

                 <hr />
                 <h5 className="d-flex justify-content-end">Total amount : $ {total} </h5> 

             </div>
             
          


           
           
           
          



            
        </div>
    );
};

export default Makup3;