/**
 * direction, command order -->
 * directions -> north first --> "north", "east", "south", "west"
 * commands -> alphabetical --> "A", "L", "R"
 * coordinates -> mathematical, x first --> [x, y]
 */

export type TDirection = "north" | "east" | "west" | "south";
export type TCommand = "A" | "L" | "R" | string;

interface IPlaceOrder {
  direction: TDirection;
  x: number;
  y: number;
}

const validDirections: TDirection[] = ["north", "east", "south", "west"];

function isValidDirection(direction: TDirection): boolean {
  return validDirections.indexOf(direction) !== -1;
}

export class InvalidInputError extends Error {
  constructor() {
    super();
    this.message = "Invalid Input";
  }
}

export default class Robot {
  bearing: TDirection;
  coordinates: [number, number];

  constructor() {
    this.bearing = "north";
    this.coordinates = [0, 0];
  }

  place({ direction, x, y }: IPlaceOrder): void {
    if (isValidDirection(direction)) {
      this.bearing = direction;
      this.coordinates = [x, y];
    } else {
      throw new InvalidInputError();
    }
  }

  evaluate(commands: TCommand): void {
    commands.split("").forEach((command) => {
      if (command === "L" || command === "R") {
        const direction = command;
        this.turn(direction);
      } else if (command === "A") {
        this.advance();
      }
    });
  }

  turn(direction: TCommand): void {
    const currentDirectionIndex = validDirections.indexOf(this.bearing);
    let newDirectionIndex = validDirections.indexOf(this.bearing);

    if (direction === "L") {
      // modulo for negative number -->
      newDirectionIndex = (((currentDirectionIndex - 1) % 4) + 4) % 4;
    } else {
      newDirectionIndex = (currentDirectionIndex + 1) % 4;
    }

    let newDirection = validDirections[newDirectionIndex];
    this.bearing = newDirection;
  }

  advance(): void {
    const [x, y] = [this.coordinates[0], this.coordinates[1]];
    switch (this.bearing) {
      case "north":
        this.coordinates = [x, y + 1];
        break;
      case "east":
        this.coordinates = [x + 1, y];
        break;
      case "south":
        this.coordinates = [x, y - 1];
        break;
      case "west":
        this.coordinates = [x - 1, y];
        break;
    }
  }
}
