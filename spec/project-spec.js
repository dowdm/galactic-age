import { DateCompare } from "./../src/class.js";

describe('DateCompare', function() {
  let twoDates1;

  beforeEach(function() {
    const inputDate1 = new Date(1983, 0, 31);
    const inputDate2 = new Date(2018, 3, 20);
    const inputDate3 = new Date(2018, 3, 19);
    const geezerDate = new Date(1933, 0, 31);
    twoDates1 = new DateCompare(inputDate2, inputDate3)
  });

  it('should return the difference in seconds of both dates', function() {
    expect(twoDates1.getDifference()).toEqual(86400);
  });
});
