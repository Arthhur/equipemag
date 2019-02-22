import { Component, OnInit } from '@angular/core';
import { LivreService } from './../../services/livre.service';
import { Subscription } from 'rxjs';
import { Livre } from 'src/app/livre';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-cdk-drag-drop',
  templateUrl: './cdk-drag-drop.component.html',
  styleUrls: ['./cdk-drag-drop.component.css']
})
export class CdkDragDropComponent implements OnInit {

  livres: Livre[] = [] ;
  livreSubscription: Subscription ;

  constructor(private livreService: LivreService) { }

  ngOnInit() {
    this.livreService.getMag() ;
    this.livreSubscription = this.livreService.livreSubject.subscribe(
      (response: Livre[]) => {
        this.livres = response ;
      }
    ) ;
  }

  drop(event: CdkDragDrop<{title: string, image: string}[]>) {
    moveItemInArray(this.livres, event.previousIndex, event.currentIndex);
  }

}
