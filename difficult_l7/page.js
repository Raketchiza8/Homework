let date  = new Date(),
currentDate = {
    hour:date.getHours(),
    minute:date.getMinutes(),
    second:date.getSeconds(),
    day:date.getDate(),
    month:date.getMonth(),
    year:date.getFullYear()
}
document.write( currentDate.hour + ':' + currentDate.minute + ':' + currentDate.second + ' ' + currentDate.day + '.' + currentDate.month + '.' + currentDate.year );    

let addZero = function(obj) {
  for(let key in obj) {
    obj[key] = String(obj[key]);
    if(obj[key].length === 1) {
      obj[key] = '0' + obj[key];
    }
  }
};
addZero(currentDate);
document.write( '<br/>' + currentDate.hour + ':' + currentDate.minute + ':' + currentDate.second + ' ' + currentDate.day + '.' + currentDate.month + '.' + currentDate.year );    

