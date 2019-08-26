// 1)
let ru   = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en   = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    lang = prompt('Введите на каком языке выводить дни недели "ru" или "en"', 'ru');
    
// a
if(lang === 'ru') {
    alert(ru);
} else if (lang === 'en') {
    alert(en);
} else {
    alert('Введите корректное значение');
}
// b
switch(lang) {
    case 'ru':
        alert(ru);
    break; 
    case 'en':
        alert(en);
    break; 
    default:
        alert('Введите корректное значение');
}

// c
let arr  = {
    'ru': ru,
    'en': en
};
alert(arr[lang]);



// 2)
let namePerson = prompt();

let mesage = (namePerson === 'Артем') ? 'директор' : 
    (namePerson === 'Максим') ? 'преподаватель' : 
    'студент';
console.log(mesage);

