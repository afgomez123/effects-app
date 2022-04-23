import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { observable, Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import * as findUserActions from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit, OnDestroy {

  findUser$: Subscription;
  seleFindUser$: Subscription;
  usrData: Usuario;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.seleFindUser$ = this.store.select('findUsuarioState').subscribe(({ user }) => {
      // console.log('es aca', user)
      this.usrData = user;
    })

    this.findUser$ = this.router.params.subscribe(({ id }) => {
      this.store.dispatch(findUserActions.FINDUSER({ id }));
    });
  }

  ngOnDestroy() {
    this.findUser$?.unsubscribe();
    this.seleFindUser$?.unsubscribe();
  }


}
