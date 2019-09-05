export function Date(month, day, year) {
  this.month = month;
  this.day = day;
  this.year = year;
}

Date.prototype.checkDate = function() {
    if (this.month > 12) {
      return 'not a valid date';
    } else if (this.month = 1 || this.month = 3 || this.month = 5 || this.month = 7 ||  this.month = 8 || this.month = 10 || this.month = 12) {
      if (this.day > 31) {
        return 'not a valid date';
      }
     else if (this.month = 4 || this.month = 6 || this.month = 9 || this.month = 11)
      if (this.day > 30) {
        return 'not a valid date';
      }
      else if (this.month = 2 &&)
        if (this.day > 28)
          return 'not a valid date';
    }


   || (this.day > 31 ){
  }
}
