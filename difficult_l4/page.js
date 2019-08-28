//1)
let actionWithText = function(text) {
    if(typeof text !== 'string') {
        return 'Введнное значение не является строкой';
    } else {
        let newText = String(new RegExp(text.trim()));
        newText = newText.slice(1, newText.length -1);
        
        if(newText.length > 30) {
            return newText.slice(0, 31) + '...';
        } else {
            return newText;
        }
    }
};
console.log(actionWithText('    После демонстрации радио и победы в «Войне токов» Тесла получил повсеместное признание как выдающийся инженер-электротехник и изобретатель.  '));


