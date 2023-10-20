class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  protected door: boolean;
  protected key: Key;
  tenants: Person[] = [];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    } else {
      console.log("the door is closed !!!");
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    } else {
      console.log("You don`t have the right key!");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

class Key1 {
  private signature: number;
  //конструктор класу Key,
  // який генерує випадкове число і присвоює його властивості signature.
  constructor() {
    this.signature = Math.random();
  }

  //метод, який повертає значення приватної властивості signature.
  getSignature(): number {
    return this.signature;
  }
}

class Person1 {
  // приватна властивість key, яка має тип Key.
  private key: Key;

  // конструктор класу Person, який приймає об'єкт класу Key в якості аргументу.
  // Він присвоює значення аргументу властивості key
  constructor(key: Key) {
    this.key = key;
  }

  //метод, який повертає значення властивості key.
  getKey(): Key {
    return this.key;
  }
}
abstract class House1 {
  //властивість door, яка вказує, чи двері будинку відкриті (true) чи закриті (false).
  protected door: boolean;
  //властивість key, яка має тип Key і зберігає об'єкт ключа
  protected key: Key;
  //масив орендарів, який початково порожній.
  tenants: Person[] = [];

  //конструктор для класу House, який приймає об'єкт класу Key в якості аргументу.
  // Він ініціалізує властивості door та key.
  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }

  //метод, який додає об'єкт Person до масиву орендарів tenants, якщо двері відкриті.
  // Якщо двері закриті, виводиться повідомлення про те, що двері зачинені.
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    } else {
      console.log("the door is closed !!!");
    }
  }

  //абстрактний метод openDoor, який вимагає визначення в похідних класах
  // і не має власної реалізації в базовому класі House.
  abstract openDoor(key: Key): void;
}

//оголошує клас MyHouse, який успадковується від класу House.
class MyHouse1 extends House1 {
  //конструктор класу MyHouse, який викликає конструктор базового класу House.
  constructor(key: Key) {
    super(key);
  }

  // метод, який відкриває двері, якщо переданий ключ відповідає збереженому ключу
  // властивості key класу House. Якщо ключ невірний, виводиться відповідне повідомлення.
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    } else {
      console.log("You don`t have the right key!");
    }
  }
}

const key1 = new Key();

const house1 = new MyHouse(key);
const person1 = new Person(key);

house1.openDoor(person.getKey());

house1.comeIn(person);

export {};
