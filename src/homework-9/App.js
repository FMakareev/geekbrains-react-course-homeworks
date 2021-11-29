import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {AppBar, Toolbar, Button, CssBaseline} from "@material-ui/core";
import {useDispatch, useSelector} from 'react-redux'

import {Home} from "./routes/Home";
import {Chats} from "./routes/Chats";
import {Profile} from "./routes/Profile";
import {Animals} from "./routes/Animals";
import {Login} from "./routes/Login";
import {SignUp} from "./routes/SignUp";
import {initAuthAction} from "./store/user/actions";
import {useEffect} from "react";
import {getIsAuth} from "./store/user/selectors";
import {PublicRoute} from "./components/PublicRoute";
import {PrivateRoute} from "./components/PrivateRoute";
import {auth} from "./api/firebase";

export const App = () => {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuthAction);
  }, []);

  return (
    <>
      <CssBaseline/>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Button to="/" component={Link} color="inherit">
              Home
            </Button>
            <Button to="/profile" component={Link} color="inherit">
              Profile
            </Button>
            <Button to="/chats" component={Link} color="inherit">
              Chats
            </Button>
            <Button to="/animals" component={Link} color="inherit">
              animals
            </Button>
            <Button to="/login" component={Link} color="inherit">
              Login
            </Button>
            <Button to="/sign-up" component={Link} color="inherit">
              Sign up
            </Button>
            <Button to="/sign-up" component={Link} color="inherit">
              Sign up
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                auth.signOut();
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route component={Animals} path="/animals"/>
          <Route auth={isAuth} component={Chats} path="/chats"/>
          <PrivateRoute auth={isAuth} component={Profile} path="/profile"/>
          <PublicRoute auth={isAuth} component={Login} path="/login"/>
          <PublicRoute auth={isAuth} component={SignUp} path="/sign-up"/>
          <Route component={Home} path="/"/>
        </Switch>
      </BrowserRouter>
    </>
  );
};
