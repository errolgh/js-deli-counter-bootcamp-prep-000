var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ` + name + `. You are number ` + katzDeliLine.length + ` in line.`);
  }

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return(`There is nobody waiting to be served!`);
  } else {
    return(`Currently serving ` + katzDeliLine.splice(0, 1) +  `.`);
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return(`The line is currently empty.`);
  } else {
/*    return( /* I need to return a function that returns a string with 2 parameters;
name and index, looped as many times as the current length of katzDeliLine. */
    return(`The line is currently: ` + katzDeliLine + `.`);
  }
}