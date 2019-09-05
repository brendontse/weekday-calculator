export function Date(month, day, year) {
  this.month = month;
  this.day = day;
  this.year = year;
}

Date.prototype.checkDate = function() {
  if (this.month > 12) {
    return 'not a valid date';
  } else if (this.month === 1 || this.month === 3 || this.month === 5 || this.month === 7 ||  this.month === 8 || this.month === 10 || this.month === 12) {
      if (this.day > 31) {
        return 'not a valid date';
      }
  } else if (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) {
      if (this.day > 30) {
        return 'not a valid date';
      }
  } else if (this.month === 2 && this.day > 28) {
      return 'not a valid date';
    }
  }

Date.prototype.findDay = function(){
  var divideFour = Math.floor(this.year/4);
  var addDay = divideFour + this.day;
  var plusCentury = addDay + 6;
  if((this.month===1 && this.year % 4 === 0) || (this.month === 2 && this.year % 4 === 0)) {
    plusCentury -= 1;
  }
  if(this.month== 1){
    this.month= 1
  }else if(this.month ===2){
    this.month = 4
  }else if(this.month === 3){
    this.month = 4
  }else if(this.month === 4){
    this.month = 0
  }else if(this.month === 5){
    this.month = 2
  }else if(this.month === 6){
    this.month = 5
  }else if(this.month === 7){
    this.month = 0
  }else if(this.month === 8){
    this.month = 3
  }else if(this.month === 9){
    this.month = 6
  }else if(this.month === 10){
    this.month = 1
  }else if(this.month === 11){
    this.month = 4
  }else if(this.month === 12){
    this.month = 6
  }


var output = (plusCentury + this.month + this.year) % 7
return output
}
