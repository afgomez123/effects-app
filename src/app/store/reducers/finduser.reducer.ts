import { createReducer, on } from "@ngrx/store"
import { Usuario } from "src/app/models/usuario.model";
import { FINDUSER, FINDUSERFAIL, FINDUSERSUCCESS } from "../actions";

export interface findUsuarioState {
  id: string,
  user: Usuario,
  loaded: boolean,
  loading: boolean,
  error: any,
}

export const findUsuariosInitialState: findUsuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
}

const _usuariosReducer = createReducer(findUsuariosInitialState,
  on(FINDUSER, (state, { id }) =>
  ({
    ...state,
    loading: true,
    id: id
  })),
  on(FINDUSERSUCCESS, (state, { usuario }) =>
  ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...usuario }
  })
  ),
  on(FINDUSERFAIL, (state, { payload }) =>
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



export function findUsuariosReducer(state, action) {
  return _usuariosReducer(state, action);
}
