import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoute } from "./DashboardRoute";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {


    const { user } = useContext(AuthContext);
    const { logged } = user;
    return (
        <Router>
            <div >
                <Switch>


                    <PublicRoute exact
                        path="/login"
                        component={LoginScreen}
                        isAutenticated={logged}
                    />
                    <PrivateRoute
                        path="/"
                        component={DashboardRoute}
                        isAutenticated={logged}
                    />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </Router>
    )
}
