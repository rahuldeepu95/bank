import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="Your banking partner."
  
  placeholder1="Enter a/c number"
  acno=''
  pass=''

  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"amal",password:"abc123",balance:0},
    1002:{acno:1002,username:"arun",password:"abc123",balance:0},
    1003:{acno:1003,username:"akhil",password:"abc123",balance:0}

  }
  constructor() { }
login(){
  alert('login complete')
}
acnoChange(event:any){
  this.acno=(event.target.value);
  console.log(this.acno);
}

passChange(event:any){
this.pass=(event.target.value);
}
}
