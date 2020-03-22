import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddUser from "./components/user/AddUser";
import EditUser from "./components/user/EditUser";
import "bootstrap/dist/css/bootstrap.min.css";

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/administration/users/add" exact component={AddUser} />
        <Route path="/administration/users/edit" exact component={EditUser} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
