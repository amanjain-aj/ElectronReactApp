import React, { useState } from 'react'
import "../../styles/Accordion.css"

const Accordion = (props) => {
    const {
        title,
        content,
        defaultExpanded,
        ...def
    } = props
    const [isActive, setIsActive] = useState(defaultExpanded ? defaultExpanded : false);
    React.useEffect(() => { setIsActive(defaultExpanded) }, [defaultExpanded])
    return (

        <div className="accordion">
            <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <div>{title}</div>
                    <div>{isActive ? '-' : '+'}</div>
                </div>
                <div>
                    {isActive && <div style={{ border: 'none' }} className="accordion-content">{props.children}</div>}
                </div>
            </div>
        </div>

    )
}

export default Accordion
