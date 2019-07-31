export const getRegion = coordinates => ({
  ...coordinates,
  latitudeDelta: 0.01,
  longitudeDelta: 0.05
});
export const parseCoordinates = coordinates => {
  return Object.keys(coordinates).reduce(
    (parsed, property) => ({
      ...parsed,
      [property]: parseFloat(coordinates[property])
    }),
    {}
  );
};
