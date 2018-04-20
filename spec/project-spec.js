import { DateCompare } from "./../src/class.js";

describe('Class', function() {
  let inputDate1;
  let inputDate2;
  let inputDate2;
  let geezerDate;
  let twoDates;

  beforeEach(function() {
    inputDate1 = new Date(1983, 0, 31);
    inputDate2 = new Date(2018, 3, 20);
    inputDate3 = new Date(2018, 3, 19);
    geezerDate = new Date(1933, 0, 31);
    twoDates1 = new DateCompare(inputDate2, inputDate3)
  });

  it('should return the difference in seconds of both dates', function() {
    expect(twoDates1.getDifference).toEqual(86400);
  });
});
