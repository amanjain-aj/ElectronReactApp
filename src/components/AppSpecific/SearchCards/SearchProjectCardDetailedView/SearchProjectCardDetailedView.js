import React from 'react'
import { SwitchButton, IconButton, TableRow } from '../../..'
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const SearchProjectCard = (props) => {

    const {
        activeStatus,
        serialLabel,
        serialValue,
        projectValue,
        projectScopeLabel,
        projectScopeValue,
        clientLabel,
        clientValue,
        shippingAddressLabel,
        shippingAddressValue,
        actionLabel,
        switchButtonOnClick,
        iconButtonOnClick,
        projectStatus
    } = props

    return (
        <div>
            <Link to={"/projectbudget"}>

                <p className="d-flex float-end align-content-center align-items-center">
                    <span data-bs-toggle="tooltip" data-bs-placement="right"
                        title={projectStatus === "ongoing" ? "Ongoing" : projectStatus === "completed" ? "COMPLETED" : "CANCELLED"}
                        className={projectStatus === "ongoing" ? "cardOngoing float-end" : projectStatus === "completed" ? "cardCompleted float-end" : "cardCancelled float-end"}
                    // className={activeStatus ? "cardactive float-end" : "notactive float-end"}
                    >

                    </span>
                </p>
                <span className={'text-secondary'}>{serialLabel}: {serialValue}<hr className="hrBg" /></span>
                <p className={'h5 fw-bold text-uppercase'}>{projectValue}</p>

                <table>
                    <tbody>
                        <TableRow
                            label={projectScopeLabel}
                            value={projectScopeValue} />
                        <TableRow
                            label={clientLabel}
                            value={clientValue} />
                        <TableRow
                            label={shippingAddressLabel}
                            value={shippingAddressValue} />
                    </tbody>
                </table>
            </Link>
            <hr className="hrBg" />
            <span className="d-flex justify-content-between align-items-center">
                <span className="text-secondary">{actionLabel}</span>
                <span className="d-flex">
                    <SwitchButton
                        checked={activeStatus}
                        onClick={
                            switchButtonOnClick
                        } />
                    <IconButton onClick={
                        iconButtonOnClick
                    }>
                        <EditIcon className={'iconSwitch'} />
                    </IconButton>
                </span>
            </span>
        </div>
    )
}

export default SearchProjectCard
