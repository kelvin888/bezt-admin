import React from 'react';
import personImage from '../../../assets/img/person.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleRightDrawer,
  toggleProfileDropdown,
} from '../../../actions/uiactions';
import { useSpring, animated as a } from 'react-spring';

function MainHeader() {
  const ui_state = useSelector((state) => state.ui_state);
  console.log('what is ui state');
  console.log(window.innerWidth - ui_state.left_navbar_width);
  console.log(window.innerWidth);
  console.log(ui_state.left_navbar_width);
  const dispatch = useDispatch();

  const main_header_props = useSpring({
    width: `${window.innerWidth - ui_state.left_navbar_width}px`,
    left: `${ui_state.left_navbar_width}px`,
  });

  return (
    <a.section
      className="main_header"
      id="main_header"
      style={main_header_props}
    >
      <ul className="header_items_list">
        {/* <li className="hamburger_section">
                    <div className="hamburger_icon_container">
                        <i class="zmdi zmdi-view-headline hamburger_icon"></i>
                    </div>
                </li> */}
        <li className="logo_section">
          <i className="zmdi zmdi-google-drive logo_icon"></i>
          <span className="logo_title">Bezt Admin</span>
        </li>
        <li className="notifications_section">
          <i className="zmdi zmdi-notifications-none notifications_icon"></i>
          <div className="notifications_badge">6</div>
          <span className="notifications_text">Notifications</span>
        </li>
        <li className="search_section">
          <i className="zmdi zmdi-search search_icon"></i>
        </li>
        <li
          className="user_account"
          onClick={() => dispatch(toggleProfileDropdown())}
        >
          <img src={personImage} alt="person" />
          <span className="username">Kelvin Orhungul</span>
          <i className="zmdi zmdi-chevron-down account_caret"></i>
        </li>
        <li
          className="transactions_section"
          onClick={() => dispatch(toggleRightDrawer())}
        >
          <span className="transactions_text">Transactions</span>
          <i className="zmdi zmdi-view-list transactions_icon"></i>
          <div className="transactions_badge">6</div>
        </li>
      </ul>
    </a.section>
  );
}

export default MainHeader;
