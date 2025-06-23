export const getLevel = (xp: number): number => Math.floor(Math.sqrt(xp) / 10);

export const getPercent = (xp: number): number => {
  const level = getLevel(xp);

  const currentLevelXp = Math.pow(level * 10, 2);
  const nextLevelXp = Math.pow((level + 1) * 10, 2);

  return ((xp - currentLevelXp) / (nextLevelXp - currentLevelXp)) * 100;
};

export const getNextLevelXp = (xp: number): number => {
  const level = getLevel(xp);
  return Math.pow((level + 1) * 10, 2);
};
