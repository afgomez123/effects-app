import { createReducer, on } from "@ngrx/store"
import { Usuario } from "src/app/models/usuario.model";
import { CARGARUSUARIOS, CARGARUSUARIOSFAIL, CARGARUSUARIOSSUCCESS } from "../actions";

export interface UsuarioState {
  users: Usuario[],
  loaded: boolean,
  loading: boolean,
  error: any,
}

export const usuariosInitialState: UsuarioState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
}

const _usuariosReducer = createReducer(usuariosInitialState,
  on(CARGARUSUARIOS, state => ({ ...state, loading: true })),
  on(CARGARUSUARIOSSUCCESS, (state, { usuarios }) =>
  ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios]
  })
  ),
  on(CARGARUSUARIOSFAIL, (state, { payload }) =>
  ({
    ...state,
    loading: true,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  }))
);



export function usuariosReducer(state, action) {
  return _usuariosReducer(state, action);
}
