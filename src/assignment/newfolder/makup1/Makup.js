import React, { useState } from "react";
import Makup2 from "../makup2/Makup2";
import Makup3 from "../makup3/Makup3"
import fakedata from "./tool.json"


const Makup = () => {
 
 
  const [additem1,setadditem1] =useState([]);
  


  

  // useEffect(() => {
  //   fetch("./tool.json")
  //     .then((response) => response.json())
  //     .then((data) => setvalue(data));
  // }, []);

//ottachar r value amra pabo makup2 page r buttton click krle
//ager j value ase tar sthe new value niye akta array banano hyse ottachar r vetor

  function ottachar(value) {

      setadditem1([...additem1, value]);
    
  }

 



  return (
    <div style={{fontFamily: 'Besley'}}>
      <div className="row">
        {/* first column */}
        <div className="col-9">
          <div className="row">
            {fakedata.slice(1, 10).map((v) => (
              <div className="col-4">
                <Makup2 value={v} ottachar={ottachar} />
              </div>
            ))}
          </div>
        </div>

       {/* 2nd column  */}

        <div className="col-3 ">
            <div className="m-2 mt-2 ">
             <div style={{height: '520px', }}>

             <Makup3 value ={additem1}/>

             
             
             </div>
            
            </div>
        
        
        </div>
      </div>
    </div>
  );
};

export default Makup;
