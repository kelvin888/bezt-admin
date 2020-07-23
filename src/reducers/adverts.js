const INIT_STATE = {  
    adverts: [],   
};

export default (state = INIT_STATE, payload) => {
    switch (payload.type) {
        case 'GET_ADVERTS': {
            return {
                ...state, adverts: payload.adverts
            }
        }             
        default:
            return state
    }
}