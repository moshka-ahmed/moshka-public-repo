const vessel = {
  name: "MV Red Sea",
  status: "Alongside",
  eta: "06:00",
};

console.log(vessel.name);
console.log(vessel["status"]);

const fleet = [
  vessel,
  { name: "MV Newbuild", status: "Inbound", eta: "14:30" },
];

for (const v of fleet) {
  console.log(v.name, v.status);
}
