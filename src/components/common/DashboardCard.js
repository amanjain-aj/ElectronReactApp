import React from 'react'
import '../../styles/DashboardCard.css';

const DashboardCard = (props) => {
    const {
        cardtitle,
        cardImage,
    } = props;
    return (
            
            <div className='col-md-4'>
            <div className="card card-tale" style={{ backgroundColor: "#ffffff" }}>
            <div className="align-items-center card-body d-flex">
                    <img src={cardImage} style={{width:'3rem',height:'3rem'}}/>
                    <p className="mb-3" style={{ fontSize: '1rem', lineHeight: '1.3rem' ,color: "#000",marginLeft: "5px",textAlign:'center'}}>{cardtitle}</p>
                </div>
            </div>
            </div>
        
    )
}

export default DashboardCard;