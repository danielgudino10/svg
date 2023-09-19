const { Triangle, Circle, Square } = require('./shapes');

test('Triangle test', () => {
  const triangle = new Triangle(3, 4); 
  expect(triangle.calculateArea()).toBe(6); 
});

test('Circle test', () => {
  const circle = new Circle(5); // radius = 5
  expect(circle.calculateArea()).toBeCloseTo(78.54, 2);
});

test('Square test', () => {
  const square = new Square(4); 
  expect(square.calculateArea()).toBe(16); 
});
