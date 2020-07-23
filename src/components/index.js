import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './Util/PrivateRoute';
// import Dashboard from './Pages/Dashboard';
import Error404 from './Util/Error404';
// import Transfer from './Pages/Transfer';
import Login from './Pages/Login';
// import ContactBroker from './Pages/ContactBroker';
// import Settings from './Pages/Settings';
// import Trade from './Pages/Trade';
// import Exchange from './Pages/Exchange';
// import Balance from './Pages/Balance';
import Layout from './Layout';

class App extends Component {
  render() {
    console.log('Process Env');
    console.log(process.env);
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/dashboard" component={Layout} />

        {/*404 PAGE*/}

        <Route path="*" exact={true} component={Error404} />
      </Switch>
    );
  }
}

export default App;
