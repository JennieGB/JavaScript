/*Задание 1.
Создайте объект Person, представляющий человека, с
следующими свойствами: name, age и gender. Добавьте
также методы introduce и changeName. Метод introduce
должен выводить информацию о человеке, включая его
имя, возраст и пол. Метод changeName должен изменять
имя человека на новое заданное значение.
Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce(); // Ожидаемый результат: My name is
John. I'm 25 years old and I identify as male.
Person.changeName("Mike");*/
const Person = {
    name: "John",
    age: 25,
    gender: "male",
    introduce: function() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    },
    changeName: function(newName) {
        this.name = newName;
    }
};

// Пример использования методов объекта Person
Person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
Person.changeName("Mike");
Person.introduce(); // Ожидаемый результат: My name is Mike. I'm 25 years old and I identify as male.

/* В этом объекте Person определены свойства name, age и gender, а также методы introduce и 
changeName. Метод introduce выводит информацию о человеке, включая его имя, возраст и пол, 
а метод changeName изменяет имя человека на новое заданное значение.*/
/*РЕШЕНИЕ С СЕМИНАРА
//обрати внимание, что слово function не используется
const person = {
name: "John",
age: 25,
gender: "male",

introduce() {
console.log(
`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`
);
},

changeName(newName) {
this.name = newName;
console.log(this.name);
},
};

person.introduce();
person.changeName("Mike");
*/

/* Задание 2.
Создайте объект Animal со свойством name и методом eat(), который
выводит сообщение о том, что животное ест. Создайте объект Dog со
свойством name и методом bark(), который выводит сообщение о
том, что собака лает. Используйте одалживание метода eat() из
объекта Animal для объекта Dog, чтобы вывести сообщение о том,
что собака ест.
// Одалживание метода eat() из объекта Animal к объекту Dog
Dog.eat = Animal.eat;
Dog.eat(); // Вывод: Rex is eating. */
const Animal = {
    name: "",
    eat: function() {
        console.log(`${this.name} is eating.`);
    }
};

const Dog = {
    name: "Rex",
    bark: function() {
        console.log(`${this.name} is barking.`);
    }
};

// Одалживание метода eat() из объекта Animal к объекту Dog
Dog.eat = Animal.eat.bind(Dog);

// Пример использования метода eat() объекта Dog
Dog.eat(); // Вывод: Rex is eating.

/*Здесь объект Animal имеет свойство name и метод eat(), который выводит сообщение о том, 
что животное ест. Объект Dog также имеет свойство name и метод bark(), который выводит 
сообщение о том, что собака лает.
Для использования метода eat() из объекта Animal в объекте Dog, мы используем bind, чтобы 
привязать контекст выполнения метода к объекту Dog. Таким образом, когда вызывается Dog.eat(), 
он выводит сообщение о том, что собака ест. */

/*РЕШЕНИЕ С СЕМИНАРА
//обрати внимание, что слово function не используется
const Animal = {
dogName: "Bobik",
eat() {
console.log(`${this.dogName} ест`);
}
}

Animal.eat();

const Dog = {
dogName: "Sharik",
bark() {
console.log(`${this.dogName} лает`);
},

}

Dog.eat = Animal.eat;
Dog.eat();
*/

/*Задание 3
Создайте объект calculator с методами add(), subtract() и multiply(),
которые выполняют соответствующие математические операции над
двумя числами. Используйте методы call и apply для вызова этих
методов с передачей аргументов.
console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
*/
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};

console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

/* В этом коде создается объект calculator, который содержит методы add(), 
subtract() и multiply(), выполняющие соответствующие математические операции 
над двумя числами.
Для вызова этих методов с использованием call() и apply() передается null в 
качестве первого аргумента, поскольку в данном случае нет необходимости указывать 
контекст выполнения. Второй и третий аргументы передаются как параметры методов. */

/*РЕШЕНИЕ С СЕМИНАРА
const calculator = {
add: function(a, b) {
return a + b;
},
subtract: function(a, b) {
return a - b;
},
multiply: function(a, b) {
return a * b;
}
};

console.log(calculator.add.call(null, 5, 3));
console.log(calculator.subtract.apply(null, [5, 3]));
*/

/*Задание 4.
Создайте класс Person, который имеет свойства name и age, а также
метод introduce(), который выводит сообщение с представлением
имени и возраста персоны.
const person = new Person("John", 25);
person.introduce(); // Вывод: My name is John and I'm 25 years old.*/
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const person1 = new Person1("John", 25);
person1.introduce(); // Вывод: My name is John and I'm 25 years old.

/*Этот класс Person имеет два свойства: name и age, которые инициализируются 
через конструктор при создании экземпляра класса. Метод introduce() выводит 
сообщение с представлением имени и возраста персоны. */

/*РЕШЕНИЕ С СЕМИНАРА 
class Persons {

constructor(name, age) {
this.name = name;
this.age = age;
}

introduce = () => {
console.log(`My name is ${this.name}. Mнe ${this.age}`);
}
}

const person = new Persons("John", 25);
console.log(person);
person.introduce();
*/

/* Задание 5.
Создайте класс BankAccount, который представляет банковский счет.
У него должны быть свойства accountNumber (номер счета) и balance
(баланс), а также методы deposit(amount) для пополнения счета и
withdraw(amount) для снятия денег со счета. Класс должен иметь
также статическое свойство bankName, которое содержит название
банка.
const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account
1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account
1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account
1234567890
*/
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    static bankName = "MyBank";

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
        } else {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
        }
    }
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890

/*В этом классе BankAccount есть свойства accountNumber и balance, а также методы 
deposit(amount) для пополнения счета и withdraw(amount) для снятия денег со счета. 
Класс также имеет статическое свойство bankName, которое содержит название банка. */

/*РЕШЕНИЕ С СЕМИНАРА
class BankAccount {
constructor(accountNumber, balance) {
if (balance < 0) {
throw new Error('Initial balance cannot be negative');
}
this.accountNumber = accountNumber;
this.balance = balance;
}

deposit(amount) {
// Проверка, что собираемся ввести не отрицательную сумму
if (amount <= 0) {
throw new Error('Deposit amount must be positive');
}
this.balance += amount;
console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
}

withdraw(amount) {
if (amount <= 0) {
throw new Error('Withdrawal amount must be positive');
}
// Проверяем баланс перед тем, как выводить денежные средства
if (this.balance >= amount) {
this.balance -= amount;
console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
} else {
console.log(`Insufficient funds in account ${this.accountNumber}`);
}
}

// Проверка баланса
checkBalance() {
console.log(`Current balance in account ${this.accountNumber} is ${this.balance}`);
}

static getBankName() {
return BankAccount.bankName;
}

static bankName = "My Bank";
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1500);
account1.checkBalance();
console.log(BankAccount.getBankName());
*/

/*Задание 6.
Напишите рекурсивную функцию sumDigits, которая принимает
положительное целое число в качестве аргумента и возвращает
сумму его цифр.
// Пример использования:
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
+ 7 + 8 + 9) */
function sumDigits(number) {
    // Базовый случай: если число меньше 10, то его сумма цифр равна самому числу
    if (number < 10) {
        return number;
    } else {
        // Рекурсивный случай: складываем последнюю цифру числа с суммой остальных цифр
        return number % 10 + sumDigits(Math.floor(number / 10));
    }
}

// Пример использования функции
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

/*Эта функция сначала проверяет, является ли число меньше 10 (базовый случай). 
Если это так, то она возвращает это число. В противном случае (рекурсивный случай), 
она складывает последнюю цифру числа с суммой остальных цифр, вызывая себя для остатка 
числа после удаления последней цифры. */