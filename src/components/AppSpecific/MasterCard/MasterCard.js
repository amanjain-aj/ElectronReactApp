import React from "react";
import { Link } from "react-router-dom";

const MasterCard = (props) => {
  const { master, logo, path, text, onClick = () => {} } = props;
  return (
    <Link to={{ pathname: "/masterdetails", state: { masterId: master.id } }}>
      <div className="masterCardContainer" onClick={onClick}>
        <div className="masterCardLogo">
          <i class={logo ? logo : "bi bi-bell"}></i>
          {/* {logo} */}
        </div>
        <label className="masterCardLabel">{text}</label>
      </div>
    </Link>
  );
};

export default MasterCard;
