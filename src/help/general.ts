export const getRandomColor = ():string => {
  const rgb = {
    r: randomInt(0, 255),
    g: randomInt(0, 255),
    b: randomInt(0, 255),
  };

  while (rgb.r + rgb.g + rgb.b > 500) {
    rgb.g = randomInt(0, 200);
  }

  return "#" + rgb.r.toString(16) + rgb.g.toString(16) + rgb.b.toString(16);
};

const randomInt = (from: number, to: number) => {
  return Math.round(from - 0.5 + Math.random() * (to - from + 1));
};
