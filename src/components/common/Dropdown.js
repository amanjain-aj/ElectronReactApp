import React from 'react'
import Select from 'react-select'
// import { colors } from '../../configs';
import { Style } from './style';

const Dropdown = (props) => {

    const { Label, options, isMulti } = props

    return (
        <div style={Style.mainContainerDropDownStyle}>
            <div style={Style.mainLabelDropDownStyle}>
                <label style={Style.DropDownLabelStyle}>{Label}</label>
            </div>
            <Select
                isMulti={isMulti && isMulti}
                name="colors"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
            // styles={{
            //     control: (styles) => ({ ...styles, backgroundColor: colors.warning, }),
            //     option: (styles, { isDisabled, isFocused, isSelected }) => {
            //         return { ...styles, backgroundColor: colors.danger };
            //     }

            // }}
            />
        </div>
    )
}

export default Dropdown
