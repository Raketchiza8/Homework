'use strict';
let salaryAmount          = document.querySelector('.salary-amount'),  
    btnInPlus             = document.querySelector('.income_add'),
    additionalincomeItems = document.querySelectorAll('.additional_income-item'),
    expensesItems         = document.querySelectorAll('.expenses-items'),
    btnExpPlus            = document.querySelector('.expenses_add'),
    additionalExpenses    = document.querySelector('.additional_expenses-item'),
    depositCheck          = document.querySelector('#deposit-check'),
    targetAmount          = document.querySelector('.target-amount'),
    periodSelect          = document.querySelector('.period-select'),
    periodTitle           = document.querySelector('.period-amount'), 
    resBudgetMonth        = document.querySelector('.budget_month-value'),
    resBudgetDay          = document.querySelector('.budget_day-value'),
    resExpensesMonth      = document.querySelector('.expenses_month-value'),
    resIncome             = document.querySelector('.additional_income-value'),
    resExpenses           = document.querySelector('.additional_expenses-value'),
    resPeriod             = document.querySelector('.income_period-value'),
    resTargetMonth        = document.querySelector('.target_month-value'),
    start                 = document.querySelector('#start'),
    cancel                = document.querySelector('#cancel'),
    incomeItems           = document.querySelectorAll('.income-items'),
    depositBank           = document.querySelector('.deposit-bank'),
    depositAmount         = document.querySelector('.deposit-amount'),
    depositPercent        = document.querySelector('.deposit-percent'),
    depositCheckmark    = document.querySelector('.deposit-checkmark');

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
AppData.prototype.check = function() {
    if(salaryAmount.value !== '') {
       start.removeAttribute('disabled');
    }
};
AppData.prototype.start = function() {
    if(salaryAmount.value === '') {
        start.setAttribute('disabled', 'true');
        start.style.display = 'none';
        alert('Поле месячный доход должно быть заполнено!');
        cancel.style.display = 'block';
        this.disabled();
        return;
    } 

    start.style.display = 'none';
    cancel.style.display = 'block';
    
    
    
    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getIncomeMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getInfoDeposit();
    this.getBudget();
    
     
    this.showResult();

    this.disabled();
};
AppData.prototype.disabled = function() {
    const _this = this;
    let allInputs = document.querySelectorAll('.data input[type = text]'); 

    allInputs.forEach((input) => {
            input.value = '';
            input.disabled = true;
    });
    depositCheck.setAttribute('disabled', 'true'); 
    btnInPlus.setAttribute('disabled', 'true'); 
    btnExpPlus.setAttribute('disabled', 'true');

};
AppData.prototype.showResult = function() {
    const _this = this;  
    resBudgetMonth.value = this.budgetMonth;
    resBudgetDay.value = this.budgetDay;
    resExpensesMonth.value = this.expensesMonth;
    resExpenses.value = this.addExpenses.join(',');
    resIncome.value = this.addIncome.join(',');
    resTargetMonth.value = this.getTargetMonth();
    resPeriod.value = this.calcPeriod();

    periodSelect.addEventListener('change', function() {
        periodTitle.value = _this.calcPeriod();
    });

};
//добавление блока обязательных расходов
AppData.prototype.addExpensesBlock = function() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true),
        childrenIncome  = cloneExpensesItem.querySelectorAll('input');
    childrenIncome.forEach((child) => {
        child.value = '';
    });
    

    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpPlus);

    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3) {
        btnExpPlus.style.display = 'none';
    }
};
AppData.prototype.addBlock = function(items, btn, classItem) {
    console.log(items.length);
    let cloneItem = items[0].cloneNode(true),
        childrenItem  = cloneItem.querySelectorAll('input');
        childrenItem.forEach((child) => {
        child.value = '';
    });
    
    items[0].parentNode.insertBefore(cloneItem, btn);
    
    
    items = document.querySelectorAll(`.${classItem}-items`);
    if(items.length === 3) {
        btn.style.display = 'none';
    }
};
// перебор обязательных расходов и добавление их в объект
AppData.prototype.getExpenses = function() {
     const _this = this;  
     expensesItems.forEach(function(item) {
         let itemExpenses = item.querySelector('.expenses-title').value,
             cashExpenses = item.querySelector('.expenses-amount').value;
         if(itemExpenses !== '' && cashExpenses !== '') {
            _this.expenses[itemExpenses] = cashExpenses;
         }
     });
 };
 //добавление блока дополнительных доходов
