//1)
let week = ['sunday', 'monday', 'thuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    date = new Date();

week.forEach((item, i) => {
  if(i == date.getDay()){
    document.write('<b>'+ item + '</b>' + '<br/>')
  }
  else if(item === 'saturday' || item === 'sunday'){
    document.write('<i>'+ item + '</i>' + '<br/>');
  } else {
    document.write(item + '<br/>');
  }
});



