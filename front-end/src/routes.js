import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Main from "./pages/main/index";
import Login from "./pages/login/index";
import Register from "./pages/register/index";
import Question from "./pages/question/index";
import CreateQuestion from "./pages/createQuestion/index";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/registrar" component={Register} />
            <Route path="/pergunta/:id" component={Question} />
            <Route path="/enviarPergunta" component={CreateQuestion} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
