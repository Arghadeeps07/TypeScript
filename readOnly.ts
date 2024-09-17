type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
    creditCard?: number // optional
}


let myUser: User = {
    _id: "abc",
    name: "Argha",
    email: "argha@argha.com",
    isActive: true 
}


//myUser._id = "ghu" // This will be throwing an error while you r going to change the readonly type
myUser.email = "argha@aru.com" // This is permitable



// ++++++++++++++++++++++++ Mix and Match ++++++++++++++++++++++++++++++++
type cardNumber = {
    cardnumber : string
}
type cardDate = {
    carddate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

export{}
