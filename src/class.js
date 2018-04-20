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
}

export { DateCompare };
