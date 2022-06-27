import React from 'react'

export const Register = () => {
    
  return (
    <div>
        <h3 className='auth__title mb-5'>Registrate</h3>
        <div>
            {/* mostramos los errores */}
        </div>
        <form>
        <input type="text"
                placeholder='Nombre'
                name='name'
                autoComplete='off'
                className="auth_input"
            />
            <input 
                type="text"
                placeholder='Email'
                name='email' 
                autoComplete='off'
                className="auth_input"
            />
            <input 
                type="password"
                placeholder='Contraseña'
                name='password' 
                className="auth_input"
            />
            <input 
                type="password"
                placeholder='Confirmar contraseña'
                name='password2' 
                className="auth_input"
            />
            <button
                type='submit'
                className="buttons__btn buttons__btn-primary buttons__btn-block mb-5"
            >
                Registrarme
            </button>
        </form>
    </div>
  )
}
