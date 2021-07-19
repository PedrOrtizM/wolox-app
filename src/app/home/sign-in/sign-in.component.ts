import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import { emailRegex, phoneRegex, validateEqualsPass } from '../../core/const/const';
import { ICountry, IEventSearch } from '../../core/models/sing-in.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public profileForm: FormGroup;
  public countrys: Observable<Array<ICountry>>;

  constructor(private userService: UserService, private router: Router) {

    this.countrys = new Observable();

    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      last_name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      country: new FormControl('', Validators.required),
      province: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required, Validators.pattern(emailRegex)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(phoneRegex), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required,Validators.minLength(6)]),
      tyc: new FormControl(false, [Validators.requiredTrue]),
    }, validateEqualsPass);

  }


  ngOnInit(): void {
    this.countrys = this.userService.getCountryList();
  }

  public signIn(): void {
    
     const { passwordConfirm,tyc, ...body } = this.profileForm.value;;
     this.userService.postSignUp(body)
       .subscribe(() => this.router.navigate(['/pokemon']));

  }
  public hasError(controlName: string, type: string) {
    const control = this.profileForm.controls[controlName];
    return control?.hasError(type) && control.dirty;
  }

  public changeCountry({ name, province }: IEventSearch) {

    this.profileForm.get('country')?.setValue(name);
    this.profileForm.get('province')?.setValue(province);

  }
}
