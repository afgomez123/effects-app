import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGARUSUARIOS = createAction('[Usuarios] Cargar Usuarios');

export const CARGARUSUARIOSSUCCESS = createAction(
  '[Usuarios] Cargar Usuarios Success',
  props<{ usuarios: Usuario[] }>()
);

export const CARGARUSUARIOSFAIL = createAction(
  '[Usuarios] Cargar Usuarios Fail',
  props<{ payload: any }>()
);
