// Определим структуру данных для хранения информации о человеке
class Person {
    constructor(INN, SNILS, firstName, patronymic, lastName, dateOfBirth, placeOfBirth, registrationAddress, maritalStatus, phoneNumber, residenceAddress, children = [], father = null, mother = null) {
        this.INN = INN;
        this.SNILS = SNILS;
        this.firstName = firstName;
        this.patronymic = patronymic;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.placeOfBirth = placeOfBirth;
        this.registrationAddress = registrationAddress;
        this.maritalStatus = maritalStatus;
        this.phoneNumber = phoneNumber;
        this.residenceAddress = residenceAddress;
        this.children = children;
        this.father = father;
        this.mother = mother;
    }
}

// Создадим объекты для каждого из 12 человек
const person1 = new Person("111111111111", "123-456-789 01", "Иван", "Иванович", "Иванов", "01.01.1980", "Москва", "ул. Пушкина, д.1", "Женат", "+7 999 123 45 67", "ул. Ленина, д. 2");
const person2 = new Person("222222222222", "234-567-890 02", "Мария", "Петровна", "Петрова", "15.05.1985", "Санкт-Петербург", "ул. Гагарина, д.3", "Замужем", "+7 999 234 56 78", "ул. Пушкина, д. 1");
const person3 = new Person("333333333333", "345-678-901 03", "Алексей", "Сергеевич", "Сергеев", "10.10.1990", "Казань", "ул. Ленина, д.4", "Женат", "+7 999 345 67 89", "ул. Гагарина, д.3");
const person4 = new Person("444444444444", "456-789-012 04", "Екатерина", "Александровна", "Александрова", "20.12.1982", "Новосибирск", "ул. Пушкина, д.5", "Не замужем", "+7 999 456 78 90", "ул. Ленина, д. 4");
const person5 = new Person("555555555555", "567-890-123 05", "Петр", "Владимирович", "Владимиров", "05.06.1978", "Екатеринбург", "ул. Гагарина, д.6", "Женат", "+7 999 567 89 01", "ул. Ленина, д. 5");
const person6 = new Person("666666666666", "678-901-234 06", "Светлана", "Игоревна", "Игорева", "30.07.1987", "Красноярск", "ул. Ленина, д.7", "Замужем", "+7 999 678 90 12", "ул. Гагарина, д. 6");
const person7 = new Person("777777777777", "789-012-345 07", "Дмитрий", "Анатольевич", "Анатольев", "25.08.1995", "Владивосток", "ул. Гагарина, д.8", "Не замужем", "+7 999 789 01 23", "ул. Ленина, д. 7");
const person8 = new Person("888888888888", "890-123-456 08", "Ольга", "Сергеевна", "Сергеева", "12.09.1983", "Сочи", "ул. Пушкина, д.9", "Замужем", "+7 999 890 12 34", "ул. Гагарина, д. 8");
const person9 = new Person("999999999999", "901-234-567 09", "Николай", "Алексеевич", "Алексеев", "18.11.1991", "Ростов-на-Дону", "ул. Ленина, д.10", "Женат", "+7 999 901 23 45", "ул. Пушкина, д. 9");
const person10 = new Person("101010101010", "012-345-678 10", "Татьяна", "Дмитриевна", "Дмитриева", "22.02.1986", "Уфа", "ул. Гагарина, д.11", "Не замужем", "+7 999 012 34 56", "ул. Ленина, д. 10");
const person11 = new Person("111111111112", "123-456-789 11", "Андрей", "Александрович", "Александров", "14.07.1980", "Самара", "ул. Пушкина, д.12", "Женат", "+7 999 123 45 67", "ул. Гагарина, д. 11");
const person12 = new Person("121212121212", "234-567-890 12", "Юлия", "Ивановна", "Иванова", "03.03.1989", "Калининград", "ул. Гагарина, д.13", "Замужем", "+7 999 234 56 78", "ул. Ленина, д. 12");

// Определим родственные связи
person1.children = [person4];
person2.children = [person4];
person4.father = person1;
person4.mother = person2;

person3.children = [person5];
person5.father = person3;

person6.children = [person9];
person7.children = [person9];
person9.father = person6;
person9.mother = person7;

person8.children = [person10];
person10.mother = person8;

person11.children = [person12];
person12.father = person11;

// Создадим массив, содержащий всех людей
const people = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10, person11, person12];

// Выведем информацию о каждом человеке
people.forEach((person, index) => {
    console.log(`Человек ${index + 1}:`);
    console.log("ИНН:", person.INN);
    console.log("СНИЛС:", person.SNILS);
    console.log("Имя:", person.firstName);
    console.log("Отчество:", person.patronymic);
    console.log("Фамилия:", person.lastName);
    console.log("Дата рождения:", person.dateOfBirth);
    console.log("Место рождения:", person.placeOfBirth);
    console.log("Адрес регистрации:", person.registrationAddress);
    console.log("Семейное положение:", person.maritalStatus);
    console.log("Номер телефона:", person.phoneNumber);
    console.log("Адрес фактического проживания:", person.residenceAddress);

    if (person.children.length > 0) {
        console.log("Дети:");
        person.children.forEach(child => {
            console.log("- Имя:", child.firstName);
            console.log("- Отчество:", child.patronymic);
            console.log("- Фамилия:", child.lastName);
            console.log("- Дата рождения:", child.dateOfBirth);
        });
    }

    if (person.father) {
        console.log("Отец:");
        console.log("- Имя:", person.father.firstName);
        console.log("- Отчество:", person.father.patronymic);
        console.log("- Фамилия:", person.father.lastName);
        console.log("- ИНН:", person.father.INN);
    }

    if (person.mother) {
        console.log("Мать:");
        console.log("- Имя:", person.mother.firstName);
        console.log("- Отчество:", person.mother.patronymic);
        console.log("- Фамилия:", person.mother.lastName);
        console.log("- ИНН:", person.mother.INN);
    }

    console.log("----------------------------");
});

/*Cтруктура данных на JavaScript вместо блокчейна удобна по следующим причинам:

Простота демонстрации: Для наглядности примера было проще использовать простую структуру 
данных на JavaScript, чем реализовывать полноценный блокчейн. Это позволило сосредоточиться 
на основных аспектах хранения данных и отношений между ними, а не на сложностях реализации 
блокчейна.

Фокус на основах: Важно понимать основы хранения и организации данных перед тем, как 
погружаться в сложности блокчейна. Этот пример позволяет лучше понять, как структурировать 
информацию о людях и их отношениях, что может быть полезным для будущих проектов, в том числе 
на основе блокчейна.

Упрощение анализа: Рассмотрение примера с использованием структуры данных на JavaScript 
позволяет сосредоточиться на ключевых аспектах проектирования базы данных и взаимосвязей 
между данными, без лишних технических сложностей, которые могут возникнуть при реализации 
блокчейна.
*/