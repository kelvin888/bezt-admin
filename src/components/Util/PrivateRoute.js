
import React from 'react'
import {
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';
import { useSelector } from "react-redux";
import { isEmpty } from './Functions';


function PrivateRoute({ component: Component, ...rest }) {

    const profile = useSelector(state => state.profile)
    const location = useSelector(state => state.router.location)
    console.log("is profile empty")
    console.log(location)
    console.log(isEmpty(profile.profile))

    return (
        <Route {...rest} render={(props) => (
            (!isEmpty(profile.profile))
                ? <Component {...props} {...rest} />
                : <Redirect to={{
                    pathname: '/',
                    state: { from: location }
                }} />
        )} />
    )
}

export default withRouter(PrivateRoute)