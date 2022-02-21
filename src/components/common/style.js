import { colors } from "../../configs";

export let Style = {
    inputContainerStyle: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        marginTop: 5
    },
    inputContainerDisabledStyle: {
        background: '#eee'
    },
    inputContainerError: {
        // border : '1px solid red'
    },
    mainContainerStyle: {
        marginTop: '7px'
    },
    inputStyle: {
        flex: 1,
        height: 35,
        fontStyle: 'normal',
        borderStyle: 'hidden',
        outline: 'none',
        border: 'solid 1px #ccc',
        borderRadius: '4px',
        padding: '0 4em 0 1em '
    },
    inputError: {
        borderColor: colors.danger,
        border: `1px solid ${colors.danger}`,
        height: 35,
        flex: 1,
        outline: 'none',

        // borderStyle : 'hidden'
    },
    pwIconContainerStyle: {
        // backgroundColor: colors.white,
        position: 'absolute',
        right: 10,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        padding: '0.3em',
        borderRadius: 100,
        margin: '0.05em',
        marginLeft: '-2.1em',
        color: colors.lightGray
    },
    textArea: {
        height: 70,
        flex: 1,
        font: 'sans-serif',
        fontStyle: 'normal',
        border: 'solid 0.5px #ccc',
        outline: 'none',
        borderRadius: '4px',
        padding: '.5em 1em '

    },
    textAreaError: {
        borderColor: 'red'
    },
    customErrorLineStyle: {
        color: colors.danger,
    },


    hint: {
        fontSize: '0.7em',
        color: colors.darkgrey
    },
    labelTextStyle: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 200,
        // marginLeft: 10
        // backgroundColor : 'cyan'
    },
    labelContainerStyle: {

    },
    checkBoxMainContainerStyle: {
        display: 'inlineFlex'
    },
    checkBoxStyle: {
        marginTop: '10px',
        display: 'inlineBlock',
        lineHeight: '1.2',
        marginBottom: '2px',
        cursor: 'pointer'
    },
    labelStyle: {
        fontWeight: 200,
        marginLeft: '15px',
        cursor: 'pointer'
    },
    radioMainContainer: {

    },
    radioLabel: {

    },
    radioButton: {

    },
    buttonStyle: {
        // backgroundColor: colors.primary, /* Green */
        fontSize: '1.9rem',
        fontWeight: 400
    },
    buttonStyleContained: {
        backgroundColor: colors.primary
    },
    buttonTextStyle: {
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '.9rem',
        color: colors.primary
    },
    buttonTextStyleContained: {
        color: colors.white
    },
    disableButtonStyle: {
        backgroundColor: colors.lightGray,

    },
    disableButtonTextStyle: {
        color: colors.white
    },
    searchInputContainerStyle: {
        width: 300,
        // float: 'left',
        margin: '0 15px',
    },
    searchInputStyle: {
        zIndex: 1,
        width: '100%',
        height: '50px',
        fontSize: '1.2rem',
        padding: '10px', /* Firefox, other Gecko */
        boxSizing: 'border-box', /* Opera/IE 8+ */
        display: 'block',
        fontWeight: 400,
        lineHeight: 1.6,
        color: '#495057',
        backgroundColor: ' #fff',
        backgroundClip: 'padding-box',
        border: '1px solid #ced4da',
        borderRadius: '.25rem',
        transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out',
        background: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .75rem center/8px 10px`
    },
    inputUl: {
        listStyleType: 'none',
        backgroundColor: '#fff',
        borderRadius: '0 0 5px 5px',
        border: '1px solid #add8e6',
        borderTop: 'none',
        maxHeight: '180px',
        margin: 0,
        overflowY: 'scroll',
        overflowX: 'hidden',
        padding: 0,
        zIndex: 9,
    },
    inputUlClick: {
        display: 'none',
        listStyleType: 'none',
        backgroundColor: '#fff',
        borderRadius: '0 0 5px 5px',
        border: '1px solid #add8e6',
        borderTop: 'none',
        maxHeight: '180px',
        margin: 0,
        overflowY: 'scroll',
        overflowX: 'hidden',
        padding: 0
    },
    inputLi: {
        padding: '7px 9px',
        borderBottom: '1px solid #e1e1e1',
        cursor: 'pointer',
        color: '#6e6e6e',

    },
    inputLiSelected: {
        backgroundColor: '#e8e8e8',
        color: '#333'
    },
    filePickerContainer: {
        // backgroundColor : 'red'
        display: 'flex',
        justifyContent: 'space-between'
    },
    filePickerInputStyle: {
        backgroundColor: 'red',
        height: '40px',
        marginTop: '90px'
    },
    switchContainerStyle: {
        // backgroundColor : 'green'
    },
    switchLabelStyle: {

    },
    cardContainer: {
        flex: 1,
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
    },
    tabsContainerStyle: {

    },
    tabListStyle: {

    },
    tabStyle: {

    },
    TabPanelStyle: {

    },
    CloseIconModal: {
        display: 'block',
        float: 'right',
        position: 'relative',
        top: '-10px',
        right: '-10px',
        zIndex: 1002
    },
    CloseIconAlertModal: {
        display: 'block',
        float: 'right',
        position: 'relative',
        top: '10px',
        right: '-220px',
        zIndex: 1002
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
        zIndex: 9999,
        padding: '0.5em',

    },
    content: {
        width: window.innerWidth <= 768 ? '100%' : '60%',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        // border: '2px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        borderRadius: '10px'
    },
    modalHeadingStyle: {

    },
    modalHeadingContainerStyle: {

    },
    modalContentContainerStyle: {

        maxHeight: '90vh',
        overflow: 'auto'

    },
    modalContentParagraphStyle: {

    },
    readMoreContainerStyle: {

    },
    readMoreParagraphStyle: {

    },
    readMoreSpanStyle: {
        color: 'blue',
        cursor: 'pointer'
    },
    dateAndTimeContainer: {
        margin: "10px 0px 10px 0px"
    },
    dateAndTimeLabel: {
        marginBottom: "3px",
        fontWeight: 200,
    },
    dateAndTimeInput: {
        flex: 1,
        height: 35,
        fontStyle: 'normal',
        borderStyle: 'hidden',
        outline: 'none',
        border: 'solid 1px #ccc',
        borderRadius: '4px',
        padding: '0 1em ',
        width: '100%'
    },
    dateAndTimeInputError: {
        border: '1px solid red'
    },
    mainDropDownContainerStyle: {
        // padding: "0.5em 0"
        marginBottom: 15
    },
    dropDownLabelStyle: {
        // marginRight : '150px',
        marginTop: 22,
        marginBottom: 10,
        fontWeight: 200,
    },
    dropDownItemContainerStyle: {
        padding: '5px 15px',
        borderRadius: 100
    },
    dropDownItemTextContainerStyle: {
        color: colors.black
    },
    dropDownOptionItemStyle: {

    },
    formDropDownCustomErrorLineStyle: {
        color: colors.danger,
        marginTop: 10
    },
    linkContainerStyle: {

    },
    linkTextStyle: {
        color: colors.primary
    },
    calendar: {
        width: '100%'
    },
    alertMessageTitleStyle: {

    },
    alertMessageContentTextStyle: {
        width: '20em',
    },

    mainContainerDropDownStyle: {
        marginBottom: '10px'
    },
    mainLabelDropDownStyle: {
        margin: '10px'
    },
    DropDownLabelStyle: {

    },
    mainFilePickerContainerStyle: {

    }
};