import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {TokenStorageService} from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  hide = true;

  form: FormGroup;
  loading= false;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private fb :FormBuilder,
    private _authService: AuthService,
    private _tokenStorage: TokenStorageService
    )
     {
       this.form = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  ingresar(){
    console.log(this.form);
    const email = this.form.value.email;
    const password = this.form.value.password;
    console.log(this.form.value.password + ' ' + this.form.value.email);

    // if(email && password !== ""){
    //   this.fakelogin()
    // }
    // else{
    //   alert("Please enter email and password")
    // }
    this._authService.login(email, password).subscribe(
      data=> {
        this._tokenStorage.saveToken(data.userInfo.token);
        this.fakelogin();
      },
      err => {
        this.errorMessage = err.error.message;
        // this.error();
        this.form.reset();
      }
    );
  }

  // error(){
  //   this._snackbar.open('Usuario o Contraseña Incorrectos','',
  //     {
  //       duration:1500,
  //       horizontalPosition:'center',
  //       verticalPosition:'top',
  //       }
  //   );
  // }

  fakelogin(){
    this.loading= true;
    setTimeout(()=>{
      //redirecccionamos al al escritorio
      this.router.navigate(['/dashboard']);
    },3500
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
 back(): void {
   this.router.navigate(['home'])
 }
}
