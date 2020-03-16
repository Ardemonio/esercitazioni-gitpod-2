import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prenotazioni } from './prenotazioni.model';
import { Stanza } from './stanza.model';
import { stanzeList } from './stanzeList.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  selectedOption : string;
  title = "Benvenuti al canzoniere";
  stanze = stanzeList;
  selectedStanza: Stanza = stanzeList[0];
  prenList: Prenotazioni[];  //Questo vettore va passato al componente sonList
  obsSongs : Observable<Prenotazioni[]>;

  constructor(public  http: HttpClient) {

  }

  ngOnInit() {
    this.prenList = new Array <Prenotazioni>();
    this.obsSongs = this.http.get<Prenotazioni[]>("https://my-json-server.typicode.com/malizia-g/hotel/booking");
    this.obsSongs.subscribe(this.getSongs);
  }

  getSongs = (data : Prenotazioni[]) =>
  {
    this.prenList = data;
  }

  /*Il metodo on CLick controlla cerca l'album selezionato in base al titolo e aggiunge la canzone
  Selezionata alla songList*/
  onClick(t: HTMLInputElement,  d : HTMLInputElement, l :HTMLInputElement ) : boolean
  {
    this.selectedStanza = stanzeList.find((album: Stanza) => album.title == this.selectedOption);
    this.prenList.push(new Prenotazioni(this.selectedStanza,  Number(l.value), new Date(d.value), Number(t.value)));
    //Dopo aver aggiunto la canzone azzero tutti i campi
    t.value="";
    d.value ="";
    l.value="";
    this.selectedOption = undefined;
    return false;
  }


  onChange()
  {
    this.selectedStanza = stanzeList.find((stanza: Stanza) => stanza.title == this.selectedOption);
  }
}

