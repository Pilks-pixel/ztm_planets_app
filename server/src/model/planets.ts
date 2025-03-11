var planets: Array<{
  kepler_name: string;
  diameter: number;
  distanceFromSun: number;
  hasLife: boolean;
}> = [
  {
    kepler_name: "Earth",
    diameter: 12742,
    distanceFromSun: 149.6e6, // in kilometers
    hasLife: true,
  },
  {
    kepler_name: "Mars",
    diameter: 6779,
    distanceFromSun: 227.9e6, // in kilometers
    hasLife: false,
  },
];

export default planets;
