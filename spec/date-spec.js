import { Date } from './../src/date.js';

describe('Date', function() {
  it('should test whether a Date is valid', function() {
    var date = new Date(2,5,2019);
    expect(date.checkDate()).toEqual('not a valid date');
  });
  it('should find the day based the date', function() {
    var date = new Date(1,5,32);
    expect(date.findDay()).toEqual(2);
  });
});
