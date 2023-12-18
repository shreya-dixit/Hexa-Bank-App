import { Component } from '@angular/core';
import { BankServiceService } from 'src/app/services/bank-service.service';

const data = {
  chart: {

    formatnumberscale: "1",
    plottooltext:
      "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
    theme: "candy",
    drawcrossline: "1"
  },
  categories: [
    {
      category: [
        {
          label: "Jan"
        },
        {
          label: "Feb"
        },
        {
          label: "March"
        },
        {
          label: "April"
        },
        {
          label: "May"
        },
        {
          label: "June"
        },
        {
          label: "July"
        },
        {
          label: "Aug"
        },
        {
          label: "Sep"
        },

        {
          label: "Oct"
        },
        {
          label: "Nov"
        },
        {
          label: "Dec"
        }
      ]
    }
  ],


  dataset: [
    {
      seriesname: "Income",
      data: [
        {
          value: "40000"
        },
        {
          value: "35000"
        },
        {
          value: "45000"
        },
        {
          value: "45000"
        },
        {
          value: "30000"
        },
        {
          value: "35000"
        },
        {
          value: "50000"
        },
        {
          value: "45000"
        },
        {
          value: "35000"
        },
        {
          value: "30000"
        },
        {
          value: "45000"
        },
        {
          value: "40000"
        },


      ]
    },
    {
      seriesname: "Expense",
      data: [
        {
          value: "10000"
        },
        {
          value: "5000"
        },
        {
          value: "10000"
        },
        {
          value: "15000"
        },
        {
          value: "5000"
        },
        {
          value: "5000"
        },
        {
          value: "15000"
        },
        {
          value: "5000"
        },
        {
          value: "15000"
        },
        {
          value: "5000"
        },
        {
          value: "10000"
        },
        {
          value: "25000"
        },


      ]
    },
    {
      seriesname: "Investment",
      data: [
        {
          value: "30000"
        },
        {
          value: "30000"
        },
        {
          value: "35000"
        },
        {
          value: "30000"
        },
        {
          value: "25000"
        },
        {
          value: "15000"
        },
        {
          value: "20000"
        },
        {
          value: "25000"
        },
        {
          value: "20000"
        },
        {
          value: "25000"
        },
        {
          value: "25000"
        },
        {
          value: "20000"
        },


      ]
    }
  ]
};



@Component({
  selector: 'app-money-statictics',
  templateUrl: './money-statictics.component.html',
  styleUrls: ['./money-statictics.component.scss']
})
export class MoneyStaticticsComponent {

  usersData: any = [];
  constructor(private users: BankServiceService) {
    this.users.users().subscribe((data) => {
      console.log(data);
      console.log(Object.values(data));
      this.usersData = Object.values(data);
      console.log(this.usersData[0].total_balance);
      console.log(this.usersData[0].monthly_payment_limit);
      console.log(this.usersData[1].total_income.value);
      console.log(this.usersData[1].total_expense.value);
      console.log(this.usersData[1].total_investment.value);
      console.log(this.usersData[2][0]);
    })

  }
  width = "680";
  height = "400";
  type = "mscolumn2d";
  dataFormat = "json";
  dataSource = data;


}
