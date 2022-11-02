import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contactForm: FormGroup;
    regexEmail= /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/i
    regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i
    regexPhone = /3[0-9]{9}/gm

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            last_name: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
            phone: ['', [Validators.required, Validators.pattern(this.regexPhone)]],
            country: ['', Validators.required],
            city: ['', Validators.required],
        })

    }

    ngOnInit(): void {
    }

    contactUser() {
        if (!this.regexEmail.test(this.contactForm.get('email')?.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Su correo se ve sospechoso',
            })
        }if (!this.regexPhone.test(this.contactForm.get('phone')?.value)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Su numero se ve sospechoso',
            })
        }else {
            const CONTACTUSER: Contact = {

                name: this.contactForm.get('name')?.value,
                last_name: this.contactForm.get('last_name')?.value,
                email: this.contactForm.get('email')?.value,
                phone: this.contactForm.get('phone')?.value,
                country: this.contactForm.get('country')?.value,
                city: this.contactForm.get('city')?.value,
            }
            console.log(CONTACTUSER)
        }
    }
}
