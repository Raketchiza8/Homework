let money       = +prompt('Ваш ежемесячный доход?'), 
    income      = 'freelanser', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
    deposit     = confirm('Есть ли у вас депозит в банке?'), 
    mission     = 500000, 
    period      = 8;

// 2)
console.log(addExpenses.split(','));

// 4)
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

// 5) 
let charges  = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    amount   = +prompt('Во сколько это обойдется?');
    charges2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    amount2  = +prompt('Во сколько это обойдется?');

// 6)
let budgetMonth = money - amount - amount2;
console.log(budgetMonth);

// 7)
console.log( Math.ceil(mission / budgetMonth) );

// 8)
let budgetDay = Math.floor(budgetMonth / 31);
console.log( budgetDay);

// 9)
if(budgetDay > 0) {

    if (budgetDay >= 800) {
        console.log('Высокий уровень дохода');
    } else if (300 <= budgetDay < 800) {
        console.log('Средний уровень дохода');
    } else {
        console.log('Низкий уровень дохода');
    }
} else {
    console.log('Что то пошло не так');
}





