import React from 'react'
import { Table } from 'rsuite';
import { Column, Cell, HeaderCell, } from 'rsuite-table';
import { colors } from '../../../../configs';
// import { colors } from '../../../../configs';

const RequestForInformationTable = (props) => {

    const {
        data,
        mapableData,
    } = props;

    return (
        <div>
            <Table
                style={{ borderRadius: 10 }}
                id="table"
                data={data}
                rowHeight={50}
                headerHeight={50}
            >
                {
                    mapableData.map((item, index) => {
                        return (
                            <Column minWidth={130} flexGrow={1} key={index}>
                                <HeaderCell
                                    style={{ color: colors.primary, fontWeight: 900, fontSize: 'larger' }}>
                                    {item.title}
                                </HeaderCell>
                                <Cell dataKey={item.dataKey} />
                            </Column>)

                    })
                }
            </Table>
        </div>
    )
}

export default RequestForInformationTable
