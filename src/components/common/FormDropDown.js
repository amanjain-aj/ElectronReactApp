import React, { useState } from 'react'
import Select from 'react-select'
import { colors } from '../../configs'
import { Style } from './style'

const FormDropDown = (props) => {

    const {
        Label,
        Options,
        onSelect,
        CustomErrorLine,
        customErrorLineStyle,
        mainContainerStyle,
        selectContainerStyle,
        optionsItemStyle,
        labelStyle,
        isMulti = false,
        value,
        defaultValue,
        disable = false,
        placeholder = "select",
        isValidate = true,
        ...def
    } = props


    const [selectValue, setSelectValue] = useState({
        value: '',
        error: false,
        success: false
    })

    const [multSelectValue, setMultiSelectValue] = useState({
        value: defaultValue ? defaultValue : [],
        error: false,
        success: false
    })

    const [error, setError] = useState('')

    const handleSelect = (data) => {
        const value = {
            value: data.value,
            error: false,
            success: true
        }
        setSelectValue(value)
        onSelect(value)
        if (data.value) {
            setError('')
        }
    }

    const handleChangeBlur = () => {
        if (selectValue.value) {
            setError('')
            const value = {
                value: selectValue.value,
                error: false,
                success: true
            }
            setSelectValue(value)
            onSelect(value)
        } else if (value && selectValue.value === '') {
            const data = {
                value: value,
                error: false,
                success: true
            }
            setSelectValue(data)
            onSelect(data)
        }
        else {
            if (isValidate) {
                const value = {
                    value: '',
                    error: true,
                    success: false
                }
                setSelectValue(value)
                onSelect(value)
                setError(CustomErrorLine ? CustomErrorLine : "Select one option")
            }
            else {
                const value = {
                    value: '',
                    error: false,
                    success: false
                }
                setSelectValue(value)
                onSelect(value)
            }
        }
    }

    const handleChangeMultiSelect = (data) => {
        if (data.length === 0 && isValidate) {
            const value = {
                value: data,
                error: true,
                success: false
            }
            setMultiSelectValue(value)
            onSelect(value)
            setError(CustomErrorLine ? CustomErrorLine : 'Select atleast one')
        } else {
            const value = {
                value: data,
                error: false,
                success: true
            }
            setMultiSelectValue(value)
            onSelect(value)
            setError('')
        }
    }

    const handleChangeMultiBlur = () => {
        if (multSelectValue.value.length !== 0) {
            setError('')
            const value = {
                value: multSelectValue.value,
                error: false,
                success: true
            }
            setMultiSelectValue(value)
            onSelect(value)
        } else {
            if (isValidate) {
                const value = {
                    value: [],
                    error: true,
                    success: false
                }
                setError(CustomErrorLine ? CustomErrorLine : 'Select atleast one')
                setMultiSelectValue(value)
                onSelect(value)
            }
            else {
                const value = {
                    value: [],
                    error: false,
                    success: false
                }
                setMultiSelectValue(value)
                onSelect(value)
            }
        }
    }


    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white',...selectContainerStyle }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = colors.primary;
            return {
                ...styles,
                backgroundColor: isFocused ? color : colors.white,
                color: isFocused ? '#FFF' : colors.black,
                cursor: 'pointer',
                ...optionsItemStyle
            };
        },
    };


    return (
        <div style={Object.assign({}, Style.mainDropDownContainerStyle, mainContainerStyle)}>
            {Label && <label style={Object.assign({}, Style.dropDownLabelStyle, labelStyle)}> {Label} </label>}
            {
                isMulti ? <Select
                    {...def}
                    defaultValue={defaultValue}
                    isMulti
                    name="colors"
                    options={Options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleChangeMultiSelect}
                    onBlur={handleChangeMultiBlur}
                    placeholder={placeholder}
                    styles={colourStyles}
                /> : <Select
                    {...def}
                    isDisabled={disable}
                    value={Options.filter(option =>
                        option.value === value)}
                    name="colors"
                    options={Options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleSelect}
                    onBlur={handleChangeBlur}
                    placeholder={placeholder}
                    styles={colourStyles}
                />

            }
            {error && (
                <div className='clearFix'>
                    <div
                        className="float-right"
                        style={
                            Object.assign({}, customErrorLineStyle ? customErrorLineStyle : Style.customErrorLineStyle)
                        }>
                        {error && error}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FormDropDown
