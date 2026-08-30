const inventory = [];

function findProductIndex(name) {
  name = name.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name) {
      return i;
    }
  }

  return -1;
}

function addProduct(product) {
  const name = product.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({
      name: name,
      quantity: product.quantity
    });
    console.log(`${name} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  name = name.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  if (quantity > inventory[index].quantity) {
    console.log(
      `Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`
    );
    return;
  }

  inventory[index].quantity -= quantity;

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  } else {
    console.log(
      `Remaining ${name} pieces: ${inventory[index].quantity}`
    );
  }
}
