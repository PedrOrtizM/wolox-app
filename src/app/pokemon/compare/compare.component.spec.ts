import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareComponent } from './compare.component';
import { PokemonService } from '../../core/services/pokemon/pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
describe('CompareComponent', () => {
  let component: CompareComponent;
  let fixture: ComponentFixture<CompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CompareComponent],
      providers: [PokemonService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('listToCompare toBe call service and set value ', () => {
    const obj = {
      name: 'string',
      height: 0,
      id: 0,
      weight: 0,
      sprites: {
        front_default: '',
      },
      types: [],
      moves: []
    }
    spyOn<any>(component['pokemonService'], 'getPokemonById').and.returnValue(of(obj));
    component['pokemonService'].listToCompare = [{ name: 'string', url: 'string' }];
    component.ngOnInit();
    expect(component.listToCompare.length).toBe(1);
  });

});
