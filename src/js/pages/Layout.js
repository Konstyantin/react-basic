/**
 * Created by kostya on 07.11.17.
 */
import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
    navigate() {
        this.props.history.pushState(null, "/");
    }

    /**
     * Render template component
     *
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <h1>Layout!</h1>
                {this.props.children}
                <Link to="archives"><button class="btn btn-default">Archives</button></Link>
                <Link to="settings"><button class="btn btn-default">Setting</button></Link>
                <button onClick={this.navigate.bind(this)} class="btn btn-default">Feature</button>
            </div>
        );
    }
}

