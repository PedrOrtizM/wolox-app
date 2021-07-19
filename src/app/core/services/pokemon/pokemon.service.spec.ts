import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPokemonList should be GET and return observable', () => {
    service.getPokemonList(20,0).subscribe(data => {
      expect(data).toBeTruthy();
    });
    const httpMock = httpTestingController.expectOne(`${environment.pokemonUrl}?limit=20&offset=0`);
    
    expect(httpMock.request.method).toBe('GET');
  });

  it('getPokemonById should be GET and return observable', () => {
    service.getPokemonById('1').subscribe(data => {
      expect(data).toBeTruthy();
    });
    const httpMock = httpTestingController.expectOne(`${environment.pokemonUrl}/1/`);
    
    expect(httpMock.request.method).toBe('GET');
  });
  
});
