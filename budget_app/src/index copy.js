'use strict';
let start                = document.querySelector('#start'),
cancel               = document.querySelector('#cancel'),
    salaryAmount         = document.querySelector('.salary-amount'),  
    incomePlus           = document.querySelector('.income_add'),
    additionalincomeItems = document.querySelectorAll('.additional_income-item'),
    expensesItems        = document.querySelectorAll('.expenses-items'),
    expensesPlus         = document.querySelector('.expenses_add'),
    additionalExpenses   = document.querySelector('.additional_expenses-item'),
    depositCheck         = document.querySelector('#deposit-check'),
    targetAmount         = document.querySelector('.target-amount'),
    periodSelect         = document.querySelector('.period-select'),
    periodTitle          = document.querySelector('.period-amount'), 
    resBudgetMonth       = document.querySelector('.budget_month-value'),
    resBudgetDay         = document.querySelector('.budget_day-value'),
    resExpensesMonth     = document.querySelector('.expenses_month-value'),
    resIncome            = document.querySelector('.additional_income-value'),
    resExpenses          = document.querySelector('.additional_expenses-value'),
    resPeriod            = document.querySelector('.income_period-value'),
    resTargetMonth       = document.querySelector('.target_month-value'),
    incomeItems          = document.querySelectorAll ('.income-items');
     
const AppData = function() {
        this.budget         = 0;
        this.budgetDay      = 0;
        this.budgetMonth    = 0;
        this.expensesMonth  = 0;
        this.expenses       = {};
        this.income         = {};
        this.incomeMonth    = 0;
        this.addIncome      = [];
        this.addExpenses    = [];
        this.deposit        = false;
        this.percentDeposit = 0;
        this.moneyDeposit   = 0;
};

AppData.prototype.start = function() {
    console.log(this);
    //const _this = this;
    if(salaryAmount.value === '') {
        alert('Ошибка поля "Месячный доход" должно быть заполнено');
    } else {
        start.style.display = 'none';
        //_this.disabledInputs(); 
        cancel.style.display = 'block';
    }
   
    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getIncomeMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
     
    this.showResult();
};
AppData.prototype.showResult = function() {
         
    resBudgetMonth.value = this.budgetMonth;
    resBudgetDay.value = this.budgetDay;
    resExpensesMonth.value = this.expensesMonth;
    resExpenses.value = this.addExpenses.join(',');
    resIncome.value = this.addIncome.join(',');
    resTargetMonth.value = this.getTargetMonth();
    resPeriod.value = this.calcPeriod();

};
//сброс настроек
AppData.prototype.reset = function() {

    let allInputs = document.querySelectorAll('input'); 
    allInputs.forEach((input) => {
        if(input.classList.contains('period-select')){
            input.value = 1;
            this.addPeriodTitle();
        } else {
            input.value = '';
            input.disabled = false;
        }
        
    });
};
// блокирование инпутов
AppData.prototype.disabledInputs = function() {
    let allInputs = document.querySelectorAll('input'); 
    allInputs.forEach((input) => {
        if(input.type === 'text') {
            input.disabled = true;
        }
    });
};
// получение возможных рассходов и запись в объект
AppData.prototype.getAddExpenses = function() {
    let addExpenses = additionalExpenses.value.split(',');
    addExpenses.forEach((item) => {
        item = item.trim();
        if(item !== ''){
            this.addExpenses.push(item);
        }
    });
};
// перебор возможных доходов и добавление их в объект
AppData.prototype.getAddIncome = function() {
    additionalincomeItems.forEach((item) => {
        let itemValue = item.value.trim();
        if(item.value !== ''){
            this.addIncome.push(itemValue);
        }
    });
};
//добавление блока обязательных расходов
AppData.prototype.addExpensesBlock = function() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true),
        childrenIncome  = cloneExpensesItem.querySelectorAll('input');
    childrenIncome.forEach((child) => {
        child.value = '';
    });
    

    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);

    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
    }
};
//добавление блока дополнительных доходов
AppData.prototype.addIncomeBlock = function() {
    let cloneIncomeItems = incomeItems[0].cloneNode(true),
        childrenIncome = cloneIncomeItems.querySelectorAll('input');
    childrenIncome.forEach((child) => {
        child.value = '';
    });
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);

    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3) {
        incomePlus.style.display = 'none';
    }
};

// перебор обязательных расходов и добавление их в объект
AppData.prototype.getExpenses = function() {
   console.log(this);
    expensesItems.forEach(function(item) {
        let itemExpenses = item.querySelector('.expenses-title').value,
            cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== '') {
            this.expenses[itemExpenses] = cashExpenses;
        }
    });
};
AppData.prototype.getIncome = function() {

    incomeItems.forEach(function(item) {
        let itemIncome = item.querySelector('.income-title').value,
        cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== '') {
            this.income[itemIncome] = cashIncome;
        }
    });
    
};  
AppData.prototype.getExpensesMonth = function() {
   
    let sum = 0;
    for( let key in this.expenses) {
        sum += +this.expenses[key];
    }
    this.expensesMonth = sum;
};
AppData.prototype.getIncomeMonth = function() {
   
    let sum = 0;
    for( let key in this.income) {
        sum += +this.income[key];
    }
    this.incomeMonth = sum;
};
AppData.prototype.getBudget = function() {
   
    this.budgetMonth = Math.floor(this.budget + this.incomeMonth - this.expensesMonth);
    this.budgetDay   = Math.floor(this.budgetMonth / 31);
};
AppData.prototype.getTargetMonth = function() {
    return Math.ceil( targetAmount.value / this.budgetMonth);
};
AppData.prototype.getStatusIncome = function() {
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
};
AppData.prototype.getStatusMission = function(getTargetMonth) {

    if(this.getTargetMonth() < 0){
        return 'Цель не будет достигнута';
    } else {
        return 'Цель будет достигнута за ' + this.getTargetMonth() + ' месяца';
    }
};
AppData.prototype.getInfoDeposit = function() {
    // if(this.deposit) {

    //     do {
    //         this.percentDeposit = prompt('Какой годовой процент?','10');
    //     } while (isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null)


    //     do {
    //         this.moneyDeposit = prompt('Какая сумма заложена?','10000');
    //     } while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null)
    // }
};
AppData.prototype.calcPeriod = function() {
    return this.budgetMonth * periodSelect.value;
};
AppData.prototype.addPeriodTitle = function() {
    periodTitle.textContent = periodSelect.value;
};




const appData = new AppData();
console.log('appData: ', appData);





start.addEventListener('click', appData.start);
cancel.addEventListener('click', appData.reset);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', appData.addPeriodTitle);








    
   
   
   
    
    

   






