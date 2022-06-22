import React from 'react'

export const Login = () => {

  return (
    <div>
        <h3>Login</h3>
        <div>
            {/* mostramos los errores */}
        </div>
        <form>
            <input type="text"
                placeholder='Email'
                name='email'
                autoComplete='off'
            />
            <input 
                type="password"
                placeholder='Password'
                name='password' 
            />
            <button
                type='submit'
                /* agregar luego la funcionalidad de desabilitar la funcion cuando se este autenticando */
            >
                Login
            </button>
            <div className='auth_social-networks'>
                <p>Logueate con tus redes sociales</p>
                <div className='google-btn'>
                    <div className='google-icon-wrapper'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google button" />
                    </div>
                    <p className='btn-text'>
                        <b>Logueate con Google</b>
                    </p>
                </div>
            </div>
        </form>
    </div>
  )
}