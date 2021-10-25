import React from 'react';
import { Switch, Route, Link} from "react-router-dom";
import routes from "./routes";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
          <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
          </nav>
        </Toolbar>
      </AppBar>
      <Switch>
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
    </>
  );
}

export default App;