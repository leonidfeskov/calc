import { SET_SUM, SET_RENT, CALC } from '../constans/Panel';

const initialState = {
    sum: {
        label: 'Сумма в месяц',
        value: 80000,
        units: 'руб.',
        hint: 'Hint'
    },
    rent: {
        label: 'Аренда',
        value: 30000,
        units: 'руб.',
        hint: 'Hint'
    },
    tableData: []
};

export default function panel(state = initialState, action) {
    switch (action.type) {
        case SET_SUM:
            return { ...state,
                sum: {
                    label: 'Сумма в месяц',
                    value: action.payload,
                    units: 'руб.',
                    hint: 'Hint'
                }
            };
        case SET_RENT:
            return { ...state,
                rent: {
                    label: 'Аренда',
                    value: action.payload,
                    units: 'руб.',
                    hint: 'Hint'
                }
            };
        case CALC:
            return { ...state, tableData: action.payload};
        default:
            return state;
    }
}
