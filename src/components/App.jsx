import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NavigationBar from './navigationBar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import News from './News'




class App extends Component{

   
    render(){
       
       
        return (
           <div>
            <Router>
               <NavigationBar/>
              

            <Switch>
            <Route exact path="/"><Home /> </Route>
            <Route path="/About"><About /> </Route>
            <Route path="/Portfolio"><Portfolio /> </Route>
            <Route path="/News"> <News /> </Route>
          </Switch>

          </Router>
               {/* <NavigationBar/> */}
           </div>
        )
    }
}

export default App;