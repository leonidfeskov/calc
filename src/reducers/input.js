import { SET_VALUE } from '../constans/Input';

const initialState = {
    label: 'Сумма в месяц',
    value: 80000,
    units: 'руб.',
    hint: ''
};

export default function panel(state = initialState, action) {
    switch (action.type) {
        case SET_VALUE:
            console.log(action.payload);
            return { ...state, value: action.payload };
        default:
            return state;
    }
}
