class DateCompare extends Date {
  constructor(date1, date2) {
    super();
    this.date1 = date1;
    this.date2 = date2;
    this.expectancy = 80;
  }

  getDifference() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    return difference;
  }
  toMercury() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    let years = difference/31536000;
    let mercury= parseInt(years/.24);
    let remainder = (this.expectancy - years);
    let mercuryRemainder = parseInt(remainder/.24);
    if (remainder > 0){
      return [mercury, `${mercuryRemainder} left` ];
    } else if (remainder < 0){
      return [mercury, `Math.abs(${mercuryRemainder}) exceeded` ];
    }
  }
  toVenus() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    let years = difference/31536000;
    let venus= parseInt(years/.62);
    let remainder = (this.expectancy - years);
    let venusRemainder = parseInt(remainder/.62);
    return [venus, venusRemainder];
  }
  toMars() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    let years = difference/31536000;
    let mars= parseInt(years/1.88);
    let remainder = (this.expectancy - years);
    let marsRemainder = parseInt(remainder/1.88);
    return [mars, marsRemainder];
  }
  toJupiter() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    let years = difference/31536000;
    let jupiter= parseInt(years/11.86);
    let remainder = (this.expectancy - years);
    let jupiterRemainder = parseInt(remainder/11.86);
    return [jupiter, jupiterRemainder];
  }
}

export { DateCompare };
