import React from 'react'
import { SwitchButton, IconButton, TableRow } from '../../../../components'

import EditIcon from '@mui/icons-material/Edit';

const SearchItemSubmittalCard = (props) => {
    const {
        activeStatus,
        serialLabel,
        serialValue,
        itemTypeLabel,
        itemTypeValue,
        DescriptionLabel,
        DescriptionValue,
        uploadLabel,
        uploadValue,
        actionLabel,
        switchButtonOnClick,
        iconButtonOnClick
    } = props;
    return (
        <div>
            <p className="d-flex float-end align-content-center align-items-center">
                <span
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title={activeStatus ? "ACTIVATED" : "DE-ACTIVATED"}
                    className={activeStatus ? "cardactive float-end" : "notactive float-end"}>

                </span>
            </p>
            <span className={'text-secondary'}>
                {serialLabel}: {serialValue}
                <hr className="hrBg" />
            </span>
            <p className={'h5 fw-bold text-uppercase'}>
                {itemTypeLabel}: {itemTypeValue}
            </p>
            <table>
                <tbody>
                    <TableRow
                        label={DescriptionLabel}
                        value={DescriptionValue} />
                    <TableRow
                        label={uploadLabel}
                        value={uploadValue} />
                </tbody>
            </table>
            <hr className="hrBg" />
            <span
                className="d-flex justify-content-between align-items-center">
                <span className="text-secondary">
                    {actionLabel}
                </span>
                <span className="d-flex">
                    <SwitchButton
                        checked={activeStatus}
                        onClick={
                            // () => {
                            // handleChangeActiveStatus(submitalData.id)
                            // }
                            switchButtonOnClick
                        } />
                    <IconButton onClick={
                        // () => {
                        // openAddModal()
                        // handleSelectBtn('edit')
                        // setCurrentUserType(submitalData)
                        // }
                        iconButtonOnClick
                    }>
                        <EditIcon className={'iconSwitch'} />
                    </IconButton>
                </span>
            </span>
        </div>
    )
}

export default SearchItemSubmittalCard
