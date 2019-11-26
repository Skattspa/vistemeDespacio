import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vistemeDespacio - Los heroes de la fuerza de la voluntad';
  arrayOfStrings = [
    'one',
    'two',
    'three'
  ];
  arrayOfObjetcs = [
    {
      vegetal: 'patata',
      salsa: 'ketchup'
    },
    {
      vegetal: 'zanahoria',
      salsa: 'mayonesa'
    },
    {
      vegetal: 'lechuga',
      salsa: 'aceite'
    }
  ]
}
