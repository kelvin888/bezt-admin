export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return undefined;
        }

        // serializedState.router.location.pathname = window.location.pathname
        let jsonParsedState = JSON.parse(serializedState);
        jsonParsedState.router.location.pathname = window.location.pathname;
        return jsonParsedState;
    }catch(err){
        return undefined;
    }
};

export const saveState = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }catch(err){
        //errors
    }
};