import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GetCountSuccess, GetCount, GET_COUNT, GetCountError } from './count.actions';
import { CountService } from 'src/app/services/count.service';

/** Effects to get count data from our API */
@Injectable()
export class CountEffects {
  constructor(private readonly actions$: Actions, private readonly countService: CountService) {}

  /** Gets count from our API */
  @Effect()
  public getCount$: Observable<Action> = this.actions$.pipe(
    ofType<GetCount>(GET_COUNT),
    switchMap(action =>
      this.countService.getRandom().pipe(
        map(count => new GetCountSuccess(count)),
        catchError(() => of(new GetCountError()))
      )
    )
  );
}
