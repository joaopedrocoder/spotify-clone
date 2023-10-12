import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginViewComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [LoginService]
})
export class LoginModule { }