AppData.prototype.addIncomeBlock = function() {
    let cloneIncomeItems = incomeItems[0].cloneNode(true),
        childrenIncome = cloneIncomeItems.querySelectorAll('input');
    childrenIncome.forEach((child) => {
        child.value = '';
    });
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, btnInPlus);

    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3) {
        btnInPlus.style.display = 'none';
    }
};
// перебор обязательных доходов и добавление их в объект
AppData.prototype.getIncome = function() {
    const _this = this; 
    incomeItems.forEach(function(item) {
        let itemIncome = item.querySelector('.income-title').value,
        cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== '') {
            _this.income[itemIncome] = cashIncome;
        }
    });
    
}; 
// получение возможных рассходов и запись в объект
AppData.prototype.getAddExpenses = function() {
    const _this = this;  
    let addExpenses = additionalExpenses.value.split(',');
    addExpenses.forEach((item) => {
        item = item.trim();
        if(item !== ''){
            _this.addExpenses.push(item);
        }
    });
};
// перебор возможных доходов и добавление их в объект
AppData.prototype.getAddIncome = function() {
    const _this = this;  
    additionalincomeItems.forEach((item) => {
        let itemValue = item.value.trim();
        if(item.value !== ''){
            _this.addIncome.push(itemValue);
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
AppData.prototype.getBudget = function() {
   
    this.budgetMonth = Math.floor(this.budget + this.incomeMonth - this.expensesMonth + 
                       (this.moneyDeposit * this.percentDeposit) / 12);
    this.budgetDay   = Math.floor(this.budgetMonth / 31);
};
AppData.prototype.getTargetMonth = function() {
    return Math.ceil( targetAmount.value / this.budgetMonth);
};
AppData.prototype.getInfoDeposit = function() {
    if(this.deposit) {
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
    }
};    
AppData.prototype.calcPeriod = function() {
    return this.budgetMonth * periodSelect.value;
};
AppData.prototype.addPeriodTitle = function() {
    periodTitle.textContent = periodSelect.value;
};
AppData.prototype.getIncomeMonth = function() {
   
    let sum = 0;
    for( let key in this.income) {
        sum += +this.income[key];
    }
    this.incomeMonth = sum;
};
AppData.prototype.getStatusMission = function(getTargetMonth) {

    if(this.getTargetMonth() < 0){
        return 'Цель не будет достигнута';
    } else {
        return 'Цель будет достигнута за ' + this.getTargetMonth() + ' месяца';
    }
};
AppData.prototype.checkDeposit = function() {
    if(depositCheck.checked) {
        depositBank.style.display   = 'inline-block';
        depositAmount.style.display = 'inline-block';
        appData.deposit             = 'true';
        depositBank.addEventListener('change', function() {
            let selectIndex = this.options[this.selectedIndex].value;
            if(selectIndex === 'other') {
                depositPercent.style.display = 'inline-block';
                depositPercent.removeAttribute('disabled'); 
                depositPercent.value = '';
            } else {
                depositPercent.style.display = 'none';
                depositPercent.value = selectIndex;
            }

        });

    } else {
        depositBank.style.display   = 'none';
        depositAmount.style.display = 'none';
        depositAmount.value         = '';
        appData.deposit             = 'false';
    }
};
//сброс настроек
AppData.prototype.reset = function() {
    const _this = this;
    let allInputs = document.querySelectorAll('input'); 

    allInputs.forEach((input) => {
        if(input.classList.contains('period-select')){
            input.value = 1;
            _this.addPeriodTitle();
        } else {
            input.value = '';
            input.disabled = false;
        } 
    });

    depositCheck.removeAttribute('disabled');
    btnInPlus.removeAttribute('disabled');
    btnExpPlus.removeAttribute('disabled');

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

    start.style.display = 'block';
    start.removeAttribute('disabled');
    cancel.style.display = 'none';
}; 

const appData = new AppData();

AppData.prototype.eventsListener = function() {
    start.addEventListener('click', appData.start.bind(appData));
    cancel.addEventListener('click', appData.reset.bind(appData));
    btnExpPlus.addEventListener('click', function() {
        appData.addBlock(expensesItems, btnExpPlus, 'expenses' );
    });
    btnInPlus.addEventListener('click', function() {
        appData.addBlock(incomeItems, btnInPlus, 'income');
    });
   
    periodSelect.addEventListener('change', appData.addPeriodTitle);
    depositCheck.addEventListener('change', appData.checkDeposit);
};
appData.eventsListener();

 



















    
   
   
   
    
    

   






