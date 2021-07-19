import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { PokemonService } from '../../core/services/pokemon/pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ListComponent],
      providers: [PokemonService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set array response', () => {
    const results = new Array(20).fill({
      name: 'name',
      url: 'url',
    });

    const response = {
      results
    }
    spyOn(component.pokemonService, 'getPokemonList').and.returnValue(of(response));
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.pokemonList.length).toBe(20);

  });

  it('NextPage should set new offset', () => {
    const spy = spyOn<any>(component, 'getPokemonList');
    component.limit = 1;
    component.nextPage();
    expect(component.offset).toBe(1);


    component.previousPage();
    expect(component.offset).toBe(0);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('changeLimit should set new offset in zero', () => {
    const spy = spyOn<any>(component, 'getPokemonList');
    component.changeLimit();
    expect(spy).toHaveBeenCalled();
    expect(component.offset).toBe(0)
  });

  it('Should call service when btn search clicked', () => {
    const spy = spyOn<any>(component.pokemonService, 'getPokemonById').and.returnValue(of({}));
    const btn = fixture.debugElement.query(By.css('#btn-search')).nativeElement;
    component.inputSearch = 'test';
    fixture.detectChanges();
    btn.click();

    expect(spy).toHaveBeenCalled();
    expect(component.isSearch).toBeFalse();

  });

  it('Should change local variable when service is error', () => {
    const spy = spyOn<any>(component.pokemonService, 'getPokemonById').and.returnValue(throwError({}));
    const btn = fixture.debugElement.query(By.css('#btn-search')).nativeElement;
    component.inputSearch = 'test';
    fixture.detectChanges();
    btn.click();
    expect(spy).toHaveBeenCalled();
    expect(component.isSearch).toBeTrue();

  });

  it('When add and remove a item should be 0 array length', () => {

    component.addTocompare({
      name: 'string',
      url: 'string',
    });

    expect(component.pokemonService.listToCompare.length).toBe(1);
    component.removeToCompare(0);
    expect(component.pokemonService.listToCompare.length).toBe(0);


  });





});
