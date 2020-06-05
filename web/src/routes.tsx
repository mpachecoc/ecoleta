import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import SuccessMessage from './pages/SuccessMessage';

const Routes = () => {
   return (
      <BrowserRouter>
         <Route component={Home} path="/" exact />
         <Route component={CreatePoint} path="/create-point" />
         <Route component={SuccessMessage} path="/success" />
      </BrowserRouter>
   );
}

export default Routes;