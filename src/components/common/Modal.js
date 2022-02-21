import React from 'react'
import Modal from 'react-modal'
import CloseIcon from '@mui/icons-material/Close';
import DividerComponent from './Divider';
import { Style } from './style';

Modal.setAppElement('div')

const ModalComponent = (props) => {

    const {
        overlayStyle,
        contentStyle,
        headingText,
        contentText,
        headingContainerStyle,
        headingStyle,
        contentContainerStyle,
        isOpen,
        onHandleClose = () => { }
    } = props;

    return (
        <Modal isOpen={isOpen} style={{
            overlay: Object.assign({}, Style.overlay, overlayStyle),
            content: Object.assign({}, Style.content, contentStyle),
        }}>
            <CloseIcon
                onClick={onHandleClose}
                style={Object.assign({}, Style.CloseIconModal)} />
            <div style={Object.assign({}, Style.modalHeadingContainerStyle, headingContainerStyle)}>
                {headingText && <h1 style={Object.assign({}, Style.modalHeadingStyle, headingStyle)}> {headingText} </h1>}
            </div>
            {contentText && <DividerComponent />}
            <div style={Object.assign({}, Style.modalContentContainerStyle, contentContainerStyle)}>
                <div>{props.children}</div>
            </div>
        </Modal>
    )
}

export default ModalComponent
