import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Products from './pages/Products/Products';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductPage from './pages/ProductPage/ProductPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import Partner from './pages/Partner/Partner';
import Faq from './pages/FAQ/FAQ';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import Checkout from './pages/Checkout/Checkout';
import NewArrivals from './pages/NewArrivals/NewArrivals';
import OurStory from './pages/OurStory/OurStory';
import Header from './components/Header/Header';
import checkboxes from './components/checkboxes';
import PasswordMailer from './pages/PasswordMailer/PasswordMailer';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ContactUs from './pages/ContactUs/ContactUs';
import Careers from './pages/Careers/Careers';

class App extends React.Component {
  render() { 
    return ( 
      <div className="App">
        <ScrollToTop />
        <Header/>
        <Switch>
          <Route exact path="/https://freshgear.herokuapp.com" component={ LandingPage }/>
          <Route  exact path="/about" component={ AboutPage }/>
          <Route  exact path="/products" component={ Products }/>
          <Route  exact strict path="/products/:product" component={ ProductPage }/>
          <Route  exact path="/login" component={ LoginPage }/>
          <Route  exact path="/register" component={ RegisterPage }/>
          <Route  exact path="/checkout" component={ Checkout  }/>
          <Route exact path="/new-arrivals" component={ NewArrivals } />
          <Route  exact path="/orders" component={ OrdersPage }/>
          <Route exact path="/resetPassword/:id" component={ ChangePassword }/>
          <Route  exact path="/checkboxes" component={ checkboxes }/>
          <Route exact path="/account/forgot-password" component={ PasswordMailer }/>
          <Route exact path="/ContactUs" component={ ContactUs } />
          <Route exact path="/Careers" component={ Careers } />
          <Route exact path="/Partner" component={ Partner } />
          <Route exact path="/OurStory" component={ OurStory } />
          <Route exact path="/Faq" component={ Faq } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
