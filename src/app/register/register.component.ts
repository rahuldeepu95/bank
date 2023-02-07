import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  data = "Your banking partner."

    

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }
// create a reactive form of register form
registerForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})

  ngOnInit(): void {

  }

  register() {
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var psw=this.registerForm.value.psw
    if(this.registerForm.valid){

    

    const result=this.ds.register(uname,acno,psw)
    if(result){
      alert("User registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("User already exists")
    }
  }
  else{
    alert('Invalid characters used')
  }
}

}

