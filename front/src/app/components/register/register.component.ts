import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Usuario } from 'src/app/models/register';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    regexEmail= /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/i
    regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i

    constructor(private fb: FormBuilder) {
        this.registerForm = this.fb.group({
        name: ['', Validators.required],
        last_name: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
        pass: ['', [Validators.required, Validators.pattern(this.regexPass)]],
        VerifyPass: ['', Validators.required],
    })

    }

    ngOnInit(): void {
    }

    registerUser() {
        console.log(this.registerForm.get('pass')?.value)
        console.log(this.registerForm.get('VerifyPass')?.value)
        let Pass = this.registerForm.get('pass')?.value
        let VerifyPass = this.registerForm.get('VerifyPass')?.value
        if(Pass != VerifyPass){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sus contraseñas no coinciden',
            })
        }else{
            if (!this.regexEmail.test(this.registerForm.get('email')?.value)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Su email se ve sospechoso',
                })
            }else {
                const DATAUSUARIO: Usuario = {
                    name: this.registerForm.get('name')?.value,
                    last_name: this.registerForm.get('last_name')?.value,
                    email: this.registerForm.get('email')?.value,
                    pass: this.registerForm.get('pass')?.value

                }
                console.log(DATAUSUARIO)
            }
        }
    }

}
