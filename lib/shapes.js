class Shape {
  constructor(text, textColor, shapeColor)
  {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor, shape)
  {
    super(text, textColor, shapeColor, shape);
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor, shape);
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor, shape);
  }
}

module.exports = {Triangle, Square, Circle}