import React from 'react'

export const NoteAppBar = () => {
  return (
    <div className='notes__appbar'>
        <span>Fecha de hoy</span>
        <input 
            type="file"
            hidden
            id='fileSelector'
            name='file'
            /* evento */ 
            />
            <div>
                {/* Para vincular el input con el label no se usa el for sino el htmlFor */}
                <label 
                    className='buttons__btn pointer'
                    htmlFor='fileSelector'
                >
                    Agregar imagen
                </label>
                <button 
                    className='buttons__btn'
                    /* evento */
                >
                    Guardar
                </button>
            </div>
    </div>
  )
}