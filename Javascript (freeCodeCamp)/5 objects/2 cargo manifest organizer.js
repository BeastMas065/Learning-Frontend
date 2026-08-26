function normalizeUnits(manifest) {
  const normalizedManifest = { ...manifest };

  if (manifest.unit === "lb") {
    normalizedManifest.weight = manifest.weight * 0.45;
  }

  normalizedManifest.unit = "kg";

  return normalizedManifest;
}

function validateManifest(manifest) {
  const validationErrors = {};

  if (!("containerId" in manifest)) {
    validationErrors.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    validationErrors.containerId = "Invalid";
  }

  if (!("destination" in manifest)) {
    validationErrors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    validationErrors.destination = "Invalid";
  }

  if (!("weight" in manifest)) {
    validationErrors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    validationErrors.weight = "Invalid";
  }

  if (!("unit" in manifest)) {
    validationErrors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    validationErrors.unit = "Invalid";
  }

  if (!("hazmat" in manifest)) {
    validationErrors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    validationErrors.hazmat = "Invalid";
  }

  return validationErrors;
}

function processManifest(manifest) {
  const validation = validateManifest(manifest);

  if (Object.keys(validation).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    const normalizedManifest = normalizeUnits(manifest);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}
