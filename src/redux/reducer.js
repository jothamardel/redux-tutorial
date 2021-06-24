import constants from "./constants";

const INTIAL_STATE = {
    value: 0
}


const counterReducer = (state = INTIAL_STATE, action = {}) => {
 
    switch (action.type) {
        
        case constants.INCREMENT_VALUE:
            return {
                ...state,
                value: state.value + action.payload
            }
        
        case constants.DECREMENT_VALUE:
            return {
                ...state,
                value: state.value - action.payload
            }
        
        
        default:
            return state;
    }
}

export default counterReducer;