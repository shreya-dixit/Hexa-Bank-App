import { Component } from '@angular/core';
import { BankServiceService } from 'src/app/services/bank-service.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent {
  usersData: any = [];
  array = [1, 2, 3, 4, 5];



  constructor(private users: BankServiceService) {
    this.users.users().subscribe((data) => {
      console.log(data);
      console.log(Object.values(data));
      this.usersData = Object.values(data);

    })

  }
  msg(name: any, type: any) {
    var content = '𝐍𝐚𝐦𝐞 𝐢𝐬 : ' + name + ' & 𝐓𝐲𝐩𝐞 𝐢𝐬 : ' + type;
    alert(content);
  }
}
