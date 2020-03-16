import { Stanza } from './stanza.model';

export class Prenotazioni{
  public favoriteClass : string = "text-primary"
  constructor(
    public stanza: Stanza,
    public persone : number,
    public data : Date,
    public costo:number
    ){}
}
