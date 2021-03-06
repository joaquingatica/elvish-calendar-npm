import utils from '../utils';
import ElvishDate from '../../src/ElvishDate';

describe('New Instance', function () {
  describe('constructor()', function () {
    it('should be created for current Date', function () {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      utils.dateEquals(new ElvishDate().toDate(), today);
    });
  });
  describe('constructor(yen, loa, period)', function () {
    const yen = ElvishDate.yen('XV');
    const loa = 120;
    const period = ElvishDate.periods.YESTARE;
    it(`should be created for yen ${yen}, loa ${loa} and period ${period}`, function () {
      const date = new ElvishDate(yen, loa, period);
      utils.elvishEquals(date, yen, loa, period);
    });
  });
  describe('constructor(yen, loa, period, day)', function () {
    const yen = ElvishDate.yen('XV');
    const loa = 119;
    const period = ElvishDate.periods.LAIRE;
    const day = 3;
    it(`should be created for yen ${yen}, loa ${loa}, period ${period} and day ${day}`, function () {
      const date = new ElvishDate(yen, loa, period, day);
      utils.elvishEquals(date, yen, loa, period, day);
    });
  });
  describe('constructor(ElvishDate)', function () {
    it('should be created for provided Elvish Date', function () {
      const yen = ElvishDate.yen('XV');
      const loa = 119;
      const period = ElvishDate.periods.LAIRE;
      const day = 3;
      const elvishDate = new ElvishDate(yen, loa, period, day);
      const date = new ElvishDate(elvishDate);
      utils.elvishDateEquals(date, elvishDate);
    });
  });
  describe('constructor(Date)', function () {
    it('should be created for provided Date', function () {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const elvishDate = new ElvishDate(today);
      utils.dateEquals(elvishDate.toDate().toString(), today);
    });
  });
});
