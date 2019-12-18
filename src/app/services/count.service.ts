import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  constructor() {}

  getRandom(): Observable<number> {
    console.log('random');
    // Yeah this is very random
    return new BehaviorSubject(-5).asObservable();
  }
}
