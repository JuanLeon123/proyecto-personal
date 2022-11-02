import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { WellnessComponent } from './components/wellness/wellness.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'contactenos', component: ContactComponent},
    { path: 'registro', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'productos', component: ProductsComponent},
    { path: 'quienes-somos', component: AboutUsComponent},
    { path: 'bienestar', component: WellnessComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
