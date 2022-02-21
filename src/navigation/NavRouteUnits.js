import React, { useState } from 'react'
import { Routes } from './../navigation';
import { Sidebar, Navbar, ProcessbarTd } from '../components';
import { useLocation } from "react-router-dom";
import { colors } from '../configs';
import { Doughnut } from 'react-chartjs-2';

const ProcessData = [{
    label: 'Total',
    percent: '100',
    color: colors.primary,
    data: '100',
},
{
    label: 'Ongoing',
    percent: '30',
    color: '#FFC100',
    data: '30',
},
{
    label: 'Completed',
    percent: '40',
    color: colors.success,
    data: '40',
},
{
    label: 'Cancelled',
    percent: '30',
    color: colors.danger,
    data: '30',
},
];

const Doughnutdata = {
    labels: ['Total', 'Ongoing', 'Completed', 'Cancelled'],
    datasets: [
        {
            label: 'Doughnut Reprsesntation',
            data: [100, 30, 40, 30],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                colors.primary
            ],
            borderWidth: 0,
        },
    ],
};

export default function NavRouteUnits(props) {

    const scrollRef = React.useRef(null);
    const { isLogin } = props
    const { pathname } = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(true);
    const handleToggleSidebar = (value) => {
        setCollapsed(value)
        setToggled(value);
    };
    React.useEffect(() => {
        scrollRef.current.scrollTo(0, 0);
    }, [pathname])

    return (
        <>
            <Navbar handleToggleSidebar={handleToggleSidebar} collapsed={collapsed} />
            <section style={{ display: 'flex', flexDirection: 'row', height: 'calc(100vh - 65px)' }}>
                <Sidebar
                    collapsed={collapsed}
                    toggled={toggled}
                    handleToggleSidebar={handleToggleSidebar}
                />
                <main ref={scrollRef} style={{ display: 'flex', flex: 1, flexDirection: 'column', overflow: 'auto' }}>
                    <Routes isLogin={isLogin} />
                </main>
                
                  
                
            </section>
        </>
    );
}
