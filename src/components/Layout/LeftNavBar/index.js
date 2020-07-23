import React from 'react'
import { NavLink } from "react-router-dom";
import { changeNavbarWidth, setLeftnavIndicatorPosition, setLeftnavWalletDropdownStat } from "../../../actions/uiactions";
import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated as a } from "react-spring";
import { LEFTBAR_INITIAL_WIDTH } from "../../Util/constants";


function LeftNavBar(props) {

    let dispatch = useDispatch();
    let ui_state = useSelector(state => state.ui_state)

    const navbar_props = useSpring({
        width: `${ui_state.left_navbar_width}px`
    })

    const wallet_balance_dropdown_props = useSpring({
        display: ui_state.leftnav_wallet_dropdown_stat ? "block" : "none"
    })

    const menu_text_props = useSpring({
        opacity: (ui_state.left_navbar_width === LEFTBAR_INITIAL_WIDTH) ? "0" : "1"
    })

    const current_indicator_props = useSpring({
        top: `${ui_state.leftnavIndicatorPosition}px`,
        width: (ui_state.left_navbar_width === LEFTBAR_INITIAL_WIDTH) ? "50px" : "190px",
        height: (ui_state.left_navbar_width === LEFTBAR_INITIAL_WIDTH) ? "45px" : "45px",
        borderRadius: (ui_state.left_navbar_width === LEFTBAR_INITIAL_WIDTH) ? "50px" : "5px"
    })



    // console.log('from store')
    // console.log(ui_state)

    console.log('indicator position')
    console.log(ui_state.leftnavIndicatorPosition)

    // let { leftnav_wallet_dropdown_stat } = ui_state.leftnav_wallet_dropdown_stat

    return (
        <a.section className="left_nav_bar" id="left_nav_bar" style={navbar_props}>
            <div className="toggle_container" onClick={() => dispatch(changeNavbarWidth())}>
                <div className="left_menu_toggle_icon leftnav_toggle_active" id="left_nav_toggle" >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a.span className="left_menu_toggle_text" style={menu_text_props}>Menu</a.span>
            </div>

            <div className="left_menu_links_container">
                <ul className="left_menu_links">
                    <li className={`menu_link`} id="view_dashboard">
                        <div className="" onClick={() => {
                            dispatch(setLeftnavIndicatorPosition(document.getElementById("view_dashboard").getBoundingClientRect().top))
                        }}>
                            <NavLink to="/dashboard/home" className="menu_link_content">
                                <i className="zmdi zmdi-view-dashboard menu_link_icon"></i>
                                <a.span className="menu_link_text" style={menu_text_props}>Dashboard</a.span>
                            </NavLink>
                        </div>
                    </li>
                    <li className={`menu_link`} id="wallet_balance" >
                        <div className="" onClick={() => {
                            dispatch(setLeftnavIndicatorPosition(document.getElementById("wallet_balance").getBoundingClientRect().top))
                            dispatch(setLeftnavWalletDropdownStat());
                        }}>
                            <NavLink to={`/dashboard/wallet-balance`} className="menu_link_content">
                                <i className="zmdi zmdi-balance-wallet menu_link_icon"></i>
                                <a.span className="menu_link_text" style={menu_text_props}>Wallet Balance</a.span>
                                <i className="zmdi zmdi-chevron-down menu_link_dropdown_icon"></i>
                            </NavLink>
                        </div>
                        <a.ul className="left_menu_links_dropdown" id="wallet_balance_dropdown" style={wallet_balance_dropdown_props}>

                            <li
                                className="dropdown_menu_link wallet_submenu side_sub_menu"
                                id="menu_link_transfer"
                                onClick={() => {
                                    dispatch(setLeftnavIndicatorPosition(document.getElementById("menu_link_transfer").getBoundingClientRect().top));
                                }}
                            >
                                <div className="">
                                    <NavLink to={`/dashboard/transfer`} className="dropdown_menu_link_content">
                                        <a.span className="dropdown_menu_link_text" style={menu_text_props}>Transfer</a.span>
                                    </NavLink>
                                </div>
                            </li>
                            <li
                                className="dropdown_menu_link wallet_submenu side_sub_menu"
                                id="menu_link_exchange"
                                onClick={() => {
                                    dispatch(setLeftnavIndicatorPosition(document.getElementById("menu_link_exchange").getBoundingClientRect().top))
                                }}
                            >
                                <div className="">
                                    <NavLink to={`/dashboard/exchange`} className="dropdown_menu_link_content">
                                        <a.span className="dropdown_menu_link_text" style={menu_text_props}>Exchange</a.span>
                                    </NavLink>
                                </div>
                            </li>
                            <li
                                className="dropdown_menu_link wallet_submenu side_sub_menu"
                                id="menu_link_trade"
                                onClick={() => {
                                    dispatch(setLeftnavIndicatorPosition(document.getElementById("menu_link_trade").getBoundingClientRect().top))
                                }}
                            >
                                <div className="">
                                    <NavLink to={`/dashboard/trade`} className="dropdown_menu_link_content">
                                        <a.span className="dropdown_menu_link_text" style={menu_text_props}>Trade</a.span>
                                    </NavLink>
                                </div>
                            </li>
                        </a.ul>
                    </li>
                    <li className={`menu_link`} id="contact_broker">
                        <div className="" onClick={() => {
                            dispatch(setLeftnavIndicatorPosition(document.getElementById("contact_broker").getBoundingClientRect().top))
                        }}>
                            <NavLink to="/dashboard/contact-broker" className="menu_link_content">
                                <i className="zmdi zmdi-email menu_link_icon"></i>
                                <a.span className="menu_link_text" style={menu_text_props}>Contact Broker</a.span>
                            </NavLink>
                        </div>
                    </li>

                    <li className={`menu_link`} id="settings">
                        <div className="" onClick={() => {
                            dispatch(setLeftnavIndicatorPosition(document.getElementById("settings").getBoundingClientRect().top))
                        }}>
                            <NavLink to="/dashboard/settings" className="menu_link_content">
                                <i className="zmdi zmdi-settings menu_link_icon"></i>
                                <a.span className="menu_link_text" style={menu_text_props}>Settings</a.span>
                            </NavLink>
                        </div>
                    </li>
                </ul>
                <a.div id="current_menu_indicator" style={current_indicator_props}>&nbsp;</a.div>
            </div>
        </a.section>
    )
}

export default LeftNavBar
