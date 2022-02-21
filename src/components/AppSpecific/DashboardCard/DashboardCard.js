import React from 'react'
import '../../../styles/DashboardCard.css';

const DashboardCard = (props) => {
    const {
        cardtitle,
        count,
        percentage,
        days,
        color,
    } = props;
    return (
        <div className="col-md-6 mb-4 stretch-card transparent">
            <div className="card card-tale" style={{ backgroundColor: color }}>
                <div className="card-body">
                    <p className="mb-3" style={{ fontSize: '1rem', lineHeight: '1.3rem' }}>{cardtitle}</p>
                    <p className="mb-2" style={{ fontSize: '30px' }}>{count}</p>
                    <p>{percentage}({days})</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard;