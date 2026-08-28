const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const objects = [];

  for (const string of rawData) {
    const arr = string.split("|");
    const sku = arr[0];

    let duplicate = false;

    for (const item of objects) {
      if (item.sku === sku) {
        duplicate = true;
        break;
      }
    }

    if (duplicate) {
      continue;
    }

    objects.push({
      sku: arr[0],
      name: arr[1],
      qty: Number(arr[2]),
      expires: arr[3],
      zone: arr[4] || "general"
    });
  }

  return objects;
}


function planRestock(pantry, shipment) {
  const action = [];
  let done = false;
  for (const item of shipment) {
    if (item.qty <= 0) {
      action.push({type: "discard", item: item})
      done = true;
    } else {
      for (const stock of pantry) {
        if (stock.sku === item.sku){
          action.push({ type: "restock", item: item})
          done = true;
        }
      }
    }
    if (!done) {
      action.push({type: "donate", item: item})
    }
  }
  return action;
}

function groupByZone(actions) {
  const groups = {};
  for (const member of actions) {
    if (!(member.item.zone in groups)) {
      groups[member.item.zone] = []
    }
    groups[member.item.zone].push(member);
  }
  return groups;
}

function clonePantry(pantry) {
  const copy = []
  for (const item of pantry) {
    let copied_item = {...item};
    copy.push(copied_item);
  }
  return copy;
}
const shipment = parseShipment(rawData);
console.log(shipment)
const restock = planRestock(pantry, shipment);
console.log(restock)
const zone = groupByZone(restock);
console.log(zone)
const clone = clonePantry(pantry)
console.log(clone)
