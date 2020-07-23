import React from 'react'
import { toggleRightDrawer } from '../../../actions/uiactions';
import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated as a } from "react-spring";


function Desktop() {
    let dispatch = useDispatch();
    const ui_state = useSelector(state => state.ui_state);


    const right_drawer_props = useSpring({
        transform: ui_state.right_drawer_open === true ? "translateX(0px)" : "translateX(380px)",
    });

    const overlay_props = useSpring({
        display: ui_state.right_drawer_open === true ? "block" : "none",
    })

    return (
        <React.Fragment>
            <a.div className="right_drawer" id="right_drawer" style={right_drawer_props}>
                <div className="top_drawer_section" onClick={() => dispatch(toggleRightDrawer())
                }>
                    <span className="collapse_text">Collapse</span>
                    <div className="collapse_icon_container">
                        <i className="zmdi zmdi-play collapse_icon"></i>
                    </div>
                </div>
                <div className="transaction_type_section">
                    <span className="transaction_type_section_label">Transactions</span>
                    <select className="transaction_type_section_dropdown">
                        <option>Local Depository Receipt</option>
                        <option>Foreign Depository Receipt</option>
                        <option>Local Depository Receipt</option>
                    </select>
                    <i className="zmdi zmdi-caret-down transaction_type_section_dropdown_caret"></i>
                </div>
                <div className="recent_activities_container">
                    <div className="recent_activities_container_header">
                        <span className="recent_activities_container_header_title">
                            Recent Activities
                        </span>
                        <span className="recent_activities_container_header_more">
                            More
                        </span>
                    </div>
                    <div className="recent_activities_container_content">
                        <ul className="activities_list">
                            <li className="activity">
                                <div className="activity_icon">
                                    <i className="zmdi zmdi-long-arrow-down icon"></i>
                                </div>
                                <div className="activity_details">
                                    <div className="type_and_units">
                                        <span className="type">Credit LDR</span>
                                        <span className="units">20000 units</span>
                                    </div>
                                    <div className="id_and_date">
                                        <span className="id">#884888489939</span>
                                        <span className="date">22-08-2018</span>
                                    </div>
                                </div>
                            </li>

                            <li className="activity">
                                <div className="activity_icon">
                                    <i className="zmdi zmdi-long-arrow-down icon"></i>
                                </div>
                                <div className="activity_details">
                                    <div className="type_and_units">
                                        <span className="type">Credit LDR</span>
                                        <span className="units">20000 units</span>
                                    </div>
                                    <div className="id_and_date">
                                        <span className="id">#884888489939</span>
                                        <span className="date">22-08-2018</span>
                                    </div>
                                </div>
                            </li>

                            <li className="activity">
                                <div className="activity_icon">
                                    <i className="zmdi zmdi-long-arrow-down icon"></i>
                                </div>
                                <div className="activity_details">
                                    <div className="type_and_units">
                                        <span className="type">Credit LDR</span>
                                        <span className="units">20000 units</span>
                                    </div>
                                    <div className="id_and_date">
                                        <span className="id">#884888489939</span>
                                        <span className="date">22-08-2018</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="recent_activities_container_footer">
                        <div className="left_underline">&nbsp;</div>
                        <div className="more_centered">More</div>
                        <div className="left_underline">&nbsp;</div>
                    </div>
                </div>
            </a.div>
            <a.div
                className="modal_overlay"
                id="right_drawer_overlay"
                onClick={() => dispatch(toggleRightDrawer())}
                style={overlay_props}
            >
                &nbsp;
            </a.div>
        </React.Fragment>
    )
}

export default Desktop
