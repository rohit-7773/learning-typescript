class GoodGreeter {
    message: string;  // if constructor will not be defined then will give error that message has no initializer

    constructor (message: string) {
        this.message = message;
    }
}

class OkGreeter {
    message!: string;  // definite assignment assertion operator - means will definite assign value later
}



class Greeter {
    readonly message: string;  // can only be initialised in constructor or while declaring

    constructor (message: string) {
        this.message = message;
    }
}



