import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import ContentRouter from './ContentRouter';
import PoliticsComponent from '../screens/politics/PoliticsComponent';
import CookiesComponent from '../screens/politics/CookiesComponent';
import PrivacityComponent from '../screens/politics/PrivacityComponent';


const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' component={ContentRouter} />
                    <Route path='/terminos-y-condiciones' component={PoliticsComponent} />
                    <Route path='/politicas-de-cookies' component={CookiesComponent} />
                    <Route path='/privacidad-de-datos' component={PrivacityComponent} />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
