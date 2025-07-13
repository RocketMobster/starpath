// Speed of light in kilometers per second
const C = 299792.458;

export interface WarpCalculationResult {
  timeInHours: number;
  timeInDays: number;
  velocity: number; // km/s
  coefficient: number;
}

/**
 * Calculates velocity at warp speed using TNG Warp Scale formula
 * v = w^(10/3) * c, where:
 * v = velocity
 * w = warp factor
 * c = speed of light
 */
export function calculateWarpVelocity(warpFactor: number): number {
  if (warpFactor < 1 || warpFactor > 9.99) {
    throw new Error('Warp factor must be between 1 and 9.99');
  }
  const coefficient = Math.pow(warpFactor, 10/3);
  return coefficient * C;
}

/**
 * Calculates travel time at warp speed
 * @param distanceInLightYears Distance in light years
 * @param warpFactor Warp factor (1-9.99)
 * @returns Object containing travel time in hours and days, velocity, and warp coefficient
 */
export function calculateWarpTravelTime(distanceInLightYears: number, warpFactor: number): WarpCalculationResult {
  const velocity = calculateWarpVelocity(warpFactor);
  const coefficient = Math.pow(warpFactor, 10/3);
  
  // Convert light years to kilometers
  const distanceInKm = distanceInLightYears * 9.461e12;
  
  // Calculate time in seconds
  const timeInSeconds = distanceInKm / velocity;
  
  // Convert to hours and days
  const timeInHours = timeInSeconds / 3600;
  const timeInDays = timeInHours / 24;
  
  return {
    timeInHours,
    timeInDays,
    velocity,
    coefficient
  };
}

/**
 * Formats travel time into a human-readable string
 */
export function formatTravelTime(time: WarpCalculationResult): string {
  if (time.timeInDays >= 1) {
    return `${time.timeInDays.toFixed(1)} days`;
  }
  return `${time.timeInHours.toFixed(1)} hours`;
}
