export class Shape {
  readonly name;
  readonly coordinates;
  readonly width;
  readonly height;
  readonly beta;

  constructor(
    name: string,
    coordinates: [number, number][],
    width: number,
    height: number,
    beta?: boolean
  ) {
    this.name = name;
    this.coordinates = coordinates;
    this.width = width;
    this.height = height;
    this.beta = beta;
  }
}

export const LightweightSpaceship = new Shape(
  "Spaceship",
  [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 0],
    [1, 4],
    [2, 4],
    [3, 0],
    [3, 3],
  ],
  5,
  4
);

export const Pulsar = new Shape(
  "Pulsar",
  [
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 10],
    [2, 11],
    [2, 12],
    [4, 2],
    [4, 7],
    [4, 9],
    [4, 14],
    [5, 2],
    [5, 7],
    [5, 9],
    [5, 14],
    [6, 2],
    [6, 7],
    [6, 9],
    [6, 14],
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 10],
    [7, 11],
    [7, 12],
    [9, 4],
    [9, 5],
    [9, 6],
    [9, 10],
    [9, 11],
    [9, 12],
    [10, 2],
    [10, 7],
    [10, 9],
    [10, 14],
    [11, 2],
    [11, 7],
    [11, 9],
    [11, 14],
    [12, 2],
    [12, 7],
    [12, 9],
    [12, 14],
    [14, 4],
    [14, 5],
    [14, 6],
    [14, 10],
    [14, 11],
    [14, 12],
  ],
  15,
  15
);

export const Point = new Shape("Point", [[0, 0]], 1, 1);

export const Glider = new Shape(
  "Glider",
  [
    [0, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  3,
  3
);

export const MiddleweightSpaceship = new Shape(
  "MWSS",
  [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 0],
    [1, 5],
    [2, 5],
    [3, 4],
    [4, 1],
    [4, 2],
  ],
  6,
  5
);

export const HeavyweightSpaceship = new Shape(
  "HWSS",
  [
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 7],
    [1, 1],
    [1, 7],
    [2, 7],
    [3, 1],
    [3, 6],
    [4, 3],
    [4, 4],
  ],
  8,
  5
);

export const Pentadecathlon = new Shape(
  "Penta-decathlon",
  [
    [4, 5],
    [4, 6],
    [3, 7],
    [5, 7],
    [4, 8],
    [4, 9],
    [4, 10],
    [4, 11],
    [3, 12],
    [5, 12],
    [4, 13],
    [4, 14],
  ],
  18,
  9
);

export const Beehive = new Shape(
  "Beehive",
  [
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 4],
    [3, 2],
    [3, 3],
  ],
  5,
  5
);

export const Loaf = new Shape(
  "Loaf",
  [
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 4],
    [3, 2],
    [3, 4],
    [4, 3],
  ],
  5,
  5
);

export const Boat = new Shape(
  "Boat",
  [
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 3],
    [3, 2],
  ],
  4,
  4
);
export const Tub = new Shape(
  "Tub",
  [
    [1, 2],
    [2, 1],
    [2, 3],
    [3, 2],
  ],
  4,
  4
);

export const Beacon = new Shape(
  "Beacon",
  [
    [1, 1],
    [1, 2],
    [2, 1],
    [3, 4],
    [4, 3],
    [4, 4],
  ],
  5,
  5
);

export const Toad = new Shape(
  "Toad",
  [
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  5,
  5
);

export const Blinker = new Shape(
  "Blinker",
  [
    [2, 1],
    [2, 2],
    [2, 3],
  ],
  5,
  5
);

export const GosperGliderGun = new Shape(
  "Gosper Glider Gun",
  [
    [5, 1],
    [5, 2],
    [6, 1],
    [6, 2],
    [5, 11],
    [6, 11],
    [7, 11],
    [4, 12],
    [3, 13],
    [3, 14],
    [8, 12],
    [9, 13],
    [9, 14],
    [6, 15],
    [4, 16],
    [5, 17],
    [6, 17],
    [7, 17],
    [6, 18],
    [8, 16],
    [3, 21],
    [4, 21],
    [5, 21],
    [3, 22],
    [4, 22],
    [5, 22],
    [2, 23],
    [6, 23],
    [1, 25],
    [2, 25],
    [6, 25],
    [7, 25],
    [3, 35],
    [4, 35],
    [3, 36],
    [4, 36],
  ],
  36,
  9
);

export const Replicator = new Shape(
  "Replicator",
  [
    [2, 0],
    [3, 0],
    [4, 0],
    [1, 1],
    [4, 1],
    [0, 2],
    [4, 2],
    [0, 3],
    [3, 3],
    [0, 4],
    [1, 4],
    [2, 4],
  ],
  5,
  5
);
