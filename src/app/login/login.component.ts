import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="Your banking partner."
  
  placeholder1="Enter a/c number"
  acno=''
  psw=''

  
  constructor(private router:Router,private ds:DataService) { }
  ngOnInit() { }
// login(a:any,b:any){
//   var acnum=a.value
//   var psw=b.value
//   var userDetails=this.userDetails
//   if(acnum in userDetails){
//     if(psw==userDetails[acnum]["password"]){
//       alert("login sucessful")

//     }
//     else{
//       alert('Incorrect password')
//     }

//   }
//   else{
//     alert("User not registered")
//   }
// }

login(){
  var acnum=this.acno
  var psw=this.psw
const result=this.ds.login(acnum,psw)
if(result){
  alert('Login Successful')
  this.router.navigateByUrl("dashboard")
}
else{
  alert('Incorrect username or password')
}
// acnoChange(event:any){
//   this.acno=(event.target.value);
//   // console.log(this.acno);
// }

// passChange(event:any){
// this.pass=(event.target.value);
// }
}
}


