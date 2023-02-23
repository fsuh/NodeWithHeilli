"use strict";

// INSERT INTO computer (id, name, type, processor, amount)
const toInsertArray = (computer) => [
  +computer.id,
  computer.name,
  computer.type,
  computer.processor,
  +computer.amount,
];

// PDATE computer SET name=?, type=?, processor=?, amount=?",
// "WHERE id=?

const toUpdateArray = (computer) => [
  computer.name,
  computer.type,
  computer.processor,
  +computer.amount,
  +computer.id,
];

module.exports = { toInsertArray, toUpdateArray };
