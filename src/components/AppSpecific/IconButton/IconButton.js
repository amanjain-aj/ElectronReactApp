import React from 'react'
import IconButton from '@mui/material/IconButton';

const IconButtonComponent = (props) => {

    return (
        <IconButton onClick={props.onClick}>
            {props.children}
        </IconButton>
    );
}

export default IconButtonComponent
