import { ActionReducerMap } from "@ngrx/store";
import * as reducer from "./reducers";


export interface AppState {
  usuarios: reducer.UsuarioState,
  findUsuarioState: reducer.findUsuarioState
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducer.usuariosReducer,
  findUsuarioState: reducer.findUsuariosReducer
}
