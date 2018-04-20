class DateCompare extends Date {
  constructor(date1, date2) {
    this.date1 = date1;
    this.date2 = date2;

  }

  getDifference() {
    let difference = Math.abs(this.date1 - this.date2);
    return difference;
  }
}

export { DateCompare };
