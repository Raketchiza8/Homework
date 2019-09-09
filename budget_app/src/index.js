'use strict';
let salaryAmount         = document.querySelector('.salary-amount'),  
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
    start                = document.querySelector('#start'),
    incomeItems          = document.querySelectorAll ('.income-items');  
    
let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    expenses: {},
    income: {},
    incomeMonth: 0,
    addIncome: [],
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start:function() {
       
        if(salaryAmount.value === '') {
            alert('Ошибка поля "Месячный доход" должно быть заполнено');
            start.disabled = 'true';
        } else {
            start.disabled = 'false';
        }
        start.textContent = 'Сбросить';
        appData.budget = +salaryAmount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getIncomeMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.disabledInputs();  

        appData.showResult();
        
        
    },
    showResult: function() {
         //periodSelect.addEventListener('change', appData.calcPeriod);
        resBudgetMonth.value = appData.budgetMonth;
        resBudgetDay.value = appData.budgetDay;
        resExpensesMonth.value = appData.expensesMonth;
        resExpenses.value = appData.addExpenses.join(',');
        resIncome.value = appData.addIncome.join(',');
        resTargetMonth.value = appData.getTargetMonth();
        resPeriod.value = appData.calcPeriod();

    },
    // блокирование инпутов
    disabledInputs: function() {
        let allInputs = document.querySelectorAll('input');

        allInputs.forEach((input) => {
            if(input.type === 'text') {
                input.disabled = true;
            }
        });
    },
    // получение возможных рассходов и запись в объект
    getAddExpenses: function() {
        let addExpenses = additionalExpenses.value.split(',');
        addExpenses.forEach((item) => {
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    // перебор возможных доходов и добавление их в объект
    getAddIncome: function() {
        additionalincomeItems.forEach((item) => {
            let itemValue = item.value.trim();
            if(item.value !== ''){
                appData.addIncome.push(itemValue);
            }
        })
    },
    //добавление блока обязательных расходов
    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);

        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    //добавление блока дополнительных доходов
    addIncomeBlock: function() {
        let cloneincomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneincomeItems, incomePlus);

        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },

    // перебор обязательных расходов и добавление их в объект
    getExpenses: function() {
       
        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value,
                cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        })
    },
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    getIncome: function() {

        incomeItems.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title').value,
            cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        });
        
    },   
    getExpensesMonth: function() {
       
        let sum = 0;
        for( let key in this.expenses) {
            sum += +this.expenses[key];
        }
        this.expensesMonth = sum;
    },
    getIncomeMonth: function() {
       
        let sum = 0;
        for( let key in this.income) {
            sum += +this.income[key];
        }
        this.incomeMonth = sum;
    },
    getBudget: function() {
       
        this.budgetMonth = Math.floor(this.budget + this.incomeMonth - this.expensesMonth);
        this.budgetDay   = Math.floor(this.budgetMonth / 31);
    },
    getTargetMonth: function() {
        console.log('targetAmount', targetAmount);
        return Math.ceil( targetAmount.value / this.budgetMonth);
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
    },
    getInfoDeposit: function() {
        if(this.deposit) {

            do {
                this.percentDeposit = prompt('Какой годовой процент?','10');
            } while (isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null)


            do {
                this.moneyDeposit = prompt('Какая сумма заложена?','10000');
            } while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null)
        }
    },
    calcPeriod: function() {
        return this.budgetMonth * periodSelect.value;
    },
    addPeriodTitle: function() {
        periodTitle.textContent = periodSelect.value;
    }
};
start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', appData.addPeriodTitle);


appData.getInfoDeposit();






    
   
   
   
    
    

   






