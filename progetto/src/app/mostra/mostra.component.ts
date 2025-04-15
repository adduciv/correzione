import { Component, Input } from '@angular/core';
import { Coppia } from '../models/coppia.model';

@Component({
  selector: 'app-mostra',
  standalone: true,
  imports: [],
  templateUrl: './mostra.component.html',
  styleUrl: './mostra.component.css'
})
export class MostraComponent {
  @Input() numeri: Coppia = new Coppia(0,0);

}
