const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");
const {Triangle, Circle, Square} = require("./lib/shapes")

const question = [
  {
    message: "Enter 3 characters",
    type: "input",
    name: "chars",
  },
  {
    message: "Select a color for your text",
    type: "input",
    name: "textColor",
  },
  {
    message: "Select a shape",
    type: "list",
    choices: ["circle", "square", "triangle"],
    name: "shape",
  },
  {
    message: "Select a color for your shape",
    type: "input",
    name: "shapeColor",
  },
];

inquirer
  .prompt(question)

  .then((response) => {
    
      fs.writeFile(
        "logo.svg",
        createShape(response.chars, response.textColor, response.shapeColor, response.shape),

        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("success");
          }
        }
      );
    }
    )
  .catch((err) => console.log(err));

  function createShape(chars, textColor, shapeColor, shape) {
        if (shape === 'circle') {
          const circle = new Circle(chars, textColor, shapeColor, shape)
          return `
          <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">

          <circle cx="150" cy="100" r="80" fill="${circle.shapeColor}" />

          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.text}</text>

        </svg>
        `
        }
        if (shape === "triangle") {
          const triangle = new Triangle(chars, textColor, shapeColor, shape);
          return `
          <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" class="traingle" fill="${triangle.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text>

</svg>
          `;
        }
        else {
          const square = new Square(chars, textColor, shapeColor, shape);
          return `
          <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">

  <rect width="300" height="300" fill="${square.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.text}</text>

</svg>
          `;
        }
  }