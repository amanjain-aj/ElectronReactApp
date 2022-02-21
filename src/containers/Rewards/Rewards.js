import React from 'react'
import peopleimage from "../../assets/images/people.svg";
import '../../styles/Dashboard.css';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { DashboardCard, ProcessbarTd } from '../../components';
import 'rsuite/dist/rsuite.min.css';
import Chip from '@mui/material/Chip';
import Shape from '../../assets/images/shape.svg';
import Avatar from '@mui/material/Avatar';
import Amazon from '../../assets/images/amazon.png';
import BookMyShow from '../../assets/images/bookmyshow.webp';
import Uber from "../../assets/images/uber.jpg";
import Paytm from "../../assets/images/paytm.png";
import Zomato from "../../assets/images/zomato.png";
import NotificationCard from '../../components/common/NotificationCard';
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
        cardTitle: 'Amazon Gift Card',
        cardImage: Amazon
    },
    {
        key: 2,
        cardTitle: 'BookMyShow',
        cardImage: BookMyShow
    },
    {
        key: 3,
        cardTitle: 'Uber',
        cardImage: Uber
    },
    {
        key: 4,
        cardTitle: 'Zomato',
        cardImage: Zomato
        },
     {
        key: 5,
        cardTitle: 'Paytm',
        cardImage: Paytm
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
                <div class="container">
                        <div className='row'>
                    <h1>Rewards</h1>
                          
                            {Cards.map((data, index) => {
                                return (
                                    <DashboardCard
                                        cardtitle={data.cardTitle}
                                        cardImage={data.cardImage}
                                    />
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