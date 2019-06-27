import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import './index.css';
import Home from './Components/page(1)/Elements(1)/Home';
import Services from './Components/Services(2)/Elements(2)/Services';
import BurgerPage from './Components/BurgerPage(3)/Elements(3)/BurgerPage';
import Contracts from './Components/Contracts(4)/Elements(4)/ContractsPage(4)';
import Work from './Components/Work(5)/Elements(5)/WorkPage';
import * as serviceWorker from './serviceWorker';

function WorkPage(){
    return(
        <Work/>
    )
}
function HomePage(){
    return(
        <Home/>
    )
}
function ServicesPage(){
    return(
        <Services/>
    )
}
function ContractsPage(){
    return(
        <Contracts/>
    )
}

function AppRouter() {
    return (
      <Router>
          <Route path exact ="/"  component={HomePage} />
          <Route path ="/services" component={ServicesPage} />
          <Route path ="/Work"  component={WorkPage} />
          <Route path = "/BurgerPage" component={BurgerPage} />
          <Route path = "/contract" component={ContractsPage}/>
          {/* <Route path= "/Work" component={WorkPage}/> */}
      </Router>
    );
  }
export default AppRouter;

ReactDOM.render(<AppRouter />, document.getElementById('main'));

serviceWorker.unregister();
