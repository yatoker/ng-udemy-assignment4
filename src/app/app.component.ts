import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIncrementOccured(no: number) {
    if (no % 2 == 0){
      this.evenNumbers.push(no);
    }
    else{
      this.oddNumbers.push(no);
    }
    
  }

}
