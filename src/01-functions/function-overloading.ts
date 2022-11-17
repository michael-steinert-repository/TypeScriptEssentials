interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinate(obj: Coordinate): Coordinate;

function parseCoordinate(str: string): Coordinate;

function parseCoordinate(x: number, y: number): Coordinate;

function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coordinate: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === 'object') {
    coordinate = {
      ...(arg1 as Coordinate),
    };
  } else if (typeof arg1 === 'string') {
    (arg1 as string).split(',').forEach((str) => {
      const [key, value] = str.trim().split(':');
      coordinate[key as 'x' | 'y'] = parseInt(value, 10);
    });
  } else {
    coordinate = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coordinate;
}

console.log(parseCoordinate({ x: 21, y: 42 }));
console.log(parseCoordinate('x: 21, y: 42'));
console.log(parseCoordinate(21, 42));
