function addTwoNumber(a: number, b:  number){
    return a+b;
}

const sum = addTwoNumber(1,2)


function loginUser(username: string, password: string, isLogin: boolean){}

loginUser("Arghadeep", "arghadeep", false)


function signUpUser(username: string, password: string, isLogin: boolean = false){}

signUpUser("Arghadeep", "arghadeep")


const greet = (): string => {
    return ""
}

// Greet function will always return the string type of val

const heros = ["Superman", "Batman", "Flash", "Aquaman"]

heros.map((hero): string => {
    return `Hero ${hero} is featured`
})

// this will loop will always return a string value


// Void
const greetVoid = (): void => {
    console.log("This is never going to return a val"); 
}

// Never
const greetNever = (errMsg: string): never => {
    // This is going to handel an error
    throw new Error(errMsg); 
}
