/*Задание 1.
Напишите функцию getPrototypeChain(obj), которая будет
возвращать цепочку прототипов для заданного объекта
obj. Функция должна вернуть массив прототипов, начиная
от самого объекта и заканчивая глобальным объектом
Object.prototype.
 */

function getPrototypeChain(obj) {
    const prototypeChain = [];
    let currentObj = obj;

    // Пока текущий объект существует и не равен глобальному объекту Object.prototype
    while (currentObj && currentObj !== Object.prototype) {
        prototypeChain.push(currentObj);
        // Получаем прототип текущего объекта
        currentObj = Object.getPrototypeOf(currentObj);
    }

    // Добавляем глобальный объект Object.prototype в конец цепочки
    prototypeChain.push(Object.prototype);

    return prototypeChain;
}

// Пример использования функции
const obj = {};
const prototypeChain = getPrototypeChain(obj);
console.log(prototypeChain);

/* Эта функция getPrototypeChain принимает объект obj и возвращает массив, 
содержащий цепочку его прототипов, начиная с самого объекта и заканчивая глобальным 
объектом Object.prototype.
*/

/*Задание 2.
Напишите конструктор объекта Person, который принимает два аргумента:
name (строка) и age (число). Конструктор должен создавать объект с
указанными свойствами name и age и методом introduce(), который
выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// Пример:
const person1 = new Person("John", 25);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.introduce = function() {
        console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
    };
}

// Пример использования конструктора
const person1 = new Person("John", 25);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

/*
Этот конструктор Person принимает два аргумента name и age и создает объект с этими 
свойствами. Также у объекта создается метод introduce, который выводит в консоль 
информацию о человеке в требуемом формате.
*/

/*Задание 3.
Напишите конструктор объекта BankAccount, который будет
представлять банковский счет. Конструктор должен принимать два
аргумента: accountNumber (строка) и balance (число). Конструктор
должен создавать объект с указанными свойствами accountNumber и
balance и следующими методами:
1. deposit(amount): принимает аргумент amount (число) и увеличивает
баланс на указанную сумму.
2. withdraw(amount): принимает аргумент amount (число) и уменьшает
баланс на указанную сумму, если на счету есть достаточно средств.
Если средств недостаточно, выводится сообщение "Недостаточно
средств на счете.".
3. getBalance(): возвращает текущий баланс счета.
Пример:
const account1 = new BankAccount("1234567890", 1000);
console.log(account1.getBalance()); // Вывод: 1000
account1.deposit(500);
console.log(account1.getBalance()); // Вывод: 1500
account1.withdraw(200);
console.log(account1.getBalance()); // Вывод: 1300
account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."
*/

function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance += amount;
    };

    this.withdraw = function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Недостаточно средств на счете.");
        }
    };

    this.getBalance = function() {
        return this.balance;
    };
}

// Пример использования конструктора
const account1 = new BankAccount("1234567890", 1000);
console.log(account1.getBalance()); // Вывод: 1000
account1.deposit(500);
console.log(account1.getBalance()); // Вывод: 1500
account1.withdraw(200);
console.log(account1.getBalance()); // Вывод: 1300
account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

/*Этот конструктор BankAccount принимает два аргумента accountNumber и balance 
и создает объект с этими свойствами. Также у объекта создаются методы deposit, 
withdraw и getBalance, которые позволяют управлять балансом счета. Если при снятии 
средств не хватает денег на счету, выводится сообщение "Недостаточно средств на счете."
*/

/*Задание 4.
Создайте класс Animal, который будет представлять животное. У
класса Animal должны быть следующие свойства и методы:
● Свойство name (строка) - имя животного.
● Метод speak() - выводит в консоль звук, издаваемый животным.
Создайте подкласс Dog, который наследует класс Animal. Для
подкласса Dog добавьте дополнительное свойство и метод:
● Свойство breed (строка) - порода собаки.
● Метод fetch() - выводит в консоль сообщение "Собака [name]
принесла мяч.".
*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} издает звук.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    fetch() {
        console.log(`Собака ${this.name} принесла мяч.`);
    }
}

// Пример использования классов
const animal = new Animal("Животное");
animal.speak(); // Вывод: Животное издает звук.

const dog = new Dog("Бобик", "Дворняга");
dog.speak(); // Вывод: Бобик издает звук.
dog.fetch(); // Вывод: Собака Бобик принесла мяч.

/*Этот код определяет класс Animal, который имеет свойство name и метод speak(), 
а также подкласс Dog, который наследует класс Animal. Подкласс Dog добавляет свойство 
breed и метод fetch(). Конструктор подкласса вызывает super() для инициализации свойства 
name, а затем инициализирует свое собственное свойство breed.
*/

/*Задание 5.
const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.
*/

//Для выполнения запроса, нужно изменить метод speak() в подклассе Dog, 
//чтобы он выводил правильное сообщение. Вот исправленный пример:

class Animal1 {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} издает звук.`);
    }
}

class Dog2 extends Animal1 {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`Собака ${this.name} издает звук.`);
    }

    fetch() {
        console.log(`Собака ${this.name} принесла мяч.`);
    }
}

// Пример использования классов
const animal1 = new Animal1("Животное");
animal1.speak(); // Вывод: Животное издает звук.

const dog2 = new Dog2("Бобик", "Дворняжка");
dog2.speak(); // Вывод: Собака Бобик издает звук.
console.log(dog2.breed); // Вывод: Дворняжка
dog2.fetch(); // Вывод: Собака Бобик принесла мяч.

//Теперь метод speak() в подклассе Dog выводит правильное сообщение, указывая на то, 
//что это собака, а не просто животное.