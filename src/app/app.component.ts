import { Component } from '@angular/core';
import { CardInterface } from './shared/models/card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-memo';

  planetsExpert: CardInterface[] =  [
    {
        id: 1,
        name: 'earth',
        img: 'assets/earth.svg'
    },
    {
        id: 2,
        name: 'jupiter',
        img: 'assets/jupiter.svg'
    },
    {
        id: 3,
        name: 'mars',
        img: 'assets/mars.svg'
    },
    {
        id: 4,
        name: 'mercury',
        img: 'assets/mercury.svg'
    },
    {
        id: 5,
        name: 'saturn',
        img: 'assets/saturn.svg'
    },
    {
        id: 6,
        name: 'uranus',
        img: 'assets/uranus.svg'
    },
    {
        id: 7,
        name: 'earth',
        img: 'assets/earth.svg'
    },
    {
        id: 8,
        name: 'jupiter',
        img: 'assets/jupiter.svg'
    },
    {
        id: 9,
        name: 'mars',
        img: 'assets/mars.svg'
    },
    {
        id: 10,
        name: 'mercury',
        img: 'assets/mercury.svg'
    },
    {
        id: 11,
        name: 'saturn',
        img: 'assets/saturn.svg'
    },
    {
        id: 12,
        name: 'uranus',
        img: 'assets/uranus.svg'
    }
  ];


  planetsNormal: CardInterface[] =  [
    {
        id: 1,
        name: 'earth',
        img: 'assets/earth.svg'
    },
    {
        id: 2,
        name: 'jupiter',
        img: 'assets/jupiter.svg'
    },
    {
        id: 3,
        name: 'mars',
        img: 'assets/mars.svg'
    },
    {
        id: 7,
        name: 'earth',
        img: 'assets/earth.svg'
    },
    {
        id: 8,
        name: 'jupiter',
        img: 'assets/jupiter.svg'
    },
    {
        id: 9,
        name: 'mars',
        img: 'assets/mars.svg'
    }
  ];


  planetsEasy: CardInterface[] =  [
    {
        id: 1,
        name: 'earth',
        img: 'assets/earth.svg'
    },
    {
        id: 7,
        name: 'earth',
        img: 'assets/earth.svg'
    }
  ];
}
