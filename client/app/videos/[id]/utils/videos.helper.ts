
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

export function randomCategory(category: number[]){
  return category[getRandomNumber(0, category.length)];
}

export const categoryName = (array: number[]) => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 2) newArray.push({name: 'Orgías', idCategory: 2});
    else if(array[i] === 1) newArray.push({name:'Amateur',idCategory:1}) 
    else if (array[i] === 3) newArray.push({name:'Anal', idCategory:3});
    else if (array[i] === 4) newArray.push({name:'Culos Grandes', idCategory:4});
    else if (array[i] === 5) newArray.push({name:'Brasileras', idCategory:5});
    else if (array[i] === 6) newArray.push({name:'Árabe', idCategory:6});
    else if (array[i] === 7) newArray.push({name:'Maduras', idCategory:7});
    else if (array[i] === 8) newArray.push({name:'MILF', idCategory:8});
    else if (array[i] === 9) newArray.push({name:'Interracial', idCategory:9});
    else if (array[i] === 10) newArray.push({name:'Latinas', idCategory:10});
    else if (array[i] === 11) newArray.push({name:'Lesbianas', idCategory:11});
    else if (array[i] === 12) newArray.push({name:'Morenas', idCategory:12});
    else if (array[i] === 13) newArray.push({name:'Rubias', idCategory:13});
    else if (array[i] === 14) newArray.push({name:'Tetas Grandes', idCategory:14});
    else if (array[i] === 15) newArray.push({name:'Tríos', idCategory:15});
    else if (array[i] === 16) newArray.push({name:'Escuela (18+)', idCategory:16});
    else if (array[i] === 17) newArray.push({name:'Juegos de Rol', idCategory:17});
    else if (array[i] === 18) newArray.push({name:'POV', idCategory:18});
    else if (array[i] === 19) newArray.push({name:'Público', idCategory:19});
    else if (array[i] === 20) newArray.push({name:'Alemanas', idCategory:20});
    else if (array[i] === 21) newArray.push({name:'Masajes', idCategory:21});
    else if (array[i] === 22) newArray.push({name:'Caricaturas', idCategory:22});
    else if (array[i] === 23) newArray.push({name:'Francesas', idCategory:23});
    else if (array[i] === 24) newArray.push({name:'Rusas', idCategory:24});
    else if (array[i] === 25) newArray.push({name:'Solitaria', idCategory:25});
    else if (array[i] === 26) newArray.push({name:'Solitario', idCategory:26});
    else if (array[i] === 27) newArray.push({name:'Bondage', idCategory:27});
    else if (array[i] === 28) newArray.push({name:'Mamadas', idCategory:28});
    else if (array[i] === 29) newArray.push({name:'Eyaculaciones', idCategory:29});
    else if (array[i] === 30) newArray.push({name:'Bukkake', idCategory:30});
    else if (array[i] === 69) newArray.push({name:'Europeos', idCategory:69});
  }
  return newArray;
};
