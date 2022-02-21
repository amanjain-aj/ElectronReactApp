import React from 'react'
import Divider from '@mui/material/Divider';

const DividerComponent = ( props ) => {
    const { 
        orientation, // vertical, horizontal
        variant, // inset, middle
        text,
        color,
        textAlign
    } = props
    return (
        <div >
            
            {
                text ? 
                    <Divider 
                        variant={ variant } 
                        orientation={ orientation } 
                        style={{ color:color}} textAlign={ textAlign }> { text  } 
                    </Divider> : <Divider 
                            orientation={ orientation } 
                            textAlign={ textAlign }
                            variant={ variant } 
                            style={{ color:color}}/>
            }
        </div>
    )
}

export default DividerComponent
