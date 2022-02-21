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
                    <div style={{width: "100px",height: '100px',objectFit: 'cover'}}>
                         <img src={cardImage} style={{width:'100%',height:'100%'}}/>
                    </div>
                    <p style={{ fontSize: '1rem', lineHeight: '1.3rem' ,color: "#000",marginLeft: "15px",textAlign:'center'}}>{cardtitle}</p>
                </div>
            </div>
            </div>
        
    )
}

export default DashboardCard;