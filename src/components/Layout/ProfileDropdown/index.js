import React from 'react'
import { useSpring, animated as a } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { toggleProfileDropdown } from "../../../actions/uiactions";
const ProfileDropdown = () => {

    const dispatch = useDispatch();
    const ui_state = useSelector(state => state.ui_state);

    const profile_dropdown_props = useSpring({
        transform: ui_state.profile_dropdown_active ? "translateY(0px)" : "translateY(-270px)",
    });
    const overlay_props = useSpring({
        display: ui_state.profile_dropdown_active ? "block" : "none",
    })
    return (
        <React.Fragment>
            <a.div className="profile_dropdown" id="profile_dropdown" style={profile_dropdown_props}>
                <ul className="profile_dropdown_items">
                    <li className="profile_dropdown_item">
                        <i className="zmdi zmdi-account profile_dropdown_item_icon"></i>
                        <span className="profile_dropdown_item_text">Edit Profile</span>
                    </li>
                    <li className="profile_dropdown_item">
                        <i className="zmdi zmdi-settings profile_dropdown_item_icon"></i>
                        <span className="profile_dropdown_item_text">Settings</span>
                    </li>
                    <li className="profile_dropdown_item ">
                        <i className="zmdi zmdi-square-right profile_dropdown_item_icon"></i>
                        <span className="profile_dropdown_item_text">Logout</span>
                    </li>
                </ul>
                <div className="triangle-with-shadow"></div>
            </a.div>
            <a.div className="modal_overlay" style={overlay_props} onClick={()=> dispatch(toggleProfileDropdown())}>
                &nbsp;
            </a.div>
        </React.Fragment>
    )
}

export default ProfileDropdown
