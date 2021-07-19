import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../core/services/user/user.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

let mockUserService = {
  getCountryList: () => { },
  postSignUp:(body:any)=>{}
}

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule],
      declarations: [SignInComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: UserService, useValue: mockUserService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should enable button when form is valid', () => {
 
    component.profileForm.patchValue({
      name: 'string',
      last_name: 'string',
      mail: 'email@test.com',
      phone: '123456',
      password: '123456',
      passwordConfirm: '123456',
      tyc: true,
    });
    component.changeCountry({ name: 'Colombia', province: 'Bogotá' });
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('#btn-register')).nativeElement;
    expect(btn.disabled).toBeFalse();

  });

  it('signIn method should call with vaid body ', () => {
    const spyRouter = spyOn<any>(component['router'],'navigate');
    spyOn<any>(component['userService'],'postSignUp').and.returnValue(of({}));
    component.profileForm.patchValue({
      name: 'string',
      last_name: 'string',
      mail: 'email@test.com',
      phone: '123456',
      password: '123456',
      passwordConfirm: '123456',
      tyc: true,
    });
    component.changeCountry({ name: 'Colombia', province: 'Bogotá' });
    fixture.detectChanges();  
    const btn = fixture.debugElement.query(By.css('#btn-register')).nativeElement;
   
    expect(btn.disabled).toBeFalse();
    btn.click();

    expect(spyRouter).toHaveBeenCalledWith(['/pokemon']);

    
  });
  

});
