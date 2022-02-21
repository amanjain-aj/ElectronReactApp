import React from 'react'
import { Chip } from '.'
import { IconButton, SwitchButton } from '../../components'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { colors } from '../../configs';
// import "./../../styles/table.css";
const Temp = () => {
    return (
        <h1>dsada</h1>
    )
}
const BodyData = ({ bodyData, editOnClick, isEdit, isSwitch, isDelete, swichOnClick, deleteOnClick }) => {
    return (
        <tr className='tablerow' >
            {
                Object.keys(bodyData)
                    .filter((data) => {
                        return data !== 'id'
                    })
                    .map((d, index) => {
                        return (
                            <td
                                className='align-middle tabledata'
                                key={Math.random() * 10000}
                                style={{ wordWrap: "break-word" }}>
                                {
                                    typeof bodyData[d] === 'object' ?
                                        bodyData[d].comp && bodyData[d].component
                                        :
                                        bodyData[d]
                                }
                            </td>)
                    })
            }
            {
                (isEdit || isSwitch || isDelete) &&

                <td>
                    {
                        isEdit &&
                        <IconButton
                            onClick={
                                () => { editOnClick(bodyData.id) }
                            }>
                            <EditIcon />
                        </IconButton>
                    }
                    {
                        isSwitch && <SwitchButton
                            checked={bodyData.activeStatus}
                            onClick={
                                () => { swichOnClick(bodyData.id) }
                            } />
                    }
                    {
                        isDelete &&
                        <IconButton onClick={
                            () => { deleteOnClick(bodyData.id) }
                        }>
                            <DeleteIcon sx={{ color: colors.danger }} />
                        </IconButton>
                    }

                </td>
            }
        </tr >
    )
}

const Table = (props) => {
    const {
        theadData,
        tbodyData,
        fields,
        isEdit,
        isSwitch,
        isDelete,
        deleteOnClick = () => { alert('functionality not implemented') },
        editOnClick = () => { alert('functionality not implemented') },
        swichOnClick = () => { alert('functionality not implemented') }
    } = props

    const bodyData = () => {
        const resultArray = []
        tbodyData.forEach((data) => {
            const result = {}
            for (let prop in data) {
                if (fields.includes(prop)) {
                    result[prop] = data[prop]
                }
            }
            resultArray.push(result)
        })
        return resultArray
    }

    const res = bodyData()

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        {
                            theadData.map((head) => {
                                return <th key={Math.random() * 10000}>{head.label}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        res.map((bodyData, ind) => {
                            return (
                                <BodyData
                                    key={Math.random() * 10000}
                                    bodyData={bodyData}
                                    editOnClick={editOnClick}
                                    swichOnClick={swichOnClick}
                                    deleteOnClick={deleteOnClick}
                                    isSwitch={isSwitch}
                                    isDelete={isDelete}
                                    isEdit={isEdit} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
// = ["name", "clientType", "address", "country", "phone", "email", "activeStatus", "id"]
// = [
// {
//     id: 1,
//         name: 'type 1',
//         actSta: {
//         comp: true,
//             component: funcnName()
//             },
//             clientType: 'test Description 1', address: 'test sdsdd', country: "india", phone: "8790264513", email: 'email@email.com', activeStatus: true
// },
        //     { id: 2, name: 'type 2', clientType: 'test Description 2', address: 'test', country: "india", phone: "8790264513", email: 'email@email.com', activeStatus: false },
        //     { id: 3, name: 'type 3', clientType: 'test Description 3', address: 'test', country: "india", phone: "8790264513", email: 'email@email.com', activeStatus: true },
        //     { id: 4, name: 'type 4', clientType: 'test Description 4', address: 'test', country: "india", phone: "8790264513", email: 'email@email.com', activeStatus: false },
        //     { id: 5, name: 'type 5', clientType: 'test Description 5', address: 'test', country: "india", phone: "8790264513", email: 'email@email.com', activeStatus: true },
        //     { id: 6, name: 'type 6', clientType: 'test Description 6', address: 'test', country: "india", phone: "8790264513", email: 'email@email.com', activeStatus: false },
        // ]
         // = [
        //     {
        //         id: 'name',
        //         label: 'Name',
        //     },
        //     {
        //         id: 'clientType',
        //         label: 'Client Type',
        //     },
        //     {
        //         id: 'address',
        //         label: 'Address',
        //     },

        //     {
        //         id: 'country',
        //         label: 'Country',
        //     },
        //     {
        //         id: 'phone',
        //         label: 'Phone',
        //     },
        //     {
        //         id: 'email',
        //         label: 'Email',
        //     },
        //     {
        //         id: 'activeStatus',
        //         label: 'Active Status',
        //     },
        //     {
        //         id: 'Actions',
        //         label: 'Actions',
        //     },
        // ]