// // 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
result = '';
number = 10;

do {
    number += 1;
    result += number + ', ';
} while (number < 20) {
    console.log(result);
}

// 2. Вивести квадрати чисел від 10 до 20.
number = 9;

while (number < 20) {
    number++;
    console.log(Math.pow(number, 2))
}

// 3. Вивести таблицю множення на 7.
number = 7;
multyNumber = '';

do {
    multyNumber++;
    console.log(`${number}*${multyNumber}=${number * multyNumber}`);
} while (multyNumber < 10);

// 4. Знайти суму всіх цілих чисел від 1 до 15.
number = 1;
amount = 0;

while (number <= 15) {
    amount = amount + number;
    number++
}
console.log(amount)

// Знайти добуток усіх цілих чисел від 15 до 35.
number = 15;
amount = 1;

while (number <= 35) {
    amount = amount * number;
    number++
}
console.log(amount)

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
number = 1;
amount = 0;
lastNumber = 500;

while (number <= lastNumber) {
    amount += number;
    number++
}
console.log(amount/lastNumber)

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
startNumber = 30;
limitNumber = 80;
amount = 0;

while (startNumber <= limitNumber) {
    if(startNumber % 2 === 0) {
        amount += startNumber;
    }
    startNumber++;
} 
console.log(amount);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
startNumber = 100;
limitNumber = 200;

while (startNumber <= limitNumber) {
    if(startNumber % 3 === 0) {
        console.log(startNumber);
    }
    startNumber++;
} 

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
factor = +prompt('Please enter any positive number from 1 to 200')
number = 1;

while (number <= 200) {
    if(factor % number === 0) {
        console.log(number);
        }
    number++;
} 

// Визначити кількість його парних дільників.
factor = +prompt('Please enter any positive number from 1 to 200')
number = 1;
sum = 0;

while (number <= 200) {
    if(factor % number === 0) {
        if(number % 2 === 0) {
            sum++;
        }
    } 
    number++;
} 
console.log(sum);

// Знайти суму його парних дільників.
factor = +prompt('Please enter any positive number from 1 to 200')
number = 1;
sum = 0;

while (number <= 200) {
    if(factor % number === 0) {
        if(number % 2 === 0) {
            sum += number;
        }
    } 
    number++;
}
console.log(sum);

// Надрукувати повну таблицю множення від 1 до 10.
number = 1;

while (number < 11) {
    multyNumber = 1;
    while (multyNumber <11) {
        console.log(`${number}*${multyNumber}=${number * multyNumber}`);
        multyNumber++;
    }
    number++;
}