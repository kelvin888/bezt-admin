import { LEFTBAR_INITIAL_WIDTH, LEFTBAR_EXPANDED_WIDTH } from "../components/Util/constants";
const INIT_STATE = {  
    left_navbar_width: LEFTBAR_INITIAL_WIDTH,  
    profile_dropdown_active: false, 
    right_drawer_open: false, 
    leftnav_wallet_dropdown_stat: false,
    leftnavIndicatorPosition: 208
};

export default (state = INIT_STATE, payload) => {
    switch (payload.type) {
        case 'CHANGE_NAVBAR_WIDTH': {
            let new_width = state.left_navbar_width === LEFTBAR_INITIAL_WIDTH ? LEFTBAR_EXPANDED_WIDTH: LEFTBAR_INITIAL_WIDTH
            return {
                ...state, left_navbar_width: new_width
            }
        }           
        case 'TOGGLE_PROFILE_DROPDOWN': {
            return {
                ...state, profile_dropdown_active: !state.profile_dropdown_active
            }
        }  
        case 'TOGGLE_RIGHT_DRAWER': {
            return {
                ...state, right_drawer_open: !state.right_drawer_open
            }
        }  
        case 'LEFTNAV_INDICATOR_POSITION': {
            console.log('payload reach you?')
            console.log(payload.new_position)
            return {
                ...state, leftnavIndicatorPosition: payload.new_position
            }
        } 
        case 'WALLETMENU_DROPDOWN_STAT': {
            return {
                ...state, leftnav_wallet_dropdown_stat: !state.leftnav_wallet_dropdown_stat
            }
        } 
        
        default:
            return state
    }
}