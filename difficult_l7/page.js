const DomElement = function(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElement = function() {
  let newElement;
  if(this.selector[0] === '.') {
    newElement = document.createElement('div');
    newElement.classList.add(this.selector.slice(1));
    newElement.textContent = 'Квадрат';
  } 
  else if(this.selector[0] === '#') {
    newElement = document.createElement('p');
    newElement.textContent = 'Параграф с текстом';
  }
  newElement.style.cssText = `
    height: ${this.height};
    width: ${this.width};
    background-color: ${this.bg};
    font-size: ${this.fontSize};`;
    document.body.appendChild(newElement);
};

const newDom1 = new DomElement('.squer', '150px', '150px', 'red', '20px');
const newDom2 = new DomElement('#parag', '40px', '150px', 'green', '15px');
newDom1.createElement();
newDom2.createElement();
