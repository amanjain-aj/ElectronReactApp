import React from 'react'
import Button from '@mui/material/Button';
import { Style } from './style'
import '../../styles/button.css';
const ButtonComp = (props) => {

    const {
        buttonName,
        onClick = () => { alert('Functionality Not Implemented') },
        icon,
        buttonStyle,
        textStyle,
        disable,
        disableButtonStyle,
        disableTextStyle,
        variantType = "contained",
        ...def
    } = props;

    return (

        <Button
            {...def}
            variant={variantType}
            // className="mat-button"
            // anim="ripple"
            onClick={onClick}
            disabled={disable ? true : false}
            style={
                Object.assign(
                    {},
                    Style.buttonStyle,
                    variantType === 'contained' ? Style.buttonStyleContained : null,
                    buttonStyle,
                    Style.buttonTextStyle,
                    variantType === 'contained' ? Style.buttonTextStyleContained : null,
                    textStyle,
                    disable ? Object.assign(
                        {},
                        Style.disableButtonStyle,
                        disableButtonStyle
                    ) : null,
                    disable ? Object.assign(
                        {},
                        Style.disableButtonTextStyle,
                        disableTextStyle
                    ) : null
                )
            }
        > {icon} {buttonName} </Button>

    )
}

export default ButtonComp
