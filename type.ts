type User = {
    name: string,
    email: string,
    isActive: boolean 
}

type MyString = string

function createUser(user: User): User{
    return {
        name: "Arghadeep",
        email: "arghadeep",
        isActive: true
    }
}

export{}
