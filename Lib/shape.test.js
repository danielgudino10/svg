const { Triangle, Circle, Square } = require('./shapes');

test('Triangle test', () => {
  const triangle = new Triangle(3, 4); // base = 3, height = 4
  expect(triangle.calculateArea()).toBe(6); // Area should be 6 for base 3 and height 4
});

test('Circle test', () => {
  const circle = new Circle(5); // radius = 5
  expect(circle.calculateArea()).toBeCloseTo(78.54, 2); // Area should be close to 78.54 for radius 5
});

test('Square test', () => {
  const square = new Square(4); // side = 4
  expect(square.calculateArea()).toBe(16); // Area should be 16 for side length 4
});
