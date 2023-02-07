import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user = ''

  acno = ''
  psw = ''
  amnt = ''

  acno1 = ''
  psw1 = ''
  amnt1 = ''
  constructor(private ds: DataService) {
    this.user = this.ds.currentUser

  }
  deposit() {
    var acno = this.acno
    var psw = this.psw
    var amnt = this.amnt
    const result = this.ds.deposit(acno, psw, amnt)
    if (result) {
      alert(`Your account had been credited Rs. ${amnt}, your current balance is Rs. ${result}.`)
    }
    else {
      alert('incorrect username or password')
    }
  }
  withdraw() {
    var acno = this.acno1
    var psw = this.psw1
    var amnt = this.amnt1
    const result=this.ds.withdraw(acno,psw,amnt)
    if(result){
      alert(`Your account had been debited Rs. ${amnt}, your current balance is Rs.${result}.`)
    }
  }
}
