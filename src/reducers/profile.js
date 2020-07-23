const INIT_STATE = {  
    profile: {},   
};

export default (state = INIT_STATE, payload) => {
    switch (payload.type) {
        case 'SIGNIN_USER': {
            return {
                ...state, profile: payload.profile
            }
        }             
        default:
            return state
    }
}