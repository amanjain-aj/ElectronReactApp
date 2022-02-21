import React from 'react'
import Loader from 'react-loader'

const LoaderComponent = (props) => {
    const { 
        loaded, 
        line, 
        length, 
        width, 
        radius, 
        color, 
        shadow } = props

        
        // const [loaded, setLoaded] = React.useState(false);

    return (
        <div>
            <Loader 
                loaded = { loaded }
                lines={ line }
                length={ length }
                width={ width }
                radius={ radius }
                corners={1}
                rotate={0}
                direction={1}
                color={ color }
                speed={1}
                trail={60}
                shadow={ shadow }
                zIndex={2e9}
                top="50%"
                left="50%"
                scale={1.0}
                loadedClassName="loadedContent"/>
                
        </div>
    )
}

export default LoaderComponent
