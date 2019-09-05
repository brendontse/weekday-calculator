import { Date } from './../src/date.js';

describe('Date', function() {

  it('should test whether a Date is valid', function() {
    var notDate = new Date(13,94,2019)
    expect(notDate).toEqual('not a valid date');
  });
});
