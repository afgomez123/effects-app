import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from "../actions";
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import { UsuariosService } from "src/app/services/usuarios.service";
import { of } from "rxjs";

@Injectable()

export class UsuariosEffects {
  constructor(
    private action$: Actions,
    private usuariosService: UsuariosService
  ) {

  }

  cargarUsuarios$ = createEffect(
    () => this.action$.pipe(
      ofType(usuariosActions.CARGARUSUARIOS),
      // tap(data => console.log('effect tap', data)),
      mergeMap(
        () => this.usuariosService.getUsers()
          .pipe(
            // tap(data => console.log('getUser effect', data)),
            map(users => usuariosActions.CARGARUSUARIOSSUCCESS({ usuarios: users })),
            catchError(err => of(usuariosActions.CARGARUSUARIOSFAIL({ payload: err })))
          )
      )
    )
  );

}
