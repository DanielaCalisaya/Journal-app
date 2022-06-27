import React, { useState } from 'react'

export const useForm = (initialState = {}) => { /* objeto */

    const [state, setState] = useState(initialState);

    const handleInputChange = ({target}) => { /* función que recibe un evento y a este pasamos el target */
        setState({
            ...state, 
            [target.name] : target.value
        })
    }

    const reset = (newState = initialState) => 
    {
        setState(newState)
    }
    return [state, handleInputChange, reset]

}