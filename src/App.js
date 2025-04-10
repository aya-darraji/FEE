import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Inventory from "./components/Inventory";
import Details from "./components/details";
import About from "./components/About";
import "./App.css";
export const WholeContext = createContext({});
import LoginRegister from './Components/LoginRegister/LoginRegister';
import Register from './Components/LoginRegister/Register';

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
        {/* // render={(props)=><Details id={props.match.params.id} />}  */}
        <Route path="/login" element={<LoginRegister />} />
          <Route path="/register" element={<Register />} />
          {/* Add your other routes here */}
          <Route path="/" element={<LoginRegister />} /> {/* Default route to login */}
        
      
      </Switch>
    </BrowserRouter>
    </WholeContext.Provider>
  );
}

export default App;
