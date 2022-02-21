import React, { useState } from 'react'
import ImgsViewer from "react-images-viewer"

const ImageViewer = ( props ) => {
    const { image } = props
    const [ open , setOpen ] = useState(true)
    const handleClose = () => {
        setOpen( false )
    }
    return (
        <div>
            <ImgsViewer
                imgs={[
                { src: image }
                ]}
                isOpen = { open }
                onClose = { handleClose }
            />
        </div>
    )
}

export default ImageViewer
