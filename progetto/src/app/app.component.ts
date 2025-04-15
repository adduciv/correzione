import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Coppia } from './models/coppia.model';
import { MostraComponent } from './mostra/mostra.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MostraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progetto';
  numeri : Coppia = new Coppia(0,0);
  vett_favoriti : Coppia[] = [];

  piu(numero : HTMLInputElement) : boolean
  {
    this.numeri.nClick+=1;
    this.numeri.tot = this.numeri.tot + Number(numero.value);

    return false;
  }

  meno(numero : HTMLInputElement) : boolean
  {
    this.numeri.nClick+=1;
    this.numeri.tot = this.numeri.tot - Number(numero.value);

    return false;
  }

  favorito()
  {
    this.vett_favoriti.push(new Coppia(this.numeri.tot, this.numeri.nClick))
  }
}
