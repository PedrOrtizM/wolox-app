import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from '../pokemon/pokemon.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

describe('InterceptorService', () => {
  let service: InterceptorService;
  let servicePokemon: PokemonService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
        InterceptorService,
        PokemonService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true
        }
      ]
    });
    service = TestBed.inject(InterceptorService);
    httpMock = TestBed.inject(HttpTestingController);
    servicePokemon = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    
    expect(service).toBeTruthy();
  });

  it('Should call notification method on success', () => {
    const spy = spyOn(Swal,'fire');
    servicePokemon.getPokemonById('1').subscribe(data => {
      expect(data).toBeTruthy();
    });
    httpMock.expectOne(`${environment.pokemonUrl}/1/`).flush({});
    expect(spy).toHaveBeenCalled();
  });

  it('Should call notification method on error', () => {
    const spy = spyOn(Swal,'fire');

    servicePokemon.getPokemonById('1').subscribe(()=>{},
    error => {
      expect(error).toBeTruthy();
    });
    httpMock.expectOne(`${environment.pokemonUrl}/1/`).error(new ErrorEvent('error'));

    expect(spy).toHaveBeenCalled();
  });
  
});
