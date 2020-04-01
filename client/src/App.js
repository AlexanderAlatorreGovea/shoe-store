import React from 'react';
import { BrowserRouter as Router, Switch, Route, matchPath } from 'react-router-dom';
import { withRouter } from "react-router";

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
import DomiProductPage from './pages/DomiProductPage/DomiProductPage';

class App extends React.Component {

  // componentDidUpdate() {
  //   if (this.props.globalState.popupCartOpen == true) {
  //     console.log(this.props.globalState.popupCartOpen);
  //     const cartPopupElement = document.getElementById('cart-popup');
  //     document.addEventListener('click', event => {
  //       var clickedInside = cartPopupElement.contains(event.target);
  //       if (clickedInside) {
  //       } else {
  //         this.props.closingCart();
  //       }
  //     });
  //   }
  // }

  render() { 
    const { location } = this.props;
    return ( 
      <Router> 
        <div className="App">
          <ScrollToTop />
            <Header/>  
            <Switch >
              <Route exact path="/" component={ LandingPage }/>
              <Route  exact path="/about" component={ AboutPage }/>
              <Route  exact path="/products" component={ Products }/>
              <Route 
                exact 
                path="/products/:product"
                render={props => {
                  return <ProductPage {...props} />;
                }} 
              /> 
              <Route  exact path="/login" component={ LoginPage }/>
              <Route  exact path="/register" component={ RegisterPage }/>
              <Route  exact path="/checkout" component={ Checkout  }/>
              <Route exact path="/new-arrivals" component={ NewArrivals } />
              <Route  exact path="/orders" component={ OrdersPage }/>
              <Route  exact path="/checkboxes" component={ checkboxes }/>
              <Route exact path="/account/forgot-password" component={ PasswordMailer }/>
              <Route exact path="/ContactUs" component={ ContactUs } />
              <Route exact path="/Careers" component={ Careers } />
              <Route exact path="/Partner" component={ Partner } />
              <Route exact path="/OurStory" component={ OurStory } />
              <Route exact path="/Faq" component={ Faq } />
              <Route path="resetPassword/:id" component={ChangePassword} />
              <Route path="/DomiProductPage" component={DomiProductPage} />
            </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default withRouter(App);
