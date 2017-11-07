/**
 * Created by kostya on 07.11.17.
 */

import React from 'react';

export default class Title extends React.Component {

    /**
     * Render template component
     * @returns {XML}
     */
    render() {
        return <h2>{this.props.title}</h2>
    }
}