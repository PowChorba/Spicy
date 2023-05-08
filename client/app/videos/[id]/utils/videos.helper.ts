export function getRandomNumber(min: number,max: number){
    const number = Math.random() * (max - min) + min
    return Math.floor(number)
}

export function randomSort() {
    const number = Math.random() - 0.5
    return Math.floor(number)
}