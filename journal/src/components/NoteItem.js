import React from 'react'

export const NoteItem = ({id, date, title, body, url}) => { /* recibimos eso por props */
  return (
    <div 
        className='journal__entry pointer'
        /* evento */
    >
        {/* En react los estilos se deben pasar como un objeto */}
        {/* Le paso un método tendrá como parámetro la url que venga por props */}
        <div 
            className='journal__entry-picture'
            style={{
                backgroundSize : 'cover',
                backgroundImage : `url(${url})`
            }}
        >
        </div>
        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                {title}
            </p>
            <p className='journal__entry-content'>
                {body}
            </p>
            <div className='journal__entry-date-box'>
                <span>Día de la semana</span>
                <h4>Fecha</h4>
            </div>
        </div>
    </div>
  )
}

/* Libreria: Moment */
/* No es lo mismo manejar las fechas del lado del cliente o del lado del servidor.
Quizás si toma la fecha del lado del servidor tomará la fecha del servidor, 
quizás no sea exacta y te da la fecha y hora donde está el servidor alojado.
Distinto es hacerlo del lado del cliente, que le dará la fecha y hora donde la persona está accediendo */
