import React from 'react'
import { Style } from './style'
import { Link } from 'react-router-dom'

const Links = ( props ) => {
    const { 
            name, 
            path, 
            containerStyle, 
            textStyle,
            onClick
        } = props
    return (
        <div style={ Object.assign({}, Style.linkContainerStyle, containerStyle)}>
            <Link 
                to={ path ? path : '/' } 
                style={ Object.assign( {}, Style.linkTextStyle, textStyle)} 
                onClick={ onClick } >{ name }</Link>
        </div>
    )
}

export default Links
