import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser=''

  constructor() { }
  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: "abc123", balance: 0 },
    1001: { acno: 1001, username: "amal", password: "abc123", balance: 0 },
    1002: { acno: 1002, username: "arun", password: "abc123", balance: 0 },
    1003: { acno: 1003, username: "akhil", password: "abc123", balance: 0 }

  }
  register(uname:any,acno:any,psw:any){
    if(acno in this.userDetails){
      return false
    }
    else{
      this.userDetails[acno]={acno,username:uname,password:psw,balance:0}
      console.log(this.userDetails);
      
      return true
    }
  }
  login(acno:any,psw:any){
    var userDetails=this.userDetails
  if(acno in userDetails){
    if(psw==userDetails[acno]["password"]){
      this.currentUser=userDetails[acno]["username"]
      console.log(this.currentUser);
      
      return true
    

    }
    else{
      return false
    }

  }
  else{
    return false
  }
}
deposit(acnum:any,password:any,amount:any){
  var amnt=parseInt(amount)
let userDetails=this.userDetails
if(acnum in userDetails){
  if(password==userDetails[acnum]["password"]){
    // updated balance
    userDetails[acnum]["balance"]+=amnt
    return userDetails[acnum]["balance"]
    
    
  }
  else{
    return false
  }
}
else{
  return false
}
}

withdraw(acnum:any,password:any,amount:any){
  var amnt=parseInt(amount)
let userDetails=this.userDetails
if(acnum in userDetails){
  if(password==userDetails[acnum]["password"]){
    if(amnt<userDetails[acnum]["balance"]){

      // updated balance
    userDetails[acnum]["balance"]-=amnt
    return userDetails[acnum]["balance"]
    
    }
    else{
      alert('insufficient funds')
      return false

    }
    
    
  }
  else{
    alert('incorrect password')
    return false
  }
}
else{
  alert('incorrect a/c no')
  return false
}
}
  
}