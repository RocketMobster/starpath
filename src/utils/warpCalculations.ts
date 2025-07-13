import { calculateArrivalInfo, stardateToDate } from './stardate';

// Speed of light in kilometers per second
const C = 299792.458;

export interface WarpCalculationResult {
  timeInHours: number;
  timeInDays: number;
  velocity: number; // km/s
  coefficient: number;
  departureStardate?: number;
  arrivalStardate?: number;
  departureEarthDate?: Date;
  arrivalEarthDate?: Date;
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
 * Calculates travel time and ETA at warp speed
 * @param distanceInLightYears Distance in light years
 * @param warpFactor Warp factor (1-9.99)
 * @param departureStardate Optional departure stardate
 * @returns Object containing travel times, velocity, and ETAs if departure provided
 */
export function calculateWarpTravelTime(
  distanceInLightYears: number, 
  warpFactor: number,
  departureStardate?: number
): WarpCalculationResult {
  const velocity = calculateWarpVelocity(warpFactor);
  const coefficient = Math.pow(warpFactor, 10/3);
  
  // Convert light years to kilometers
  const distanceInKm = distanceInLightYears * 9.461e12;
  
  // Calculate time in seconds
  const timeInSeconds = distanceInKm / velocity;
  
  // Convert to hours and days
  const timeInHours = timeInSeconds / 3600;
  const timeInDays = timeInHours / 24;
  
  const result: WarpCalculationResult = {
    timeInHours,
    timeInDays,
    velocity,
    coefficient
  };

  // Calculate arrival time if departure time is provided
  if (departureStardate) {
    const { stardate: arrivalStardate, earthDate: arrivalEarthDate } = calculateArrivalInfo(departureStardate, timeInDays);
    result.departureStardate = departureStardate;
    result.arrivalStardate = arrivalStardate;
    result.departureEarthDate = stardateToDate(departureStardate);
    result.arrivalEarthDate = arrivalEarthDate;
  }
  
  return result;
}

/**
 * Formats travel time into a human-readable string
 */
export function formatTravelTime(time: WarpCalculationResult): string {
  if (time.timeInDays >= 365) {
    const years = time.timeInDays / 365;
    return `${time.timeInDays.toFixed(1)} days (${years.toFixed(1)} years)`;
  }
  if (time.timeInDays >= 1) {
    return `${time.timeInDays.toFixed(1)} days`;
  }
  return `${time.timeInHours.toFixed(1)} hours`;
}
