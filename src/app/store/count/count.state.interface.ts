import { createSelector } from '@ngrx/store';
import { selectCount } from '../app-state.interface';

export interface ICountState {
  value: number;
  isActive: boolean;
  error: Error;
}

export const selectCountValue = createSelector(selectCount, s => s.value);
export const selectCountIsActive = createSelector(selectCount, s => s.isActive);
export const selectCountError = createSelector(selectCount, s => s.error);
