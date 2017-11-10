import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "../pages/Layout";
import Archive from "../pages/Achive";
import Settings from "../pages/Settings";
import Feature from "../pages/Feature";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Feature}></IndexRoute>
            <Route path="archives" component={Archive}></Route>
            <Route path="settings" component={Settings}></Route>
        </Route>
    </Router>,
app);
