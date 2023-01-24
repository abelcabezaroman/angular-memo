import { Component, Input, OnInit } from '@angular/core';
import { PlanetInterface } from '../../models/planet.interface';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss'],
})
export class MemoComponent implements OnInit {
  @Input() cards: PlanetInterface[] = [
    {
      id: 1,
      name: 'earth',
      img: 'assets/earth.svg',
    },
  ];

  initialCards?: PlanetInterface[];

  successCount = 0;

  selectedCard?: PlanetInterface;

  ngOnInit() {
    this.initialCards = JSON.parse(JSON.stringify(this.cards)); //rompo la referencia del objeto
    this.cards = this.suffle(this.cards);
  }

  suffle(array: any) {
    return array.sort(() => 0.5 - Math.random());
  }

  checkCard(card: PlanetInterface) {
    if (this.selectedCard) {
      if (this.selectedCard.name === card.name) {
        card.checked = true;

        this.selectedCard.checked = true;
        this.selectedCard.selected = false;
        this.selectedCard = undefined;

        this.successCount++;
      } else {
        card.selected = true;
        setTimeout(() => {
          card.selected = false;
          this.selectedCard!.selected = false;
          this.selectedCard = undefined;
        }, 500);
      }
    } else {
      this.selectedCard = card;
      card.selected = true;
    }
  }

  reset() {
    this.successCount = 0;
    this.cards = this.suffle(this.initialCards);
  }
}
