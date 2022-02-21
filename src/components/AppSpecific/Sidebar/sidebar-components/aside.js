import React from "react";
import Strings from "../../../../translations";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  // SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import "../Sidebar.css"
import {
  FaTachometerAlt,
  FaRegLaughWink,
  FaUserTie,
  FaUserEdit,
} from "react-icons/fa";
import {
  AiOutlineShop,
  AiOutlineFundProjectionScreen,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router'
// import { FormControl, InputLabel, Select } from "@material-ui/core";
// import { colors } from "../../../../configs";
import { RiEnglishInput } from "react-icons/ri";
import { MdLanguage } from "react-icons/md"

const Aside = ({
  // image,
  collapsed,
  rtl,
  toggled,
  handleToggleSidebar = () => {
    console.log("lo");
  },

}) => {
  const sideBarUser = Strings["Navigation.SidebarUser"],
    sideBarAlluser = Strings["Navigation.SidebarUserAllUser"],
    SideBarVendor = Strings["Navigation.SideBarVendor"],
    SideBarVendorAllVendor = Strings["Navigation.SideBarVendorAllVendor"],
    SideBarClient = Strings["Navigation.SideBarClient"],
    SideBarClientAllClient1 = Strings["Navigation.SideBarClientAllClient1"],
    SideBarClientAllClient2 = Strings["Navigation.SideBarClientAllClient2"],
    SideBarClientAllClient3 = Strings["Navigation.SideBarClientAllClient3"],
    SideBarClientAllClient4 = Strings["Navigation.SideBarClientAllClient4"],
    SideBarDashBoard = Strings["Navigation.SideBarDashBoard"],
    SideBarProject = Strings["Navigation.SideBarProject"],
    SideBarProjectAllProject = Strings["Navigation.SideBarProjectAllProject"],
    SidebarMasterConfiguration =
      Strings["Navigation.SidebarMasterConfiguration"],
    SideBarAccount = Strings["navigation.SideBarAccount"],
    SidebarLogout = Strings["Navigation.SideBarLogout"],
    vendorCompanyType = Strings["VendorCompanyType.DashboardTitle"],
    VendorCategory = Strings['Navigation.VendorCategory'],
    VendorSubCategory = Strings['Navigation.VendorSubCategory'],
    Language = Strings['Navigation.Language'],
    LanguageEnglish = Strings['Navigation.LanguageEnglish'],
    LanguageHindi = Strings['Navigation.LanguageHindi'],
    LanguageArbic = Strings['Navigation.LanguageArbic'],
    OngoingProject = Strings['Navigation.OngoingProject'],
    CancelledProject = Strings['Navigation.CancelledProject'],
    CompletedProject = Strings['Navigation.CompletedProject']

  let history = useHistory();
  return (
    <div style={{ zIndex: 3 }}>

      <ProSidebar
        image={false}
        rtl={rtl}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        {/* <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center'
          }}
        >
          {
            !collapsed ? 'FURNISH' : 'FUR...'
          }
        </div>
      </SidebarHeader> */}

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}
            // suffix={<span className="badge red">New</span>}
            >
              <Link to='/dashboard'> {SideBarDashBoard}</Link>

            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
            
              title={sideBarUser}
              icon={<FaRegLaughWink />}
            >
              <MenuItem>
                <Link to="">{sideBarAlluser}</Link>
              </MenuItem>
            </SubMenu>
            <SubMenu title={SideBarVendor} icon={<AiOutlineShop />}>
             <MenuItem>
                <Link to="">{SideBarVendorAllVendor}</Link>
              </MenuItem>
            </SubMenu>
            <SubMenu title={SideBarClient} icon={<FaUserTie />}>
              <MenuItem>
                <Link to="">{SideBarClientAllClient1}</Link>
              </MenuItem>
               <MenuItem>
                <Link to="">{SideBarClientAllClient2}</Link>
              </MenuItem>
               <MenuItem>
                <Link to="">{SideBarClientAllClient3}</Link>
              </MenuItem>
               <MenuItem>
                <Link to="/rewards">{SideBarClientAllClient4}</Link>
              </MenuItem>
            </SubMenu>
           
          
          </Menu>
        </SidebarContent>

        <SidebarFooter>
          <Menu iconShape="circle">
          
          </Menu>
       
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Aside;