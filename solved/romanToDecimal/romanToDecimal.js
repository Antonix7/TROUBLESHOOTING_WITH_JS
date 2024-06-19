function romanToDecimal(roman) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let total = 0;
    let prevValue = 0;
  
    for (let i = roman.length - 1; i >= 0; i--) {
      const currentValue = romanNumerals[roman[i]];
      if (currentValue < prevValue) {
        total -= currentValue;
      } else {
        total += currentValue;
      }
      prevValue = currentValue;
    }
  
    return total;
  }
  
  // Ejemplo de uso:
  console.log(romanToDecimal('XXXIV')); // 34
  console.log(romanToDecimal('LXXIII')); // 73
  console.log(romanToDecimal('CDXCIV')); // 494

module.exports = romanToDecimal;