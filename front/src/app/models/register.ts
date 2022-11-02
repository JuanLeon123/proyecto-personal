export class Usuario {
    name: string;
    last_name: string;
    email: string;
    pass: string;

    constructor(name: string, last_name: string, email: string, pass: string){
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.pass = pass;
    }
}