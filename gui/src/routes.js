import React from 'react'
import {Route} from 'react-router-dom'
import HomeView from './containers/HomeView'
import ListView from './containers/ListView'
import DetailView from './components/DetailView'

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={HomeView}/>
        <Route exact path="/ListView/:name" component={ListView} />
        <Route exact path="/DetailView/:id" component={DetailView} />
    </div>
);

export default BaseRouter