import * as Actions from './actions';

const { set, clear } = Actions;

const myDate = Date.now();

describe('start actions', () => {
  describe('set', () => {
    it('sets the start time', () => {
      expect(set(myDate)()).toEqual(myDate);
    });
  });

  describe('clear', () => {
    it('sets the starttime to now', () => {
      expect(clear()(myDate)).toEqual(Date.now());
    });
  });
});
