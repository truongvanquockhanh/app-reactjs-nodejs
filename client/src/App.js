import React from "react";
import { matchPath, withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from './components/footer';
import OptionProduct from "./components/OptionProduct";
import Admin from "./pages/admin";
import TitleLogin from './components/titlelogin';

function App(history) {
  const match = matchPath(history.location.pathname, {
    path: "/product/:id"
  });

  let articleId;

  if (match && match.params.id) {
    articleId = match.params.id;
  }
  console.log(articleId);
  return (
    <div className='app'>
      <TitleLogin />
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          {/* <Route exact path='/product'>
            <Admin /> 
          </Route> */}
          <Route exact path='/admin' >
            <Admin />
          </Route>
          <Route exact path="/:id" >
            <OptionProduct />
          </Route>
          
        </Switch>
      </div>
      {/* <Switch /> */}
      <Footer />
    </div>
  )
};

export default withRouter(App);
