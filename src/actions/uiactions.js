export const changeNavbarWidth = () => {
    return {
        type: 'CHANGE_NAVBAR_WIDTH'
    }
}

export const toggleProfileDropdown = () => {
    return {
        type: 'TOGGLE_PROFILE_DROPDOWN'
    }
}

export const toggleRightDrawer = () => {
    return {
        type: 'TOGGLE_RIGHT_DRAWER'
    }
}

export const setLeftnavIndicatorPosition = (payload) => {
    return {
        type: 'LEFTNAV_INDICATOR_POSITION',
        new_position: payload
    }
}

export const setLeftnavWalletDropdownStat = () => {
    return {
        type: 'WALLETMENU_DROPDOWN_STAT'
    }
}

