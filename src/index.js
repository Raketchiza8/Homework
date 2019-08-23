let money       = 40000, 
    income      = 'freelanser', 
    addExpenses = 'shooping, study, car', 
    deposit     = false, 
    mission     = 500000, 
    period      = 8;

console.log(typeof money); 
console.log(typeof income);   
console.log(typeof deposit);

console.log(income.length);

console.log('Период ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
console.log(budgetDay);
console.log(money % 30);
