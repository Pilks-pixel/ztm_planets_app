const planets: Array<{
  name: string;
  diameter: number;
  distanceFromSun: number;
  hasLife: boolean;
}> = [
  {
    name: "Earth",
    diameter: 12742,
    distanceFromSun: 149.6e6, // in kilometers
    hasLife: true,
  },
  {
    name: "Mars",
    diameter: 6779,
    distanceFromSun: 227.9e6, // in kilometers
    hasLife: false,
  },
];

export default planets;
