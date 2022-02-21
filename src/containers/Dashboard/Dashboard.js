import React from 'react'
import peopleimage from "../../assets/images/people.svg";
import '../../styles/Dashboard.css';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { DashboardCard, ProcessbarTd } from '../../components';
import 'rsuite/dist/rsuite.min.css';
import Chip from '@mui/material/Chip';
import Shape from '../../assets/images/shape.svg';
import Avatar from '@mui/material/Avatar';
import NotificationCard from '../../components/common/NotificationCard';
import Button from "../../components/common/Button";
import Amazon from '../../assets/images/amazon.png';
import BookMyShow from '../../assets/images/bookmyshow.webp';
import Uber from "../../assets/images/uber.jpg";
import Paytm from "../../assets/images/paytm.png";
import Zomato from "../../assets/images/zomato.png";
import { BiCopy } from 'react-icons/bi'; 
import { FaStar } from 'react-icons/fa'; 
import { GiPartyPopper } from 'react-icons/gi';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
} from 'chart.js';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import faker from 'faker';
import Moment from 'react-moment';
import strings from '../../translations'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
);

export const options = {
    responsive: true,
    tension: 1,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart Heading',
        },
    },
};

export const Baroptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const Barlabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};


export const Bardata = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235)',
        },
    ],
};

export const Doughnutdata = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Doughnut Reprsesntation',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)',
            // ],
            borderWidth: 0,
            // hoverOffset: 4
        },
    ],
};



