import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  constructor() {}

  getRandom(): Observable<number> {
    // This is a function to simulate an observeable. Which can fail, succeed and give no response.
    const resultType = this.getRandomInt(0, 2);
    switch (resultType) {
      case 0: {
        // simulate success
        return new BehaviorSubject(this.getRandomInt(-9999, 9999)).asObservable();
      }
      case 1: {
        // simulate failed response
        return throwError('I decided to crash');
      }
      default: {
        // simulate no response
        return new Observable();
      }
    }
  }

  private getRandomInt(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
