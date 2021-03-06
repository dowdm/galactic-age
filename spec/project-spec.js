import { DateCompare } from "./../src/class.js";

describe('DateCompare', function() {
  let twoDates1;
  let twoDates2;
  let twoDates3;

  beforeEach(function() {
    const inputDate1 = new Date(1983, 0, 31);
    const inputDate2 = new Date(2018, 3, 20);
    const inputDate3 = new Date(2018, 3, 19);
    const geezerDate = new Date(1933, 0, 31);
    twoDates1 = new DateCompare(inputDate2, inputDate3);
    twoDates2 = new DateCompare(inputDate2, inputDate1);
    twoDates3 = new DateCompare(inputDate2, geezerDate)
  });

  it('should return the difference in seconds of both dates', function() {
    expect(twoDates1.getDifference()).toEqual('86400 babylonian seconds');
  });

  it('should return the difference in seconds of both dates', function() {
    expect(twoDates2.getDifference()).toEqual('1111359600 babylonian seconds');
    //some calculations determine (1111363200)depending on DST interpretation
  });

  it('should return the Mercurial solar year age of given dates', function() {
    expect(twoDates2.toMercury()[0]).toEqual('146 mercury years');
  });

  it('should return the Venerian solar year age of given dates', function() {
    expect(twoDates2.toVenus()[0]).toEqual('56 venus years');
  });

  it('should return the Martian solar year age of given dates', function() {
    expect(twoDates2.toMars()[0]).toEqual('18 mars years');
  });

  it('should return the Jovian solar year age of given dates', function() {
    expect(twoDates2.toJupiter()[0]).toEqual('2 jupiter years');
  });

  it('should return the Mercurial solar year expectancy remaining of given dates', function() {
    expect(twoDates2.toMercury()[1]).toEqual('186 mercury years left');
  });

  it('should return the Venerian solar year expectancy remaining of given dates', function() {
    expect(twoDates2.toVenus()[1]).toEqual('72 venus years left');
  });

  it('should return the Martian solar year expectancy remaining of given dates', function() {
    expect(twoDates2.toMars()[1]).toEqual('23 mars years left');
  });

  it('should return the Jovian solar year expectancy remaining of given dates', function() {
    expect(twoDates2.toJupiter()[1]).toEqual('3 jupiter years left');
  });

  it('should return the Mercury solar year life expectancy exceeded of given age', function() {
    expect(twoDates3.toMercury()[1]).toEqual('21 mercury years exceeded');
  });

  it('should return the Venerian solar year life expectancy exceeded of given age', function() {
    expect(twoDates3.toVenus()[1]).toEqual('8 venus years exceeded');
  });

  it('should return the Martian solar year life expectancy exceeded of given age', function() {
    expect(twoDates3.toMars()[1]).toEqual('2 mars years exceeded');
  });

  it('should return the Jovian solar year life expectancy exceeded of given age', function() {
    expect(twoDates3.toJupiter()[1]).toEqual('0 jupiter years exceeded');
  });
});
