let firstName: string = "Michael";
let lastName: string = "Steinert";

const getFullName = (firstName: string, lastName: string): string => {
    return firstName + " " + lastName;
}

console.log(`Full Name: ${getFullName(firstName, lastName)}`);

/* Specific Class Types */
const userA: { firstName: string, lastName: string, age: number } = {
    firstName: "Michael",
    lastName: "Steinert",
    age: 27
}

/* Interfaces */
type ID = string | number;

interface IUser {
    id: ID,
    firstName: string;
    lastName: string;
    age: number;
    gender?: string;

    getInformation(): String;
}

const userB: IUser = {
    id: "1",
    firstName: "Marie",
    lastName: "Schmidt",
    age: 26,
    gender: "w",
    getInformation() {
        return `${this.firstName} ${this.lastName} is ${this.age} old`
    }
}

const userC: IUser = {
    id: 2,
    firstName: "Bruno",
    lastName: "Armin",
    age: 24,
    getInformation() {
        return `${this.firstName} ${this.lastName} is ${this.age} old`
    }
}

console.log(userB.getInformation());

/* Classes */
interface UserInterface {
    getInformation(): string;
}

class User implements UserInterface {
    protected firstName: string;
    protected lastName: string;
    protected age: number;
    public static userCount: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        User.userCount++;
    }

    getInformation() {
        return `${this.firstName} ${this.lastName} is ${this.age} old`
    }
}

class Admin extends User {
    private isEditor: boolean;

    constructor(firstName: string, lastName: string, age: number, isEditor: boolean) {
        super(firstName, lastName, age);
        this.isEditor = isEditor;
    }

    setIsEditor(isEditor: boolean): void {
        this.isEditor = isEditor;
    }

    getIsEditor(): boolean {
        return this.isEditor;
    }
}

const user = new User("Michael", "Steinert", 27);
console.log(user.getInformation());
const admin = new Admin("Marie", "Schmidt", 26, true);
console.log(admin.getInformation());
console.log(`userCount: ${User.userCount}`);

/* Generics */
const addIdToObject = <T extends object>(object: T) => {
    const id = Math.random().toString(4);
    return {
        ...object,
        id: id
    }
}

const userWithId = addIdToObject<User>(user);
console.log(userWithId);

/* Union Operator (to combine Data Types) */
let pageName: string | number = "One";
pageName = 1;

let errorMessage: string | null = null;

let userD: IUser | null = null;

/* Custom Types */
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

const popularTags: PopularTag[] = ["block", "chain"];
const maybePopularTags: MaybePopularTag[] = null;

/* Any, never, void and unknown Type */
let vAny: any = 42;
let s1: string = vAny;

let vUnknown: unknown = 42;
//let s2: string = vUnknown; //Does not work
let s2: string = vUnknown as string;

const doSomethingA = (): void => {
    console.log("Return Void")
}

const doSomethingB = (): never => {
    while (true) {
        console.log("Never ending Function")
    }
}

let pageNumber: string = "1";
/* Explicit Type Cast */
let numericPageNumber: number = (pageName as unknown) as number; // First convert the Data Type into unknown then into number

/* Working with DOM - it is necessary to work with as-Types because TypeScript have not Access to the Markup */
/* TypeScript only static analyses the Code */
/*
const someInputElement = document.querySelector(".classForInputs") as HTMLInputElement;
console.log(`someInputElement: ${someInputElement.value}`);

someInputElement.addEventListener("blur", (event) => {
    const eventTarget = event.target as HTMLInputElement;
    console.log(`eventTarget: ${eventTarget}`);
});
*/

/* Enums */
enum Gender {
    M = "man",
    W = "woman"
}

const woman: Gender = Gender.W;
console.log(Gender.M);
console.log(woman);
