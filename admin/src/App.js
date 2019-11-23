import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import { Provider } from "react-redux";
// import store from '../src/redux/store/store';
import store, { persistor } from '../src/redux/store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Spinner } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const ForgotPassword = React.lazy(() => import('./views/Pages/ForgotPassword/ForgotPassword'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    }
  }



  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Spinner color="primary" />} persistor={persistor}>
          <HashRouter>
            <React.Suspense fallback={loading()}>
              <Switch>
                <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
                <Route exact path="/forgotPassword" name="Forgot Password Page" render={props => <ForgotPassword {...props} />} />
                <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
                <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
                <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
                <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
              </Switch>
            </React.Suspense>
          </HashRouter>
        </PersistGate>        
        <ToastContainer />
      </Provider>
    );
  }
}

export default App;
