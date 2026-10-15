function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}

function checkoutDevice(ledger, assetTag, borrower) {
  if (!Object.prototype.hasOwnProperty.call(ledger, assetTag)) {
    return {
      ledger: ledger,
      message: `Asset ${assetTag} was not found.`
    };
  }

  if (ledger[assetTag].status === "CheckedOut") {
    return {
      ledger: ledger,
      message: `Asset ${assetTag} is already checked out.`
    };
  }

  const updatedLedger = loadLedger(serializeLedger(ledger));

  updatedLedger[assetTag].borrower.name = borrower.name;
  updatedLedger[assetTag].borrower.email = borrower.email;
  updatedLedger[assetTag].status = "CheckedOut";

  return {
    ledger: updatedLedger,
    message: `Asset ${assetTag} has been checked out to ${borrower.name}.`
  };
}

function checkinDevice(ledger, assetTag) {
  if (!Object.prototype.hasOwnProperty.call(ledger, assetTag)) {
    return {
      ledger: ledger,
      message: `Asset ${assetTag} was not found.`
    };
  }

  const updatedLedger = loadLedger(serializeLedger(ledger));

  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";
  updatedLedger[assetTag].dueDate = "";
  updatedLedger[assetTag].status = "CheckedIn";

  return {
    ledger: updatedLedger,
    message: `Asset ${assetTag} has been checked in.`
  };
}

function listOverdueDevices(ledger, today) {
  function dateValue(dateString) {
    const [month, day, year] = dateString.split("/").map(Number);
    return year * 10000 + month * 100 + day;
  }

  const todayValue = dateValue(today);

  return Object.values(ledger)
    .filter(device =>
      device.status === "CheckedOut" &&
      device.dueDate !== "" &&
      dateValue(device.dueDate) < todayValue
    )
    .sort((a, b) => dateValue(a.dueDate) - dateValue(b.dueDate));
}
