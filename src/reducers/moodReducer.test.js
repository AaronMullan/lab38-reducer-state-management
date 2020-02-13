import reducer from './moodReducer';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';

describe('mood reducer', () => {
  it('handles the DRINK_COFFEE case', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffees: 1 });
  });
  it('handles the EAT_SNACK case', () => {
    const action = eatSnack();
    const initialState = { snacks: 2 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ snacks: 3 });
  });
  it('handles the TAKE_NAP case', () => {
    const action = takeNap();
    const initialState = { naps: 45 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ naps: 46 });
  });
  it('handles the STUDY case', () => {
    const action = study();
    const initialState = { study: 12 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ study: 13 });
  });
});
