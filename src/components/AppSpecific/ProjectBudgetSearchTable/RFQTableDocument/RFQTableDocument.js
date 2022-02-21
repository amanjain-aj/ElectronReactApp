import React from 'react'
import { Table, Pagination, Checkbox } from 'rsuite';
import { Column, Cell, HeaderCell, } from 'rsuite-table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { colors } from '../../../../configs'
import _ from 'lodash';
import { Chip, FormTextInput, IconButton } from '../../../../components';

const ActionCell = ({ rowData, dataKey, handleChangeDelete, handleChangeEdit, quoted, ...props }) => {

    function handleActionEdit() {
        handleChangeEdit(rowData[dataKey])
    }

    const handleActionDelete = () => {
        // handleChangeActiveStatus(rowData[dataKey])
        handleChangeDelete(rowData[dataKey])
    }

    return (
        <Cell {...props} className="link-group">
            <div style={{ margin: -10 }}>
                {
                    rowData.quoted === "No"
                        ? <>
                            <IconButton onClick={handleActionEdit}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={handleActionDelete}>
                                <DeleteIcon sx={{ color: colors.danger }} />
                            </IconButton>
                        </>
                        : <>
                            <IconButton onClick={handleActionEdit}>
                                <EditIcon />
                            </IconButton>

                        </>
                }

            </div>
        </Cell>
    );
};

const StatusCell = ({ rowData, dataKey, ...props }) => {
    return (
        <Cell {...props} className="link-group">
            <Chip
                label={rowData[dataKey] ? 'Active' : 'Inactive'}
                type={rowData[dataKey] ? 'active' : 'inactive'}
            />
        </Cell>
    )
}
const RFQTableDocument = (props) => {
    const {
        data,
        handleChangeDelete,
        handleChangeEdit,
        mapableData,
        searchProp,

    } = props;

    const [allData, setAllData] = React.useState(data);
    const [searchedData, setSearchedData] = React.useState(data);
    const [limit, setLimit] = React.useState(5);
    const [page, setPage] = React.useState(1);
    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [searchValue, setSearchValue] = React.useState({
        value: "",
        error: false,
        success: false
    })
    const [tempData] = React.useState(data);

    React.useEffect(() => {
        setAllData(data)
    }, [data])

    const buildFilter = (filter) => {
        let query = {};
        for (let keys in filter) {
            if (filter[keys].constructor === Array && filter[keys].length > 0) {
                query[keys] = filter[keys];
            }
        }
        return query;
    }

    const filterBuilderData = (data, query) => {
        let searchedData = [];
        data.forEach((item) => {
            for (let key in query) {
                if (!_.includes(searchedData, item) && item[key].toLowerCase().includes(query[key][0].toLowerCase())) {
                    searchedData.push(item)
                }
            }

        });
        return searchedData;
    };

    let filter = {};
    React.useEffect(() => {
        searchProp.forEach((e) => filter[e] = [searchValue.value]);
        setSearchedData(filterBuilderData(data, buildFilter(filter)))
    }, [searchProp, searchValue]);

    const query = buildFilter(filter);
    const handleSearch = (searchData) => {
        const data = searchData.value;
        setSearchValue(searchData);
        if (data === '') {
            setAllData(tempData)
        }
        else {
            setAllData(filterBuilderData(allData, query));
        }
    }

    const filterData = (data) => {
        const result = data.filter((v, i) => {
            const start = limit * (page - 1);
            const end = start + limit;
            return i >= start && i < end;
        })
        return result;
    }

    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const handleSortColumn = (column, type) => {

        setSortColumn(column)
        setSortType(type)

        const result = _.orderBy(allData, [column], [type]);
        setSearchedData(result);

    }

    const limitOption = (allData) => {
        const res = [];
        const length = allData.length;
        const allDataLength = length + (5 - (length % 5));
        for (let i = 5; i <= allDataLength; i += 5) {
            res.push(i)
        }
        return (res);
    }
    return (
        <div>
            <React.Fragment>
                <FormTextInput
                    type="text"
                    className="mb-3"
                    placeholder="Search anything..."
                    Value={searchValue.value}
                    onChangeText={handleSearch}
                    inputStyle={{ border: 'none' }}
                />
                <Table
                    style={{ borderRadius: 10 }}
                    height={320}
                    id="table"
                    width={'100%'}
                    data={filterData(searchedData)}
                    onSortColumn={handleSortColumn}
                    sortColumn={sortColumn}
                    sortType={sortType}
                    rowHeight={50}
                    headerHeight={50}
                >

                    {
                        mapableData.map((item, index) => {
                            return (
                                <Column minWidth={130} flexGrow={1} sortable key={index}>
                                    <HeaderCell
                                        style={{ color: colors.primary, fontWeight: 900, fontSize: 'larger' }}>
                                        {item.title}
                                    </HeaderCell>
                                    {
                                        item.hasOwnProperty('isStatus') ?
                                            <StatusCell dataKey="activeStatus" /> :
                                            item.hasOwnProperty('isAction') ?
                                                <ActionCell dataKey="id"
                                                    handleChangeDelete={handleChangeDelete}
                                                    handleChangeEdit={handleChangeEdit} /> :
                                                <Cell dataKey={item.dataKey} />
                                    }

                                </Column>)

                        })
                    }
                </Table>
                {
                    data.length > 5 &&
                    <div style={{ width: '100%' }}>
                        <Pagination
                            style={{ marginTop: 20 }}
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                            maxButtons={5}
                            size="xs"
                            layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                            total={data.length}
                            limitOptions={limitOption(data)}
                            limit={limit}
                            activePage={page}
                            onChangePage={setPage}
                            onChangeLimit={handleChangeLimit}
                        />
                    </div>
                }

            </React.Fragment>
        </div>
    )
}

export default RFQTableDocument
