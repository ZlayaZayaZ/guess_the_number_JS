const numberToGuess = Math.round(Math.random()*1000)

console.log('Я загадал', +numberToGuess)

while (true) {

let numberFromUser = prompt('Введите число от 0 до 999:')

console.log('Вы ввели:', +numberFromUser)

if (isNaN(numberFromUser) || (numberFromUser <= 0) || (numberFromUser >= 999)) {
    alert('Введено не число от 0 до 999!')
} else if (+numberFromUser > numberToGuess) {
    alert('Загаданное число меньше!'); 
} else if (+numberFromUser < numberToGuess) {
    alert('Загаданное число больше!')
} else {
    alert('Вы угадали!')
    break
}
}