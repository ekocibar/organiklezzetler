import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage'
import Products from './Products';
import About from './About';
import Contact from './Contact';


const Router = () => (
  <Switch>
    <Route exact path='/' component={MainPage} />
    <Route path='/Ürünler' component={Products} />
    <Route path='/Neden-Organik' component={About} />
    <Route path='/İletişim' component={Contact} />
  </Switch>
)

export default Router;