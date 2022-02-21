import React, { useState } from 'react'
import { Style } from './style'

const ReadMore = ( props ) => {

    const { text, max, containerStyle, paragraphStyle, spanStyle } = props

    const [ readMore, setReadMore ] = useState( true )

    const toggleReadMore = () => {
        setReadMore(!readMore)
    }

    return (
        <div style={ Object.assign({}, Style.readMoreContainerStyle, containerStyle)} >
            <p style={ Object.assign({}, Style.readMoreParagraphStyle, paragraphStyle)}>
                { readMore ? text.slice(0,max) : text}
                <span onClick={ toggleReadMore } style={Object.assign({}, Style.readMoreSpanStyle, spanStyle)}> { readMore ? 'Read more' : 'Read less'} </span>
            </p>
        </div>
    )
}

export default ReadMore
// import React,{useState} from 'react';


// function ReadMore() {

//   const [readMore,setReadMore]=useState(false);

//   const extraContent=<div>

//       <p className="extra-content">

//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 

//         porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 

//         commodi officia aliquam! Maxime.

//       </p>

//   </div>

//       const divStyle = {
//         width: '30vh',
//         minHeight: '25vh',
//         padding: '2vh',
//         float: 'left',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         border: '1px solid lightgrey',
//         margin: '40px',
//         borderRadius: '4px',
//         boxShadow: '0 8px 14px 0 rgba(0,0,0,.03)',
//         backgroundColor: 'white'
//     }

//   const linkName=readMore?'Read Less << ':'Read More >> '

//   return (

//     <div>

//       <a className="read-more-link"  href onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>

//       {readMore && extraContent}

//     </div>

//   );

// }


// export default ReadMore;