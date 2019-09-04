'use strict';

// let money,
//     start = function() {
//         do {
//         money = prompt('Ваш ежемесячный доход?', 20000); 
//         } while (isNaN(money) || money === '' || money === null)
//     }; 
// start();

// let appData = {
//     budget: +money,
//     budgetDay: 0,
//     budgetMonth: 0,
//     expensesMonth: 0,
//     expenses: {},
//     income: {},
//     addIncome: [],
//     addExpenses: [],
//     deposit: false,
//     percentDeposit: 0,
//     moneyDeposit: 0,
//     mission: 50000,
//     period: 3,
//     asking: function() {

//         if(confirm('Есть ли у вас дополнительный заработок?')) {
//             let itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую'),
//                 cashIncome;

//             do {
//                 cashIncome = prompt('Сколько в месяц вы зарабатываете на этом?','10000');
//             } while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null)

//             this.income[itemIncome] = cashIncome;
//         }
//         let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','бензин,еда'); 
//             this.addExpenses = addExpenses.toLowerCase().split(',');    
//             this.deposit     = confirm('Есть ли у вас депозит в банке?');
        
//         for (let i = 0; i < 2; i++) {
            
//             let question,
//                 amount;
            
//             question = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата');

//             do {
//                 amount = prompt('Во сколько это обойдётся?', 3000);
//             } while (isNaN(amount) || amount === '' || amount === null)

//             this.expenses[question] = amount;

//         }
//     },    
//     getExpensesMonth: function() {
//         let sum = 0;
//         for( let key in this.expenses) {
//             sum += +this.expenses[key];
//         }
//         return sum;
//     },
//     getBudget: function() {
//         this.budgetMonth = Math.floor(this.budget - this.expensesMonth);
//         this.budgetDay   = Math.floor(this.budgetMonth / 31);
//     },
//     getTargetMonth: function() {
//         return Math.ceil( this.mission / this.budgetMonth);
//     },
//     getStatusIncome:function() {
//         if(this.budgetDay > 0) {
    
//             if (this.budgetDay <= 300) {
//                 return 'Низкий уровень дохода';
//             } else if (this.budgetDay <= 800) {
//                 return 'Средний уровень дохода';
//             } else {
//                 return 'Высокий уровень дохода';
//             }
    
//         } else {
//             return 'Что то пошло не так';
//         }
//     },
//     getStatusMission: function(getTargetMonth) {
   
//         if(this.getTargetMonth() < 0){
//             return 'Цель не будет достигнута';
//         } else {
//             return 'Цель будет достигнута за ' + this.getTargetMonth() + ' месяца';
//         }
//     },
//     getInfoDeposit: function() {
//         if(this.deposit) {

//             do {
//                 this.percentDeposit = prompt('Какой годовой процент?','10');
//             } while (isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null)


//             do {
//                 this.moneyDeposit = prompt('Какая сумма заложена?','10000');
//             } while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null)
//         }
//     },
//     calcSaveMoney: function() {
//         return this.budgetMonth * this.period;
//     }
// };


// appData.asking();
// appData.getBudget();
// appData.expensesMonth = appData.getExpensesMonth();
// appData.getInfoDeposit();


// console.log('Расходы за месяц: ' + appData.expensesMonth);
// console.log(appData.getStatusMission(appData.getTargetMonth()));


// console.log(appData.getStatusIncome());
// console.log(appData);


// for( let key in appData) {
//     console.log('Наша программа включает в себя данные: \n' + key + ':' + appData[key]);
// }
// appData.addExpenses.forEach((item, i) => {
//     appData.addExpenses[i] = item[0].toUpperCase() + item.slice(1);
// })
// console.log(appData.addExpenses.join(', '));

let 
    money              = document.querySelector('.salary-amount'),
    btnPlusIncome      = document.querySelector('.income_add'),
    additionalIncomes  = document.querySelectorAll('.additional_income-item'),
    expensesTitle      = document.querySelector('.expenses-title'),
    expensesAmount     = document.querySelector('.expenses-amount'),
    btnPlusExpenses    = document.querySelector('.expenses_add'),
    additionalExpenses = document.querySelector('.additional_expenses-item'),
    checkboxDeposit    = document.querySelector('#deposit-check'),
    mission            = document.querySelector('.target-amount'),
    period             = document.querySelector('.period-select'),
    resBudgetMonth     = document.querySelector('.budget_month-value'),
    resBudgetDay       = document.querySelector('.budget_day-value'),
    resExpensesMonth   = document.querySelector('.expenses_month-value'),
    resIncome          = document.querySelector('.additional_income-value'),
    resExpenses        = document.querySelector('.additional_expenses-value'),
    resPeriod          = document.querySelector('.income_period-value'),
    resTargetMonth     = document.querySelector('.target_month-value'),
    buttonCalc         = document.querySelector('#start');
    
   
   
   
    
    

   






