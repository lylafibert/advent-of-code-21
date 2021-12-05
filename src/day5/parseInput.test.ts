import { parseInput } from "./parseInput";

const ventLines = [
  "854,958 -> 957,958",
  "8,0 -> 0,8",
  "9,4 -> 3,4",
  "2,2 -> 2,1",
  "7,0 -> 7,4",
  "6,4 -> 2,0",
  "0,9 -> 2,9",
  "3,4 -> 1,4",
  "0,0 -> 8,8",
  "5,5 -> 8,2",
];

const parsedVentLines = [
  { start: { x: 854, y: 958 }, end: { x: 957, y: 958 } },
  { start: { x: 8, y: 0 }, end: { x: 0, y: 8 } },
  { start: { x: 9, y: 4 }, end: { x: 3, y: 4 } },
  { start: { x: 2, y: 2 }, end: { x: 2, y: 1 } },
  { start: { x: 7, y: 0 }, end: { x: 7, y: 4 } },
  { start: { x: 6, y: 4 }, end: { x: 2, y: 0 } },
  { start: { x: 0, y: 9 }, end: { x: 2, y: 9 } },
  { start: { x: 3, y: 4 }, end: { x: 1, y: 4 } },
  { start: { x: 0, y: 0 }, end: { x: 8, y: 8 } },
  { start: { x: 5, y: 5 }, end: { x: 8, y: 2 } },
];
describe("parseInput", () => {
  it("returns the number of times a depth measurement increases", () => {
    expect(parseInput(ventLines)).toEqual(parsedVentLines);
  });
});
