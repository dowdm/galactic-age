class DateCompare extends Date {
  constructor(date1, date2) {
    super();
    this.date1 = date1;
    this.date2 = date2;
    this.expectancy = 80;
  }
  getDifference() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    return `${difference} babylonian seconds`;
  }
  toMercury() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    let years = difference/31536000;
    let mercury= parseInt(years/.24);
    let remainder = (this.expectancy - years);
    let mercuryRemainder = Math.abs(parseInt(remainder/.24));
    if (remainder > 0){
      return [`${mercury} mercury years`, `${mercuryRemainder} mercury years left` ];
    } else if (remainder <= 0){
      return [`${mercury} mercury years`, `${mercuryRemainder} mercury years exceeded` ];
    }
  }
  toVenus() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    let years = difference/31536000;
    let venus= parseInt(years/.62);
    let remainder = (this.expectancy - years);
    let venusRemainder = Math.abs(parseInt(remainder/.62));
    if (remainder > 0){
      return [`${venus} venus years`, `${venusRemainder} venus years left` ];
    } else if (remainder <= 0){
      return [`${venus} venus years`, `${venusRemainder} venus years exceeded` ];
    }
  }
  toMars() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    let years = difference/31536000;
    let mars= parseInt(years/1.88);
    let remainder = (this.expectancy - years);
    let marsRemainder = Math.abs(parseInt(remainder/1.88));
    if (remainder > 0){
      return [`${mars} mars years`, `${marsRemainder} mars years left` ];
    } else if (remainder <= 0){
      return [`${mars} mars years`, `${marsRemainder} mars years exceeded` ];
    }
  }
  toJupiter() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    let years = difference/31536000;
    let jupiter= parseInt(years/11.86);
    let remainder = (this.expectancy - years);
    let jupiterRemainder = Math.abs(parseInt(remainder/11.86));
    if (remainder > 0){
      return [`${jupiter} jupiter years`, `${jupiterRemainder} jupiter years left` ];
    } else if (remainder <= 0){
      return [`${jupiter} jupiter years`, `${jupiterRemainder} jupiter years exceeded` ];
    }
  }
}
export { DateCompare };
