/**
 * Action Creator   action构造器（一个用户创建action的函数）
 */
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CHANGE_QTY = 'CHANGE_QTY'

export function add(goods){
    return {type:ADD_TO_CART,goods}
}

export function remove(id){
    return {type:REMOVE_FROM_CART,id}
}

export function change(id,qty){
    return {type:CHANGE_QTY,id,qty}
}

export default {
    add,
    remove,
    change
}