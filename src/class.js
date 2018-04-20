class DateCompare extends Date {
  constructor(date1, date2) {
    super();
    this.date1 = date1;
    this.date2 = date2;

  }

  getDifference() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    return difference;
  }
  toMercury() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    let years = difference/31536000;
    let mercury= years/.24;
    return parseInt(mercury);
  }
  toVenus() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    let years = difference/31536000;
    let venus= years/.62;
    return parseInt(venus);
  }
  toMars() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    let years = difference/31536000;
    let mars= years/1.88;
    return parseInt(mars);
  }
  toJupiter() {
    let difference = Math.abs(this.date1/1000 - this.date2/1000);
    let years = difference/31536000;
    let jupiter= years/11.86;
    return parseInt(jupiter);
  }
}

export { DateCompare };
