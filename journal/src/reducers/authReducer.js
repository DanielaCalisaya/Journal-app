import { types } from '../types';
import React from 'react'

export const authReducer = (state = {}, action) => {
   
    switch (action.type) { /* esto en el caso de que la acción sea login */
        
        case types.login:
            return { /* El uid lo manejaré de una forma independiente poque viene asi, no dentro de un objeto */
                uid : action.payload.uid,
                name : action.payload.displayName
            }
        case types.logout : 
            return {}
        default:
            return state
    }
}
