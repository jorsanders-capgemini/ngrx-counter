import { Component, OnInit } from '@angular/core';
import { selectCount, IAppState } from 'src/app/store/app-state.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectCountValue } from 'src/app/store/count/count.state.interface';
import { IncrementCount } from 'src/app/store/count/count.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public count$: Observable<number>;

  constructor(private readonly store: Store<IAppState>) {}

  ngOnInit() {
    this.count$ = this.store.pipe(select(selectCountValue));
  }

  increment() {
    this.store.dispatch(new IncrementCount());
  }
}
