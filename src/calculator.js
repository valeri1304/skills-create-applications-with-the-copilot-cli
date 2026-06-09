#!/usr/bin/env node
"use strict";

// Node.js CLI calculator
// Supported operations:
// - addition
// - subtraction
// - multiplication
// - division
// - modulo
// - power (exponentiation)
// - square root

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

function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero");
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of negative number");
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entrypoint:
// Usage:
//  node src/calculator.js <operation> <a> <b>
//  node src/calculator.js sqrt <n>    (unary)
// Supported operation names: add, subtract, multiply, divide, modulo, power, sqrt
if (require.main === module) {
  const argv = process.argv.slice(2);
  const op = argv[0];

  function usage() {
    console.error("Usage: node src/calculator.js <operation> <a> <b>");
    console.error("Unary: node src/calculator.js sqrt <n>");
    console.error("Operations: add(+), subtract(-), multiply(*), divide(/), modulo(%), power(pow,^), sqrt");
    process.exit(2);
  }

  if (!op) usage();

  // unary sqrt
  if (op === 'sqrt' || op === 'squareRoot' || op === '√') {
    const aRaw = argv[1];
    if (aRaw === undefined) usage();
    const a = Number(aRaw);
    if (!Number.isFinite(a)) {
      console.error('Operand must be a valid number.');
      process.exit(2);
    }
    try {
      const res = squareRoot(a);
      console.log(res);
      process.exit(0);
    } catch (err) {
      console.error('Error:', err.message);
      process.exit(3);
    }
  }

  const aRaw = argv[1];
  const bRaw = argv[2];
  if (aRaw === undefined || bRaw === undefined) usage();

  const a = Number(aRaw);
  const b = Number(bRaw);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    console.error('Both operands must be valid numbers.');
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
      case "modulo":
      case "%":
        result = modulo(a, b);
        break;
      case "power":
      case "pow":
      case "^":
        result = power(a, b);
        break;
      default:
        console.error(`Unknown operation: ${op}`);
        usage();
    }
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(3);
  }

  if (Number.isFinite(result)) {
    console.log(result);
    process.exit(0);
  } else {
    console.error("Computation did not produce a finite result.");
    process.exit(3);
  }
}
