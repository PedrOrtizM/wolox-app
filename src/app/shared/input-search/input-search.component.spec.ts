import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchComponent } from './input-search.component';
import { FormsModule } from '@angular/forms';

describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ InputSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ShowItems method should set isActive to true', () => {

    component.showItems();
    expect(component.isActive).toBeTrue();
    
  });
  it('When seleted a country should emit a event', () => {
  const spy = spyOn(component.changeValue,'emit');
    component.selected({name:'name',capital:'capital',flag:''});
    expect(component.isActive).toBeFalse();
    expect(component.inputValue).toBe('name');
    expect(spy).toHaveBeenCalled();
    
  });
});
