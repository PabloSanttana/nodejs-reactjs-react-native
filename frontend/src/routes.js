import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/Main';
import Product from './pages/Product'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/products/:id" exact component={Product}/>
          
        </Switch>
        </BrowserRouter>
    );
    
}
