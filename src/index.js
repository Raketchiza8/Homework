'use strict';

let money,
    start = function() {
        do {
        money = prompt('Ваш ежемесячный доход?', 20000); 
        } while (isNaN(money) || money === '' || money === null)
    }; 
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','бензин,еда'); 
            this.addExpenses = addExpenses.toLowerCase().split(',');    
            this.deposit     = confirm('Есть ли у вас депозит в банке?');
        
        for (let i = 0; i < 2; i++) {
            
            let question,
                amount;
            
            question = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата');

                
            do {
                amount = prompt('Во сколько это обойдётся?', 3000);
            } while (isNaN(amount) || amount === '' || amount === null)

            this.expenses[question] = amount;

        }
    },    
    budget: +money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    expenses: {},
    getExpensesMonth: function() {
        let sum = 0;
        for( let key in this.expenses) {
            sum += +this.expenses[key];
        }
        return sum;
    },
    getBudget: function() {
        this.budgetMonth = Math.floor(this.budget - this.expensesMonth);
        this.budgetDay   = Math.floor(this.budgetMonth / 31);
    },
    getTargetMonth: function() {
        return Math.ceil( this.mission / this.budgetMonth);
    },
    getStatusIncome:function() {
        if(this.budgetDay > 0) {
    
            if (this.budgetDay <= 300) {
                return 'Низкий уровень дохода';
            } else if (this.budgetDay <= 800) {
                return 'Средний уровень дохода';
            } else {
                return 'Высокий уровень дохода';
            }
    
        } else {
            return 'Что то пошло не так';
        }
    },
    getStatusMission: function(getTargetMonth) {
   
        if(this.getTargetMonth() < 0){
            return 'Цель не будет достигнута';
        } else {
            return 'Цель будет достигнута за ' + this.getTargetMonth() + ' месяца';
        }
    }
};


appData.asking();
appData.getBudget();


appData.expensesMonth = appData.getExpensesMonth();
console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log(appData.getStatusMission(appData.getTargetMonth()));


console.log(appData.getStatusIncome());
console.log(appData);

console.log('Наша программа включает в себя данные: ');

for( let key in appData) {
    console.log(key + ':' + appData[key]);
}







