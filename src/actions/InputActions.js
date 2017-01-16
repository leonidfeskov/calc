import { SET_VALUE } from '../constans/Input';


export function setValue(value) {
    return {
        type: SET_VALUE,
        payload: value
    }
}