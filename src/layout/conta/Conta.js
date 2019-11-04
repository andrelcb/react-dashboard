import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import routes from "../../routes.js";

import './styles.css'
export default class Conta extends Component {

    render() {
        return (
            <div className="mainConta">
                <Container>
                    <Switch>
                        {routes.map((prop, key) => {
                            return (
                                <Route
                                    path={prop.layout + prop.path}
                                    component={prop.component}
                                    key={key}
                                />
                            );
                        })}
                    </Switch>
                </Container>
            </div>
        );
    }
}