export const getLowPoints = (heightMapStrings: string[]): number => {
  const lowPoints: number[] = [];

  const heightMap = heightMapStrings.map((row) => {
    return row.split("").map((digitString) => Number(digitString));
  });

  heightMap.forEach((row, rowIndex) => {
    row.forEach((height, columnIndex) => {
      const northRow = heightMap[rowIndex - 1];
      const southRow = heightMap[rowIndex + 1];

      const north = northRow ? northRow[columnIndex] : 9;
      const south = southRow ? southRow[columnIndex] : 9;

      const east = isNaN(row[columnIndex + 1]) ? 9 : row[columnIndex + 1];
      const west = isNaN(row[columnIndex - 1]) ? 9 : row[columnIndex - 1];

      const adjacentLocations = [north, south, east, west];
      if (
        adjacentLocations.every((locationHeight) => locationHeight > height)
      ) {
        lowPoints.push(height);
      }
    });
  });
  return lowPoints.reduce((riskSum, lowPoint) => {
    return riskSum + lowPoint + 1;
  }, 0);
};