import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
           
              
           <nav style={{fontFamily: 'Besley'}} >
           <a href="/Behold Beauty" >Behold-<span style={{color:'deepPink'}}>BEAUTY</span></a>
           <br />
               <a href="/Quote">“Beauty Begins The Moment You Decide To Be Yourself.”</a>
               <br/>
               <a href="/Behold Beauty">Behold-Beauty</a>
               <a href="/client">Client</a>
               <a href="/Resources">Resources</a>
               <a href="/About">About</a>
               <br />
               <h2 className="budget">Total Amount : 100 milion</h2>
               <br />
            </nav>
        </div>
    );
};

export default Header;