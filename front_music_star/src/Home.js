import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Componen {
    constructor(props) {
        super(props);
        this.state = {
            redirecrtToReferrer: false
        };
    }

    ComponentDidMount() {
        let data = JSON.parse(sessionStorage.getItem("userData"));
        this.setState({ Name: data.userData.Name });
        this.setState({ Email: data.userData.Email });
    }

    render() {
        if (!sessionStorage.getItem("userData")) {
            return <Redirect to = { "/" }
            />;
        }
        return ( <
            div className = "row small-up-2 medium-up-3 large-up-4"
            id = "Body" >
            <
            div className = "medium-12 columns" >
            <
            h2 > Welcome { this.state.Name } < /h2> <
            /div> <
            /div>
        );
    }
}
export default Home;