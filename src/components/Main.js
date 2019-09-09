import React from 'react';
import { Switch, Route } from 'react-router-dom'; // import the react-router-dom components

import Homepage from './websitePages';
// About
import About from './websitePages/about';
import Archive from './websitePages/about/Archive';
import History from './websitePages/about/History';
import Rules from './websitePages/about/Rules';
// Classes and activities
import ClassesAndActivities from './websitePages/classesandactivities';
import Classes from './websitePages/classesandactivities/Classes';
import Activities from './websitePages/classesandactivities/Activities';
import Groups from './websitePages/classesandactivities/Groups';
import ArtisticGuidance from './websitePages/classesandactivities/ArtisticGuidance';
// Bulletboard
import BulletBoard from './websitePages/bulletboard';
import Announcements from './websitePages/bulletboard/Announcements';
import Museums from './websitePages/bulletboard/Museums';
// Membership
import Membership from './websitePages/membership';
import Information from './websitePages/membership/Information';
import Costs from './websitePages/membership/Costs';
import SignUp from './websitePages/membership/SignUp';
// Contact
import Contact from './websitePages/contact';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Homepage} />
        {/* <div className="container py-4"> */}
        <Route exact path='/over-ons' component={About} />
        <Route path='/over-ons/archief' component={Archive} />
        <Route path='/over-ons/verenigingsgeschiedenis' component={History} />
        <Route path='/over-ons/ateliergebruik' component={Rules} />
        <Route exact path='/lessen-en-activiteiten' component={ClassesAndActivities} />
        <Route path='/lessen-en-activiteiten/lessen' component={Classes} />
        <Route path='/lessen-en-activiteiten/activiteiten' component={Activities} />
        <Route path='/lessen-en-activiteiten/groepen' component={Groups} />
        <Route path='/lessen-en-activiteiten/artistieke-begeleiding' component={ArtisticGuidance} />
        <Route exact path='/prikbord' component={BulletBoard} />
        <Route path='/prikbord/nieuwtjes' component={Announcements} />
        <Route path='/prikbord/musea' component={Museums} />
        <Route exact path='/lidmaatschap' component={Membership} />
        <Route path='/lidmaatschap/informatie' component={Information} />
        <Route path='/lidmaatschap/kosten' component={Costs} />
        <Route path='/lidmaatschap/aanmelden' component={SignUp} />
        <Route exact path='/contact' component={Contact} />
        {/* </div> */}
    </Switch>
)

export default Main;	
