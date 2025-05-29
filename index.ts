import { nouns, adjectives } from "./words.js";

// const flag = Bun.argv.slice(1) || "no opt";

const random = (...arr: string[]): string => {
  arr = arr.flat(1);
  return arr[Math.floor(arr.length * Math.random())];
};

export function generateProjectName(): string {
  const adjective: string = random(adjectives);
  const validNouns = nouns.filter((n) => n[0] === adjective[0]);
  if (validNouns.length < 2) {
    return `${random(adjectives)}-${random(nouns)}`;
  }

  const noun: string = random(validNouns);
  switch (Bun.argv.slice(2)[0]) {
    case "u":
      return `${adjective}_${noun}`;
    case "c":
      return `${adjective}${noun.charAt(0).toUpperCase() + noun.slice(1)}`;
    default:
      return `${adjective}-${noun}`;
  }
}

let name = generateProjectName();
console.log(name);

console.log();
