import React from 'react'
import {Style} from './style.js';

const InputComponent = (props) => {
    const { value, label, labelStyle, radioButtonStyle, optionType, handleOptionChange, Placement } = props

    const handleRadioChange = () => {
        handleOptionChange(value)
    }

    return (
        <>
            <input 
                type="radio" 
                value={ value } 
                style={ radioButtonStyle ? radioButtonStyle : Style.radioButton }
                checked={ optionType === value }
                onChange={ handleRadioChange }
            />
            <label style={ labelStyle ? labelStyle : Style.radioLabel } >
                { label }
            </label>
            {
                Placement === 'vertical' && <br /> 
            }
        </>
    )
}


const FormRadioButton = (props) => {
    const { Options, mainContainerStyle, labelStyle, radioButtonStyle, optionType, handleOptionChange, Placement } = props
    return (
        <div style={ mainContainerStyle ? mainContainerStyle : Style.radioMainContainer }>
           {
            Options.map((option) => {
                return <InputComponent 
                        key={ option.key } 
                        {...option} 
                        labelStyle={ labelStyle } 
                        radioButtonStyle={ radioButtonStyle } 
                        optionType={optionType} 
                        handleOptionChange={ handleOptionChange }
                        Placement = { Placement }
                    />
            })
           }
        </div>
    )
}

export default FormRadioButton
