import { SET_SUM, SET_RENT, CALC } from '../constans/Panel';


export function setSum(object) {
    return {
        type: SET_SUM,
        payload: object
    }
}

export function setRent(object) {
    return {
        type: SET_RENT,
        payload: object
    }
}

export function calc(tableArray) {
    return {
        type: CALC,
        payload: tableArray
    }
}