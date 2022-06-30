import React from 'react';
import { types } from '../types';

const initialState = {
    notes : [], /* todas nuestras notas, serán un objeto que tiene 2 propiedades */
    active : null /* esta indicará que nota se está mostrando en pantalla */
}

export const notesReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case types.noteActive :  /* Si es una nota activa quiero retornar lo siguiente */
            return {
                ...state, /* Me traigo todas las propiedades, el estado */
                active : {  /* y piso la propiedad active */
                    ...action.payload
                }
            }
        case types.noteAddNew :
            return {
                ...state,
                notes : [action.payload, ...state.notes]
            }
        case types.notesLoad :
            return {
                ...state,
                notes : [...action.payload]
            }
        case types.noteUpdated :
            return {
                ...state, /* map me devulve otro array, cada elemento es una nota, vengo con la nota actualizada solo hay que saber cual es la que hay que reemplazar */
                notes : state.notes.map(note => note.id === action.payload.id ? action.payload.note : note)
            }
        case types.noteDeleted :
            return {
                ...state,
                active : null, /* filtro las notas, cada elemento es una nota, filtro aquellas que no coincidan con el id que viene en el payload */
                notes : state.notes.filter(note => note.id !== action.payload)
            }
        case types.noteLogoutCleaning :
            return initialState

        default :
            return state;
    }
}

/* El action tiene dos propiedades el tipo de acción y la información
que se provee en esa acción, esa propiedad donde va esa información es payload */
