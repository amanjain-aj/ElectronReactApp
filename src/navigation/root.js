import React from 'react'
import { Route, Switch } from "react-router-dom";
import { LoginPage, ChangePasswordPage, ForgotPasswordPage, ConfirmForgotPasswordPage, ComingSoonPage,Dashboard,Rewards } from '../containers';

export default function Routes(props) {

    return (
        <Switch>
            <Route exact path="/" ><Dashboard /></Route>
             <Route exact path="/rewards" ><Rewards /></Route>
        </Switch>
    );
}
