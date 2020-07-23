const INIT_STATE = {
    errorMsg: ''
};

export default (state = INIT_STATE, payload) => {
    switch (payload.type) {
        case 'ERROR': {
            return {
                ...state, errorMsg: payload.errorMsg
            }
        }
        default:
            return state
    }
}