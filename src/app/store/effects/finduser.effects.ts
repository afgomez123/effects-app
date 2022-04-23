import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsuariosService } from "src/app/services/usuarios.service";
import * as findUserActions from "../actions";


@Injectable()

export class FindUserEffects {
  constructor(
    private action$: Actions,
    private usuariosService: UsuariosService
  ) { }

  findUser$ = createEffect(
    () => this.action$.pipe(
      ofType(findUserActions.FINDUSER),
      tap(data => console.log('effect tap', data)),
      mergeMap(
        (action) => this.usuariosService.getUserById(action.id)
          .pipe(
            tap(data => console.log('getUser effect', data)),
            map(user => findUserActions.FINDUSERSUCCESS({ usuario: user })),
            catchError(err => of(findUserActions.FINDUSERFAIL({ payload: err })))
          )
      )
    )
  );
}
