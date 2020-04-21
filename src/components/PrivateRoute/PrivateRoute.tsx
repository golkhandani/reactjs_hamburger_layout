import React from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";
import fakeAuth from "../../services/authentication";
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated() === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

export default PrivateRoute;