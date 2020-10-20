import React from 'react';

import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';


export const PrivateRoute = ({
    isAutenticated,
    component: Component,
    ...rest

}) => {

    console.log(rest.location.pathname)

    localStorage.setItem('ruteSave', rest.location.pathname);
    


    return (
        <Route
            {...rest}
            component={(props) => {

                if (isAutenticated) {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/login" />
                }

            }

            }



        />
    )
}
PrivateRoute.propTypes = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}