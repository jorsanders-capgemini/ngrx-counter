import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/app-state.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectCountValue, selectCountError, selectCountIsActive } from 'src/app/store/count/count.state.interface';
import { IncrementCount, GetCountError, GetCount } from 'src/app/store/count/count.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public count$: Observable<number>;
  public countError$: Observable<Error>;
  public countActive$: Observable<boolean>;

  constructor(private readonly store: Store<IAppState>) {}

  ngOnInit() {
    this.count$ = this.store.pipe(select(selectCountValue));
    this.countError$ = this.store.pipe(select(selectCountError));
    this.countActive$ = this.store.pipe(select(selectCountIsActive));
  }

  increment() {
    this.store.dispatch(new IncrementCount());
  }

  getRandom() {
    this.store.dispatch(new GetCount());
  }
}
