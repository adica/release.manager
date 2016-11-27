import React, { PropTypes as T } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AuthService from './../utils/AuthService';
import RaisedButton from 'material-ui/RaisedButton';

export class Login extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  } 

  render() {
    const { auth } = this.props;    
    return (
     <div>
        <h2>You must Login first</h2>     
          <RaisedButton label="Login" />     
      </div>
    )
  }
}


Login.displayName = 'Login';

// Uncomment properties you need
Login.defaultProps = {};
Login.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default Login;