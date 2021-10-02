import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  register: FormGroup;
  panelOpenState = false;
  hide = true;
  loading= false;
  errorMessage = '';
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router,
  ) {
    this.register = this.fb.group({
      user_name:['', Validators.required,],
      email:['', Validators.required],
      password:['', Validators.required,],
      confirmPassword:['', Validators.required,],
    })
   }

  ngOnInit(): void {
  }

  signUp(){

    console.log(this.register);

    const user = {
      user_name: this.register.value.user_name,
      email: this.register.value.email,
      password: this.register.value.password,

    };

    console.log(user.user_name + ' ' + user.email + ' ' + user.password +"Se toma el registro");

    this._authService.register(user).subscribe((res:any) => {
        console.log(res);
        console.log("se lo pasa al servico");
      },
      err => {
        this.errorMessage = err.error.message;
        alert(this.errorMessage);
      }
      );

    this.fakelogin();
    // this.registroOk();
  }

  fakelogin(){
    this.loading= true;
    setTimeout(()=>{
      //redirecccionamos al al escritorio
      // this.loading= false;
      this.router.navigate(['/signin']);
    },2500
    );
  }

  back(){
    this.router.navigate(['/home']);
  }
  // registroOk(){
  //   this._snackbar.open('Resgistro OK','',
  //     {
  //       duration:1500,
  //       horizontalPosition:'center',
  //       verticalPosition:'top',
  //       }
  //   );
  // }
}
