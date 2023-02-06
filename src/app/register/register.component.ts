import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  data = "Your banking partner."


  uname=''
  acno=''
  psw=''

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {

  }

  register() {
    var uname=this.uname
    var acno=this.acno
    var psw=this.psw

    const result=this.ds.register(uname,acno,psw)
    if(result){
      alert("User registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("User already exists")
    }
  }
  

}

