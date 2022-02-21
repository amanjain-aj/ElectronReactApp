import React from 'react'
import Switch from '@mui/material/Switch'
import { Style } from './style'

const FormSwitch = ( props ) => {
    const {
        checked,
        handleSwitch,
        label,
        switchContainerStyle,
        switchLabelStyle
    } = props

    const handleChange = (event) => {
        handleSwitch(event.target.checked)
    }
    return (
        <div style={ Object.assign( {}, Style.switchContainerStyle, switchContainerStyle) }>
            <label style={ Object.assign( {}, Style.switchLabelStyle, switchLabelStyle ) }> {label} </label>
            <Switch checked={ checked } onChange={ handleChange } color="primary"/>
        </div>
    )
}

export default FormSwitch
