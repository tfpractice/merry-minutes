import 'jasmine-expect';
import moment from 'moment';

import {
  checkEnd,
  checkOrder,
  checkStart,
  clear,
  copy,
  duration,
  end,
  endString,
  endValue,
  ensureStart,
  remaining,
  setEnd,
  setStart,
  start,
  startString,
  startVal,
  timer,
} from './operations';

const myTimer = timer();

describe('operations', () => {
  describe('timer', () => {
    it('has a valid start date', () => {
      expect(moment(myTimer.start).isValid()).toBeTruthy();
    });
    it('has a valid end date', () => {
      expect(moment(myTimer.end).isValid()).toBeTruthy();
    });
  });

  describe('start', () => {
    it('retuns the start prop', () => {
      expect(start(myTimer)).toEqual(myTimer.start);
    });
  });

  describe('end', () => {
    it('retuns the end prop', () => {
      expect(end(myTimer)).toEqual(myTimer.end);
    });
  });

  describe('setters', () => {
    const s1 = moment();

    const e1 = moment(s1).add(30, 's');

    describe('setStart', () => {
      it('returns a new timer with an updated start time', () => {
        expect(setStart(s1)(myTimer).start).toEqual(s1);
      });
    });
    describe('setEnd', () => {
      it('returns a new timer with an updated start time', () => {
        expect(setEnd(e1)(myTimer).end).toEqual(e1);
      });
    });
  });

  describe('formatters', () => {
    describe('startString', () => {
      it('returns a input-string version of the start prop', () => {
        expect(startString(myTimer)).toBeString();
      });
    });

    describe('endString', () => {
      it('returns a input-string version of the end prop', () => {
        expect(endString(myTimer)).toBeString();
      });
    });

    describe('startVal', () => {
      it('returns a input-string version of the start prop', () => {
        expect(startVal(myTimer)).toEqual(myTimer.start);
      });
    });

    describe('endVal', () => {
      it('returns a input-string version of the end prop', () => {
        expect(endVal(myTimer)).toEqual(myTimer.end);
      });
    });
  });
});
