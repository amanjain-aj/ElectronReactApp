import React from 'react'
import { SwitchButton, IconButton, TableRow } from '../../../../components'
import EditIcon from '@mui/icons-material/Edit';

const SearchPurchaseOrderCard = (props) => {

    const {
        activeStatus,
        serialLabel,
        serialValue,
        purchaseOrderValue,
        statusLabel,
        statusValue,
        referredRRQlabel,
        referredRRQValue,
        referredQuotationLabel,
        referredQuotationValue,
        vendorLabel,
        vendorValue,
        uploadSignedPoLabel,
        uploadSignedPoValue,
        actionLabel,
        switchButtonOnClick,
        iconButtonOnClick,
    } = props;

    return (
        <div>
            <p className="d-flex float-end align-content-center align-items-center">
                <span data-bs-toggle="tooltip" data-bs-placement="right" title={activeStatus ? "ACTIVATED" : "DE-ACTIVATED"} className={activeStatus ? "cardactive float-end" : "notactive float-end"}></span>
            </p>
            <span className={'text-secondary'}>{serialLabel}: {serialValue}<hr className="hrBg" /></span>
            <p className={'h5 fw-bold text-uppercase'}>{purchaseOrderValue}</p>
            <table>
                <tbody>
                    <TableRow
                        label={statusLabel}
                        value={statusValue} />
                    <TableRow
                        label={referredRRQlabel}
                        value={referredRRQValue} />
                    <TableRow
                        label={referredQuotationLabel}
                        value={referredQuotationValue} />
                    <TableRow
                        label={vendorLabel}
                        value={vendorValue} />
                    <TableRow
                        label={uploadSignedPoLabel}
                        value={uploadSignedPoValue} />
                </tbody>
            </table>
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

export default SearchPurchaseOrderCard
