const calculator = {
  add(x, y) {
    return (isNaN(x) || isNaN(y)) ? ('Invalid input!') : (x + y);
  },

  subtract(x, y) {
    return (isNaN(x) || isNaN(y)) ? ('Invalid input!') : (x - y);
  },

  multiply(x, y) {
    return (isNaN(x) || isNaN(y)) ? ('Invalid input!') : (x * y);
  },

  divide(x, y) {
    return (isNaN(x) || isNaN(y)) ? ('Invalid input!') : 
      (y === 0) ? ("Can't divide by zero!") : 
      (x / y);
  }
}

export default calculator; 
