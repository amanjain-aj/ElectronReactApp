import React from 'react'
import Avatar from '@mui/material/Avatar';


const NotificationCard = (props) => {
    const {
        username,
        description,
        time,
        image,
    } = props;

    return (
        <div class="d-flex mb-3">
            <div className='me-3'>
                <Avatar alt="Remy Sharp" src={image} />
            </div>
            <div>
                <p class="text-info mb-1">{username}</p>
                <p class="mb-0">{description}</p>
                <small>{time}</small>
            </div>
        </div>
    )
}

export default NotificationCard
