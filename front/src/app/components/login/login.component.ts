import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    regexEmail= /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/i
    regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i

    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
            pass: ['', [Validators.required, Validators.pattern(this.regexPass)]],
        })
    }

    ngOnInit(): void {
    }

    loginUser() {
            if (!this.regexEmail.test(this.loginForm.get('email')?.value)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Su email se ve sospechoso',
                })
            }else {
                const INFOUSUARIO: Login = {
                    email: this.loginForm.get('email')?.value,
                    pass: this.loginForm.get('pass')?.value
                }
                console.log(INFOUSUARIO)
            }
        }
    }
