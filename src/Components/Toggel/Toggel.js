import React from 'react';
import '../Toggel/Toggel.css'


const Toggel = (props) =>{
    let cls = '';
    if(props.isOpen){
        cls = 'open'
    }
    return(
        <div className={`nav-icon1 ${cls}`} onClick={props.onToggelMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
 
export default Toggel;