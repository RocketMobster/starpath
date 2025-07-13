import { Destination } from '@/types/destination';

/**
 * Calculates the distance between two destinations in light years
 * using a simplified 3D distance calculation
 */
export function calculateDistance(origin: Destination, destination: Destination): number {
  // For now, we'll estimate based on the Earth-relative distances
  // In the future, we'll use actual coordinate calculations
  // This is a simplified placeholder that assumes destinations roughly form a triangle with Earth
  const originDistance = origin.distance;
  const destinationDistance = destination.distance;
  
  // If one of the points is Earth (distance = 0), return the other point's distance
  if (originDistance === 0) return destinationDistance;
  if (destinationDistance === 0) return originDistance;
  
  // Calculate approximate distance using the triangle formed with Earth
  // This is a simplified model - in future we'll use actual coordinates
  const angle = Math.min(Math.abs(getQuadrantAngle(origin.quadrant) - getQuadrantAngle(destination.quadrant)) * Math.PI / 2, Math.PI);
  const distance = Math.sqrt(
    Math.pow(originDistance, 2) + 
    Math.pow(destinationDistance, 2) - 
    2 * originDistance * destinationDistance * Math.cos(angle)
  );
  
  return Number(distance.toFixed(2));
}

/**
 * Converts quadrant name to an angle value (0-3)
 * Alpha = 0, Beta = 1, Gamma = 2, Delta = 3
 */
function getQuadrantAngle(quadrant: string): number {
  const quadrants = ['Alpha', 'Beta', 'Gamma', 'Delta'];
  return quadrants.indexOf(quadrant);
}
