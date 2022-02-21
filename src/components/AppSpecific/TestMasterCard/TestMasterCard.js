import React from "react";
import { Link } from "react-router-dom";

const TestMasterCard = (props) => {
  const { logo, path, text, onClick = () => {} } = props;

  return (
    <Link to={path}>
      <div className="masterCardContainer" onClick={onClick}>
        <div className="masterCardLogo">{logo}</div>
        <label className="masterCardLabel">{text}</label>
      </div>
    </Link>
  );
};

export default TestMasterCard;
