#!/usr/bin/env node
"use strict";

// Node.js CLI calculator
// Supported operations:
// - addition
// - subtraction
// - multiplication
// - division

// Exported functions for programmatic use
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

// CLI entrypoint: node src/calculator.js <operation> <a> <b>
if (require.main === module) {
  const [, , op, aRaw, bRaw] = process.argv;

  function usage() {
    console.error("Usage: node src/calculator.js <operation> <a> <b>");
    console.error("Operations: add, subtract, multiply, divide (or +, -, *, /)");
    process.exit(2);
  }

  if (!op || aRaw === undefined || bRaw === undefined) {
    usage();
  }

  const a = Number(aRaw);
  const b = Number(bRaw);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    console.error("Both operands must be valid numbers.");
    process.exit(2);
  }

  let result;
  try {
    switch (op) {
      case "add":
      case "+":
        result = add(a, b);
        break;
      case "subtract":
      case "-":
        result = subtract(a, b);
        break;
      case "multiply":
      case "*":
      case "x":
      case "X":
        result = multiply(a, b);
        break;
      case "divide":
      case "/":
      case "÷":
        result = divide(a, b);
        break;
      default:
        console.error(`Unknown operation: ${op}`);
        usage();
    }
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(3);
  }

  // Print result to stdout
  if (Number.isFinite(result)) {
    console.log(result);
    process.exit(0);
  } else {
    console.error("Computation did not produce a finite result.");
    process.exit(3);
  }
}
