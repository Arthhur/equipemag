import { Injectable } from '@angular/core';
import { Livre } from '../livre';
import { Subject, Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private livres: Livre[] ;

  livreSubject = new Subject<Livre[]>() ;

  constructor(private httpClient: HttpClient) {
  }

  emitLivreSubject() {
    this.livreSubject.next(this.livres) ;
  }

  getLivre(id: number): Livre {
    const livreRecherche = this.livres.find(livre => livre.id === id);
    return livreRecherche ;
  }

  saveMag() {
    this.httpClient
      .put('https://angulartest-e7f00.firebaseio.com/livres.json', this.livres)
      .subscribe(
        () => {
          console.log('Save !') ;
        },
        (error) => {
          console.log('Erreur : ' + error) ;
        }
      ) ;
  }

  getMag() {
    return this.httpClient
      .get<any[]>('https://angulartest-e7f00.firebaseio.com/livres.json')
      .subscribe(
        (response) => {
          this.livres = response;
          this.emitLivreSubject() ;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}

}
