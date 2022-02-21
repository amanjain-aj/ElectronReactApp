import React from "react";
import  "../../../styles/NotificationMenu.css"
import Avatar from "@mui/material/Avatar";



const data = [
    {
        id: 1,
        Image: 'https://picsum.photos/200/200',
        message: 'Satish Downey Joined.',
        time: '2hrs ago'
    },
    {
        id: 2,
        Image: 'https://picsum.photos/201/201',
        message: 'Paresh Joined',
        time: '3hrs ago'
    },
    {
        id: 3,
        Image: 'https://picsum.photos/203/203',
        message: 'Invincix created a new order Invincix created a new order',
        time: '1hrs ago'
    },
    {
        id: 4,
        Image: 'https://picsum.photos/204/204',
        message: 'Venkat Joined',
        time: '5hrs ago'
    },
    {
        id: 5,
        Image: 'https://picsum.photos/205/205',
        message: 'Venkat Joined',
        time: '5hrs ago'
    },
    {
        id: 6,
        Image: 'https://picsum.photos/206/206',
        message: 'Venkat Joined',
        time: '5hrs ago'
    },
    {
        id: 7,
        Image: 'https://picsum.photos/207/207',
        message: 'Venkat Joined',
        time: '5hrs ago'
    },
    {
        id: 8,
        Image: 'https://picsum.photos/208/208',
        message: 'Venkat Joined',
        time: '5hrs ago'
    },
    {
        id: 9,
        Image: 'https://picsum.photos/209/209',
        message: 'Venkat Joined',
        time: '5hrs ago'
    },
    {
        id: 10,
        Image: 'https://picsum.photos/210/210',
        message: 'Venkat Joined',
        time: '5hrs ago'
    }
]


export const Message = ({ ...props }) => {

    const {
        Image,
        message,
        time,
    } = props;
    return (
        <div className='notimenu'>
            <div className='avatardiv'>
                <Avatar
                    alt="Remy Sharp"
                    src={Image}
                    sx={{ width: 30, height: 30, }}
                />
            </div>
            <div className='message'>
                <label className='massagelabel'>{message}</label>
                <label className='lastseen'>{time}</label>
            </div>
            <div className='onlinebutton'></div>
        </div>
    )
}

const NotificationMenu = ({ closeModal = () => { } }) => {
    return (
        <div className="modalbackground" onClick={() => closeModal(false)}>
            <div className="modalcontainer">
                <div className="closeicondiv">
                    <h4>Notifications</h4>
                </div>
                <div className='messagediv'>
                    {data.map((data, index) => {
                        return (
                            <Message
                                key={index}
                                Image={data.Image}
                                message={data.message}
                                time={data.time}
                            />
                        )
                    })}
                </div>
                <div className='seeactivitydiv'>
                    <h6>See All Activity</h6>
                </div>

            </div>
        </div>
    )
}

export default NotificationMenu;
