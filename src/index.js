let money       = +prompt('Ваш ежемесячный доход?', 20000),
    income      = 'freelanser', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
    deposit     = confirm('Есть ли у вас депозит в банке?'), 
    mission     = 500000,
    period      = 8;

// 2)
console.log(addExpenses.split(','));

// 5) 
let charges  = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    amount   = +prompt('Во сколько это обойдется?',3000);
    charges2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    amount2  = +prompt('Во сколько это обойдется?', 10000);

// 6)
let budgetMonth = money - amount - amount2;
console.log(budgetMonth);

// 7)
console.log( Math.ceil(mission / budgetMonth) );

// 8)
let budgetDay = Math.floor(budgetMonth / 31);
console.log('budgetDay: ', budgetDay);






//!!!!!!!!!!!!!!!!!  lesson 4 !!!!!!!!!!!!!!!!!!!

// 1)
let getExpensesMonth = function() {
    return amount + amount2;
};
getExpensesMonth();


let getAccumulatedMonth = function(money, getAmounts) {
    return money - getAmounts(); 
};


let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth);
console.log('accumulatedMonth: ', accumulatedMonth);



let getTargetMonth = function(mission, accumulatedMonth) {
    return Math.ceil( mission / accumulatedMonth);
}
getTargetMonth(mission, accumulatedMonth);

// 2)

let showTypeOf = function(data) {
     console.log(data, typeof(data));
 }

 showTypeOf(money);
 showTypeOf(income);
 showTypeOf(deposit);

let getStatusIncome = function() {
    if(budgetDay > 0) {

        if (budgetDay < 300) {
            return 'Низкий уровень дохода';
        } else if (budgetDay <= 800) {
            return 'Средний уровень дохода';
        } else {
            return 'Высокий уровень дохода';
        }

    } else {
        return 'Что то пошло не так';
    }
}
getStatusIncome();


