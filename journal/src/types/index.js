export const types = {  /* acciones */

    login : '[Auth] Login',
    logout : '[Auth] Logout',

    uiSetError : '[UI] Set error',  /* Seteamos el error */
    uiRemoveError : '[UI] Remove error',
    uiStartLoading : '[UI] Start loading',  /* Cuando comienza a cargarse la acción */
    uiFinishLoading : '[UI] Finish loading',

    noteAddNew : '[Notes] New note',  /* listado de notas */
    noteActive : '[Notes] Set active note',
    notesLoad : '[Notes] Load notes',  /* Cargar esas notas */
    noteUpdated : '[Notes] Updated note',
    noteDeleted : '[Notes] Deleted note',
    noteFileUrl : '[Notes] Updated image url',
    noteLogoutCleaning : '[Notes] Logout cleaning'  /* Al cerrar sesión hace limpieza */

}