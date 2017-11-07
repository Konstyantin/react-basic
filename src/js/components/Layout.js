/**
 * Created by kostya on 07.11.17.
 */
import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {

    /**
     * Constructor
     */
    constructor() {
        super();
        this.state = {
            title: "Welcome to React!"
        };
    }

    /**
     * Change title
     *
     * @param title
     */
    changeTitle(title) {
        this.setState({title})
    }

    /**
     * Render template component
     *
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <Footer/>
            </div>
        );
    }
}

