import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Inventory from "./components/Inventory";
import Details from "./components/details";
import About from "./components/About";
import "./App.css";
/*import LoginRegister from './Components/LoginRegister/LoginRegister';
import Register from './Components/LoginRegister/Register';*/

export const WholeContext = createContext({});


function App() {
  
  const [ openAdvSch, setOpenAdvSch ] = useState(false);
  // console.log(openAdvSch)
  return (
    <WholeContext.Provider value={{openAdvSch, setOpenAdvSch}}>
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path='/' />
        <Route exact component={Contact} path='/contact' />
        <Route exact component={Inventory} path='/inventory' />
        <Route exact component={About} path='/about' />
        <Route exact path='/cars/:id' > <Details /></Route>
        {/*<Route exact path="/login" element={<LoginRegister />} />
        <Route exact path="/Register" element={<Register />} />*/}

        
      </Switch>
    </BrowserRouter>
    </WholeContext.Provider>
  );
}

export default App;
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
