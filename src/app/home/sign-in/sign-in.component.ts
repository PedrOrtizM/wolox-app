import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    last_name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    country: new FormControl('', Validators.required),
    province: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]+'), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required]),
  });
  public countrys: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { 
    this.countrys = this.userService.getCountryList();
  }

  public signIn() {
    this.userService.postSignUp(this.profileForm.value)
      .subscribe(() => this.router.navigate(['/pokemon']));
    console.log(this.profileForm);
    

  }
  public hasError (controlName: string, type: string){
    const control = this.profileForm.controls[controlName];
    return control?.hasError(type) && control.dirty;
  }

  public changeCountry({name,province} : any){
   this.profileForm.get('country')?.setValue(name);
   this.profileForm.get('province')?.setValue(province);

  }
}
