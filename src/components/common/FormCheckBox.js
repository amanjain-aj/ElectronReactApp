import React from 'react'
import { Style } from './style.js';

const FormCheckBox = (props) => {

    const {
        Label,
        labelStyle,
        checkBoxStyle,
        mainContainerStyle,
        checked,
        handleChangeCheck = () => { alert('Functionality not implemented YET') },
        disable,
        ...def
    } = props

    const onChangeCheck = () => {
        handleChangeCheck(!checked)
    }

    return (
        <div style={
            Object.assign({}, Style.checkBoxMainContainerStyle, mainContainerStyle)
        } >

            <input
                {...def}
                type="checkbox"
                style={
                    Object.assign({}, Style.checkBoxStyle, checkBoxStyle)
                }
                checked={checked === true ? true : false}
                disabled={disable ? true : false}
                onChange={onChangeCheck} />
            <label onClick={!disable && onChangeCheck} style={
                Object.assign({}, Style.labelStyle, labelStyle)} > {Label} </label>
        </div>
    )
}

export default FormCheckBox
