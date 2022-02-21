import React from 'react'
import { colors } from '../../configs'

const ChipComponent = (props) => {
    const { label, type } = props

    return (
        <span
            style={{
                color: 'white',
                backgroundColor: type === 'active' ? colors.primary : colors.danger,
                border: 'solid 1px',
                borderColor: type === 'active' ? colors.primary : colors.danger,
                padding: '0.3em 1em',
                borderRadius: '4px',
                fontWeight: '500'
            }}>
            {label}
        </span>
    )
}

export default ChipComponent
