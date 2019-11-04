import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'

import AdminLayout from "./layout/admin/Admin.js";
import ContaLayout from "./layout/conta/Conta.js";

const hist = createBrowserHistory();


ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />} />
            <Route path="/conta" render={props => <ContaLayout {...props} />} />
            <Redirect to="/conta/login" />
        </Switch>
    </Router>
, document.getElementById('root'));
