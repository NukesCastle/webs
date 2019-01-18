import React, { Component } from 'react';
// import { element } from 'prop-types';
import { Link } from 'react-router-dom';
import SingOut from '../../SignOut'
import * as ROUTES from '../../../constants/routes';
import { AuthUserContext } from '../../Session';
const NavigationAuth = () => (<ul class="navbar-nav mr-auto mt-2 mt-lg-0">  <li><Link class="nav-link" to={ROUTES.LANDING}>Landing</Link></li>  <li class="nav-item active">
  <Link class="nav-link" to={ROUTES.ACCOUNT}>Account</Link>
</li>
  <li class="nav-item">
    <Link class="nav-link" to={ROUTES.HOME}>Home</Link>
  </li>
  <li class="nav-item">
    <SingOut />
  </li></ul>);
const NavigationNonAuth = () => (<ul class="navbar-nav mr-auto mt-2 mt-lg-0">  <li><Link class="nav-link" to={ROUTES.LANDING}>Landing</Link></li>   <li class="nav-item">
  <Link class="nav-link" to={ROUTES.SIGN_IN}>Sing In</Link>
</li>

</ul>);

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
class Navbar extends Component {
  render() {

    const navbarEl = (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">



          <Navigation></Navigation>

          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>);
    return navbarEl
  }
}

export default Navbar;