import { Component } from '@angular/core';
import { BankServiceService } from './services/bank-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BankProject';
  usersData: any = [];
  constructor(private users: BankServiceService) {
    this.users.users().subscribe((data) => {
      console.log(data);
      console.log(Object.values(data));
      this.usersData = Object.values(data);

    })
  }

}
