import React from 'react'
import { SwitchButton, IconButton, TableRow } from '../../../../components'
import { FaLock } from 'react-icons/fa';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const SearchProjectBudgetCard = (props) => {

    const {
        activeStatus,
        serialLabel,
        serialValue,
        budgetValue,
        projectScopeLabel,
        projectScopeValue,
        currencyLabel,
        currencyValue,
        projectLabel,
        projectValue,
        endDateLabel,
        endDateValue,
        actionLabel,
        switchButtonOnClick,
        iconButtonOnClick
    } = props;

    return (
        <div>
            <Link to={"/budgetitem"}>
                <p className="d-flex float-end align-content-center align-items-center">
                    <span data-bs-toggle="tooltip" data-bs-placement="right" title={'LOCKED'} className="float-end me-3"><FaLock color="rgba(138, 138, 138, 0.527)" /></span>
                    <span data-bs-toggle="tooltip" data-bs-placement="right" title={activeStatus ? "ACTIVATED" : "DE-ACTIVATED"} className={activeStatus ? "cardactive float-end" : "notactive float-end"}></span>
                </p>
                <span className={'text-secondary'}>{serialLabel}: {serialValue}<hr className="hrBg" /></span>
                <p className={'h5 fw-bold text-uppercase'}>{budgetValue}</p>
                <table>
                    <tbody>
                        <TableRow
                            label={projectScopeLabel}
                            value={projectScopeValue} />
                        <TableRow
                            label={currencyLabel}
                            value={currencyValue} />
                        <TableRow
                            label={projectLabel}
                            value={projectValue} />
                        <TableRow
                            label={endDateLabel}
                            value={endDateValue} />
                    </tbody>
                </table>
                <hr className="hrBg" />
            </Link>
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

export default SearchProjectBudgetCard