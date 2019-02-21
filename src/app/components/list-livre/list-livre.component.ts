import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivreService } from 'src/app/services/livre.service';
import { Livre } from 'src/app/livre';
@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css']
})
export class ListLivreComponent implements OnInit, OnDestroy {

  livres: Livre[] ;
  livreSubscription: Subscription ;

  constructor(private livreService: LivreService) { }

  ngOnInit() {
    this.onGetMag() ;
    this.livreSubscription = this.livreService.livreSubject.subscribe(
      (livres: Livre[]) => {
        this.livres = livres ;
      }
    ) ;
    this.livreService.emitLivreSubject() ;
  }

  ngOnDestroy() {
    this.livreSubscription.unsubscribe() ;
  }

  onSaveMag() {
    this.livreService.saveMag() ;
  }

  onGetMag(): void {
    this.livreService.getMag() ;
  }


}
