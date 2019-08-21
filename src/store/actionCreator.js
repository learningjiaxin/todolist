import { CHANGE_INPUT_VALUE, ADD_ITEM, DEL_ITEM } from './actionTypes'
export const changeInputValue = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const addItem = () => ({
    type: ADD_ITEM
})
export const delItem = (index) => ({
    type: DEL_ITEM,
    index
})