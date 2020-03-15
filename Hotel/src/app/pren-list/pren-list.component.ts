import { Component, OnInit, Input } from '@angular/core';
import { Prenotazioni } from '../prenotazioni.model';

@Component({
  selector: 'app-pren-list',
  templateUrl: './pren-list.component.html',
  styleUrls: ['./pren-list.component.css']
})
export class PrenListComponent implements OnInit {

  @Input() listaPrenotazioni:Prenotazioni[];
  mostraLista : boolean = true;
  favoriteClass = "text-primary";
  constructor() { }

  ngOnInit(): void {
  }

  makeFavorite(prenotazioni:Prenotazioni)
  {
    console.log(prenotazioni);
    prenotazioni.favoriteClass = "text-warning";
  }

  hideList()
  {
    this.mostraLista = !this.mostraLista;
  }

}
