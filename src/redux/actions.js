import constants from "./constants" //Imported our Intentions

export const increment = () => (
    {
        type: constants.INCREMENT_VALUE,
        payload: 1
    }
);

export const decrement = () => (
    {
        type: constants.DECREMENT_VALUE,
        payload: 1
    }
);