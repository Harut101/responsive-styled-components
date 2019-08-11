import React from 'react'
import '../Layer/Layer.css'


const BackDrop = (props) => {
    return(
        <div className='Layer' onClick={props.toggelMenu} ></div>
    )
}


export default BackDrop;