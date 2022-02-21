import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBell } from 'react-icons/fa'
import { HiMenuAlt1 } from 'react-icons/hi'
import { logoRect, logosm } from '../../../assets'
import { NotificationMenu } from "../index";
import { FormDropDown, IconButton } from "../../../components"
import { colors } from '../../../configs'
import { useHistory, useLocation } from 'react-router'
import { BsSearch } from 'react-icons/bs'
import '../../../styles/searchbar.css'
import _ from 'lodash'
import Strings from '../../../translations'



export default function Navbar({ handleToggleSidebar, collapsed }) {
    // translation
    const userRole = Strings['Navbar.userRole'],
    functions = Strings['Navbar.functions'],
    roleFunctionMapping = Strings['Navbar.roleFunctionMapping'],
    userType = Strings['Navbar.userType'],
    userRoleMapping = Strings['Navbar.userRoleMapping'],
    clientType = Strings['Navbar.clientType'],
    country = Strings['Navbar.country'],
    establishment = Strings['Navbar.establishment'],
    itemCategory = Strings['Navbar.itemCategory'],
    budgetScope = Strings['Navbar.budgetScope'],
    scheduleSteps = Strings['Navbar.scheduleSteps'],
    requiredDocument = Strings['Navbar.requiredDocument'],
    modeofPayment = Strings['Navbar.modeofPayment'],
    stage = Strings['Navbar.stage'],
    vendor = Strings['Navbar.vendor'],
    user = Strings['Navbar.user'],
    projectScope = Strings['Navbar.projectScope'],
    client = Strings['Navbar.client'],
    vendorCategory = Strings['Navbar.vendorCategory'],
    vendorCompanyType = Strings['Navbar.vendorCompanyType'],
    productAndServices = Strings['Navbar.productAndServices'],
    commodityList = Strings['Navbar.commodityList'],
    vendorSubCategory = Strings['Navbar.vendorSubCategory'],
    vendorCategorytoSubCategoryMapping = Strings['Navbar.vendorCategorytoSubCategoryMapping'],
    vendorCategorytoProductMapping = Strings['Navbar.vendorCategorytoProductMapping'],
    roomTypes = Strings['Navbar.roomTypes'],
    publicArea = Strings['Navbar.publicArea'],
    currency = Strings['Navbar.currency'],
    unitofMeasurement = Strings['Navbar.unitofMeasurement'],
    requiredSubmittals = Strings['Navbar.requiredSubmittals'],
    modeofShipment = Strings['Navbar.modeofShipment'],
    locations = Strings['Navbar.locations'],
    incoterm = Strings['Navbar.incoterm'],
    accessedandConsideration = Strings['Navbar.accessedandConsideration'],
    modeOfTransportation = Strings['Navbar.modeOfTransportation'],
    budgetScopetoItemCategoryMapping = Strings['Navbar.budgetScopetoItemCategoryMapping'],
    paymentTerms = Strings['Navbar.paymentTerms'],
    finalPaymentAgainst = Strings['Navbar.finalPaymentAgainst'],
    paymentProgress = Strings['Navbar.paymentProgress'],
    userProfile = Strings['Navbar.userProfile'],
    itemGroup = Strings['Navbar.itemGroup'],
    vendorProfile = Strings['Navbar.vendorProfile'],
    clientProfile = Strings['Navbar.clientProfile'],
    vendorCompanytoCategoryMapping = Strings['Navbar.vendorCompanytoCategoryMapping']






    const [openModal, setOpenModal] = useState(false);
    const onBellClick = () => {
        setOpenModal(true);
    }
    const [masterData, setMasterData] = React.useState("")
    const history = useHistory()
    const location = useLocation()
    // console.log(location.pathname)

    const handleChangeMasterData = (path) => {
        // const path = e.target.value
        if (path.value !== '') {
            // console.log('path', path)
            setMasterData(path.value)
            history.push(`${path.value}`)
        }
    }

    const formDropDownData = [
        {
            "key": 1,
            "label": userRole,
            "value": "/master-configuration/searchrole"
        },
        {
            "key": 1,
            "label": functions,
            "value": "/master-configuration/searchfunction"
        },
        {
            "key": 1,
            "label": roleFunctionMapping,
            "value": "/master-configuration/searchmapingrolefunction"
        },
        {
            "key": 1,
            "label": userType,
            "value": "/master-configuration/searchusertype"
        },
        {
            "key": 1,
            "label": userRoleMapping,
            "value": "/master-configuration/searchuserrolemapping"
        },
        {
            "key": 1,
            "label": clientType,
            "value": "/master-configuration/searchclienttype"
        },
        {
            "key": 1,
            "label": country,
            "value": "/master-configuration/searchcountry"
        },
        {
            "key": 1,
            "label": establishment,
            "value": "/master-configuration/searchestablishment"
        },
        {
            "key": 1,
            "label": itemCategory,
            "value": "/master-configuration/itemcategory"
        },
        {
            "key": 1,
            "label": budgetScope,
            "value": "/master-configuration/budgetscope"
        },
        {
            "key": 1,
            "label": scheduleSteps,
            "value": "/master-configuration/schedulestep"
        },
        {
            "key": 1,
            "label": requiredDocument,
            "value": "/master-configuration/requireddocument"
        },
        {
            "key": 1,
            "label": modeofPayment,
            "value": "/master-configuration/modeofpayment"
        },
        {
            "key": 1,
            "label": stage,
            "value": "/master-configuration/stage"
        },
        {
            "key": 1,
            "label": vendor,
            "value": "/master-configuration/vendor"
        },
        {
            "key": 1,
            "label": user,
            "value": "/master-configuration/searchuser"
        },
        {
            "key": 1,
            "label": projectScope,
            "value": "/master-configuration/searchprojectscope"
        },
        {
            "key": 1,
            "label": client,
            "value": "/master-configuration/searchclient"
        },
        {
            "key": 1,
            "label": vendorCategory,
            "value": "/master-configuration/searchvendorcategory"
        },
        {
            "key": 1,
            "label": vendorCompanyType,
            "value": "/master-configuration/vendorcompanytype"
        },
        {
            "key": 1,
            "label": productAndServices,
            "value": "/master-configuration/productandservice"
        },
        {
            "key": 1,
            "label": commodityList,
            "value": "/master-configuration/commodities"
        },
        {
            "key": 1,
            "label": vendorSubCategory,
            "value": "/master-configuration/searchvendordubcategory"
        },
        {
            "key": 1,
            "label": vendorCategorytoSubCategoryMapping,
            "value": "/master-configuration/searchvendorcategorytosubcategorymapping"
        },
        {
            "key": 1,
            "label": vendorCategorytoProductMapping,
            "value": "/master-configuration/searchvendorcategorytoproductmapping"
        },
        {
            "key": 1,
            "label": roomTypes,
            "value": "/master-configuration/searchroomtype"
        },
        {
            "key": 1,
            "label": publicArea,
            "value": "/master-configuration/searchpublicarea"
        },
        {
            "key": 1,
            "label": currency,
            "value": "/master-configuration/searchcurrency"
        },
        {
            "key": 1,
            "label": unitofMeasurement,
            "value": "/master-configuration/searchuompage"
        },
        {
            "key": 1,
            "label": requiredSubmittals,
            "value": "/master-configuration/searchsubmitals"
        },
        {
            "key": 1,
            "label": modeofShipment,
            "value": "/master-configuration/searchmodeofshipment"
        },
        {
            "key": 1,
            "label": locations,
            "value": "/master-configuration/searchlocation"
        },
        {
            "key": 1,
            "label": incoterm,
            "value": "/master-configuration/searchincoterm"
        },
        {
            "key": 1,
            "label": incoterm,
            "value": "/master-configuration/searchincoterm"
        },
        {
            "key": 1,
            "label": accessedandConsideration,
            "value": "/master-configuration/searchacessandconsideration"
        },
        {
            "key": 1,
            "label": modeOfTransportation,
            "value": "/master-configuration/modeoftransportation"
        },
        {
            "key": 1,
            "label": budgetScopetoItemCategoryMapping,
            "value": "/master-configuration/budgetitemcategorymapping"
        },
        {
            "key": 1,
            "label": paymentTerms,
            "value": "/master-configuration/searchpaymentterms"
        },
        {
            "key": 1,
            "label": finalPaymentAgainst,
            "value": "/master-configuration/searchpaymentagainst"
        },
        {
            "key": 1,
            "label": paymentProgress,
            "value": "/master-configuration/searchpaymentprogress"
        },
        {
            "key": 1,
            "label": userProfile,
            "value": "/master-configuration/userprofile"
        },
        {
            "key": 1,
            "label": itemGroup,
            "value": "/master-configuration/itemgroup"
        },
        {
            "key": 1,
            "label": vendorProfile,
            "value": "/master-configuration/vendorprofile"
        },
        {
            "key": 1,
            "label": clientProfile,
            "value": "/master-configuration/clientprofilepage"
        },
        {
            "key": 1,
            "label": vendorCompanytoCategoryMapping,
            "value": "/master-configuration/searchvendorcompanytocategorymapping"
        },
    ]

    return (
        <>
          
            <nav style={{ zIndex: 4 }} className="navbar navbarMainContainer">
                <div className="container-fluid navbarContainer">
                    <div className="d-flex align-items-center">
                        <div className="light" onClick={() => handleToggleSidebar(!collapsed)}><HiMenuAlt1 style={{ fontSize: '1.5em' }} /></div>
                
                    </div>
                    <div className="row flex-grow-1 ps-md-5">
                        <div className="d-flex col-12">
                            <BsSearch size={'1.5em'} color={'#cecece'} />
                            <input
                                placeholder="Search"
                                className="global-search-input" />
                        </div>
                    </div>
               
                    <div className="nav-link active"><IconButton onClick={onBellClick}><FaBell size={17} color={colors.primary} /></IconButton> </div>
                </div>
            </nav>
        </>
    );
}
