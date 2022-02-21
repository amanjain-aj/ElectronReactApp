import React from 'react'
import "../../../styles/CustomCard.css";

const CustomCard = (props) => {
    return (
        <div className='customcarddiv'>
            {props.children}
        </div>
    )
}

export default CustomCard
