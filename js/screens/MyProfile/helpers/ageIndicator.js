export const getAgeIndicatorPositions = age => {
  const ageRoundedDown = age - (age % 4);
  const array = [];
  for (let i = 1; i < ageRoundedDown / 4; i++) {
    array.push(`${(i * 400) / ageRoundedDown}%`);
  }
  return array;
};
