// libs/vehicleUtils.js

/**
 * Parses the capacity string and returns a tuple with min and max capacities.
 * Examples: '3-6 passengers', '5 passengers', '4-5', '3'
 */
export function parseCapacity(capacity) {
  if (!capacity) return [null, null];
  const capacityStr = String(capacity);
  const matches = capacityStr.match(/\d+/g);
  if (!matches) return [null, null];
  const numbers = matches.map(Number);
  if (numbers.length === 1) {
    return [numbers[0], numbers[0]]; // e.g., '5 passengers'
  } else if (numbers.length >= 2) {
    return [Math.min(...numbers), Math.max(...numbers)]; // e.g., '3-6 passengers'
  }
  return [null, null];
}

/**
 * Categorizes the vehicle based on length, width, and passenger capacity.
 * Returns an array: [category, explanation]
 */
export function categorizeVehicle(length, width, capacity) {
  // Ensure length and width are numbers (or zero if missing)
  length = length || 0;
  width = width || 0;
  if (length <= 0 || width <= 0) {
    return ["Invalid inputs", "Please provide valid positive numbers for length and width."];
  }
  
  const [minCapacity, maxCapacity] = parseCapacity(capacity);
  let capacityDescription;
  if (minCapacity !== null && maxCapacity !== null) {
    // If min and max are equal, show "up to {minCapacity} passengers"
    capacityDescription = (minCapacity === maxCapacity)
      ? `up to ${minCapacity} passengers`
      : `${minCapacity}-${maxCapacity} passengers`;
  } else {
    capacityDescription = "an unspecified number of passengers";
  }

  if (length <= 170 && width <= 75 && (maxCapacity === null || maxCapacity <= 3)) {
    return [
      "Small",
      `With a length of ${length} inches, a width of ${width} inches, and seating for ${capacityDescription}, this compact vehicle is ideal for city driving, easy parking, and daily commuting.`
    ];
  } else if (length <= 220 && width <= 80 && (maxCapacity === null || maxCapacity <= 5)) {
    return [
      "Medium",
      `Measuring ${length} inches in length and ${width} inches in width, with seating for ${capacityDescription}, this vehicle offers a great balance of space and maneuverability for small families and everyday use.`
    ];
  } else if (length <= 235 && width <= 85 && (maxCapacity === null || maxCapacity <= 7)) {
    return [
      "Large",
      `With a length of ${length} inches, a width of ${width} inches, and seating for ${capacityDescription}, this spacious vehicle is perfect for larger families, road trips, and group outings.`
    ];
  } else {
    return [
      "Extra Large",
      `With an impressive length of ${length} inches, a width of ${width} inches, and seating for ${capacityDescription}, this vehicle offers maximum space and comfort, making it ideal for big families, long road trips, or those who love extra room.`
    ];
  }
}

/**
 * Builds a structured classification result object using GPT response data.
 *
 * @param {string} year - Vehicle year.
 * @param {string} make - Vehicle make.
 * @param {string} model - Vehicle model.
 * @param {string} trim - Vehicle trim.
 * @param {object} gptResponse - Parsed GPT response with keys: type, length, width, capacity, purpose.
 * @returns {object} - Structured result object.
 */
export function buildClassificationResult(year, make, model, trim, gptResponse) {
  if (gptResponse.error) {
    return { error: gptResponse.error };
  }

  const vehicleType = gptResponse.type || "Unknown";
  const length = parseFloat((gptResponse.length || "").replace(/[^\d.]/g, "")) || 0;
  const width = parseFloat((gptResponse.width || "").replace(/[^\d.]/g, "")) || 0;
  const capacity = gptResponse.capacity || "Unknown";
  const purpose = gptResponse.purpose || "Unknown";

  // For categorization, we use the lower capacity value if available.
  const [minCapacity] = parseCapacity(capacity);
  const capacityForCategory = (minCapacity !== null) ? minCapacity : null;

  const [localCategory, explanation] = categorizeVehicle(length, width, capacityForCategory);

  return {
    category: localCategory,
    vehicle: `${year} ${make} ${model} ${trim}`.trim(),
    type: vehicleType,
    length,
    width,
    capacity,
    purpose,
    explanation
  };
}
