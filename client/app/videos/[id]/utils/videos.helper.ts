export function getRandomNumber(min: number, max: number) {
  const number = Math.random() * (max - min) + min;
  return Math.floor(number);
}

export function randomSort() {
  const number = Math.random() - 0.5;
  return Math.floor(number);
}

export function titleAcentos(titleOne: string) {
  if (titleOne.includes("%a%")) titleOne = titleOne.replace(/%a%/g, "á");
  if (titleOne.includes("%e%")) titleOne = titleOne.replace(/%e%/g, "é");
  if (titleOne.includes("%i%")) titleOne = titleOne.replace(/%i%/g, "í");
  if (titleOne.includes("%o%")) titleOne = titleOne.replace(/%o%/g, "ó");
  if (titleOne.includes("%u%")) titleOne = titleOne.replace(/%u%/g, "ú");
  if (titleOne.includes("%n%")) titleOne = titleOne.replace(/%n%/g, "ñ");
  return titleOne
}
