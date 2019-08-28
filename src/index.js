'use strict'

let money,
    income      = 'freelanser', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','бензин,еда'), 
    deposit     = confirm('Есть ли у вас депозит в банке?'), 
    mission     = 500000,
    period      = 8;

//!!!!!!!!!! lessson 555555 !!!!!!!!!
 let start = function() {
     do {
        money = prompt('Ваш ежемесячный доход?', 20000); 
     } while (isNaN(money) || money === '' || money === null)
 }; 
 start();



// 2)
console.log(addExpenses.split(','));

// 5) 
let exspenses,
    exspenses2;


//!!!!!!!!!! lessson 555555 !!!!!!!!!

let getExpensesMonth = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if(i === 0){
            exspenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата');
        }
        if(i === 1) {
            exspenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата');
        }
        let amount = prompt('Во сколько это обойдется?',3000);


        while(isNaN(amount) || amount === '' || amount === null) {
            amount = prompt('Во сколько это обойдется?',3000);
        }
        sum += +amount;

    }
    return sum;
};




// 6)
let budgetMonth = +money - getExpensesMonth();
console.log(budgetMonth);

// 7)
console.log( Math.ceil(mission / budgetMonth) );

// 8)
let budgetDay = Math.floor(budgetMonth / 31);
console.log('budgetDay: ', budgetDay);


let getAccumulatedMonth = function(money, Exspenses) {
    return +money - Exspenses() ; 
};







let getTargetMonth = function(mission, accumulatedMonth) {
    return Math.ceil( mission / budgetMonth);
};


//!!!!!!!!!! lessson 555555 !!!!!!!!!
let getStatusMission = function(getTargetMonth) {
   
    if( getTargetMonth() < 0){
        return 'Цель не будет достигнута';
    } else {
        return 'Цель будет достигнута';
    }
};
console.log(getStatusMission(getTargetMonth));


// 2)

let showTypeOf = function(data) {
     console.log(data, typeof(data));
};

 showTypeOf(money);
 showTypeOf(income);
 showTypeOf(deposit);

let getStatusIncome = function() {
    if(budgetDay > 0) {

        if (budgetDay <= 300) {
            return 'Низкий уровень дохода';
        } else if (budgetDay <= 800) {
            return 'Средний уровень дохода';
        } else {
            return 'Высокий уровень дохода';
        }

    } else {
        return 'Что то пошло не так';
    }
};
// getStatusIncome();
console.log(getStatusIncome());