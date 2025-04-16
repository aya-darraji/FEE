import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Inventory from "./components/Inventory";
import Details from "./components/details";
import About from "./components/About";
import LoginRegister from './components/LoginRegister/LoginRegister';
import Register from './components/LoginRegister/Register';
// importi path bil s7i7 dossier ismo components miniscule !!
import "./App.css";
import Security from './components/MyAccount/Security';
import MyAlerts from "./components/MyAccount/MyAlerts";
import DashboardRegistration from "./components/MyAccount/DashboardRegistration";
import MyFavorites from "./components/MyAccount/MyFavorites";
import MyProfileRegistration from "./components/MyAccount/MyProfileRegistration";
import SecurityAgency from './components/MyAccount/Agency/Security';
import MangerStocke from './components/MyAccount/Agency/MangerStocke';
import EditMangerStocke from './components/MyAccount/Agency/EditMangerStocke';
import DashboardAgency from './components/MyAccount/Agency/DashboardAgency';
import CarInformation from './components/MyAccount/Agency/CarInformation';
import EditCarInformation from './components/MyAccount/Agency/EditCarInformation';
import AgencyInformation from './components/MyAccount/Agency/AgencyInformation';
import EditAgencyInformation from './components/MyAccount/Agency/EditAgencyInformation';


function App() {

  
  //

  const [openAdvSch, setOpenAdvSch] = useState(false);
  // console.log(openAdvSch)
  return (
    <WholeContext.Provider value={{ openAdvSch, setOpenAdvSch }}>
      <BrowserRouter>
        <Switch>
          <Route exact component={Home} path='/' />
          <Route exact component={Contact} path='/contact' />
          <Route exact component={Inventory} path='/inventory' />
          <Route exact component={About} path='/about' />
          <Route exact path='/cars/:id' component={Details} />
          <Route exact component={LoginRegister} path="/login" />
          <Route exact component={Register} path="/register" />
          <Route exact component={Security} path="/security" />

        
          <Route path={`/myAccount/security`} component={Security} />
          <Route path={`/myAccount/MyAlerts`} component={MyAlerts}/>
          <Route path={`/myAccount/DashboardRegistration`} component={DashboardRegistration}/> 
          <Route path={`/myAccount/MyFavorites`} component={MyFavorites}/> 
          <Route path={`/myAccount/MyProfileRegistration`} component={MyProfileRegistration}/> 
          <Route path={`/myAccount/Agency/Security`} component={SecurityAgency} />
          <Route path={`/myAccount/Agency/MangerStocke`} component={MangerStocke} />
          <Route path={`/myAccount/Agency/EditMangerStocke`} component={EditMangerStocke} />
          <Route path={`/myAccount/Agency/DashboardAgency`} component={DashboardAgency} />
          <Route path={`/myAccount/Agency/CarInformation`} component={CarInformation} />
          <Route path={`/myAccount/Agency/EditCarInformation`} component={EditCarInformation} />
          <Route path={`/myAccount/Agency/AgencyInformation`} component={AgencyInformation} />
          <Route path={`/myAccount/Agency/EditAgencyInformation`} component={EditAgencyInformation} />



        </Switch>
      </BrowserRouter>
    </WholeContext.Provider>
  );
}

export default App;
export const WholeContext = createContext({});
/*
import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Inventory from "./components/Inventory";
import Details from "./components/details";
import About from "./components/About";
import "./App.css";
import LoginRegister from "./Components/LoginRegister/LoginRegister";
import Register from "./Components/LoginRegister/Register";

export const WholeContext = createContext({});

function App() {
  const [openAdvSch, setOpenAdvSch] = useState(false);

  return (
    <WholeContext.Provider value={{ openAdvSch, setOpenAdvSch }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cars/:id" component={Details} />
          <Route exact path="/login" component={LoginRegister} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </WholeContext.Provider>
  );
}

export default App;*/