const Dashboard = () => {
    // ChartJS.defaults.global.elements.line.tension = 0.2;


    const Cards = [{
        key: 1,
        cardTitle: 'Amazon Gift Card worth Rs.2000',
        cardImage: Amazon,
        cardSubCaption: 'Use the code given below to redeem:',
        cardFooter: 'Expiry Date: 24th August 2021',
        link: 'https://www.giftcards.com/'
    },
    {
        key: 2,
        cardTitle: 'BookMyShow Gift Card worth Rs.2000',
        cardImage: BookMyShow,
         cardSubCaption: 'Use the code given below to redeem:',
        cardFooter: 'Expiry Date: 24th August 2021',
        link: 'https://www.giftcards.com/'
    },
    {
        key: 3,
        cardTitle: 'Uber Gift Card worth Rs.2000',
        cardImage: Uber,
         cardSubCaption: 'Use the code given below to redeem:',
        cardFooter: 'Expiry Date: 24th August 2021',
        link: 'https://www.giftcards.com/'
    },
    {
        key: 4,
        cardTitle: 'Zomato',
        cardImage: Zomato,
         cardSubCaption: 'Use the code given below to redeem',
        cardFooter: 'Expiry Date: 24th August 2021',
        link: 'https://www.giftcards.com/'
        },
     {
        key: 5,
        cardTitle: 'Paytm',
         cardImage: Paytm,
         cardSubCaption: 'Use the code given below to redeem:',
         cardFooter: 'Expiry Date: 24th August 2021',
         link: 'https://www.giftcards.com/'
    },
    ]

    const Achievers = [{
        key: 1,
        cardTitle: 'Best Employee of the Year',
        cardImage: Uber,
        cardSubCaption: 'Paresh Sahoo',
        cardFooter: 'Mobility',
        color: '#ffc107'
       
    },
    {
        key: 2,
        cardTitle: 'All-Rounder of the Year',
        cardImage: Uber,
         cardSubCaption: 'Aditya Jena',
        cardFooter: 'Mobility Lead',
        color: '#575757'
    },
    {
        key: 3,
        cardTitle: 'Best Personality of the Year',
        cardImage: Uber,
        cardSubCaption: 'Venkat',
        cardFooter: 'Mobility',
        color: '#945b00'
    },
    
    ]

    const ProcessData = [{
        label: 'Illinois',
        percent: '40',
        color: '#ffc107',
        data: '713',
    },
    {
        label: 'Washington',
        percent: '30',
        color: '#FFC100',
        data: '583',
    },
    {
        label: 'Mississippi',
        percent: '30',
        color: '#FF4747',
        data: '924',
    },
    {
        label: 'California',
        percent: '50',
        color: '#4B49AC',
        data: '664',
    },
    {
        label: 'Maryland',
        percent: '100',
        color: '#248AFD',
        data: '560',
    },
    {
        label: 'Alaska',
        percent: '80',
        color: '#248AFD',
        data: '793',
    },
    {
        label: 'Nandankanan',
        percent: '60',
        color: '#21fce3',
        data: '793',
    },
    {
        label: 'Khandagiri',
        percent: '80',
        color: '#9316f2',
        data: '793',
    },
    ];

    const notificationData = [
        {
            username: 'Isabella Becker',
            description: 'You have done a great job #TW111',
            time: '9: 30 am',
            image: 'https://picsum.photos/200/300',
        },
        {
            username: 'Adam Warren',
            description: 'Sales dashboard have been created',
            time: '5: 30 am',
            image: 'https://picsum.photos/200/300',
        },
        {
            username: 'Leonard Thornton',
            description: 'You have done a great job #TW111',
            time: '6: 00 am',
            image: 'https://picsum.photos/200/300',
        },
        {
            username: 'George Morrison',
            description: 'Sales dashboard have been created',
            time: '8: 20 am',
            image: 'https://picsum.photos/200/300',
        },
        {
            username: 'Ryan Cortez',
            description: 'Herbs are fun and easy to grow.',
            time: '9: 30 am',
            image: 'https://picsum.photos/200/300',
        },


    ]

    const dateToFormat = new Date();
   
    //Translation-varible
    const welcomeMessage = strings["Dashboard.welcomeMessage"],
        welcomeMessageInfo = strings["Dashboard.welcomeMessageInfo"],
        welcomeMessageInfosub = strings["Dashboard.welcomeMessageInfosub"],
        city = strings["Dashboard.city"],
        Weathercountry = strings['Dashboard.Weathercountry'],
        OrderDetails = strings['Dashboard.OrderDetails'],
        OrderDetailsInfo = strings['Dashboard.OrderDetailsInfo'],
        Ordervalue = strings['Dashboard.Ordervalue'],
        Orders = strings['Dashboard.Orders'],
        Users = strings['Dashboard.Users'],
        Downloads = strings['Dashboard.Downloads'],
        SalesReport = strings['Dashboard.SalesReport'],
        ViewAll = strings['Dashboard.ViewAll'],
        SalesReportInfo = strings['Dashboard.SalesReportInfo'],
        DetailedReports = strings['Dashboard.DetailedReports'],
        Detailedcountry = strings['Dashboard.Detailedcountry'],
        DetailedReportsPara1 = strings['Dashboard.DetailedReportsPara1'],
        DetailedReportsPara2 = strings['Dashboard.DetailedReportsPara2'],
        TopProducts = strings['Dashboard.TopProducts'],
        TopProductsProduct = strings['Dashboard.TopProductsProduct'],
        TopProductsPrice = strings['Dashboard.TopProductsPrice'],
        TopProductsDate = strings['Dashboard.TopProductsDate'],
        TopProductsStatus = strings['Dashboard.TopProductsStatus'],
        SearchEngineMarketing = strings['Dashboard.SearchEngineMarketing'],
        SearchEngineOptimization = strings['Dashboard.SearchEngineOptimization'],
        DisplayAdvertising = strings['Dashboard.DisplayAdvertising'],
        PayPerClickAdvertising = strings['Dashboard.PayPerClickAdvertising'],
        EMailMarketing = strings['Dashboard.EMailMarketing'],
        ReferralMarketing = strings['Dashboard.ReferralMarketing'],
        Socialmediamarketing = strings['Dashboard.Socialmediamarketing'],
        NumberofMeetings = strings['Dashboard.NumberofMeetings'],
        NumberofMeetingsInfo = strings['Dashboard.NumberofMeetingsInfo'],
        Projects = strings['Dashboard.Projects'],
        ProjectsPlaces = strings['Dashboard.ProjectsPlaces'],
        ProjectsOrders = strings['Dashboard.ProjectsOrders'],
        ProjectsUsers = strings['Dashboard.ProjectsUsers'],
        Charts = strings['Dashboard.Charts'],
        Notifications = strings['Dashboard.Notifications']

    return (
        <>
             <div className='content-wrapper'>
                <div className="container">
                        <div className='row'>
                    <h1 style={{fontSize: "25px"}}>Your Rewards</h1>
                        {Cards.map((data, index) => {
                            return (
                                <div className="col-md-4">
                                    <div className="reward-card">
                                        <div className="align-items-center card-body d-flex">
                                            <div style={{ width: "50px", height: '50px', objectFit: 'cover' }}>
                                                <img src={data.cardImage} style={{ width: '100%', height: '100%' }} />
                                            </div>
                                            <p style={{ fontSize: '1rem', lineHeight: '1.3rem', color: "#000", marginLeft: "15px", textAlign: 'left' }}>{data.cardTitle}</p>
                                        </div>
                                        <div className='reward-body' style={{ padding: "20px",color: "#000"}}>
                                            <p>{data.cardSubCaption}</p>
                                            <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between', marginTop: "10px"}}>
                                                <p style={{fontWeight: 'bold'}}>{data.link}</p><BiCopy style={{marginTop: '5px'}}/>
                                            </div>
                                        </div>
                                        <div className="reward-footer" style={{ padding: "20px",color: "#ff1604"}}>
                                            <p>{data.cardFooter}</p>
                                        </div>  
                                    </div>
                                </div>

                            )
                        })    
                    }
                            
                        
                    </div>
                    <div className='row'>
                        <h1 style={{ fontSize: "25px" }}>Achievers of the Year</h1>
                        {
                            Achievers.map((data, index) => {
                                return (
                                     <div className="col-md-4">
                            <div className='achiever-card'>
                                <div className='achiever-top'>
                                                <h1 style={{ fontSize: "18px" }}>{data.cardTitle }</h1>
                                    <FaStar size={20} color={data.color}/>
                                </div>
                                <div className='achiever-body'>
                                    <div className="align-items-center card-body d-flex">
                                            <div style={{ width: "50px", height: '50px', objectFit: 'cover' }}>
                                                <img src={data.cardImage} style={{ width: '100%', height: '100%' }} />
                                        </div>
                                        <div>
                                                        <p style={{ fontSize: '1rem', lineHeight: '1.3rem', color: "#000", marginLeft: "15px", textAlign: 'left' }}>{data.cardSubCaption}</p>
                                                        <p style={{ fontSize: '1rem', lineHeight: '1.3rem', color: "#000", marginLeft: "15px", textAlign: 'left' }}>{ data.cardFooter}</p>
                                            </div>
                                    </div>
                                    <div className='achiever-footer'>
                                          <Button
                                            buttonName="Send Congratulations"
                                            onClick={() => {
                                               alert('congratulation sent!')
                                            }}
                                            buttonStyle={{ backgroundColor: "transparent", border: "1px solid #000", width: "100%" }}
                                            textStyle={{color: "#000"}}
                                            icon={<GiPartyPopper color={"#ffc107"} style={{marginRight: "5px"}}/>}
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                                )
                                   
                            })
                        }
                    
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard;