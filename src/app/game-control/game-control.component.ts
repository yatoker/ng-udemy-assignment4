import { 
  Component, 
  OnInit, 
  Output, 
  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  incrementingNumber = 1;
  refSetIntrFunc = null;
  @Output() incrementOccured = new EventEmitter<number>();

  ngOnInit() {

  }

  onStartClicked() {
    this.refSetIntrFunc = setInterval(() => {
      this.incrementOccured.emit(this.incrementingNumber);
      this.incrementingNumber++;
    }, 1000);
  }

  onPauseClicked() {
    clearInterval(this.refSetIntrFunc);
  }
}
