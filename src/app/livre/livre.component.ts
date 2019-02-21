import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livre } from '../livre' ;
import { Location } from '@angular/common';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})

export class LivreComponent implements OnInit {

  livre: Livre ;
  constructor(private livreService: LivreService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.livre = this.livreService.getLivre(id) ;
  }

  goBack() {
    this.location.back() ;
  }
}
