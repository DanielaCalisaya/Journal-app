/* Msj de error... firebase manda msj de error, 
si es q no es válido el email, mandara error, 
pueden mandar varios tipos de errores, pero firebase lo mandará en inglés,
entonces aqui haremos una especie de traducción */

import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

export const errors = [ /* array de objetos literales */

    {
        code : 'auth/email-already-exists',
        msg : 'El email ya se encuentra registrado.'
    },
    {
        code : 'auth/invalid-email',
        msg : 'El email no es válido.'
    },
    {
        code : 'Firebase : Error (auth/wrong-password).',
        msg : 'La contraseña es incorrecta'
    },
    {
        code : 'Firebase : Error (auth/user-not-found).',
        msg : 'Credenciales inválidas'
    },
    {
        code : 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can inmediately restore it by resetting your password or you can try again later. (auth/too-many-requests).', 
        msg : 'Debido a reiterados intentos fallidos, su cuenta fue inhabilitada temporalmente. Intente más tarde'
    }
    
]