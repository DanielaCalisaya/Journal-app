import React from 'react' /* Se muestra este componente si no hay una nota activa */

export const NoActive = () => {
  return (
    <div className='nothing__main-content'>
        <p>
            Seleccione una nota
            <br/>
            o cree una nota
        </p>
        <i className='far fa-start fa-4x mt-5'></i>
    </div>
  )
}
