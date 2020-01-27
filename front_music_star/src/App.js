import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./LoginGoogle";
import Profile from "./Profile";
import Nav from "./Nav";

class App extends Component {
    render() {
        return ( <
            >
            <
            Nav auth = { this.auth }
            />{" "} <
            div className = "body" >
            <
            Route path = "/"
            exact render = {
                props => < Home auth = { this.auth } {...props }
                />} /
                >
                <
                Route path = "/profile"
                component = { Profile }
                />{" "} <
                /div>{" "} <
                />
            );
        }
    }
    export default App;