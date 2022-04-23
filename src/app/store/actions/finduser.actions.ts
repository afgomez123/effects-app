import { createAction, props } from "@ngrx/store";
import { Usuario } from "src/app/models/usuario.model";

export const FINDUSER = createAction(
  '[FindUser] Encontrar usuario',
  props<{ id: string }>()
);

export const FINDUSERSUCCESS = createAction(
  '[FindUser] Encontrar usuario success',
  props<{ usuario: Usuario }>()
);

export const FINDUSERFAIL = createAction(
  '[FindUser] Encontrar usuario Fail',
  props<{ payload: any }>()
);
