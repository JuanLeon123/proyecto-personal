export class Contact{
    name: string;
    last_name: string;
    email: string;
    phone: number;
    country: string;
    city: string

    constructor(name: string, last_name: string, email: string, phone: number, country: string, city: string){
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.country = country;
        this.city = city;
    }
}