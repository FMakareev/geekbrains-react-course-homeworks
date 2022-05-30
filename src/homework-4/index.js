import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";

import { Home } from "./routes/Home";
import { Chats } from "./routes/Chats";
import { Profile } from "./routes/Profile";
import {Messages} from "./routes/Messages";

export const Homework = () => {
  return (
    <div>
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
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/chats" >
            <Chats>
              <Switch>
                <Route component={Messages} path="/chats/:chatId" />
              </Switch>
            </Chats>
          </Route>
          <Route component={Profile} path="/profile" />
          <Route component={Home} path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
