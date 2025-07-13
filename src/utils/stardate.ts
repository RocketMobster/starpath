/**
 * In Star Trek TNG era, stardates are given in the format [YYXXX.XX]
 * YY = Year in the 24th century (47 = 2370)
 * XXX.XX = Days into the year as a fraction of 1000
 */

export interface StardateInfo {
  stardate: number;
  earthDate: Date;
}

/**
 * Converts an Earth date to a stardate
 * @param date Earth date
 * @returns Stardate in TNG format
 */
export function dateToStardate(date: Date): number {
  const year = date.getFullYear();
  if (year < 2323 || year > 2423) {
    throw new Error('Date must be between 2323 and 2423 (24th century)');
  }

  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = (date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24);
  const yearInCentury = year - 2300;
  
  // Convert day of year to fraction of 1000
  const fractionOfYear = (dayOfYear / 365) * 1000;
  
  return parseFloat(`${yearInCentury}${fractionOfYear.toFixed(2)}`);
}

/**
 * Converts a stardate to an Earth date
 * @param stardate Stardate in TNG format
 * @returns JavaScript Date object
 */
export function stardateToDate(stardate: number): Date {
  const yearInCentury = Math.floor(stardate / 1000);
  const year = 2300 + yearInCentury;
  const fraction = stardate - (yearInCentury * 1000);
  
  // Convert fraction of 1000 back to days
  const dayOfYear = (fraction / 1000) * 365;
  
  const date = new Date(year, 0, 1);
  date.setDate(date.getDate() + Math.floor(dayOfYear));
  
  return date;
}

/**
 * Calculates arrival stardate based on departure stardate and journey duration
 * @param departureStardate Stardate of departure
 * @param durationInDays Duration of journey in Earth days
 * @returns Arrival stardate and corresponding Earth date
 */
export function calculateArrivalInfo(departureStardate: number, durationInDays: number): StardateInfo {
  const departureDate = stardateToDate(departureStardate);
  const arrivalDate = new Date(departureDate.getTime() + (durationInDays * 24 * 60 * 60 * 1000));
  const arrivalStardate = dateToStardate(arrivalDate);
  
  return {
    stardate: arrivalStardate,
    earthDate: arrivalDate
  };
}

/**
 * Formats a stardate for display
 * @param stardate Stardate number
 * @returns Formatted string (e.g., "47457.1")
 */
export function formatStardate(stardate: number): string {
  return stardate.toFixed(1);
}
