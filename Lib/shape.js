class Triangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return (this.base * this.height) / 2;
    }
  }
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Square {
    constructor(side) {
      this.side = side; // Set the side length when creating a Square object
    }
  
    calculateArea() {
      return this.side ** 2; // Calculate the area by squaring the side length
    }
  }
  
  module.exports = Square;
  