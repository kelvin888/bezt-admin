import React from 'react'
import { useSpring, animated as a } from "react-spring";
import { useSelector } from "react-redux";
import LeftNavBar from './LeftNavBar';
import MainHeader from './MainHeader';
import RightDrawer from './RightDrawer';
import ProfileDropdown from './ProfileDropdown';
import PrivateRoute from '../Util/PrivateRoute';
import Transfer from '../Pages/Transfer';
import ContactBroker from '../Pages/ContactBroker';
import Balance from '../Pages/Balance';
import Exchange from '../Pages/Exchange';
import Trade from '../Pages/Trade';
import Settings from '../Pages/Settings';
import Dashboard from '../Pages/Dashboard';

const Layout = (props) => {
    const ui_state = useSelector(state => state.ui_state)
    const content_area_props = useSpring({
        width: `${window.innerWidth - ui_state.left_navbar_width}px`,
        marginLeft: `${ui_state.left_navbar_width}px`
    })

    const location_state = useSelector(state => state)
    const path = location_state.router.location.pathname
    console.log('location')
    console.log(path)
    console.log(location_state.router.location)
    console.log('any props ?')
    console.log(props)


    return (
        <div className="main_container">
            <LeftNavBar {...props} />
            <MainHeader {...props} />
            <a.section className="content_area" style={content_area_props}>
                <PrivateRoute path="/dashboard/home" component={Dashboard} />
                <PrivateRoute path="/dashboard/transfer" component={Transfer} />
                <PrivateRoute path="/dashboard/contact-broker" component={ContactBroker} />
                <PrivateRoute path="/dashboard/wallet-balance" component={Balance} />
                <PrivateRoute path="/dashboard/exchange" component={Exchange} />
                <PrivateRoute path="/dashboard/trade" component={Trade} />
                <PrivateRoute path="/dashboard/settings" component={Settings} />
            </a.section>
            <RightDrawer {...props} />
            <ProfileDropdown {...props} />
        </div>
    )
}

export default Layout
