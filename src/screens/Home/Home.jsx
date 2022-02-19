import React from 'react';
import css from "./Home.module.css";
import TopBar from '../../components/TopBar/TopBar';

function Home(props) {
    return (
        <div className={css.wrapper}>
            <TopBar title={'Rewards-Employee'}/>
        </div>
        
    );
}

export default Home;