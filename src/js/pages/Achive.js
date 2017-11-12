/**
 * Created by kostya on 07.11.17.
 */
import React from "react";



export default class Achive extends React.Component {
    /**
     * Render template component
     *
     * @returns {XML}
     */
    render() {
        const { params } = this.props;
        return (
            <h1>Archive ({params.article})</h1>
        );
    }
}

