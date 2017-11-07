 /**
 * Created by kostya on 07.11.17.
 */
import React from "react";

import Title from './Header/Title';

export default class Header extends React.Component {

    /**
     * Handle change input fill value
     *
     * @param e
     */
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    /**
     * Render template component
     *
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <Title title={this.props.title}/>
                <input type="text" value={this.props.title} onChange={this.handleChange.bind(this)}/>
            </div>
        );
     }
 }