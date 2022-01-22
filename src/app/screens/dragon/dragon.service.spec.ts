import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Dragon } from './dragon.interfaces';
import { DragonService } from './dragon.service';

describe('DragonService', () => {

  /**
  * Você deve adicionar um ID valido para rodar os testes
  */
  const id = '79';
  let service: DragonService;

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [DragonService]
    });
    service = TestBed.inject(DragonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#index should return value from api rest',
    (done: DoneFn) => {
      service.index().subscribe({
        next: (resp) => {
          expect(Array.isArray(resp)).toBeTrue();
          done();
        }
      });
    });

    it('#geById should return value from api rest',
    (done: DoneFn) => {
      service.getById(id).subscribe({
        next: (resp) => {
          expect(typeof resp).toBe('object');
          done();
        }
      });
    });

  it('#insert should return value from api rest',
    (done: DoneFn) => {

      const values: any = {
        name: 'Drax',
        type: 'Fogo'
      };

      service.save(values).subscribe({
        next: (resp) => {
          expect(typeof resp).toBe('object');
          done();
        }
      });
    });

  /**
   * Pode haver um erro no teste devido ao ID enviado para alterar
   */
  it('#update should return value from api rest',
    (done: DoneFn) => {

      const values: Dragon = {
        name: 'Drax',
        type: 'Fogo',
        id: id
      };

      service.update(values, values.id).subscribe({
        next: (resp) => {
          expect(typeof resp).toBe('object');
          done();
        }
      });
    });

  /**
   * Pode haver um erro no teste devido ao ID enviado para deletar
   * A função esta marcada (desabilitada) com XIT para executar(habilitar) remova o X
   */
  xit('#delete should return value from api rest',
    (done: DoneFn) => {
      service.delete(id).subscribe({
        next: (resp) => {
          expect(typeof resp).toBe('object');
          done();
        }
      });
    });
});
