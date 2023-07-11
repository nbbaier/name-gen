import { nouns, adjectives } from "./words.js";

const random = (...arr: any[]) => {
  arr = arr.flat(1);
  return arr[Math.floor(arr.length * Math.random())];
};

function generateProjectName() {
  const adjective = random(adjectives);
  const validNouns = nouns.filter((n) => n[0] === adjective[0]);
  console.log(validNouns.length);
  if (validNouns.length < 2) {
    return `${random(adjectives)}-${random(nouns)}`;
  }
  const noun = random(validNouns);
  return `${adjective}-${noun}`;
}

let name = generateProjectName();
console.log(name);
