function parseCount(amount) {
    const parsed = Number.parseFloat(amount);
    if (isNaN(parsed))  {
  throw new Error ("Невалидное значение")
      }
      return parsed;
  }

  function validateCount(amount) {
    try {
        return parseCount(amount);
    } catch(error) {
        return error;
    }
}

class Triangle {
    constructor (sideTreagleeOne, sideTreagleeTwo, sideTreagleeThree) {
        
        this.sideTreagleeOne = sideTreagleeOne;
        this.sideTreagleeTwo = sideTreagleeTwo;
        this.sideTreagleeThree = sideTreagleeThree;

if (((this.sideTreagleeOne + this.sideTreagleeTwo) < this.sideTreagleeThree) || 
            ((this.sideTreagleeOne + this.sideTreagleeThree) < this.sideTreagleeTwo) || 
                ((this.sideTreagleeTwo + this.sideTreagleeThree) < this.sideTreagleeOne)) {
        throw new Error ("Треугольник с такими сторонами не существует");
    }
}

get perimeter() {
    return this.sideTreagleeOne + this.sideTreagleeTwo + this.sideTreagleeThree;
}
get area() {
    let halfP = this.perimeter / 2;  
    let area = Math.sqrt(halfP * (halfP - this.sideTreagleeOne) * (halfP - this.sideTreagleeTwo) * (halfP - this.sideTreagleeThree));
    return Number(area.toFixed(3));
    }
}


function getTriangle (sideTreagleeOne, sideTreagleeTwo, sideTreagleeThree) {
try {
    return new Triangle (sideTreagleeOne, sideTreagleeTwo, sideTreagleeThree);
} catch(err) {
    return { 
        get perimeter() {
            return "Ошибка! Треугольник не существует";
        },
        get area() {
            return "Ошибка! Треугольник не существует";
            }
        }
    }
}