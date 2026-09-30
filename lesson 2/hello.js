console.log("Hello from Node");
console.log("A7a");
let total = 0;
total = total + 18;
total = total + 12;
console.log(total);
const status = "Alongside";

if (status === "Alongside") {
  console.log("Ship is at berth");
} else {
  console.log("Ship is not at berth");
}
const names = ["MV Red Sea", "MV Newbuild", "MV Harbor"];

for (const name of names) {
  console.log(name);
}

for (let i = 0; i < names.length; i = i + 1) {
  console.log(i, names[i]);
}
const prices = [18, 12, 10];
const doubled = prices.map((price) => price * 2);
console.log(doubled);

const cheap = prices.filter((price) => price < 15);
console.log(cheap);

const twelve = prices.find((price) => price === 12);
console.log(twelve);

const vessel = {
  name: "MV Red Sea",
  status: "Alongside",
  eta: "06:00",
};

const { name, stattus } = vessel;
console.log(name, stattus);
function readNotes(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

console.log(readNotes('["ok"]'));
console.log(readNotes("not json"));
