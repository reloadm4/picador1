import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';

//Home
import App from './App';


//Marketplace routes
import MarketPlaceHome from './components/marketplaceMenu/marketplaceHome';
import FeedbackFormMarket from './components/feedback/feedbackForm-market';
import CustomerSupportMarket from './components/customerSupport/customerSupport-market';
import NotificationsMarket from './components/notifications/notifications-market';

//Saas routes
import SaasHome from './components/saasMenu/saasHome';
import FeedbackFormSaas from './components/feedback/feedbackform-saas';
import CustomerSupportSaas from './components/customerSupport/customerSupport-saas';
import NotificationsSaas from './components/notifications/notifications-saas';
import SubscribeMarketplace from './components/subscribe-marketplace/subscribeMarketplace';

const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/" component={App} />

     <Route path="/marketplace/home" component={MarketPlaceHome} />
     <Route path="/marketplace/feedback" component={FeedbackFormMarket} />
     <Route path="/marketplace/customersupport" component={CustomerSupportMarket} />
     <Route path="/marketplace/notifications" component={NotificationsMarket} />
     <Route path="/marketplace/subscribe" component={SubscribeMarketplace} />

     <Route path="/saas/home" component={SaasHome} />
     <Route path="/saas/feedback" component={FeedbackFormSaas} />
     <Route path="/saas/customersupport" component={CustomerSupportSaas} />
     <Route path="/saas/notifications" component={NotificationsSaas} />
   </Switch>
   </BrowserRouter>,
   rootElement
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
