import React, { useState } from 'react'
import { Style } from './style'


const DateAndTimePicker = (props) => {
    const {
        dateAndTimeContainer,
        dateAndTimeLabel,
        dateAndTimeInput,
        minDate,
        maxDate,
        hadleSetDate,
        date,
        customErrorLine,
        label,
        disable
    } = props

    const [defaultDate, setDefaultDate] = useState({
        value: date ? date : "",
        error: false,
        success: true
    })

    const [error, setError] = useState("")

    const handleChange = (e) => {
        const data = {
            value: e.target.value,
            error: false,
            success: true
        }
        setDefaultDate(data)
        hadleSetDate(data)
        setError("")
    }

    const handleBlur = () => {
        if (defaultDate.value) {
            const data = {
                value: defaultDate.value,
                error: false,
                success: true
            }
            setDefaultDate(data)
            hadleSetDate(data)
            setError("")
        } else {
            const data = {
                value: '',
                error: true,
                success: false
            }
            setDefaultDate(data)
            hadleSetDate(data)
            setError(customErrorLine ? customErrorLine : "Select the date")
        }
    }

    return (
        <div style={Object.assign({}, Style.dateAndTimeContainer, dateAndTimeContainer)}>
            <label
                style={Object.assign({}, Style.dateAndTimeLabel, dateAndTimeLabel)}
            >
                {label}
            </label>
            <br />
            <input
                type="date"
                value={defaultDate.value}
                max={maxDate}
                min={minDate}
                onChange={handleChange}
                onBlur={handleBlur}
                style={
                    Object.assign(
                        {},
                        Style.dateAndTimeInput,
                        dateAndTimeInput,
                        error ? Style.dateAndTimeInputError : null
                    )}
                disabled={disable}
            />
            {error && (
                <div className='clearFix'>
                    <div
                        className="float-right"
                        style={
                            Object.assign({}, Style.customErrorLineStyle)
                        }>
                        {error ? error : customErrorLine}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DateAndTimePicker
