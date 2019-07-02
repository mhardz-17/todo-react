export const FETCH_USER = 'FETCH_USER';

const initialState = {
    name : 'Mardy'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                name: 'Test'
            }

        default:
            return state;
    }
}